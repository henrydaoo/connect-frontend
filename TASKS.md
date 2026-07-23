# Build & Delivery Plan

## The point of this doc
Not just "what to build" but "what the commit/PR history should look like",
because a recruiter opening the GitHub repo judges the *process* as much as the
code. One giant commit that says "done" reads as copy-paste. A sequence of small
PRs, each with CI passing and a visible deploy, reads as someone who works like
an engineer — even solo, even AI-assisted, even compressed into one day.

## Time estimate, honestly
AI is writing most of the code; the human's job per feature is: review the diff,
run it locally, write/skim the test, open the PR, wait for CI, merge, confirm the
deploy. That's roughly **20-40 minutes per feature branch**, not multiple hours.
Across the ~13 branches below, realistic total active time is **6-9 hours** in
a single day — not 6, not 24. Plan the day around that, with breaks.

## One-time setup (do this once, ~30-45 min, not a feature branch)
- [ ] Create GitHub repo `ecommerce-platform` (single monorepo — `backend/`, `frontend/`, `docs/`; not separate repos), protect `main` (require PR + passing CI to merge)
- [ ] Create Supabase project (get pooler connection string)
- [ ] Create Render Web Service (Docker), Root Directory = `backend`, Dockerfile path = `backend/Dockerfile`, connect Supabase DB, auto-deploy on push to `main`
- [ ] Create Vercel project, Root Directory = `frontend`, auto-deploy on push to `main`
- [ ] Add a GitHub Actions workflow `.github/workflows/ci.yml`:
      - triggers on every PR targeting `main`
      - backend job: `paths: ['backend/**']` filter, runs `./mvnw test`
      - frontend job: `paths: ['frontend/**']` filter, runs `npm ci && npm run build && npm run lint`
      - **PRs cannot merge if the relevant job fails** (branch protection rule)
- [ ] Skeleton commits: empty Spring Boot project + empty Next.js project, pushed
      directly to `main` once (this is the one and only "bootstrap" commit —
      everything after this goes through a branch + PR)

## From here on: every row = one branch → one PR → CI → merge to `main` → auto-deploy

| # | Branch                          | What it delivers                                                                 |
|---|----------------------------------|------------------------------------------------------------------------------------|
| 1 | `feat/db-schema-flyway`         | Flyway `V1__init_schema.sql` (all tables from DATABASE.md, including `is_active`, `version`, `idempotency_key`, `refresh_tokens`, `payment_transactions` from day one) + seed migration |
| 2 | `feat/auth-jwt-refresh`         | Register, login, refresh (rotation), logout, security config, role checks |
| 3 | `feat/category-crud`            | Category CRUD + guarded delete (409 if products reference it) |
| 4 | `feat/product-crud`             | Product CRUD, pagination/filter/search, soft delete, optimistic lock on update |
| 5 | `feat/cart`                     | Cart entity + endpoints, rejects inactive products |
| 6 | `feat/order-checkout-concurrency` | Order/OrderItem entities, checkout endpoint with locked stock deduction, idempotency key, state machine validation. **Includes the concurrency test** (two threads racing stock=1) — this branch isn't "done" until that test is green. |
| 7 | `feat/payment-vnpay`            | VNPay sandbox integration, signature verification, idempotent IPN handling, COD path |
| 8 | `feat/email-async`              | Async mail service, retry policy, wired to register/order/payment/status events. PR description must show the "SMTP down, request still succeeds" test result. |
| 9 | `feat/backend-observability`    | `/actuator/health`, request-id logging, basic rate limit on `/auth/*` |
| 10 | `feat/frontend-auth-catalog`   | Next.js scaffold, auth pages, product listing/detail, cart UI |
| 11 | `feat/frontend-checkout`       | Checkout page (COD/VNPay choice), VNPay return page, order history |
| 12 | `feat/frontend-admin`          | Admin product/category CRUD UI, order management UI |
| 13 | `feat/polish-and-docs`         | README (with screenshots + engineering highlights), any remaining UI polish |

Each PR description template (keep it short):
```
## What
## Why
## How I tested it
## Screenshot/output (if applicable)
```

## Buffer / genuinely optional (separate branches if pursued)
- `feat/reviews`
- `feat/admin-dashboard-stats`
- `feat/ci-cd-badges` (add build-status badges to README)

## Definition of done for the whole project
- [ ] 13+ merged PRs on `main`, each with CI green at merge time
- [ ] `main` branch is what's live on Render + Vercel at every point — no "deploy
      at the end" step, because there isn't one; deploy already happened continuously
- [ ] Two-tab race condition demo screenshotted for the README
- [ ] Both payment paths (COD, VNPay sandbox) tested against the deployed instance
- [ ] SMTP-down resilience test result documented
