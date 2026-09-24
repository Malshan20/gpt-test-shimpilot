import { createClient } from "@supabase/supabase-js";

// Disposable public fixture. These are inert placeholders, never credentials.
export const supabase = createClient(
  "https://example.supabase.co",
  "sandbox-public-placeholder",
  { schema: "public", persistSession: false },
);
