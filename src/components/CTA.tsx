"use client";

import Link from "next/link";
import { ArrowRight, Sparkle, ShieldCheck, TerminalWindow } from "@phosphor-icons/react";
import { ShinyText } from "@/components/ui/ShinyText";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 bg-white text-neutral-950">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50/80 px-8 py-20 text-center shadow-xl">
        {/* Ambient Grid */}
        <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 shadow-xs mb-6">
            <Sparkle size={13} weight="fill" className="text-neutral-900" />
            <ShinyText
              text="Experience the MenteE Ecosystem"
              className="text-xs font-bold"
            />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-tight">
            Ready to deploy production-grade AI into your workflows?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-neutral-600 leading-relaxed font-normal">
            Explore live platform capabilities, test our open-source machine learning packages, or collaborate with our engineering team.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-neutral-800 active:scale-95"
            >
              <span>Explore All Products</span>
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-xs transition-all duration-200 hover:bg-neutral-100 active:scale-95"
            >
              <TerminalWindow size={16} />
              <span>Contact Engineering</span>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-500 border-t border-neutral-200 pt-8">
            <span className="flex items-center gap-1.5 text-neutral-700 font-semibold">
              <ShieldCheck size={16} className="text-emerald-600" /> SOC-2 Ready
            </span>
            <span>·</span>
            <span>Zero-Knowledge AES-256</span>
            <span>·</span>
            <span>Global Edge CDN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
