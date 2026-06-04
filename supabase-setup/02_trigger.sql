-- =====================================================================
-- Trigger: notify Edge Function whenever a non-spam lead is inserted.
-- Run this AFTER you have deployed the `notify-lead` Edge Function
-- and set the secrets (RESEND_API_KEY, NOTIFY_TO_EMAIL, TRIGGER_SECRET).
--
-- Replace the two placeholders below before running:
--   <PROJECT_REF>     → your Supabase project ref (subdomain of supabase.co)
--   <TRIGGER_SECRET>  → the same value you stored as TRIGGER_SECRET secret
-- =====================================================================

create or replace function public.notify_new_lead()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  payload jsonb;
begin
  if new.status = 'spam' then
    return new;
  end if;

  payload := jsonb_build_object(
    'id', new.id,
    'name', new.name,
    'email', new.email,
    'whatsapp', new.whatsapp,
    'company', new.company,
    'service', new.service,
    'budget', new.budget,
    'timeline', new.timeline,
    'context', new.context,
    'source', new.source,
    'utm_source', new.utm_source,
    'utm_medium', new.utm_medium,
    'utm_campaign', new.utm_campaign,
    'referrer', new.referrer,
    'created_at', new.created_at
  );

  perform net.http_post(
    url := 'https://<PROJECT_REF>.supabase.co/functions/v1/notify-lead',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-trigger-secret', '<TRIGGER_SECRET>'
    ),
    body := payload,
    timeout_milliseconds := 5000
  );

  return new;
end $$;

drop trigger if exists on_lead_inserted on public.leads;
create trigger on_lead_inserted
  after insert on public.leads
  for each row execute function public.notify_new_lead();