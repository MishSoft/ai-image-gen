"use client";

import React from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // თუ shadcn Button გაქვს

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white shadow">
      <h1 className="text-xl font-bold">AI Image Generator</h1>
      <Button onClick={handleLogout} variant="outline" size="sm">
        Logout
      </Button>
    </header>
  );
}
