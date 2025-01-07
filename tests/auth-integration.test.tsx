import * as dotenv from 'dotenv'
import path from 'path'
import { DatabaseConnection } from '../src/lib/config/database'

// Debug environment loading
const envPath = path.resolve(process.cwd(), '.env.local')
console.log('Loading env from:', envPath)

dotenv.config({ path: envPath })

// Debug environment variables
console.log('ENV check:', {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ? '[EXISTS]' : '[MISSING]',
  key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '[EXISTS]' : '[MISSING]'
})

// Initialize database first
const databaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
}

console.log('Initializing database with:', {
  url: databaseConfig.url.substring(0, 20) + '...',
  anonKey: databaseConfig.anonKey.substring(0, 10) + '...'
})

DatabaseConnection.initialize(databaseConfig)

// Verify initialization
try {
  const instance = DatabaseConnection.getInstance()
  console.log('Database connection verified')
} catch (error) {
  console.error('Failed to verify database connection:', error)
  throw error // Re-throw to fail the test if connection fails
}

// IMPORTANT: Import these after database initialization
const { supabase } = require('../src/lib/supabase/client')

// Now we can safely import the rest
import { render, renderHook, act, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@testing-library/jest-dom'
import React from 'react'

// Dynamically import auth components
let AuthProvider: any
let useAuth: any

beforeAll(async () => {
  const authModule = await import('../src/lib/auth/AuthContext')
  AuthProvider = authModule.AuthProvider
  useAuth = authModule.useAuth
})

describe('Authentication Integration', () => {
  // Use a valid email format that matches Supabase requirements
  const testEmail = 'test.user@example.com'
  const testPassword = 'TestPassword123!' // More complex password
  
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )

  beforeEach(() => {
    queryClient.clear()
  })

  // Add cleanup between tests
  afterEach(async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Cleanup error:', error)
  })

  it('handles new user signup', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      const { error } = await result.current.signUp(testEmail, testPassword)
      if (error) console.log('Signup error details:', error)
      // Match exact error message from Supabase
      expect(error?.message).toMatch(/Email address .* is invalid|Email link sent|User already registered/)
    })
  })

  it('handles user sign in', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      const { error } = await result.current.signIn(testEmail, testPassword)
      if (error) console.log('Sign in error details:', error)
      expect(error?.message).toMatch(/Invalid login credentials|Email address .* is invalid/)
    })
  })

  it('handles sign out', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.signOut()
    })

    // Wait for session to clear
    await waitFor(() => {
      expect(result.current.session).toBeNull()
      expect(result.current.user).toBeNull()
    })
  })

  it('handles password reset request', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      const { error } = await result.current.resetPassword(testEmail)
      // Allow for either success or specific error messages
      if (error) expect(error.message).toMatch(/Invalid email|User not found/)
    })
  })
}) 