"use client";

import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setError(error.message);
    else
      setMessage(
        "Registration successful! Please check your email for confirmation."
      );

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSignup}
      className="max-w-md w-[500px] mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

      <div className="mb-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <Button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
        <span>
          I have already account <Link href="/login">Sign In</Link>
        </span>
      </div>

      {error && <p className="text-red-600 mt-3">{error}</p>}
      {message && <p className="text-green-600 mt-3">{message}</p>}
    </form>
  );
}
