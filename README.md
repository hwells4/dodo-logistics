# Next.js SaaS Template

This template provides a foundation for rapidly developing applications with Next.js, Supabase, and TypeScript. It's designed for optimal AI collaboration and seamless integration between different applications built using this template.

## Core Features

This template includes built-in authentication flows, Supabase integration, and automatic type generation, allowing you to focus on building your application's unique features rather than infrastructure.

## Development Environment

The template is optimized for a multi-environment workflow:
- Cursor serves as the primary development environment
- V0 handles frontend development and visualization
- Replit manages deployment and hosting

## Project Structure

The application follows a modular architecture designed for clarity and scalability:

### Source Directory (`/src`)

The `src` directory contains all application code, organized into logical segments:

**App Directory** (`/src/app`)
The Next.js 13+ App Router structure contains route groups for clear separation of concerns:
- `(auth)`: Authentication flows including login, signup, and password reset
- `(dashboard)`: Protected application routes and workspace management
- `api`: Backend API endpoints and handlers

**Components** (`/src/components`)
React components are organized by scope and complexity:
- `modules`: Feature-specific complex components
- `ui`: Reusable primitive components

**Library** (`/src/lib`)
Core utilities and configuration:
- `auth`: Authentication context and related utilities
- `config`: Environment and database configuration
- `supabase`: Database client and generated types
- `utils`: Shared utility functions

**Services** (`/src/services`)
External integrations and API abstraction layer:
- `api`: Service patterns for cross-application communication

**Scripts** (`/src/scripts`)
Development utilities including:
- `sync-types.ts`: Automatic Supabase type generation

## Getting Started with Supabase

### 1. Initial Setup
1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project credentials:
   - Go to Project Settings -> API
   - Copy the following values:
     - Project URL
     - anon/public key
     - service_role key (under API Keys)

3. Set up your environment:
   ```bash
   cp .env.template .env.local
   ```
   
4. Fill in your `.env.local` with the copied values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### 2. Test Authentication
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run authentication tests:
   ```bash
   npm run test:auth
   ```

### 3. Sync Database Types
1. Install Supabase CLI (included in dev dependencies)

2. Login to Supabase:
   ```bash
   npx supabase login
   ```
   Follow the browser prompts to authenticate.

3. Generate types from your database:
   ```bash
   npm run sync-types
   ```

   This will:
   - Connect to your Supabase project
   - Generate TypeScript types from your schema
   - Save them to `src/lib/supabase/types.ts`
   - Validate the generated types

4. (Optional) Watch for schema changes:
   ```bash
   npm run sync-types:watch
   ```

### Troubleshooting
- If type generation fails, ensure you're logged in: `npx supabase login`
- Check your project URL is correct in `.env.local`
- Run `npm run sync-types:force` to regenerate types from scratch

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Development Setup

1. Install dependencies: `npm install`
2. Authenticate with Supabase: `npx supabase login`
3. Copy `.env.template` to `.env.local` and fill in your Supabase project details
