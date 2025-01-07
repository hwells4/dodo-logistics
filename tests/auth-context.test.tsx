import * as dotenv from 'dotenv'
import path from 'path'

// Debug environment loading
const envPath = path.resolve(process.cwd(), '.env.local')
console.log('Loading env from:', envPath)

dotenv.config({ path: envPath })

// Debug environment variables
console.log('ENV check:', {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ? '[EXISTS]' : '[MISSING]',
  key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '[EXISTS]' : '[MISSING]'
})

// Create a setup function
async function setupDatabase() {
  const { DatabaseConnection } = await import('../src/lib/config/database')
  
  const databaseConfig = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }
  console.log('Initializing DB with config:', {
    url: databaseConfig.url ? '[SET]' : '[EMPTY]',
    anonKey: databaseConfig.anonKey ? '[SET]' : '[EMPTY]'
  })
  
  DatabaseConnection.initialize(databaseConfig)
  console.log('DB initialized successfully')
}

// Run setup before tests
beforeAll(async () => {
  await setupDatabase()
})

// Now we can safely import the rest
import React from 'react'
import { render, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@testing-library/jest-dom'

// Dynamically import AuthContext components
let AuthProvider: any
let useAuth: any

beforeAll(async () => {
  const authModule = await import('../src/lib/auth/AuthContext')
  AuthProvider = authModule.AuthProvider
  useAuth = authModule.useAuth
})

describe('AuthContext', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )

  beforeEach(() => {
    queryClient.clear()
  })

  it('provides authentication context', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper })

    expect(result.current).toHaveProperty('session')
    expect(result.current).toHaveProperty('user')
    expect(result.current).toHaveProperty('signIn')
    expect(result.current).toHaveProperty('signUp')
    expect(result.current).toHaveProperty('signOut')
    expect(result.current).toHaveProperty('resetPassword')
    expect(result.current).toHaveProperty('isLoading')
  })

  it('throws error when used outside provider', () => {
    expect(() => renderHook(() => useAuth())).toThrow('useAuth must be used within an AuthProvider')
  })
}) 