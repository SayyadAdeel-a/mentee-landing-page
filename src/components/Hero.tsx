"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TerminalWindow, CaretDown } from "@phosphor-icons/react";
import { HeroCradleMarquee } from "@/components/HeroCradleMarquee";

const WORD = "MENTEE";
const COUNT = 100;
const MIDDLE = (COUNT - 1) / 2;

export function Hero() {
  const reduce = useReducedMotion();

  const handleScrollToContent = () => {
    const target = document.getElementById("products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[95vh] sm:min-h-screen flex-col items-center justify-between overflow-hidden bg-white px-4 sm:px-6 pt-24 pb-8 sm:pb-12 text-neutral-950">
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

      {/* Main Center Content Wrapper Framed by Iconic Logo Crescent Arc */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center my-auto py-12 sm:py-16">
        {/* Iconic Brand Logo Crescent Arc Marquee wrapping MENTEE, Subheading, and CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <HeroCradleMarquee />
        </motion.div>

        {/* Signature MENTEE Title */}
        <div className="relative z-10 flex w-full items-center justify-center overflow-visible py-2">
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
          className="relative z-10 mt-6 sm:mt-8 flex max-w-2xl flex-col items-center gap-6 sm:gap-8 px-2 sm:px-4"
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

      {/* Unique Compelling Interactive Scroll Beacon at Bottom Center */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 3.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-auto pt-4 flex flex-col items-center justify-center cursor-pointer group select-none"
        onClick={handleScrollToContent}
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-neutral-50/80 px-4 py-1.5 shadow-2xs backdrop-blur-md transition-all duration-300 group-hover:border-neutral-400 group-hover:bg-white group-hover:shadow-xs active:scale-95">
          {/* Animated Laser Capsule Track */}
          <div className="relative flex h-5 w-3 items-start justify-center rounded-full border border-neutral-400/80 p-0.5 overflow-hidden">
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-neutral-950 shadow-xs"
            />
          </div>

          <span className="font-mono text-[11px] font-bold tracking-wider text-neutral-700 uppercase group-hover:text-neutral-950 transition-colors">
            SCROLL TO DISCOVER ECOSYSTEM
          </span>

          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center text-neutral-500 group-hover:text-neutral-950 transition-colors"
          >
            <CaretDown size={12} weight="bold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
