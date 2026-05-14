# ---------- Stage 1: Dependências ----------
FROM node:22-alpine AS deps
WORKDIR /app

# Instala bibliotecas necessárias para pacotes nativos
RUN apk add --no-cache libc6-compat

# Instala o Bun globalmente
RUN npm install -g bun

# Copia arquivos de definição de pacotes
COPY package.json bun.lockb* package-lock.json* ./

# Instala dependências usando o gerenciador disponível (Bun priorizado)
RUN if [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# ---------- Stage 2: Build ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN npm install -g bun

# Copia node_modules do estágio anterior e o restante dos arquivos
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

# Executa o build (TanStack Start + Vite)
RUN if [ -f bun.lockb ]; then bun run build; else npm run build; fi

# ---------- Stage 3: runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

RUN apk add --no-cache libc6-compat tini

# Copia os arquivos necessários do build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/wrangler.jsonc* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# IMPORTANTE: Removi a linha que tentava copiar o src/server.ts 
# pois em produção o Wrangler deve ler o que foi compilado no /dist

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "--"]

# Alteração no comando final:
# Em vez de tentar rodar o dev, vamos rodar o modo que lê o build pronto.
CMD ["npx", "wrangler", "pages", "dev", "./dist", "--ip", "0.0.0.0", "--port", "8080"]
