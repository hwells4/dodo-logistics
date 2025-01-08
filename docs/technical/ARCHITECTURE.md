ai_component: true
ai_purpose: "System architecture documentation"
Directory Structure
The application follows a feature-based directory structure:
/src/app
Handles routing and page components using Next.js App Router:

(auth): Authentication routes and components
(dashboard): Dashboard and workspace features
api: API routes

/src/components
Contains all React components:

modules: Complex, feature-specific components
ui: Reusable UI components

/src/lib
Core utilities and configurations:

auth: Authentication utilities
config: Environment configuration
supabase: Database client and utilities
utils: Shared utilities

/src/types
TypeScript type definitions:

api: API interface types
auth: Authentication types
shared: Cross-application shared types

Development Patterns
Authentication Flow

User authentication through Supabase
Token management and session handling
Protected route implementation

Database Operations

Type-safe Supabase queries
Automated type synchronization
Error handling patterns

Component Architecture

Separation of concerns
Type safety
Error boundary implementation
Testing requirements