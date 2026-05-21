# Landing Page Ecosystem — Strategy & Architecture

Goal: add a dedicated, high-converting landing page for paid ads traffic on top of the existing portfolio at `nwankwo-dave-portfolio.vercel.app`, without rebuilding or redesigning the current site. The landing page positions Dave as a modern digital growth partner across three services: **Website & App Development**, **Digital Marketing**, and **AI Video / AI Commercial Production**.

---

## 1. Strategic Recommendation (TL;DR)

- Keep the current portfolio (`/`) as the **credibility hub** for organic, LinkedIn, referrals, and HR/recruiters.
- Build a **separate, campaign-focused landing page** at `/work-with-dave` as the default paid-ads destination.
- Build **service-specific variants** as needed: `/services/web-development`, `/services/digital-marketing`, `/services/ai-video` — same template, different hero, proof, and offer.
- Lead capture = **multi-step quote form + WhatsApp shortcut** (both, side by side). Form is primary (trackable), WhatsApp is the fast lane.
- Flow: **Ad → Landing Page → Multi-step Quote OR WhatsApp → Thank-you page → Portfolio link as validation** (portfolio opens in a new tab so the conversion event is preserved).
- Do **not** put the main portfolio navbar on the landing page. A focused page with one job converts better than a portfolio with a "Hire me" button.

Why a separate page (not a homepage variant, not a section):
- Paid traffic needs message match with the ad creative. The portfolio homepage talks about Dave; the landing page must talk about the visitor's problem.
- Keeps tracking clean (one URL = one campaign funnel).
- Lets us A/B test offers without touching the portfolio.
- Recruiters and clients have different intents — don't force them into the same page.

---

## 2. URL & Routing Architecture

```text
/                              → existing portfolio (unchanged)
/work-with-dave                → main landing page (default paid-ads destination)
/services/web-development      → variant for web/app dev campaigns
/services/digital-marketing    → variant for ads/SEO/automation campaigns
/services/ai-video             → variant for AI video / commercial campaigns
/quote                         → standalone multi-step quote form
/thank-you                     → post-submit page (fires conversion event)
```

- All `/services/*` and `/work-with-dave` share one template + config object — no duplicated code.
- UTM params are read on mount and stored with the lead.
- Canonical for variants points to `/work-with-dave` so SEO doesn't fragment.

---

## 3. User Flow

```text
Meta / Google Ad
        │
        ▼
/work-with-dave  ── trust strip ── proof ── offer ── multi-step form
        │                                                │
        │  ── WhatsApp button (sticky on mobile) ───────►│
        │                                                ▼
        │                                       /thank-you (conversion fires)
        │                                                │
        └──► "See real work" link ──► / (portfolio)  ◄───┘  opens new tab
```

Key principles:
- Portfolio link is **validation, not navigation** — placed near proof sections and on the thank-you page, never in a top nav that pulls users away mid-funnel.
- WhatsApp opens with a **pre-filled message** tied to the service variant ("Hi Dave, I saw your AI video ad and I'd like a quote for…").
- Multi-step form reduces perceived effort: step 1 = service + goal, step 2 = budget + timeline, step 3 = contact details. Submit fires conversion + sends email + optional n8n notification.

---

## 4. Landing Page Section Order (conversion-psychology driven)

1. **Minimal top bar** — logo only + WhatsApp button. No nav links.
2. **Hero** — outcome-led headline, subhead naming the 3 services, primary CTA "Get a Free Quote", secondary "Chat on WhatsApp", trust microcopy ("Trusted by startups & agencies · Replies within 24h").
3. **Trust strip** — logos / role badges / location / "Available now" pill.
4. **Problem → Outcome** — 3 short cards mirroring the pain the visitor came in with.
5. **What you get (Services)** — 3 service cards (Web/App, Digital Marketing, AI Video) with deliverables + typical outcome metric.
6. **How it works** — 4-step process (Discovery → Proposal → Build → Launch & Optimize).
7. **Selected work / proof** — 3 case study tiles reused from the portfolio's `Projects` data, results front and center. CTA: "See full portfolio →" (new tab).
8. **Testimonials** — short, named, role + company. If none yet, pull from LinkedIn recommendations.
9. **Pricing anchors** — optional "Starting from" tiers; sets expectation, filters tire-kickers.
10. **FAQ** — handles top objections (timeline, pricing, ownership, revisions, location/timezone).
11. **Primary conversion block** — multi-step quote form on the left, WhatsApp + email + Calendly on the right.
12. **Footer (slim)** — copyright, email, LinkedIn, link back to `/` portfolio.
13. **Sticky mobile bar** — "Get Quote" + WhatsApp, always visible.

---

## 5. CTA Strategy

- **One primary CTA** repeated: *Get a Free Quote* (scrolls to the form).
- **One secondary CTA**: *Chat on WhatsApp* (wa.me with pre-filled message).
- Placements: hero, after services, after proof, after FAQ, sticky mobile bar, final block. Roughly every 1.5 screens.
- Button copy is outcome-led, never "Submit" or "Send".
- "See portfolio" links are low-emphasis text links, never buttons.

---

## 6. Lead Capture Strategy

**Both, combined, with form as the primary measurable channel.**

- **Multi-step quote form** (3 steps, ~30s):
  1. What do you need? (Web/App · Marketing · AI Video · Not sure)
  2. Budget range + timeline + project context (textarea)
  3. Name, email, WhatsApp number, company (optional)
- **WhatsApp button** with pre-filled message keyed to service variant + UTM.
- **Calendly / "Book a 15-min intro call"** as a third option for higher-intent visitors.
- Submissions go to Lovable Cloud → edge function → email Dave + optional n8n webhook → redirect to `/thank-you`.

---

## 7. Component Reuse vs New Build

**Reuse from existing portfolio (brand consistency):**
- Design tokens in `src/index.css` + `tailwind.config.ts` (colors, glass-card, gradient-text, btn-hero).
- `useScrollAnimation` hook.
- `ProjectCard` + `ProjectDetailModal` for the proof section.
- Footer styling + typography (Space Grotesk + JetBrains Mono).

**New components (under `src/components/landing/`):**
- `LandingNav` (minimal: logo + WhatsApp).
- `LandingHero` (outcome-led, distinct from portfolio Hero).
- `TrustStrip`, `ProblemOutcome`, `ServiceOffer`, `HowItWorks`.
- `ProofSelected` (wraps existing ProjectCard data).
- `Testimonials`, `PricingAnchors`, `FAQ`.
- `QuoteForm` (multi-step, RHF + Zod).
- `WhatsAppButton` + `StickyMobileBar`.
- `LandingFooter` (slim).
- `pages/Landing.tsx`, `pages/ServiceVariant.tsx`, `pages/ThankYou.tsx`.
- `lib/landingConfig.ts` — single source of truth for variant copy, WhatsApp messages, pricing anchors.

---

## 8. Performance, Responsiveness, SEO, Tracking

**Performance (critical for Meta ads quality score):**
- Code-split the landing route from the portfolio bundle (`React.lazy`).
- Preload hero font subset; defer the rest.
- All images WebP with `loading="lazy"` except hero.
- Target LCP < 2.0s, CLS < 0.05, INP < 200ms.

**Responsiveness:**
- Mobile-first; tested at 360, 390, 768, 1024, 1440.
- Sticky mobile CTA bar with safe-area-inset padding.
- Form steps single-column on mobile.

**SEO:**
- Unique `<title>` and meta description per variant via `react-helmet-async`.
- Canonical → `/work-with-dave`.
- JSON-LD `ProfessionalService` schema with services + area served.
- OG image tailored to the offer.

**Analytics & conversion tracking:**
- GA4 + Meta Pixel (optional GTM container).
- Events: `view_landing`, `cta_click` (with placement), `whatsapp_click`, `form_step_complete` (1/2/3), `lead_submit`, `thank_you_view`.
- Pixel: fire `Lead` only on `/thank-you` to avoid double counting.
- Meta CAPI via edge function for iOS attribution (phase 2).
- UTM params persisted with each lead row.

**Meta ads checklist:**
- 1:1 message match between ad creative and hero headline.
- Above-the-fold CTA visible on iPhone SE viewport.
- Privacy policy + terms in footer (Meta requires it for lead campaigns).

---

## 9. Brand Positioning

- Lead with **outcomes for the client**, not skills for Dave.
- Tone: confident, specific, plain-English. Avoid "synergy", "leverage", "ecosystem".
- Personal photo + first-person voice in one section (humanizes); the rest reads like a small agency.
- Always show response time, location + remote availability, payment terms transparency.

---

## 10. Implementation Phases (after approval)

1. **Foundation** — routing, `LandingNav`, `LandingHero`, `QuoteForm` (multi-step), `WhatsAppButton`, `StickyMobileBar`, `/thank-you`, basic tracking.
2. **Conversion sections** — ProblemOutcome, ServiceOffer, HowItWorks, ProofSelected, FAQ, LandingFooter.
3. **Backend** — Lovable Cloud `leads` table + `notify-lead` edge function (Resend email + optional n8n webhook), RLS, secrets.
4. **Variants** — `/services/*` driven by `landingConfig.ts`.
5. **Polish** — Testimonials, PricingAnchors, per-variant SEO meta, JSON-LD, Lighthouse pass, Pixel CAPI.

---

## Technical Details

- Stack stays React 18 + Vite + Tailwind + shadcn — no new framework.
- Routing: add new routes in `src/App.tsx` above the catch-all `*`. Lazy-load landing pages with `React.lazy` + `Suspense`.
- Forms: `react-hook-form` + `zod` with shadcn `Form`, `Input`, `Textarea`, `RadioGroup`.
- Backend: enable Lovable Cloud → `leads` table (`id`, `service`, `budget`, `timeline`, `message`, `name`, `email`, `whatsapp`, `company`, `utm_*`, `created_at`) with insert-only RLS for anon. Edge function `notify-lead` sends email via Resend + optional webhook to n8n. WhatsApp number + webhook URL stored as secrets.
- Tracking: `src/lib/analytics.ts` wrapper that no-ops if GA/Pixel IDs are missing.
- Config: `src/lib/landingConfig.ts` exports a record keyed by variant slug → `{ heroHeadline, heroSub, whatsappMessage, services[], proofIds[], faqs[], metaTitle, metaDescription }`.
