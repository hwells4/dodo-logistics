import * as dotenv from 'dotenv'
import path from 'path'
import { DatabaseConnection } from '../src/lib/config/database'
import { supabase } from '../src/lib/supabase/client'

describe('Supabase Connection', () => {
  beforeAll(() => {
    const envPath = path.resolve(process.cwd(), '.env.local')
    dotenv.config({ path: envPath })
    
    const databaseConfig = {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    }
    DatabaseConnection.initialize(databaseConfig)
  })

  it('successfully connects to Supabase', async () => {
    const { data, error } = await supabase.auth.getSession()
    expect(error).toBeNull()
  })

  it('can perform basic database operations', async () => {
    // Test creating a table
    const { error: createError } = await supabase.rpc('create_test_table')
    expect(createError).toBeNull()

    // Test inserting data
    const { error: insertError } = await supabase
      .from('test_table')
      .insert({ name: 'test' })
    expect(insertError).toBeNull()

    // Test reading data
    const { data, error: readError } = await supabase
      .from('test_table')
      .select()
    expect(readError).toBeNull()
    expect(data).toBeDefined()

    // Clean up
    const { error: dropError } = await supabase.rpc('drop_test_table')
    expect(dropError).toBeNull()
  })
})
