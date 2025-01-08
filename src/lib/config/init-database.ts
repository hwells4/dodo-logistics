import { DatabaseConnection } from './database'

export function initializeDatabase() {
  try {
    const databaseConfig = {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    }

    if (!databaseConfig.url || !databaseConfig.anonKey) {
      throw new Error('Missing database configuration. Check environment variables.')
    }

    DatabaseConnection.initialize(databaseConfig)
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Failed to initialize database:', error)
    throw error
  }
} 