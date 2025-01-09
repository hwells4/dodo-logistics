// lib/supabase/client.ts (not clients.ts)
import { createClient } from "@supabase/supabase-js";
import { DatabaseConnection } from "../config/database";
import type { Database } from "../config/database";

console.log("Initializing Supabase client...");
const config = DatabaseConnection.getInstance().getConfig();
console.log("Got config for Supabase client");

export const supabase = createClient<Database>(config.url, config.anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
console.log("Supabase client initialized");
