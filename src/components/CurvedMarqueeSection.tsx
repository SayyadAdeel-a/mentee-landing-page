"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react";

interface TechBrand {
  name: string;
  category: string;
  logo: string;
}

const TECH_STACK_1: TechBrand[] = [
  { name: "Python", category: "Core Backend & ML", logo: "/logos/python.svg" },
  { name: "PyTorch", category: "Deep Learning", logo: "/logos/pytorch.svg" },
  { name: "FastAPI", category: "Async Microservices", logo: "/logos/fastapi.svg" },
  { name: "PostgreSQL", category: "Vector Database", logo: "/logos/postgresql.svg" },
  { name: "Docker", category: "Container Engine", logo: "/logos/docker.svg" },
  { name: "Kubernetes", category: "Cluster Orchestration", logo: "/logos/kubernetes.svg" },
  { name: "Next.js", category: "Full-Stack Edge", logo: "/logos/nextdotjs.svg" },
];

const TECH_STACK_2: TechBrand[] = [
  { name: "NVIDIA CUDA", category: "GPU Acceleration", logo: "/logos/nvidia.svg" },
  { name: "OpenCV", category: "Computer Vision", logo: "/logos/opencv.svg" },
  { name: "Redis", category: "In-Memory Streaming", logo: "/logos/redis.svg" },
  { name: "TypeScript", category: "Type-Safe Systems", logo: "/logos/typescript.svg" },
  { name: "Firebase", category: "Realtime Enclave", logo: "/logos/firebase.svg" },
  { name: "GitHub", category: "CI/CD & Open Source", logo: "/logos/github.svg" },
  { name: "Tailwind CSS", category: "Design Architecture", logo: "/logos/tailwindcss.svg" },
];

interface ParallaxBandProps {
  items: TechBrand[];
  baseVelocity: number;
}

function ParallaxBand({ items, baseVelocity = 0.8 }: ParallaxBandProps) {
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
      className="flex flex-nowrap overflow-hidden select-none whitespace-nowrap cursor-grab active:cursor-grabbing py-1"
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
            className="flex items-center gap-3.5 rounded-2xl border border-neutral-200/90 bg-neutral-50/70 px-4 py-2.5 shadow-2xs hover:border-neutral-400 hover:bg-white transition-all shrink-0"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-neutral-200 p-1.5 shadow-2xs">
              <Image
                src={item.logo}
                alt={item.name}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-neutral-950 leading-tight">
                {item.name}
              </span>
              <span className="font-mono text-[9px] font-semibold text-neutral-500 uppercase tracking-wide">
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
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 border-y border-neutral-200">
      {/* Background Subtle Accent Grid */}
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-25" />

      {/* Section Header with Clear Title & Context */}
      <div className="relative mx-auto max-w-4xl px-6 text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-3 shadow-xs">
          <Sparkle size={13} weight="fill" className="text-neutral-900" />
          <span>PRODUCTION INFRASTRUCTURE & STACK</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
          Engineered on battle-tested industry foundations.
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          From GPU acceleration and vector indexes to distributed container orchestration, our platforms are built on proven open technologies.
        </p>
      </div>

      {/* Edge Gradient Mask Overlays for Smooth Fade In/Out */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

        {/* Dual Band of Real Brand Logos and Tech Ecosystem Badges */}
        <div className="space-y-3.5 overflow-hidden">
          {/* Track 1 (Leftwards Drift) */}
          <ParallaxBand items={TECH_STACK_1} baseVelocity={-0.6} />

          {/* Track 2 (Rightwards Drift) */}
          <ParallaxBand items={TECH_STACK_2} baseVelocity={0.6} />
        </div>
      </div>
    </section>
  );
}
