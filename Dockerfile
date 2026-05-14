# syntax=docker/dockerfile:1.7

# ---------- Stage 1: deps ----------
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN npm install -g bun
COPY package.json bun.lockb* package-lock.json* ./
RUN if [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# ---------- Stage 2: build ----------
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g bun
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# ---------- Stage 3: runtime ----------
# The project targets Cloudflare Workers (workerd) via @cloudflare/vite-plugin.
# We run the built worker locally with wrangler in production mode.
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

RUN apk add --no-cache libc6-compat tini

# Copy only what's needed to run
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/wrangler.jsonc ./wrangler.jsonc
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/server.ts ./src/server.ts

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npx", "wrangler", "dev", "--ip", "0.0.0.0", "--port", "8080", "--log-level", "info"]
