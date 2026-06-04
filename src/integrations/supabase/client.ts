import { createClient } from "@supabase/supabase-js";

// Safe to expose: publishable key is meant for browser use.
// RLS policies + CHECK constraints enforce what anonymous users can do.
const SUPABASE_URL = "https://ogpjwkcivbewnotmzxgy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_3EsMAGHPbsU2KxM3wvYn0g_uFDNRvBE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export type LeadInsert = {
  name: string;
  email: string;
  whatsapp: string;
  company?: string | null;
  service: string;
  budget: string;
  timeline: string;
  context?: string | null;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  referrer?: string | null;
  user_agent?: string | null;
  honeypot?: string | null;
};