"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TerminalWindow } from "@phosphor-icons/react";
import { ShinyText } from "@/components/ui/ShinyText";

const WORD = "MENTEE";
const COUNT = 100;
const MIDDLE = (COUNT - 1) / 2;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[75vh] sm:min-h-[80vh] flex-col justify-center overflow-hidden bg-white px-6 pt-16 pb-16 text-neutral-950">
      {/* Background Ambient Grid */}
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-40" />

      {/* 100 vertical curtain lines animation - Behind content */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex z-0 opacity-30"
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
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 shadow-xs"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500">
            <span className="h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          </span>
          <ShinyText
            text="Autonomous AI Ecosystem · Production Ready"
            className="text-xs font-bold tracking-wide"
          />
        </motion.div>

        {/* Signature MENTEE Typography */}
        <div className="relative flex items-center justify-center overflow-hidden py-1 w-full">
          <h1
            aria-label={WORD}
            className="relative flex text-6xl font-black leading-none tracking-tighter text-neutral-950 sm:text-8xl md:text-[9.5rem] lg:text-[11rem] select-none"
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
          className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-600 font-medium leading-relaxed"
        >
          Engineering autonomous workflow orchestration, zero-knowledge document intelligence, and high-throughput AI ecosystems for production at scale.
        </motion.p>

        {/* Dual Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-neutral-800 active:scale-95"
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
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-800 shadow-xs transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 active:scale-95"
          >
            <TerminalWindow size={16} />
            <span>Architecture & Workflow</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
