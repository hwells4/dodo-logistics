"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    error: string | null;
  }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthProvider: Initial Load");
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("AuthProvider: Got Session", { session: !!session });
      if (session) {
        setSession(session);
        setUser(session.user);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("AuthProvider: Auth State Change", { 
        event: _event, 
        hasSession: !!session 
      });
      
      if (session) {
        setSession(session);
        setUser(session.user);
      } else {
        setSession(null);
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Sign in error:", error.message);
        if (error.message.includes("Invalid login")) {
          return { error: "Invalid email or password" };
        }
        if (error.message.includes("Email not confirmed")) {
          return { error: "Please verify your email first" };
        }
        return { error: error.message };
      }

      if (!data.user || !data.session) {
        return { error: "No user found with these credentials" };
      }

      setSession(data.session);
      setUser(data.user);

      return { error: null };
    } catch (error) {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      return { error: signUpError };
    } catch (unexpectedError) {
      console.error("Signup error:", unexpectedError);
      return { error: new Error("An unexpected error occurred") };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    const { error: resetError } =
      await supabase.auth.resetPasswordForEmail(email);
    return { error: resetError };
  };

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signIn, signUp, signOut, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
