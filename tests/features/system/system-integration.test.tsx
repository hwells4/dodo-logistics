import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import SystemStatus from '@/components/features/debug/SystemStatus'
import { AuthProvider } from '@/components/modules/auth/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('SystemStatus Integration', () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )

  beforeEach(() => {
    // Mock Date.now() to return a fixed timestamp
    jest.useFakeTimers()
    const mockDate = new Date(2024, 0, 1, 12, 0, 0)
    jest.setSystemTime(mockDate)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders system status indicators', async () => {
    render(<SystemStatus />, { wrapper })
    expect(screen.getByText('System Status')).toBeInTheDocument()
    expect(screen.getByText('Database Connection:')).toBeInTheDocument()
    expect(screen.getByText('Auth State:')).toBeInTheDocument()
    expect(screen.getByText('Session Status:')).toBeInTheDocument()
  })

  it('handles refresh action', async () => {
    render(<SystemStatus />, { wrapper })
    
    const refreshButton = screen.getByText('Refresh')
    const initialTime = screen.getByText(/Last checked:/).textContent
    
    // Advance time before clicking
    jest.advanceTimersByTime(1000)
    
    await act(async () => {
      fireEvent.click(refreshButton)
    })
    
    const newTime = screen.getByText(/Last checked:/).textContent
    expect(newTime).not.toBe(initialTime)
  })
}) 