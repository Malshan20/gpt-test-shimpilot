import { supabase } from "./client";

export async function insertSandboxRow() {
  const { data, error } = await supabase.from("sandbox_notes").insert({ title: "fixture" });
  return { data, error };
}
