"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TerminalWindow, ArrowUpRight } from "@phosphor-icons/react";
import { ShinyText } from "@/components/ui/ShinyText";
import { HeroCurvedMarquee } from "@/components/HeroCurvedMarquee";

const WORD = "MENTEE";
const COUNT = 100;
const MIDDLE = (COUNT - 1) / 2;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex flex-col justify-between overflow-hidden bg-white px-6 pt-32 sm:pt-36 text-neutral-950">
      {/* Background Ambient Grid & Radial Depth */}
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-neutral-950/[0.02] blur-3xl" />

      {/* 100 vertical curtain lines animation - Behind content */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex z-0 opacity-25"
        >
          {Array.from({ length: COUNT }, (_, i) => {
            const dist = Math.abs(MIDDLE - i);
            const normalizedDist = dist / MIDDLE;

            return (
              <motion.span
                key={i}
                className="h-full flex-1 bg-neutral-900"
                style={{ transformOrigin: "center" }}
                initial={{ scaleX: 0.8, opacity: 0 }}
                animate={{ scaleX: 0.8, opacity: [0, 0.8, 0.8, 0] }}
                transition={{
                  duration: 2.2,
                  delay: normalizedDist * 0.35,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.7, 1],
                }}
              />
            );
          })}
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center my-auto">
        {/* Top Status & Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/90 px-4 py-1.5 shadow-2xs backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500">
            <span className="h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          </span>
          <ShinyText
            text="Autonomous AI Ecosystem · Production Ready"
            className="text-xs font-bold tracking-wide text-neutral-800"
          />
        </motion.div>

        {/* Signature MENTEE Typography */}
        <div className="relative flex items-center justify-center overflow-hidden py-1 w-full">
          <h1
            aria-label={WORD}
            className="relative flex text-6xl font-black leading-none tracking-tighter text-neutral-950 sm:text-8xl md:text-[9.5rem] lg:text-[11.5rem] select-none drop-shadow-xs"
          >
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : 0.15 + i * 0.05,
                  ease: "easeOut",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Sub-headline & Contextual Value Prop */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-neutral-600 font-medium leading-relaxed"
        >
          Engineering autonomous workflow orchestration, zero-knowledge document intelligence, and high-throughput AI ecosystems for production at scale.
        </motion.p>

        {/* Dual Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-neutral-800 active:scale-95"
          >
            <span>Explore Platforms</span>
            <ArrowRight
              size={15}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#approach"
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-800 shadow-xs transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 active:scale-95"
          >
            <TerminalWindow size={16} />
            <span>Architecture & Workflow</span>
          </Link>
        </motion.div>

        {/* Floating Founder & Studio Attribution Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="https://syab.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-neutral-50/90 px-4 py-1.5 shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-xs"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-black text-white">
              S
            </div>
            <span className="font-mono text-xs font-semibold text-neutral-700">
              Architected by <strong className="font-bold text-neutral-950 group-hover:underline">Syed Syab Ahmad</strong>
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span className="flex items-center gap-0.5 text-[11px] font-mono font-bold text-neutral-900 group-hover:text-black">
              <span>syab.tech</span>
              <ArrowUpRight size={11} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Grand Charcoal #212121 Curved Ribbon Flowing Along Base of Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full overflow-hidden"
      >
        <HeroCurvedMarquee />
      </motion.div>
    </section>
  );
}
