"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
  wrap
} from "framer-motion";
import Image from "next/image";
import { Sparkle, Pause, Play } from "@phosphor-icons/react";

interface TechBrand {
  name: string;
  category: string;
  logo: string;
}

// Group 1: Infrastructure, Cloud & Data Runtimes
const INFRASTRUCTURE_STACK: TechBrand[] = [
  { name: "Docker", category: "Container Engine", logo: "/logos/docker.svg" },
  { name: "Kubernetes", category: "Cluster Mesh", logo: "/logos/kubernetes.svg" },
  { name: "PostgreSQL", category: "Vector Store", logo: "/logos/postgresql.svg" },
  { name: "Redis", category: "In-Memory Stream", logo: "/logos/redis.svg" },
  { name: "FastAPI", category: "Async Microservices", logo: "/logos/fastapi.svg" },
  { name: "Firebase", category: "Realtime Enclave", logo: "/logos/firebase.svg" },
  { name: "GitHub", category: "CI/CD Workflows", logo: "/logos/github.svg" },
];

// Group 2: AI / ML, Acceleration & Frontend Architecture
const AI_FRONTEND_STACK: TechBrand[] = [
  { name: "Python", category: "Core AI Systems", logo: "/logos/python.svg" },
  { name: "PyTorch", category: "Deep Learning", logo: "/logos/pytorch.svg" },
  { name: "NVIDIA CUDA", category: "GPU Acceleration", logo: "/logos/nvidia.svg" },
  { name: "OpenCV", category: "Computer Vision", logo: "/logos/opencv.svg" },
  { name: "Next.js", category: "Full-Stack Edge", logo: "/logos/nextdotjs.svg" },
  { name: "TypeScript", category: "Type-Safe Scale", logo: "/logos/typescript.svg" },
  { name: "Tailwind CSS", category: "Design Engine", logo: "/logos/tailwindcss.svg" },
];

interface ParallaxBandProps {
  items: TechBrand[];
  baseVelocity: number;
  isPaused: boolean;
}

function ParallaxBand({ items, baseVelocity = 0.8, isPaused }: ParallaxBandProps) {
  const prefersReduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  const isDragging = useRef<boolean>(false);
  const dragVelocity = useRef<number>(0);
  const lastPointerX = useRef<number>(0);

  useAnimationFrame((t, delta) => {
    // If user prefers reduced motion or motion is paused, halt autonomous movement
    if (prefersReduced || isPaused) {
      if (Math.abs(dragVelocity.current) > 0.01) {
        baseX.set(baseX.get() + dragVelocity.current);
        dragVelocity.current *= 0.95;
      }
      return;
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    moveBy += dragVelocity.current;

    if (Math.abs(dragVelocity.current) > 0.01) {
      dragVelocity.current *= 0.95;
    } else {
      dragVelocity.current = 0;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Quadruple items to ensure unbroken infinite wrap
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="flex flex-nowrap overflow-hidden select-none whitespace-nowrap cursor-grab active:cursor-grabbing py-1.5"
      onPointerDown={(e) => {
        isDragging.current = true;
        lastPointerX.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!isDragging.current) return;
        const deltaX = e.clientX - lastPointerX.current;
        dragVelocity.current = deltaX * 0.06;
        lastPointerX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        isDragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={(e) => {
        isDragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
    >
      <motion.div className="flex flex-nowrap gap-4 items-center" style={{ x }}>
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            tabIndex={0}
            role="group"
            aria-label={`${item.name} framework: ${item.category}`}
            className="flex items-center gap-3.5 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 shadow-2xs hover:border-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none focus:outline-none transition-all shrink-0 cursor-pointer"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200 p-1.5 shadow-2xs">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-neutral-950 leading-tight">
                {item.name}
              </span>
              <span className="font-mono text-[10px] font-bold text-neutral-600 uppercase tracking-wide">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function CurvedMarqueeSection() {
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const isPaused = userPaused || hoverPaused || focusPaused || !!prefersReduced;

  return (
    <section
      aria-label="Production Infrastructure & Technology Stack"
      className="relative w-full overflow-hidden bg-white py-16 border-y border-neutral-200"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={() => setFocusPaused(false)}
    >
      {/* Background Subtle Accent Grid */}
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-25" />

      {/* Section Header with Clear Title, Context, and Accessible Pause Controller */}
      <div className="relative mx-auto max-w-4xl px-6 text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-3 shadow-xs">
          <Sparkle size={13} weight="fill" className="text-neutral-900" />
          <span>PRODUCTION INFRASTRUCTURE & STACK</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
          Engineered on battle-tested industry foundations.
        </h2>
        <p className="mt-2.5 text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          From GPU acceleration and vector indexes to distributed container orchestration, our platforms are built on proven open technologies.
        </p>

        {/* Accessible WCAG 2.2 AA Motion Pause Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setUserPaused(!userPaused)}
            aria-pressed={isPaused}
            aria-label={isPaused ? "Resume technology ticker motion" : "Pause technology ticker motion"}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none transition-colors"
          >
            {isPaused ? (
              <>
                <Play size={12} weight="fill" className="text-emerald-600" />
                <span>Motion Paused (Play)</span>
              </>
            ) : (
              <>
                <Pause size={12} weight="fill" className="text-neutral-700" />
                <span>Pause Motion</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Edge Gradient Mask Overlays for Smooth Fade In/Out */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

        {/* Dual Band: Categorized Tech Stacks */}
        <div className="space-y-3.5 overflow-hidden">
          {/* Track 1: Infrastructure, Cloud & Data Mesh */}
          <ParallaxBand items={INFRASTRUCTURE_STACK} baseVelocity={-0.6} isPaused={isPaused} />

          {/* Track 2: AI / ML, Compute & Edge Frontend */}
          <ParallaxBand items={AI_FRONTEND_STACK} baseVelocity={0.6} isPaused={isPaused} />
        </div>
      </div>
    </section>
  );
}
