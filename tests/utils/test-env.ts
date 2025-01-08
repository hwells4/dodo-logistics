import * as dotenv from 'dotenv'
import path from 'path'
import { DatabaseConnection } from '@/lib/config/database'

export function setupTestEnvironment() {
  // Load env before any other imports
  const envPath = path.resolve(process.cwd(), '.env.local')
  dotenv.config({ path: envPath })

  // Initialize database
  const databaseConfig = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }

  DatabaseConnection.initialize(databaseConfig)
} 