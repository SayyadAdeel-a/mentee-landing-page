"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import gsap from "gsap";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navContainerRef = useRef<HTMLUListElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

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

  function moveBlob(target: HTMLElement) {
    if (!navContainerRef.current || !blobRef.current) return;
    const navRect = navContainerRef.current.getBoundingClientRect();
    const rect = target.getBoundingClientRect();

    gsap.to(blobRef.current, {
      left: rect.left - navRect.left - 8,
      width: rect.width + 16,
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  }

  function hideBlob() {
    if (!blobRef.current) return;
    gsap.to(blobRef.current, {
      opacity: 0,
      scale: 0.92,
      duration: 0.25,
      ease: "power2.inOut",
    });
    setHoveredIndex(null);
  }

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

        {/* Center Links with GSAP Charcoal Sliding Blob */}
        <ul
          ref={navContainerRef}
          onMouseLeave={hideBlob}
          className="relative hidden items-center gap-2 text-xs font-semibold text-neutral-600 md:flex"
        >
          {/* Sliding Charcoal Blob */}
          <div
            ref={blobRef}
            className="blob pointer-events-none absolute top-1/2 -translate-y-1/2 h-7 rounded-full bg-[#212121] opacity-0 shadow-xs z-0"
          />

          {navLinks.map((l, index) => (
            <li key={l.label} className="relative z-10">
              <Link
                href={l.href}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  moveBlob(e.currentTarget);
                }}
                onFocus={(e) => {
                  setHoveredIndex(index);
                  moveBlob(e.currentTarget);
                }}
                onBlur={hideBlob}
                className={`relative block px-3 py-1.5 transition-colors duration-200 font-medium ${
                  hoveredIndex === index ? "text-white font-semibold" : "text-neutral-600 hover:text-neutral-950"
                }`}
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
            className="group flex items-center gap-1 rounded-full bg-[#212121] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:scale-95"
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
                  className="flex items-center justify-center gap-2 rounded-full bg-[#212121] py-3 text-sm font-bold text-white shadow-md"
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
