# ---------- Stage 1: Dependências ----------
# Trocamos alpine por slim (Debian) para compatibilidade com Workerd
FROM node:22-slim AS deps
WORKDIR /app

# Instala o Bun globalmente
RUN npm install -g bun

# Copia arquivos de dependências
COPY package.json bun.lockb* package-lock.json* ./

# Instala dependências
RUN if [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# ---------- Stage 2: Build ----------
FROM node:22-slim AS builder
WORKDIR /app
RUN npm install -g bun
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN if [ -f bun.lockb ]; then bun run build; else npm run build; fi

# ---------- Stage 3: Runtime ----------
# Usamos slim aqui também para garantir que o Wrangler funcione
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

# No Debian, o 'tini' é instalado via apt-get
RUN apt-get update && apt-get install -y tini && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 8080

ENTRYPOINT ["/usr/bin/tini", "--"]

# App é TanStack Start (SSR via Worker), NÃO site estático.
# O build gera dist/server/wrangler.json com a config correta
# (main: index.js + assets: ../client). Apontamos o wrangler direto pra ele.
# `pages dev ./dist` NÃO funciona aqui — trata como estático e dá 404 em tudo.
CMD ["npx", "wrangler", "dev", "--config", "./dist/server/wrangler.json", "--ip", "0.0.0.0", "--port", "8080"]
