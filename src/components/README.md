Components Directory
This directory contains all React components for the application, organized by scope and complexity. The structure is designed to support both AI-assisted development and human developers.
Directory Structure
Modules (/modules)
Complex, feature-specific components that:

Implement specific business logic
May contain multiple sub-components
Often connect to external services or state management

Example locations:

/modules/auth/LoginForm.tsx
/modules/dashboard/WorkspaceSelector.tsx

UI (/ui)
Primitive, reusable components that:

Are highly reusable across features
Maintain consistent styling
Accept standard props for customization
Use Tailwind CSS for styling

Example locations:

/ui/Button.tsx
/ui/Input.tsx

Component Implementation Pattern
All components must follow this exact structure for AI tool compatibility:

/// typescript
'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth/AuthContext'
import type { ComponentName } from '@/types/components'

interface ComponentNameProps {
  /** Document each prop with a clear description */
  propOne: string
  /** Include type information and usage requirements */
  propTwo?: number
}

/**
 * ComponentName handles [specific functionality].
 *
 * @example
 * ```tsx
 * <ComponentName
 *   propOne="example"
 *   propTwo={123}
 * />
 * ```
 *
 * @dependencies
 * - AuthContext (if authentication required)
 * - useQuery (if data fetching required)
 */
export function ComponentName({
  propOne,
  propTwo = 0
}: ComponentNameProps): JSX.Element {
  // State management
  const [state, setState] = useState<StateType>(initialState)
  
  // Context usage
  const { user } = useAuth()
  
  // Event handlers
  const handleEvent = (): void => {
    try {
      // Handler logic
    } catch (error) {
      console.error('ComponentName.handleEvent:', error)
    }
  }

  return (
    <div className="consistent-tailwind-classes">
      {/* Implementation */}
    </div>
  )
}
///

Component Requirements
Every component must include:

TypeScript interface for props with JSDoc comments
Component JSDoc with examples and dependencies
Proper error handling in all event handlers
Tailwind classes for styling
Corresponding test file following the pattern:

/// typescript
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  const defaultProps = {
    propOne: 'test',
    propTwo: 123
  }

  it('renders with default props', () => {
    render(<ComponentName {...defaultProps} />)
    // Add assertions
  })
})
///

AI Development Instructions
When requesting AI assistance:

Specify the component type:
"Create a new UI component" or "Create a new module component"
Reference the pattern:
"Follow the component implementation pattern in the Components README"
Provide specific requirements:

Required props and their types
Required context providers
Specific functionality needed
Expected user interactions

The AI will use these patterns to generate components that match the project's structure and standards.