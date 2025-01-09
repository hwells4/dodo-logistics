"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

export function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return <Button onClick={handleLogin}>Login with GitHub</Button>;
}
