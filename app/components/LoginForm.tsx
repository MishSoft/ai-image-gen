"use client";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    else setMessage("Login successful!");
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <label htmlFor="email" className="block mb-1">
        Email
      </label>
      <input
        placeholder="example@gmail.com"
        id="email"
        type="email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password" className="block mb-1">
        Password
      </label>
      <input
        placeholder="********"
        id="password"
        type="password"
        className="w-full mb-3 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {error && <p className="text-red-600 mt-3">{error}</p>}
      {message && <p className="text-green-600 mt-3">{message}</p>}
    </form>
  );
}
