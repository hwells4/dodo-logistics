import { SystemStatus, LoginForm } from "@/components/ClientComponents";
import ClientWrapper from "@/components/ClientWrapper";

export default function HomePage() {
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
// test comment
