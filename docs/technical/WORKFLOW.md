# Development Workflow

---
ai_component: true
ai_purpose: "Development process documentation"
---

## Environment Setup

The development environment requires proper configuration of Supabase credentials and local environment variables. Begin by copying the example environment file:

```bash
cp .env.example .env.local
```

Configure the following required environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development Process

### Feature Development

When developing new features, follow these established patterns:

First, create a new feature branch from the main development branch. Name it according to the feature type and description: `feature/auth-refresh-token` or `fix/dashboard-loading-state`.

Second, implement the feature following the component architecture defined in the components README. This ensures consistency across the application and maintains optimal compatibility with AI-assisted development.

Third, ensure comprehensive test coverage for all new functionality. Each feature should include:

- Unit tests for individual components
- Integration tests for feature workflows
- End-to-end tests for critical paths

### Cross-Application Communication

When implementing features that require communication between applications built with this template, utilize the established service layer in `src/services/api`. This ensures consistent handling of:

- Authentication token sharing
- Type safety across applications
- Error handling and logging
- Rate limiting and caching

### Type Management

Database types should be synchronized regularly using the provided script:

```bash
npm run sync-types
```

This script updates the TypeScript definitions in `src/types` to match your Supabase schema. Run this command whenever:

- The database schema changes
- New tables or views are added
- Existing table structures are modified

### Testing Strategy

Implement tests according to the following hierarchy:

Unit Tests: Focus on individual component behavior and isolated functionality. Place these tests alongside the components they test.

Integration Tests: Verify interactions between multiple components or services. Store these in the `tests` directory under appropriate feature directories.

End-to-End Tests: Validate complete user workflows. Maintain these in the `tests/e2e` directory.

### Deployment Process

The deployment workflow consists of several stages:

Development: Local development and testing environment where features are initially built and tested.

Staging: A production-like environment for final testing and verification before release.

Production: The live environment where the application serves end users.

Each environment should maintain its own:
- Supabase instance
- Environment variables
- Configuration settings
- Monitoring and logging setup

## AI-Assisted Development

When working with AI systems on this project, provide the following context:

1. The specific directory or component being modified
2. Required dependencies and integration points
3. Existing patterns being followed or extended
4. Testing requirements for the new functionality

This information enables AI systems to generate code and suggestions that align with the project's established patterns and requirements.