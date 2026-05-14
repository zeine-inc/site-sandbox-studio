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

# ---------- Stage 3: Runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app

# Define variáveis de ambiente para produção
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

# Instala tini para gerenciar processos no container e libc para compatibilidade
RUN apk add --no-cache libc6-compat tini

# Copia apenas o necessário para a execução, mantendo a imagem leve
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/wrangler.jsonc* ./wrangler.jsonc
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Se o seu projeto usa o Cloudflare Workers/Pages, o dist/ será servido pelo wrangler
EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "--"]

# Comando de inicialização usando o Wrangler conforme seu arquivo original
# Nota: --ip 0.0.0.0 é essencial para o Docker conseguir rotear o tráfego
CMD ["npx", "wrangler", "dev", "--ip", "0.0.0.0", "--port", "8080", "--log-level", "info"]
