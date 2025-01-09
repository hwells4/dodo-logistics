"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

export function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); // Refresh the page to update auth state
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  );
}
