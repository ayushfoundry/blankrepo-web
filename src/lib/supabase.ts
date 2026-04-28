import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

declare global {
  var __blankrepo_supabase__: SupabaseClient | undefined;
}

export const supabase =
  globalThis.__blankrepo_supabase__ ??
  createClient(supabaseUrl, supabasePublishableKey);

if (typeof window !== "undefined") {
  globalThis.__blankrepo_supabase__ = supabase;
}