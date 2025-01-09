import { DatabaseConfig } from "./database";

export function loadDatabaseConfig(): DatabaseConfig {
  const config: DatabaseConfig = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    serviceRole: process.env.SUPABASE_SERVICE_ROLE_KEY,
  };

  if (!config.url || !config.anonKey) {
    throw new Error(
      "Missing required database configuration. Check your environment variables.",
    );
  }

  return config;
}
