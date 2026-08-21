"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const TECH_ITEMS = [
  { name: "Python 3.12", role: "Core Engine" },
  { name: "FastAPI", role: "Async Microservices" },
  { name: "PyTorch & Transformers", role: "Neural Inference" },
  { name: "PostgreSQL & pgvector", role: "Vector DB" },
  { name: "AES-256 GCM", role: "Zero-Knowledge Vault" },
  { name: "Docker & Kubernetes", role: "Cloud Infra" },
  { name: "OpenCV & YOLOv8", role: "Edge Vision" },
  { name: "Next.js & React 19", role: "Reactive Edge UI" },
  { name: "Redis", role: "Real-Time State" },
];

export function TechStackMarquee() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50/60 py-5">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max">
        <motion.div
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: 26,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center gap-12"
        >
          {[...TECH_ITEMS, ...TECH_ITEMS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2.5 font-mono text-xs text-neutral-600 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="font-bold text-neutral-900">{item.name}</span>
              <span className="text-[11px] text-neutral-400">[{item.role}]</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
