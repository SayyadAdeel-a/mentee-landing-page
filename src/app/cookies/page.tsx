import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Sparkle, Cookie } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Cookie Policy — MenteE™",
  description: "Learn how MenteE uses essential telemetry and cookies to maintain platform security and performance.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Cookie size={14} className="text-neutral-900" />
              <span>TELEMETRY & STORAGE</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
              Cookie & Local Storage Policy
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-mono">
              Last updated: August 2026 · Minimalist Telemetry
            </p>
          </Reveal>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-700">
            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">1. What We Store</h2>
                <p className="text-neutral-600">
                  MenteE uses only essential session storage and local state strictly required for authentication tokens, client-side cryptographic key caching, and interface preferences (such as code terminal theme states).
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">2. No Third-Party Tracking Pixels</h2>
                <p className="text-neutral-600">
                  We do not use invasive third-party ad networks, tracking pixels, or cross-site data brokers. All telemetry is aggregated and used solely to ensure 99.99% system availability.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
