# AI Development Guide

---
ai_primary: true
ai_purpose: "Primary documentation for AI-assisted development"
ai_supported_tasks:
  - "Component creation and modification"
  - "Authentication flow implementation"
  - "API integration"
  - "Database operations"
---

## Overview

This project is a SaaS template built with Next.js, TypeScript, and Supabase. It's designed for rapid application development with AI assistance. This guide serves as the primary reference for AI systems working with this codebase.

## Core Development Patterns

### Component Development
All components follow the pattern established in `/src/components/README.md`. Key requirements:
- TypeScript interfaces with JSDoc comments
- Proper error handling
- Tailwind CSS for styling
- Comprehensive testing

### Authentication
Authentication flows are implemented in `/src/app/(auth)` following these patterns:
- Supabase authentication
- Protected routes
- Session management
- Error handling

### Database Operations
Database operations use Supabase and follow these patterns:
- Type-safe queries
- Error handling
- Data validation
- Performance optimization

## Development Workflow

1. Environment Setup
   - Configure Supabase credentials
   - Set up development environment
   - Install dependencies

2. Feature Development
   - Follow component patterns
   - Implement required tests
   - Update documentation

3. Cross-Application Communication
   - Use shared types
   - Implement token sharing
   - Handle errors consistently

## AI Development Instructions

When assisting with development:

1. Component Creation
   - Reference the components README
   - Follow TypeScript patterns
   - Include proper error handling
   - Add tests

2. Authentication Features
   - Use Supabase auth
   - Implement proper validation
   - Handle edge cases
   - Test thoroughly

3. Database Operations
   - Use type-safe queries
   - Handle errors appropriately
   - Validate data
   - Test thoroughly