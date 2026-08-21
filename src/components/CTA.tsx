"use client";

import Link from "next/link";
import { ArrowRight, Sparkle, ShieldCheck, TerminalWindow } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 bg-white text-neutral-950">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#121215] px-8 py-20 text-center shadow-2xl text-white">
        {/* Subtle Ambient Grid & Radial Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div 
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/90 px-4 py-1.5 shadow-sm mb-6 backdrop-blur-md">
            <Sparkle size={13} weight="fill" className="text-white" />
            <span className="text-xs font-mono font-semibold text-neutral-200 tracking-wide">
              Experience the MenteE Ecosystem
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Ready to deploy production-grade AI into your workflows?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-neutral-300 leading-relaxed font-normal">
            Explore live platform capabilities, test our open-source machine learning packages, or collaborate directly with our engineering team.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-neutral-950 shadow-lg transition-all duration-200 hover:bg-neutral-100 active:scale-95"
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
              className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/90 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:border-neutral-600 active:scale-95"
            >
              <TerminalWindow size={16} />
              <span>Contact Engineering</span>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-400 border-t border-neutral-800/90 pt-8">
            <span className="flex items-center gap-1.5 text-neutral-200 font-semibold">
              <ShieldCheck size={16} weight="fill" className="text-emerald-400" /> SOC-2 Ready
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
