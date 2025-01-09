"use client";

import { useAuth } from "@/components/modules/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

console.warn('=== SYSTEM STATUS COMPONENT LOADED ===');

export default function SystemStatus() {
  console.warn('=== SYSTEM STATUS RENDERED ===', new Date().toISOString());
  
  // All hooks must be at the top, before any conditionals
  const { user, loading, signOut } = useAuth();
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">("error");
  const [sessionStatus, setSessionStatus] = useState<"checking" | "active" | "none">("none");
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    console.warn('=== SYSTEM STATUS MOUNTED ===');
  }, []);

  // Debug logs
  useEffect(() => {
    if (!mounted) return;
    console.log('Auth State:', { user, loading });
  }, [user, loading, mounted]);

  // Database check
  useEffect(() => {
    if (!mounted) return;
    async function checkDatabase() {
      const { data, error } = await supabase.auth.getSession();
      setDbStatus(error ? "error" : "connected");
      console.warn('Database Check:', { data, error });
    }
    checkDatabase();
  }, [lastRefresh, mounted]);

  // Session check
  useEffect(() => {
    if (!mounted) return;
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      console.warn('Session Status:', {
        hasSession: !!session,
        isValid: session?.access_token ? 'Yes' : 'No',
        expiresAt: session?.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : 'N/A'
      });
      setSessionStatus(session ? "active" : "none");
    }
    checkSession();
  }, [lastRefresh, mounted]);

  // State logging
  useEffect(() => {
    if (!mounted) return;
    console.group('SystemStatus Debug');
    console.log('Component State:', {
      dbStatus,
      sessionStatus,
      user,
      loading
    });
    console.groupEnd();
  }, [dbStatus, sessionStatus, user, loading, mounted]);

  if (!mounted) {
    return null;
  }

  const handleRefresh = () => {
    setDbStatus("checking");
    setSessionStatus("checking");
    setLastRefresh(new Date());
  };

  const handleLogout = async () => {
    await signOut();
    // Force refresh status after logout
    handleRefresh();
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>System Status</CardTitle>
          <div className="flex gap-2">
            <button
              onClick={handleRefresh}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Refresh
            </button>
            {user && (
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Database Connection:</span>
            <StatusIndicator status={dbStatus} />
          </div>
          <div className="flex justify-between items-center">
            <span>Auth State:</span>
            <StatusIndicator 
              status={loading ? "checking" : (user ? "active" : "none")} 
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Session Status:</span>
            <StatusIndicator status={sessionStatus} />
          </div>
          <div className="text-xs text-gray-500 mt-4">
            Last checked: {lastRefresh.toLocaleTimeString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusIndicator({ status }: { status: string }) {
  const colors = {
    checking: "bg-yellow-500",
    connected: "bg-green-500",
    active: "bg-green-500",
    none: "bg-red-500",
    error: "bg-red-500",
  };

  const labels = {
    checking: "Checking...",
    connected: "Connected",
    active: "Active",
    none: "None",
    error: "Error",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-2 w-2 rounded-full ${colors[status as keyof typeof colors]}`}
      />
      <span className="text-sm">{labels[status as keyof typeof labels]}</span>
    </div>
  );
}
