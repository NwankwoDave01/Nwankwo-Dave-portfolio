## Diagnosis

The Supabase wiring is correct. I ran a live insert against your project using the exact publishable key in `src/integrations/supabase/client.ts` and got `HTTP 201` — a row named `"diag test"` is now in your `leads` table. So:

- URL in use: `https://ogpjwkcivbewnotmzxgy.supabase.co` ✓
- Anon/publishable key in use: `sb_publishable_3EsMAGHPbsU2KxM3wvYn0g_uFDNRvBE` ✓
- `@supabase/supabase-js` v2.107 supports this key format ✓
- `QuoteForm.tsx` calls `supabase.from("leads").insert(...)` before WhatsApp opens ✓
- No env vars needed — values are hardcoded (publishable key is safe in the browser)
- RLS anon-insert policy works ✓

The most likely cause your live submission produced no row: **the Supabase integration code has not been published yet**, so `davecreates.lovable.app` is still running the old WhatsApp-only build. The preview build (`id-preview--…lovable.app`) does have it.

## Step 1 — Verify which environment you tested

1. Open Supabase Studio → Table Editor → `leads`. Confirm the `"diag test"` row I just inserted is visible. (Proves backend is healthy.)
2. Submit a real test on the **preview URL** (`https://id-preview--3c4a0927-01d8-434f-af43-d9be7369f0e7.lovable.app/work-with-dave`), not the published domain. If a row appears → the only remaining action is **Publish**.
3. If you tested on `davecreates.lovable.app` and no row appeared, that's expected — that domain still serves the previous version. Publish to fix.

## Step 2 — Add diagnostics (only if Step 1 still fails)

Tighten `QuoteForm.tsx` so any future failure is obvious:

- Log the full Supabase error object to the browser console (`code`, `message`, `details`, `hint`) instead of swallowing it.
- On error, show a non-dismissive toast that says "Could not save lead — continuing to WhatsApp" so you can spot it during QA.
- Replace `navigator.userAgent.slice(0, 500)` truncation with a check that won't trigger a column-length constraint (already 500 char limit — fine, just verify schema matches).

No schema, trigger, or edge-function changes are needed.

## Step 3 — Publish

Once the preview submission produces a row, click **Publish** so `davecreates.lovable.app` gets the new build. WhatsApp users will then hit Supabase → trigger → Edge Function → Resend email automatically.

## What I will NOT change

- Supabase client file (already correct)
- SQL schema, trigger, Edge Function (already deployed and proven to work end-to-end by the diag insert; once a real row arrives, the trigger will fire and you'll get the Resend email)
- WhatsApp redirect behavior
