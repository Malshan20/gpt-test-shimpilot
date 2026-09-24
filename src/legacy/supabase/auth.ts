import { supabase } from "./client";

export function currentSandboxUser() {
  return supabase.auth.user();
}

export function currentSandboxSession() {
  return supabase.auth.session();
}
