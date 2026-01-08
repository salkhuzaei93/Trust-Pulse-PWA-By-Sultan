# TrustPulse

TrustPulse is a Next.js (App Router) scaffold with TypeScript, Tailwind, shadcn/ui, Prisma, and supporting tooling.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Docker (for Postgres)

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy environment variables and fill in values:

   ```bash
   cp .env.example .env
   ```

3. Start Postgres:

   ```bash
   docker compose up -d
   ```

4. Run the initial Prisma migration and seed:

   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```

5. Start the dev server:

   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000`.

## Scripts

- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript type check
- `pnpm test` — Vitest unit tests
- `pnpm test:e2e` — Playwright smoke test
- `pnpm build` — Next.js build

## Tooling

- ESLint + Prettier with lint-staged + Husky
- Vitest and Playwright
- Prisma + Postgres via Docker Compose
- shadcn/ui compatible component setup
