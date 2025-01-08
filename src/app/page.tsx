import ClientWrapper from '@/components/core/ClientWrapper'
import LoginForm from '@/app/(auth)/login/components/LoginForm'
import SystemStatus from '@/components/features/debug/SystemStatus'

export default async function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ClientWrapper>
          <div className="opacity-0 animate-fade-in">
            <SystemStatus />
            <div className="mb-8" />
            <LoginForm />
          </div>
        </ClientWrapper>
      </div>
    </div>
  );
}
