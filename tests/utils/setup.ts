import * as dotenv from 'dotenv'
import path from 'path'
import { DatabaseConnection } from '../../src/lib/config/database'

export async function setupDatabase() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  dotenv.config({ path: envPath })

  const databaseConfig = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }

  DatabaseConnection.initialize(databaseConfig)
} 