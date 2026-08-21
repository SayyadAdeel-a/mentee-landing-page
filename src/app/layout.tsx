import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CursorTrail } from "@/components/CursorTrail";
import { ClickEffectsWrapper } from "@/components/ClickEffectsWrapper";
import { SmoothScroll } from "@/components/SmoothScroll";
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
  title: "MenteE™ — Autonomous AI Ecosystem & Intelligent Systems",
  description:
    "MenteE designs, builds, and deploys production-grade AI platforms, zero-knowledge document intelligence, and automated workflow ecosystems.",
  keywords: [
    "MenteE",
    "Syed Syab Ahmad",
    "Syab Ahmad",
    "RecruAI",
    "DocsBox",
    "DataFit",
    "AI Product Studio",
    "Autonomous Workflows",
    "Machine Learning Platforms"
  ],
  authors: [{ name: "Syed Syab Ahmad", url: "https://syab.tech" }],
  openGraph: {
    title: "MenteE™ — Autonomous AI Ecosystem",
    description: "Production-grade AI platforms, zero-knowledge document intelligence, and automated workflow systems.",
    url: "https://mentee.tech",
    siteName: "MenteE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-950 selection:bg-neutral-950 selection:text-white">
        <SmoothScroll>
          <ScrollToTop />
          <CursorTrail />
          <ClickEffectsWrapper />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
