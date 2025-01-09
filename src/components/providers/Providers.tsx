"use client";

import { AuthProvider } from "@/components/modules/auth/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
