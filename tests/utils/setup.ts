import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import { setupTestEnvironment } from './test-env'

// Setup environment before tests
setupTestEnvironment()

// Polyfill for jsdom
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any 