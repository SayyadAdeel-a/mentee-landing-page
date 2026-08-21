"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Architecture", href: "/#approach" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between rounded-full border px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "border-neutral-200/90 bg-white/85 shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            : "border-neutral-200/70 bg-white/75 shadow-[0_8px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl"
        }`}
      >
        {/* Left Brand */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 p-1 shadow-2xs transition-transform group-hover:scale-105">
            <Image
              src="/MenteE.png"
              alt="MenteE Logo"
              height={20}
              width={20}
              priority
              className="h-4.5 w-auto object-contain"
            />
          </div>
          <span className="text-sm font-black tracking-tight text-neutral-950">
            MenteE
          </span>
        </Link>

        {/* Center Links - Clean Direct Text */}
        <ul className="hidden items-center gap-7 text-xs font-semibold text-neutral-600 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="transition-colors hover:text-neutral-950 font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Status & CTA */}
        <div className="hidden items-center gap-3 text-xs md:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-50/90 px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-semibold text-neutral-600">LIVE</span>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-1 rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowUpRight
              size={12}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 md:hidden shadow-2xs"
        >
          {mobileOpen ? <X size={18} /> : <List size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Detached Dropdown Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mt-2 overflow-hidden rounded-3xl border border-neutral-200/90 bg-white/95 p-5 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
              <div className="my-2 border-t border-neutral-100 pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 py-3 text-sm font-bold text-white shadow-md"
                >
                  <span>Get Started</span>
                  <ArrowUpRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
