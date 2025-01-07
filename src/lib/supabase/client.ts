// lib/supabase/client.ts (not clients.ts)
import { createClient } from '@supabase/supabase-js'
import { DatabaseConnection } from '../config/database'
import type { Database } from '../config/database'

const config = DatabaseConnection.getInstance().getConfig()

export const supabase = createClient<Database>(config.url, config.anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})