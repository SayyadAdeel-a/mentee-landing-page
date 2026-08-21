"use client";

import React, { useState } from "react";
import { 
  UsersThree, 
  ShieldCheck, 
  Code, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Sparkle,
  Cpu,
  LockKey,
  Terminal,
  Pulse
} from "@phosphor-icons/react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LiveTerminal } from "@/components/ui/LiveTerminal";
import { SecurityVisualizer } from "@/components/ui/SecurityVisualizer";

interface ProductSpec {
  id: string;
  index: string;
  category: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  runtime: string;
  linkHref: string;
  linkText: string;
  icon: React.ReactNode;
}

export function ProductBento() {
  const [matchScore] = useState(96);

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 bg-white text-neutral-950">
      {/* Editorial Section Header */}
      <Reveal className="mb-14 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
                [ INDEX 01.0 // SYSTEMS CATALOG ]
              </span>
              <span className="h-px w-8 bg-neutral-300" />
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neutral-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>4 ACTIVE RUNTIMES</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.08]">
              Engineered for scale.<br />
              <span className="text-neutral-400">Deployed in production.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              From autonomous semantic CV intelligence to zero-knowledge document vaults and open-source data engines, review our flagship production deployments.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span>LATENCY: &lt;15ms</span>
              <span>•</span>
              <span>ENCLAVES: AES-256</span>
              <span>•</span>
              <span>SOC-2 COMPLIANT</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Editorial 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* 1. RecruAI */}
        <Reveal delay={0.1}>
          <div className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md h-full">
            {/* Editorial Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-950">[ 01 ]</span>
                  <span>//</span>
                  <span className="uppercase tracking-wider">TALENT INTELLIGENCE</span>
                </div>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neutral-700">
                  FastAPI · PyTorch
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950">RecruAI</h3>
                  <p className="mt-1 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wide">
                    Autonomous Semantic CV Parsing & Candidate Scoring
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-2xs group-hover:scale-105 transition-transform">
                  <UsersThree size={24} weight="duotone" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Autonomous vector-embedded profile evaluation engine processing unstructured resumes into verified capability graphs with sub-second ranking.
              </p>
            </div>

            {/* Interactive Live Preview Component */}
            <div className="my-6 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#212121] text-[11px] font-mono font-bold text-white shadow-xs">
                    SA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Lead Full-Stack AI Engineer</p>
                    <p className="text-[10px] text-neutral-500 font-mono">Semantic Fit Index</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-black text-emerald-600 font-mono">{matchScore}%</span>
                  <p className="text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-wider font-bold">MATCH SCORE</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] sm:text-[11px]">
                <div className="rounded-xl bg-white p-2 border border-neutral-200 shadow-2xs">
                  <span className="text-neutral-500 block text-[9px] font-mono">FastAPI</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={11} weight="fill" /> 98%
                  </span>
                </div>
                <div className="rounded-xl bg-white p-2 border border-neutral-200 shadow-2xs">
                  <span className="text-neutral-500 block text-[9px] font-mono">LLM & RAG</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={11} weight="fill" /> 96%
                  </span>
                </div>
                <div className="rounded-xl bg-white p-2 border border-neutral-200 shadow-2xs">
                  <span className="text-neutral-500 block text-[9px] font-mono">System Mesh</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={11} weight="fill" /> 94%
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Footer & Metadata */}
            <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
              <span className="font-mono text-[11px] text-neutral-500">RUNTIME // PostgreSQL + pgvector</span>
              <Link
                href="/products"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
              >
                <span>Explore RecruAI</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 2. DocsBox */}
        <Reveal delay={0.2}>
          <div className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md h-full">
            {/* Editorial Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-950">[ 02 ]</span>
                  <span>//</span>
                  <span className="uppercase tracking-wider">ZERO-KNOWLEDGE ENCLAVE</span>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-800">
                  AES-256-GCM
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950">DocsBox</h3>
                  <p className="mt-1 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wide">
                    Client-Side Encrypted Document Storage & Vault
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck size={24} weight="duotone" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Zero-knowledge decentralized vault where document payloads are encrypted client-side prior to transit, guaranteeing zero server-side exposure.
              </p>
            </div>

            {/* Interactive Live Preview Component */}
            <div className="my-6 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 sm:p-5 shadow-2xs">
              <SecurityVisualizer />
            </div>

            {/* Editorial Footer & Metadata */}
            <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
              <span className="font-mono text-[11px] text-neutral-500">SECURITY // Zero-Leakage Architecture</span>
              <Link
                href="/products"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
              >
                <span>Explore DocsBox</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 3. DataFit */}
        <Reveal delay={0.3}>
          <div className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md h-full">
            {/* Editorial Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-950">[ 03 ]</span>
                  <span>//</span>
                  <span className="uppercase tracking-wider">OPEN SOURCE PIPELINE</span>
                </div>
                <span className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-purple-700">
                  PyPI · v0.1.4
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950">DataFit</h3>
                  <p className="mt-1 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wide">
                    Automated ML Preprocessing & Feature Engineering
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-2xs group-hover:scale-105 transition-transform">
                  <Code size={24} weight="duotone" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Published open-source Python library for automated tabular data hygiene, tensor formatting, outlier imputation, and feature selection pipelines.
              </p>
            </div>

            {/* Interactive Live Preview Component */}
            <div className="my-6 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 sm:p-5 shadow-2xs">
              <LiveTerminal />
            </div>

            {/* Editorial Footer & Metadata */}
            <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
              <span className="font-mono text-[11px] text-neutral-500">PACKAGE // pip install datafit</span>
              <a
                href="https://github.com/SyabAhmad/datafit"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
              >
                <span>GitHub Repository</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* 4. Vision Systems */}
        <Reveal delay={0.4}>
          <div className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md h-full">
            {/* Editorial Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-950">[ 04 ]</span>
                  <span>//</span>
                  <span className="uppercase tracking-wider">EDGE COMPUTER VISION</span>
                </div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-900">
                  YOLOv8 · TensorRT
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950">Vision Systems</h3>
                  <p className="mt-1 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wide">
                    Real-Time Inference & Perimeter Detection
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-2xs group-hover:scale-105 transition-transform">
                  <Eye size={24} weight="duotone" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Low-latency video telemetry pipeline executing real-time object tracking, spatial zoning, and edge perimeter alerting at 60 frames per second.
              </p>
            </div>

            {/* Interactive Live Preview Component */}
            <div className="my-6 overflow-hidden rounded-2xl border border-neutral-800 bg-[#111113] p-4 sm:p-5 text-white font-mono shadow-md">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-3">
                <span className="flex items-center gap-2 text-red-400 font-semibold">
                  <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                  FEED_01 // 60 FPS
                </span>
                <span className="text-emerald-400 text-[10px]">INFERENCE: 12.4ms</span>
              </div>
              <div className="rounded-xl bg-[#18181b] p-3.5 border border-neutral-800 flex flex-col justify-between h-24">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[10px] text-emerald-300 font-bold">
                  <Pulse size={12} weight="bold" />
                  <span>OBJECT: PERSON (CONF: 0.97)</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-neutral-400">
                  <span>FRAME #44,819</span>
                  <span>BBOX: [x:120, y:45, w:310, h:520]</span>
                </div>
              </div>
            </div>

            {/* Editorial Footer & Metadata */}
            <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
              <span className="font-mono text-[11px] text-neutral-500">ACCELERATION // TensorRT + CUDA</span>
              <Link
                href="/products"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
              >
                <span>Explore Vision</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
