"use client";

import dynamic from "next/dynamic";

export const SystemStatus = dynamic(
  () => import("@/components/features/debug/SystemStatus"),
  { ssr: false },
);
export const LoginForm = dynamic(
  () => import("@/app/(auth)/login/components/LoginForm"),
  { ssr: false },
);
