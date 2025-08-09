/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { DashboardGuard } from "../components/DashboardGuard";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // TODO: აქ უნდა მოვძებნოთ current user credits Supabase-დან და დავამატოთ ლოგიკა

  async function handleGenerate() {
    setLoading(true);
    setError(null);

    if (!prompt.trim()) {
      setError("Please enter a description");
      setLoading(false);
      return;
    }

    if (credits !== null && credits <= 0) {
      setError("You have no credits left");
      setLoading(false);
      return;
    }

    try {
      // TODO: სერვერზე API იდენტიფიკაცია, ზუსტად შემდეგნაირად: /api/generate-image

      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to generate image");

      setImageUrl(data.url);

      // TODO: აქ უნდა დავაკლოთ კრედიტები და განვაახლოთ UI
      setCredits((prev) => (prev !== null ? prev - 1 : null));
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <DashboardGuard>
      <Header />
      <main className="flex flex-col h-[calc(100vh-64px)] max-w-xl mx-auto p-4">
        <div className="flex-grow overflow-auto">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Generated"
              className="rounded shadow mx-auto"
            />
          ) : (
            <p className="text-center text-gray-500 mt-20">
              Your generated images will appear here
            </p>
          )}
        </div>

        <div className="mt-4 sticky bottom-0 bg-white p-4 border-t flex space-x-2">
          <input
            type="text"
            placeholder="Describe your image"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
            className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-indigo-700"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </main>
    </DashboardGuard>
  );
}
