"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    }
    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;
  if (!authenticated) return null;

  return <>{children}</>;
}
