# Project Rules

## Stack
- Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
- Postgres, Prisma, NextAuth, Stripe

## Code Quality
- ESLint + Prettier
- Strict TypeScript
- Zod validation
- React Hook Form

## Testing
- Vitest unit tests
- Playwright e2e smoke tests

## PWA
- Service worker
- Offline shell
- Installability
- Web app manifest
- Lighthouse score >= 90 for PWA

## Security
- OWASP basics
- Secure cookies
- CSRF protection
- Rate limits on generation endpoints

## Documentation
- Keep README updated with setup steps
- Document env vars in .env.example

## Definition of Done
- [ ] Implementation matches the specified stack and architecture
- [ ] Code passes ESLint and Prettier checks
- [ ] TypeScript is strict with no implicit any
- [ ] Forms use React Hook Form with Zod validation
- [ ] Unit tests (Vitest) added or updated
- [ ] E2E smoke tests (Playwright) added or updated
- [ ] PWA requirements met (service worker, offline shell, installability, manifest)
- [ ] Lighthouse PWA score >= 90
- [ ] Security controls in place (secure cookies, CSRF, rate limiting)
- [ ] README updated with setup steps
- [ ] .env.example updated with required env vars
