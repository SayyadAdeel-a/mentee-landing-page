"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TerminalWindow } from "@phosphor-icons/react";

const WORD = "MENTEE";
const COUNT = 100;
const MIDDLE = (COUNT - 1) / 2;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92vh] sm:min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 sm:px-6 pt-24 pb-16 sm:pb-20 text-neutral-950">
      {/* Background white bg — black lines fade in, then curtain opens from center outward */}
      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex"
        >
          {Array.from({ length: COUNT }, (_, i) => {
            const dist = Math.abs(MIDDLE - i);
            const normalizedDist = dist / MIDDLE;

            return (
              <motion.span
                key={i}
                className="h-full flex-1 bg-neutral-900"
                style={{ transformOrigin: "center" }}
                initial={{ scaleX: 0.7, opacity: 0 }}
                animate={{ scaleX: 0.7, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: normalizedDist * 0.5,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.6, 1],
                }}
              />
            );
          })}
        </div>
      )}

      {/* Main Center Content Wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        {/* Signature MENTEE Title */}
        <div className="relative flex w-full items-center justify-center overflow-visible py-2">
          <h1
            aria-label={WORD}
            className="relative flex text-[3.75rem] font-black leading-none tracking-tighter text-neutral-900 sm:text-8xl md:text-[10.5rem] lg:text-[12.5rem] select-none"
          >
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="inline-block"
                initial={reduce ? false : { opacity: 0, scale: 1.5 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: reduce ? 0 : 1.8 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subheading & CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 flex max-w-2xl flex-col items-center gap-6 sm:gap-8 px-2 sm:px-4"
        >
          <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Production-grade AI systems engineered end to end —<br className="hidden sm:inline" />{" "}
            from model architecture to secure global deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="group flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-neutral-800 active:scale-95 w-full sm:w-auto"
            >
              <span>Explore Products</span>
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-xs backdrop-blur-sm transition-all duration-200 hover:bg-neutral-100 hover:border-neutral-400 active:scale-95 w-full sm:w-auto"
            >
              <TerminalWindow size={16} weight="duotone" />
              <span>Contact Engineering</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 hidden sm:flex items-center gap-2 text-[12px] font-mono font-medium text-neutral-400"
      >
        <span>Scroll</span>
        <motion.svg
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
