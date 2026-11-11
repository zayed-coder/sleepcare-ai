# SleepCare AI

AI-assisted **preliminary** sleep screening (not a diagnostic tool). Next.js 16 · TypeScript · Tailwind · Recharts · Radix/shadcn-style UI · Supabase (optional) · OpenAI-compatible LLM (optional). Bilingual: English / বাংলা.

## Features
- Landing, registration/guest mode, 6-section questionnaire + official 7-item ISI (0–28, standard bands)
- Transparent rule-based screening (`lib/screening.ts`) — thresholds documented in code, no invented probabilities
- AI analysis (`/api/analyze`, server-side key, JSON output) with deterministic rule-based fallback (`lib/analysis.ts`)
- Results dashboard, Improvement Center (14-day plan, diary, reminders, breathing, caffeine guide)
- Doctor consultation (verified-providers-only directory, encrypted appointment *requests*, shareable summary), printable report
- Admin dashboard with roles (`admin` / `analyst`), k-anonymity (k=5), feedback, system monitoring
- Privacy: answers stay on-device; server stores anonymous aggregates; contact fields AES-256-GCM encrypted; user can erase local + server record

## Run locally
```bash
npm install
cp .env.example .env.local   # fill what you need; everything is optional for a demo
npm run dev                  # http://localhost:3000
npm test                     # ISI + screening unit tests
```
Without `SUPABASE_*` the app stores to `.data/` JSON files (dev only). Without `OPENAI_API_KEY` the rule-based analysis is used.

## Environment
See `.env.example`. Generate secrets with `openssl rand -base64 48`. Set `ADMIN_EMAIL/ADMIN_PASSWORD` (full access) and optionally `ANALYST_EMAIL/ANALYST_PASSWORD` (aggregates only).

## Deploy (Vercel + Supabase)
1. Create a Supabase project → SQL editor → run `supabase/schema.sql` (RLS on, no public policies; the server uses the service-role key).
2. Push to GitHub → import in Vercel → add all env vars (never `NEXT_PUBLIC_` for secrets) → deploy. Vercel serves HTTPS.
3. Open `/admin`, sign in, and add **real, verified** providers only (the directory ships empty on purpose).
4. Replace the placeholder contact address in `components/Footer.tsx`.

## Before public launch (important)
- **ISI licensing:** the ISI is © Morin; obtain permission (MAPI Research Trust). The Bangla wording is an informal, **unvalidated** translation — use a validated version or run a formal translation process.
- Clinical review of thresholds and recommendation text by a sleep physician.
- Legal review under applicable health-data law (Bangladesh, plus GDPR/HIPAA if relevant). Publish a real privacy policy.
- The in-memory rate limiter is per-instance; use Upstash/Redis for multi-instance production.
