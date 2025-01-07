import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

describe('Type Synchronization', () => {
  const typesPath = path.resolve(process.cwd(), 'src/lib/supabase/types.ts')
  
  beforeAll(() => {
    // Load environment variables
    const envPath = path.resolve(process.cwd(), '.env.local')
    dotenv.config({ path: envPath })
  })

  it('has required environment variables', () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined()
    expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined()
    expect(process.env.SUPABASE_SERVICE_ROLE_KEY).toBeDefined()
  })

  it('can generate types file', () => {
    // Remove existing types file if it exists
    if (fs.existsSync(typesPath)) {
      fs.unlinkSync(typesPath)
    }

    // Run the sync-types script
    try {
      execSync('npm run sync-types', { stdio: 'inherit' })
    } catch (error) {
      console.error('Failed to run sync-types:', error)
      throw error
    }

    // Verify file was created
    expect(fs.existsSync(typesPath)).toBe(true)
    
    // Verify file contains expected content
    const typesContent = fs.readFileSync(typesPath, 'utf8')
    expect(typesContent).toContain('export type Database')
  })

  afterAll(() => {
    // Clean up - remove generated types
    if (fs.existsSync(typesPath)) {
      fs.unlinkSync(typesPath)
    }
  })
}) 