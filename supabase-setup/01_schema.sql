-- =====================================================================
-- Lead capture schema for the /work-with-dave landing page
-- Run this once in: Supabase Dashboard → SQL Editor → New query → Run
-- =====================================================================

-- Extensions for HTTP calls from triggers
create extension if not exists pg_net with schema extensions;

-- ---------- Enums ----------
do $$ begin
  create type public.lead_status as enum (
    'new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost', 'spam'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.app_role as enum ('admin');
exception when duplicate_object then null; end $$;

-- ---------- Leads table ----------
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),

  name         text not null check (char_length(name)  between 1 and 80),
  email        text not null check (char_length(email) between 3 and 160),
  whatsapp     text not null check (char_length(whatsapp) between 4 and 30),
  company      text          check (company is null or char_length(company) <= 120),

  service      text not null check (char_length(service)  <= 60),
  budget       text not null check (char_length(budget)   <= 30),
  timeline     text not null check (char_length(timeline) <= 30),
  context      text          check (context is null or char_length(context) <= 1000),

  status       public.lead_status not null default 'new',
  source       text not null default 'work-with-dave' check (char_length(source) <= 60),

  utm_source   text check (utm_source   is null or char_length(utm_source)   <= 120),
  utm_medium   text check (utm_medium   is null or char_length(utm_medium)   <= 120),
  utm_campaign text check (utm_campaign is null or char_length(utm_campaign) <= 120),
  referrer     text check (referrer     is null or char_length(referrer)     <= 500),
  user_agent   text check (user_agent   is null or char_length(user_agent)   <= 500),

  notes        text -- your private follow-up notes
);

create index if not exists leads_created_at_desc_idx on public.leads (created_at desc);
create index if not exists leads_status_idx          on public.leads (status);
create index if not exists leads_email_idx           on public.leads (email);

-- Auto-bump updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ---------- Roles (admin = you, for dashboard access later) ----------
create table if not exists public.user_roles (
  id      uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role    public.app_role not null,
  unique (user_id, role)
);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- ---------- Grants ----------
grant insert on public.leads to anon;
grant select, insert, update, delete on public.leads to authenticated;
grant all on public.leads to service_role;

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

-- ---------- RLS ----------
alter table public.leads      enable row level security;
alter table public.user_roles enable row level security;

-- Anonymous visitors: can INSERT only (no read/update/delete)
drop policy if exists "anon can submit leads" on public.leads;
create policy "anon can submit leads"
  on public.leads for insert to anon
  with check (true);

-- Admins: full read + manage
drop policy if exists "admins read leads"   on public.leads;
drop policy if exists "admins update leads" on public.leads;
drop policy if exists "admins delete leads" on public.leads;

create policy "admins read leads"
  on public.leads for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "admins update leads"
  on public.leads for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "admins delete leads"
  on public.leads for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

drop policy if exists "admins read roles" on public.user_roles;
create policy "admins read roles"
  on public.user_roles for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));