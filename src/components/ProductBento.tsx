"use client";

import React, { useState } from "react";
import { 
  UsersThree, 
  ShieldCheck, 
  Code, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LiveTerminal } from "@/components/ui/LiveTerminal";
import { SecurityVisualizer } from "@/components/ui/SecurityVisualizer";

export function ProductBento() {
  const [matchScore] = useState(96);

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 bg-white text-neutral-950">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
          <Sparkle size={13} weight="fill" className="text-neutral-900" />
          <span>PRODUCTION ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
          Engineered for scale. Deployed in production.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          From autonomous recruitment intelligence to zero-knowledge document vaults and open-source data tooling, discover MenteE's flagship products.
        </p>
      </div>

      {/* Bento Grid: Enforced 2x2 Equal 50% Width Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* 1. RecruAI */}
        <SpotlightCard className="flex flex-col justify-between p-5 sm:p-7 rounded-3xl border border-neutral-200 bg-neutral-50/70 shadow-xs">
          {/* Enforced Anatomy: Header 48px */}
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-950 shadow-2xs">
                <UsersThree size={22} weight="duotone" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950">RecruAI</h3>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded-full">
                  Talent Engine
                </span>
              </div>
            </div>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold text-blue-700">
              FastAPI
            </span>
          </div>

          {/* Enforced Anatomy: Body flexible */}
          <div className="flex-1 flex flex-col justify-between my-4 sm:my-5">
            <p className="text-xs text-neutral-600 font-normal mb-4">
              Autonomous semantic CV parsing, skill extraction, and candidate matching pipelines with sub-second scoring.
            </p>

            {/* Interactive Match Preview */}
            <div className="rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-neutral-950 flex items-center justify-center text-[10px] font-bold text-white shadow-2xs">
                    SA
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-neutral-900">Lead Full-Stack AI Engineer</p>
                    <p className="text-[9px] text-neutral-500 font-mono">Autonomous Profile Evaluation</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm sm:text-base font-black text-emerald-600 font-mono">{matchScore}%</span>
                  <p className="text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-wider font-semibold">Fit Index</p>
                </div>
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px]">
                <div className="rounded-lg bg-neutral-50 p-1.5 sm:p-2 border border-neutral-200">
                  <span className="text-neutral-500 block font-medium">FastAPI / Python</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={10} weight="fill" /> 98%
                  </span>
                </div>
                <div className="rounded-lg bg-neutral-50 p-1.5 sm:p-2 border border-neutral-200">
                  <span className="text-neutral-500 block font-medium">LLM & RAG</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={10} weight="fill" /> 96%
                  </span>
                </div>
                <div className="rounded-lg bg-neutral-50 p-1.5 sm:p-2 border border-neutral-200">
                  <span className="text-neutral-500 block font-medium">System Design</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={10} weight="fill" /> 94%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enforced Anatomy: Footer 44px pinned bottom */}
          <div className="flex h-11 items-center justify-between border-t border-neutral-200/80 pt-1 text-xs">
            <span className="text-neutral-500 font-mono text-[10px] sm:text-[11px]">FastAPI · PostgreSQL · Vector Search</span>
            <Link
              href="/products"
              className="flex items-center gap-1 text-xs font-bold text-neutral-950 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none rounded-md py-1 transition-colors"
            >
              <span>Explore RecruAI</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>

        {/* 2. DocsBox */}
        <SpotlightCard className="flex flex-col justify-between p-5 sm:p-7 rounded-3xl border border-neutral-200 bg-neutral-50/70 shadow-xs">
          {/* Enforced Anatomy: Header 48px */}
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-950 shadow-2xs">
                <ShieldCheck size={22} weight="duotone" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950">DocsBox</h3>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded-full">
                  Zero-Knowledge
                </span>
              </div>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold text-emerald-700">
              AES-256
            </span>
          </div>

          {/* Enforced Anatomy: Body flexible */}
          <div className="flex-1 flex flex-col justify-between my-4 sm:my-5">
            <p className="text-xs text-neutral-600 font-normal mb-4">
              Client-side AES-256 encrypted document storage and zero-leakage vault ensuring absolute confidentiality for records.
            </p>

            <div className="rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-2xs">
              <SecurityVisualizer />
            </div>
          </div>

          {/* Enforced Anatomy: Footer 44px pinned bottom */}
          <div className="flex h-11 items-center justify-between border-t border-neutral-200/80 pt-1 text-xs">
            <span className="text-neutral-500 font-mono text-[10px] sm:text-[11px]">Kotlin · AES-256 · Firebase</span>
            <Link
              href="/products"
              className="flex items-center gap-1 text-xs font-bold text-neutral-950 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none rounded-md py-1 transition-colors"
            >
              <span>Explore DocsBox</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>

        {/* 3. DataFit */}
        <SpotlightCard className="flex flex-col justify-between p-5 sm:p-7 rounded-3xl border border-neutral-200 bg-neutral-50/70 shadow-xs">
          {/* Enforced Anatomy: Header 48px */}
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-950 shadow-2xs">
                <Code size={22} weight="duotone" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950">DataFit</h3>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded-full">
                  PyPI Package
                </span>
              </div>
            </div>
            <span className="rounded-full border border-purple-200 bg-purple-50 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold text-purple-700">
              pip install
            </span>
          </div>

          {/* Enforced Anatomy: Body flexible */}
          <div className="flex-1 flex flex-col justify-between my-4 sm:my-5">
            <p className="text-xs text-neutral-600 font-normal mb-4">
              Published open-source Python library for automated tabular cleaning, tensor scaling, and feature engineering.
            </p>

            <LiveTerminal />
          </div>

          {/* Enforced Anatomy: Footer 44px pinned bottom */}
          <div className="flex h-11 items-center justify-between border-t border-neutral-200/80 pt-1 text-xs">
            <span className="text-neutral-500 font-mono text-[10px] sm:text-[11px]">Python 3.10+ · Scikit-Learn · Pandas</span>
            <a
              href="https://github.com/SyabAhmad/datafit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold text-neutral-950 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none rounded-md py-1 transition-colors"
            >
              <span>Explore DataFit</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </SpotlightCard>

        {/* 4. Vision Systems */}
        <SpotlightCard className="flex flex-col justify-between p-5 sm:p-7 rounded-3xl border border-neutral-200 bg-neutral-50/70 shadow-xs">
          {/* Enforced Anatomy: Header 48px */}
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-950 shadow-2xs">
                <Eye size={22} weight="duotone" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950">Vision Systems</h3>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded-full">
                  Edge AI
                </span>
              </div>
            </div>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold text-amber-800">
              YOLOv8
            </span>
          </div>

          {/* Enforced Anatomy: Body flexible */}
          <div className="flex-1 flex flex-col justify-between my-4 sm:my-5">
            <p className="text-xs text-neutral-600 font-normal mb-4">
              Real-time object detection, perimeter telemetry, and low-latency computer vision inference running on YOLOv8 and TensorRT.
            </p>

            {/* Vision Stream Mock Canvas */}
            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#111113] p-3 sm:p-4 text-white font-mono shadow-md">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-400 mb-2.5">
                <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                  <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                  STREAM 01 · 60 FPS
                </span>
                <span className="text-emerald-400">YOLOv8 Engine</span>
              </div>
              <div className="rounded-lg bg-[#18181b] p-2.5 sm:p-3 border border-neutral-800 flex flex-col justify-between h-20">
                <div className="inline-flex w-fit items-center gap-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[9px] sm:text-[10px] text-emerald-300 font-bold">
                  <span>DETECTED: PERSON (conf: 0.97)</span>
                </div>
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-neutral-400">
                  <span>LATENCY: 12.4ms</span>
                  <span className="hidden sm:inline">BBOX: [x:120, y:45, w:310, h:520]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enforced Anatomy: Footer 44px pinned bottom */}
          <div className="flex h-11 items-center justify-between border-t border-neutral-200/80 pt-1 text-xs">
            <span className="text-neutral-500 font-mono text-[10px] sm:text-[11px]">OpenCV · YOLOv8 · TensorRT</span>
            <Link
              href="/products"
              className="flex items-center gap-1 text-xs font-bold text-neutral-950 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:outline-none rounded-md py-1 transition-colors"
            >
              <span>Explore Vision</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
