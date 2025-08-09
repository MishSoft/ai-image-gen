import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Image Generator",
  description:
    "A simple AI image generator app using Next.js, OpenAI API, Supabase, and Inngest. Created by MishSoft.",
  keywords: [
    "AI",
    "Image generation",
    "Next.js",
    "OpenAI",
    "Supabase",
    "Inngest",
    "TailwindCSS",
  ],
  authors: [{ name: "MishSoft" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "AI Image Generator",
    description: "Generate images with AI powered by OpenAI and Next.js",
    siteName: "AI Image Generator",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
