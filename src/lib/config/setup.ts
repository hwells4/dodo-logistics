import * as dotenv from "dotenv";
import path from "path";
import { DatabaseConnection } from "./database";

console.log("setup.ts is being executed");

// Debug environment loading
const envPath = path.resolve(process.cwd(), ".env.local");
console.log("Loading env from:", envPath);

dotenv.config({ path: envPath });

// Initialize database first
const databaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
};

console.log("Initializing database with:", {
  url: databaseConfig.url.substring(0, 20) + "...",
  anonKey: databaseConfig.anonKey.substring(0, 10) + "...",
});

DatabaseConnection.initialize(databaseConfig);

// Verify initialization
try {
  DatabaseConnection.getInstance();
  console.log("Database connection verified");
} catch (error) {
  console.error("Failed to verify database connection:", error);
  throw error;
}

console.log("Environment check:", {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
    ? "[EXISTS]"
    : "[MISSING]",
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? "[EXISTS]"
    : "[MISSING]",
});
