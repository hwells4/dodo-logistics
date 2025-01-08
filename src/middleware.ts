import { initializeDatabase } from './lib/config/init-database'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Initialize database once
initializeDatabase()

export function middleware(request: NextRequest) {
  return NextResponse.next()
} 