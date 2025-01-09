"use client";

import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";

export function AuthStatus() {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(authLoading);
  }, [authLoading]);

  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-3 w-3 rounded-full ${
          loading ? "bg-yellow-500" : user ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span className="text-sm">
        {loading
          ? "Checking auth..."
          : user
            ? `Authenticated as ${user.email}`
            : "Not authenticated"}
      </span>
    </div>
  );
}
