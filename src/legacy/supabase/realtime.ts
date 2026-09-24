import { supabase } from "./client";

export function watchSandboxRows() {
  return supabase.from("sandbox_notes").on("*", () => {}).subscribe();
}
