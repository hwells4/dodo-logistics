// scripts/sync-types.ts
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

async function syncTypes() {
  // Load environment variables
  dotenv.config({ path: ".env.local" });

  const { NEXT_PUBLIC_SUPABASE_URL } = process.env;

  if (!NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  // Extract project reference from URL
  const projectRef = NEXT_PUBLIC_SUPABASE_URL.match(
    /https:\/\/(.*?)\.supabase\.co/,
  )?.[1];
  if (!projectRef) {
    throw new Error("Could not extract project reference from URL");
  }

  const typesPath = path.resolve(process.cwd(), "src/lib/supabase/types.ts");
  const backupPath = `${typesPath}.backup`;

  try {
    // Backup existing types if they exist
    if (fs.existsSync(typesPath)) {
      fs.copyFileSync(typesPath, backupPath);
      console.log("✓ Backed up existing types");
    }

    // Use the exact command that worked directly
    console.log("Generating types from Supabase...");
    const command = `supabase gen types typescript --project-id ${projectRef} --schema public`;
    console.log("Running command:", command);

    // Execute command and capture output
    const types = execSync(command, {
      encoding: "utf-8",
      stdio: "pipe",
    });

    // Write output to file
    fs.writeFileSync(typesPath, types);

    console.log("✓ Types generated successfully");

    // Verify new types are valid
    try {
      execSync("tsc --noEmit src/lib/supabase/types.ts", {
        stdio: ["inherit", "inherit", "inherit"],
      });
      console.log("✓ Types validated successfully");

      if (fs.existsSync(backupPath)) {
        fs.unlinkSync(backupPath);
      }
    } catch (error) {
      console.error("❌ New types failed validation, restoring backup...");
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, typesPath);
        fs.unlinkSync(backupPath);
      }
      throw error;
    }
  } catch (error) {
    console.error("Failed to sync types:", error);
    process.exit(1);
  }
}

syncTypes();
