import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { DatabaseConnection } from "../config/database";

export const createClient = async () => {
  console.log("Creating server client...");
  const cookieStore = await cookies();
  console.log("Got cookie store");

  console.log("Getting database config...");
  const config = DatabaseConnection.getInstance().getConfig();
  console.log("Got database config");

  return createServerClient(config.url, config.anonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options });
      },
    },
  });
};
