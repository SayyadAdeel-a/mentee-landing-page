import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Sparkle, ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About MenteE™ — Engineering AI Ecosystems",
  description:
    "MenteE is an AI product studio founded by Syed Syab Ahmad, building production platforms for real-world impact.",
};

const values = [
  {
    t: "We ship software, not pitch decks",
    d: "Everything we engineer is built to run under live production load—designed to solve acute business problems directly.",
  },
  {
    t: "Zero-Knowledge privacy & security",
    d: "Our architecture is hardened from day zero. Client-side encryption, encrypted vaults, and role isolation are core fundamentals.",
  },
  {
    t: "Engineered for scale & low latency",
    d: "We design for high throughput with sub-200ms latency targets so scaling is a built-in feature rather than an emergency migration.",
  },
  {
    t: "Open source & developer empowerment",
    d: "We contribute to the engineering ecosystem with open tooling like DataFit and published research in applied AI.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-4xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>THE MENTEE MANIFESTO</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              We build platforms. People use them. That is the whole point.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
              MenteE is a dedicated technology product studio. We architect, train, and deploy AI-driven software ecosystems built for real-world impact.
            </p>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
              Founded by <a href="https://syab.tech" target="_blank" rel="noopener noreferrer" className="text-neutral-950 underline underline-offset-4 font-bold hover:text-neutral-700">Syed Syab Ahmad</a>, MenteE blends full-stack systems engineering with state-of-the-art machine learning, computer vision, and zero-knowledge encryption.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-10">
                Core Engineering Values
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.t} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-neutral-950 flex items-center gap-2">
                      <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                      {v.t}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Founder note */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 shadow-sm">
              <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">Founder & Lead Engineer</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-neutral-950">Syed Syab Ahmad</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
                With over 285+ open-source repositories and production AI systems spanning recruitment automation (RecruAI), zero-knowledge storage (DocsBox), and published Python toolkits (DataFit), Syab directs the product architecture across the entire MenteE ecosystem.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href="https://syab.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-950 font-bold hover:underline"
                >
                  <span>Visit Syab Portfolio (syab.tech)</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/SyabAhmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-950"
                >
                  <span>GitHub @SyabAhmad</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-white py-20 text-center px-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Explore Our Software Portfolio
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/products"
                className="rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-neutral-800 active:scale-95"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-xs transition-all hover:bg-neutral-50 active:scale-95"
              >
                Contact Engineering
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
