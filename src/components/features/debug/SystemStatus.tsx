"use client";

import { useAuth } from "@/components/modules/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SystemStatus() {
  const { user, loading } = useAuth();
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">(
    "checking",
  );
  const [sessionStatus, setSessionStatus] = useState<
    "checking" | "active" | "none"
  >("checking");
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Check database connection
  useEffect(() => {
    async function checkDatabase() {
      try {
        const { error } = await supabase.from("clients").select("id").limit(1);

        if (error) throw error;
        setDbStatus("connected");
      } catch (error) {
        console.error("Database check failed:", error);
        setDbStatus("error");
      }
    }

    checkDatabase();
  }, [lastRefresh]);

  // Check session status
  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSessionStatus(session ? "active" : "none");
    }

    checkSession();
  }, [lastRefresh]);

  const handleRefresh = () => {
    setDbStatus("checking");
    setSessionStatus("checking");
    setLastRefresh(new Date());
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>System Status</CardTitle>
          <button
            onClick={handleRefresh}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Refresh
          </button>
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
              status={loading ? "checking" : user ? "active" : "none"}
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
