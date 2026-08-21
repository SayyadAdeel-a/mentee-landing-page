"use client";

import React, { useState } from "react";
import { 
  UsersThree, 
  ShieldCheck, 
  Code, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Cpu, 
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LiveTerminal } from "@/components/ui/LiveTerminal";
import { SecurityVisualizer } from "@/components/ui/SecurityVisualizer";

export function ProductBento() {
  const [matchScore, setMatchScore] = useState(94);
  const [isEvaluating, setIsEvaluating] = useState(false);

  function triggerReEvaluation() {
    setIsEvaluating(true);
    setTimeout(() => {
      setMatchScore(Math.floor(Math.random() * 6) + 93);
      setIsEvaluating(false);
    }, 500);
  }

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-24 bg-white text-neutral-950">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
          <Sparkle size={13} weight="fill" className="text-neutral-900" />
          <span>PRODUCTION ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
          Engineered for scale. Deployed in production.
        </h2>
        <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
          From autonomous recruitment intelligence to zero-knowledge document vaults and open-source data tooling, discover MenteE’s flagship products.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-6 md:grid-cols-12">
        {/* 1. RecruAI: Span 7 cols */}
        <SpotlightCard className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                  <UsersThree size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
                    RecruAI
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-800 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full">
                      Talent Engine
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">Autonomous CV understanding & intelligent candidate matching</p>
                </div>
              </div>
              <button
                onClick={triggerReEvaluation}
                className="hidden sm:flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs transition-colors hover:bg-neutral-100"
              >
                <Cpu size={14} />
                <span>{isEvaluating ? "Scoring..." : "Simulate Score"}</span>
              </button>
            </div>

            {/* Interactive Mock Preview */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50/70 p-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-xs">
                    SA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Senior Full-Stack AI Engineer</p>
                    <p className="text-[11px] text-neutral-500">Role: Lead Systems Architect</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-600 font-mono">{matchScore}%</span>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Fit Index</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-xs">
                  <span className="text-neutral-500 block font-medium">FastAPI / Python</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={12} weight="fill" /> 98% Match
                  </span>
                </div>
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-xs">
                  <span className="text-neutral-500 block font-medium">LLM & RAG Arch</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={12} weight="fill" /> 96% Match
                  </span>
                </div>
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-xs">
                  <span className="text-neutral-500 block font-medium">System Design</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle size={12} weight="fill" /> 92% Match
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
            <span className="text-neutral-500 font-medium font-mono">FastAPI · PostgreSQL · Vector Search</span>
            <Link
              href="/products"
              className="flex items-center gap-1 font-bold text-neutral-950 transition-colors hover:text-neutral-700"
            >
              <span>Explore RecruAI</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>

        {/* 2. DocsBox: Span 5 cols */}
        <SpotlightCard className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                <ShieldCheck size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
                  DocsBox
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-800 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full">
                    Zero-Knowledge
                  </span>
                </h3>
                <p className="text-xs text-neutral-500">Hardware-backed vault with client-side AES-256</p>
              </div>
            </div>

            <div className="mt-5">
              <SecurityVisualizer />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
            <span className="text-neutral-500 font-medium font-mono">Kotlin · AES-256 · Firebase</span>
            <Link
              href="/products"
              className="flex items-center gap-1 font-bold text-neutral-950 transition-colors hover:text-neutral-700"
            >
              <span>Vault Specs</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>

        {/* 3. DataFit: Span 6 cols */}
        <SpotlightCard className="md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                  <Code size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
                    DataFit
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-800 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full">
                      PyPI Published
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">Automated data preprocessing & feature engineering</p>
                </div>
              </div>
              <div className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-neutral-800">
                pip install datafit
              </div>
            </div>

            <LiveTerminal />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
            <span className="text-neutral-500 font-medium font-mono">Python 3.10+ · Scikit-Learn · Pandas</span>
            <a
              href="https://github.com/SyabAhmad/datafit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-neutral-950 transition-colors hover:text-neutral-700"
            >
              <span>View on GitHub</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </SpotlightCard>

        {/* 4. Vision & CamWatch: Span 6 cols */}
        <SpotlightCard className="md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                <Eye size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 flex items-center gap-2">
                  Vision Systems
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-800 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full">
                    Edge AI
                  </span>
                </h3>
                <p className="text-xs text-neutral-500">Real-time object detection, perimeter telemetry & OpenCV</p>
              </div>
            </div>

            {/* Vision Stream Mock Canvas */}
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-[#09090b] p-4 text-white">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                  <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                  LIVE STREAM 01 · 60 FPS
                </span>
                <span className="text-emerald-400">YOLOv8 Edge Engine</span>
              </div>
              <div className="relative h-32 rounded-lg bg-neutral-950 p-3 border border-neutral-800 flex flex-col justify-between">
                <div className="inline-flex w-fit items-center gap-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 font-mono text-[10px] text-emerald-300 font-bold">
                  <span>DETECTED: PERSON (conf: 0.97)</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>FRAME LATENCY: 12.4ms</span>
                  <span>BBOX: [x:120, y:45, w:310, h:520]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
            <span className="text-neutral-500 font-medium font-mono">OpenCV · YOLOv8 · TensorRT</span>
            <Link
              href="/products"
              className="flex items-center gap-1 font-bold text-neutral-950 transition-colors hover:text-neutral-700"
            >
              <span>Vision Architecture</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
