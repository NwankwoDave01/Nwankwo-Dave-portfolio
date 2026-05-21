# Landing Page — Lean Implementation Plan (Approved Scope)

Build only `/work-with-dave` plus `/thank-you`. Postpone service variants, CAPI, webhooks, heavy SEO, and analytics abstraction. Prioritize launch speed, mobile-first UX, and conversion.

---

## What ships

- **Route**: `/work-with-dave` (campaign landing) and `/thank-you` (post-submit).
- **Standalone experience** — no portfolio navbar. Minimal top bar with logo + WhatsApp.
- **Hero**: outcome-led headline → *"Helping Businesses Grow With Modern Websites, Ads & AI Content"*. Primary CTA "Get a Free Quote", secondary "Chat on WhatsApp", trust microcopy.
- **Sections** (in order): Hero → Trust strip → Problem→Outcome (3 cards) → Services (3: Web/App, Digital Marketing, AI Video) → How it works (4 steps) → Selected work (reuses portfolio case studies, CTA "See Recent Client Work" → opens `/` in new tab) → FAQ → Final conversion block (multi-step form + WhatsApp/email) → Slim footer.
- **Sticky mobile CTA bar**: Get Quote + WhatsApp.
- **Multi-step quote form** (3 steps, RHF + zod, shadcn): service → budget/timeline/context → contact. On submit: format details into WhatsApp deep link, navigate to `/thank-you` (fires Meta Pixel `Lead`).
- **WhatsApp integration**: pre-filled `wa.me` links everywhere, configurable phone number in one config file.
- **Meta Pixel**: snippet placeholder in `index.html` driven by config; `PageView` on load, `Lead` on `/thank-you`. No-ops cleanly if pixel ID is empty.
- **Responsive, mobile-first**: tested at 360/390/768/1024/1440.

## What's postponed (per your direction)

- `/services/*` variants, Lovable Cloud + edge functions, n8n webhooks, Meta CAPI, GA4 abstraction, JSON-LD, per-variant SEO, pricing page, testimonials section (skipped until real quotes available).

---

## Files to create

```text
src/lib/landingConfig.ts         WhatsApp number, pixel ID, email, helpers
src/pages/Landing.tsx            /work-with-dave
src/pages/ThankYou.tsx           /thank-you
src/components/landing/
  LandingNav.tsx                 logo + WhatsApp only
  LandingHero.tsx
  TrustStrip.tsx
  ProblemOutcome.tsx
  ServiceOffer.tsx
  HowItWorks.tsx
  ProofSelected.tsx              reuses portfolio case study data
  FAQ.tsx                        shadcn accordion
  QuoteForm.tsx                  multi-step, RHF + zod
  WhatsAppButton.tsx
  StickyMobileBar.tsx
  LandingFooter.tsx
```

## Files to edit

- `src/App.tsx` — add `/work-with-dave` and `/thank-you` routes above the catch-all, lazy-loaded.
- `index.html` — add Meta Pixel snippet (commented placeholder pixel ID for the user to fill in).

## Reused from existing portfolio

- Design tokens (`btn-hero`, `glass-card`, `gradient-text`, `section-container`, etc.) — no changes to `index.css`.
- `useScrollAnimation` hook.
- Case study data (copied into Landing's proof config so the landing stays decoupled).

---

## Config-driven (user fills in after launch)

- `whatsappNumber` — placeholder `2348000000000` to swap.
- `metaPixelId` — empty by default; pixel script no-ops until set.
- `email` — already wired to `ebukadave2009@gmail.com`.

## Lead handling without backend

Form submit builds a structured WhatsApp message ("New quote — Service: X / Budget: Y / Timeline: Z / Notes: …") and opens `wa.me` in a new tab while routing to `/thank-you`. Lean, trackable, no backend required. We can later add Lovable Cloud + email when volume justifies it.
