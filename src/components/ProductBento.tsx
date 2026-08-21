"use client";

import React, { useState } from "react";
import { 
  UsersThree, 
  ShieldCheck, 
  Code, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  ArrowUpRight,
  Pulse
} from "@phosphor-icons/react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LiveTerminal } from "@/components/ui/LiveTerminal";
import { SecurityVisualizer } from "@/components/ui/SecurityVisualizer";

const products = [
  {
    index: "01",
    title: "RecruAI",
    category: "Talent Intelligence",
    description:
      "Vector-embedded candidate intelligence platform that extracts unstructured competencies, builds contextual capability graphs, and delivers sub-second semantic matching for high-velocity hiring.",
    badge: "FastAPI · PyTorch",
    runtime: "PostgreSQL + pgvector",
    linkHref: "/products",
    linkText: "Explore RecruAI",
    previewType: "recruai",
  },
  {
    index: "02",
    title: "DocsBox",
    category: "Zero-Knowledge Vault",
    description:
      "Decentralized enclave vault where sensitive files undergo client-side AES-256-GCM encryption before transit. Complete zero-knowledge confidentiality with verifiable cryptographic integrity.",
    badge: "AES-256-GCM",
    runtime: "Client-Side Enclaves",
    linkHref: "/products",
    linkText: "Explore DocsBox",
    previewType: "docsbox",
  },
  {
    index: "03",
    title: "DataFit",
    category: "Open Source ML",
    description:
      "Published open-source Python library automating tabular preprocessing, outlier imputation, tensor formatting, and feature engineering with single-command CLI execution.",
    badge: "PyPI Package",
    runtime: "pip install datafit",
    linkHref: "https://github.com/SyabAhmad/datafit",
    linkText: "View on GitHub",
    isExternal: true,
    previewType: "datafit",
  },
  {
    index: "04",
    title: "Vision Systems",
    category: "Edge Computer Vision",
    description:
      "Distributed computer vision telemetry pipeline executing real-time object tracking, spatial zoning, and edge perimeter alerting at 60 FPS on TensorRT runtimes.",
    badge: "YOLOv8 · TensorRT",
    runtime: "CUDA Accelerated",
    linkHref: "/products",
    linkText: "Explore Vision",
    previewType: "vision",
  },
];

export function ProductBento() {
  const [matchScore] = useState(96);

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 bg-white text-neutral-950">
      {/* Minimal Editorial Section Header */}
      <Reveal className="mb-16 sm:mb-20">
        <div className="border-b border-neutral-900 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                [ 01 // PRODUCTION ECOSYSTEM ]
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950">
                Engineered for scale.<br />
                <span className="text-neutral-400">Deployed in production.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Flagship autonomous AI architectures, zero-knowledge encryption vaults, and open-source machine learning infrastructure.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Zigzag Alternating Editorial Horizontal Rows */}
      <div className="divide-y divide-neutral-200 border-b border-neutral-200">
        {products.map((p, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <Reveal key={p.index} delay={0.1}>
              <div className="py-14 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Left Column in Normal / Right Column in Reversed */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-neutral-950">
                        {p.index}
                      </span>
                      <span className="h-px w-6 bg-neutral-300" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                        {p.category}
                      </span>
                      <span className="ml-auto rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neutral-700">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-950 mb-3">
                      {p.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <span className="font-mono text-xs text-neutral-500">
                        {p.runtime}
                      </span>

                      {p.isExternal ? (
                        <a
                          href={p.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
                        >
                          <span className="underline underline-offset-4">{p.linkText}</span>
                          <ArrowUpRight
                            size={13}
                            weight="bold"
                            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </a>
                      ) : (
                        <Link
                          href={p.linkHref}
                          className="group/btn inline-flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
                        >
                          <span className="underline underline-offset-4">{p.linkText}</span>
                          <ArrowRight
                            size={13}
                            weight="bold"
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Interactive Visualizer Preview Component (Opposite side) */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {p.previewType === "recruai" && (
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3.5 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#212121] text-xs font-mono font-bold text-white shadow-2xs">
                              SA
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-neutral-900">Lead AI Engineer</p>
                              <p className="text-[10px] text-neutral-500 font-mono">Semantic Fit Index</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-lg sm:text-xl font-black text-emerald-600 font-mono">{matchScore}%</span>
                            <p className="text-[9px] text-neutral-500 font-bold uppercase">MATCH</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="rounded-xl bg-white p-2.5 border border-neutral-200 shadow-2xs font-mono text-[10px]">
                            <span className="text-neutral-500 block text-[9px]">FastAPI</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                              <CheckCircle size={11} weight="fill" /> 98%
                            </span>
                          </div>
                          <div className="rounded-xl bg-white p-2.5 border border-neutral-200 shadow-2xs font-mono text-[10px]">
                            <span className="text-neutral-500 block text-[9px]">LLM / RAG</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                              <CheckCircle size={11} weight="fill" /> 96%
                            </span>
                          </div>
                          <div className="rounded-xl bg-white p-2.5 border border-neutral-200 shadow-2xs font-mono text-[10px]">
                            <span className="text-neutral-500 block text-[9px]">Mesh</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                              <CheckCircle size={11} weight="fill" /> 94%
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {p.previewType === "docsbox" && (
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 shadow-xs">
                        <SecurityVisualizer />
                      </div>
                    )}

                    {p.previewType === "datafit" && (
                      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-xs">
                        <LiveTerminal />
                      </div>
                    )}

                    {p.previewType === "vision" && (
                      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111113] p-5 text-white font-mono shadow-md">
                        <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                          <span className="flex items-center gap-2 text-red-400 font-semibold">
                            <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                            FEED_01 // 60 FPS
                          </span>
                          <span className="text-emerald-400 text-[11px]">12.4ms LATENCY</span>
                        </div>
                        <div className="rounded-xl bg-[#18181b] p-4 border border-neutral-800 flex flex-col justify-between h-24">
                          <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[10px] text-emerald-300 font-bold">
                            <Pulse size={12} weight="bold" />
                            <span>OBJECT: PERSON (0.97)</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-neutral-400">
                            <span>FRAME #44,819</span>
                            <span>BBOX: [120, 45, 310, 520]</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
