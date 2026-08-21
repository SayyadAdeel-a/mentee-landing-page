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
  Pulse,
  ArrowUpRight
} from "@phosphor-icons/react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LiveTerminal } from "@/components/ui/LiveTerminal";
import { SecurityVisualizer } from "@/components/ui/SecurityVisualizer";

const products = [
  {
    index: "01",
    code: "SYS-REC",
    title: "RecruAI",
    category: "Talent Intelligence",
    tagline: "Autonomous Semantic CV Parsing & Match Engine",
    description:
      "Vector-embedded candidate intelligence platform that extracts unstructured competencies, builds contextual capability graphs, and calculates sub-second semantic match scores for high-velocity hiring teams.",
    specs: [
      { label: "Core Runtime", value: "FastAPI + Python 3.11" },
      { label: "Embedding Mesh", value: "pgvector (1536-dim)" },
      { label: "Scoring Latency", value: "< 120ms / Candidate" },
      { label: "Verification", value: "Multi-Agent Consensus" },
    ],
    badge: "FastAPI · PyTorch",
    linkHref: "/products",
    linkText: "Explore RecruAI Architecture",
    previewType: "recruai",
  },
  {
    index: "02",
    code: "SYS-DOC",
    title: "DocsBox",
    category: "Zero-Knowledge Storage",
    tagline: "Client-Side Encrypted Document Vault",
    description:
      "Decentralized enclave vault where sensitive files undergo client-side AES-256-GCM encryption before transit. Zero server-side plaintext exposure, verifiable cryptographic proofs, and automated compliance auditing.",
    specs: [
      { label: "Cipher Suite", value: "AES-256-GCM + PBKDF2" },
      { label: "Key Derivation", value: "Client-Side Zero Leakage" },
      { label: "Storage Node", value: "Encrypted Shards" },
      { label: "Compliance", value: "HIPAA & SOC-2 Ready" },
    ],
    badge: "AES-256 · Zero-Leak",
    linkHref: "/products",
    linkText: "Explore DocsBox Architecture",
    previewType: "docsbox",
  },
  {
    index: "03",
    code: "SYS-DAT",
    title: "DataFit",
    category: "Open Source Tooling",
    tagline: "Automated Tabular Cleaning & Tensor Formatting",
    description:
      "Published open-source Python library automating tabular data preprocessing. Handles missingness heuristics, tensor formatting, categorical encoding, and feature extraction with single-command CLI execution.",
    specs: [
      { label: "Distribution", value: "PyPI Package (v0.1.4)" },
      { label: "Dependencies", value: "NumPy · Pandas · Sklearn" },
      { label: "Installation", value: "pip install datafit" },
      { label: "License", value: "Open-Source MIT" },
    ],
    badge: "PyPI · Open Source",
    linkHref: "https://github.com/SyabAhmad/datafit",
    linkText: "View GitHub Repository",
    isExternal: true,
    previewType: "datafit",
  },
  {
    index: "04",
    code: "SYS-VIS",
    title: "Vision Systems",
    category: "Edge Computer Vision",
    tagline: "Real-Time Perimeter Telemetry & Spatial Inference",
    description:
      "Distributed edge computer vision pipeline running real-time object tracking, spatial zoning, and low-latency perimeter security inference at 60 FPS on TensorRT and CUDA runtimes.",
    specs: [
      { label: "Model Backbone", value: "YOLOv8 + TensorRT" },
      { label: "Frame Rate", value: "60 FPS Continuous" },
      { label: "Inference Latency", value: "12.4ms Edge Runtime" },
      { label: "Telemetry", value: "Real-Time MQTT Stream" },
    ],
    badge: "YOLOv8 · TensorRT",
    linkHref: "/products",
    linkText: "Explore Vision Architecture",
    previewType: "vision",
  },
];

export function ProductBento() {
  const [matchScore] = useState(96);
  const [activeRow, setActiveRow] = useState<string>("01");

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 bg-white text-neutral-950">
      {/* Editorial Section Header */}
      <Reveal className="mb-16 sm:mb-24">
        <div className="border-b border-neutral-900 pb-8 sm:pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4 font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
                <span>[ CATALOG ISSUE 01 ]</span>
                <span className="h-px w-8 bg-neutral-300" />
                <span className="text-neutral-950 font-semibold">PRODUCTION RUNTIMES</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-950 leading-[0.98]">
                Engineered for scale.<br />
                <span className="text-neutral-400">Deployed in production.</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                A definitive catalog of autonomous AI architectures, zero-knowledge security vaults, and open-source data tooling engineered for high-throughput enterprise scale.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
                <span className="rounded bg-neutral-100 px-2 py-0.5 text-neutral-800 font-bold">4 PRODUCTION ENGINES</span>
                <span>•</span>
                <span>SOC-2 TYPE II</span>
                <span>•</span>
                <span>SUB-15MS LATENCY</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Full Editorial Horizontal Stacked Rows */}
      <div className="divide-y divide-neutral-200 border-b border-neutral-200">
        {products.map((p, idx) => (
          <Reveal key={p.index} delay={idx * 0.1}>
            <div
              onMouseEnter={() => setActiveRow(p.index)}
              className={`group py-12 sm:py-16 transition-colors duration-300 ${
                activeRow === p.index ? "bg-neutral-50/50" : "bg-white"
              } -mx-4 sm:-mx-6 px-4 sm:px-6`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Column 1: Editorial Index & Tag (lg: 3 cols) */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-neutral-950">
                        {p.index}
                      </span>
                      <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] font-mono font-bold text-neutral-700 uppercase">
                        {p.code}
                      </span>
                    </div>

                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {p.category}
                    </p>
                  </div>

                  <div className="hidden lg:block mt-12 pt-4 border-t border-neutral-200 font-mono text-[11px] text-neutral-400 space-y-1">
                    <p>STATUS: DEPLOYED // ACTIVE</p>
                    <p>REGISTRY: PRODUCTION MESH</p>
                  </div>
                </div>

                {/* Column 2: Editorial Details & Specs (lg: 5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950">
                        {p.title}
                      </h3>
                      <span className="font-mono text-xs text-neutral-400 font-medium">
                        — {p.badge}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-neutral-800 mb-3">
                      {p.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                      {p.description}
                    </p>
                  </div>

                  {/* Technical Specifications Table */}
                  <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-mono">
                      {p.specs.map((s) => (
                        <div key={s.label}>
                          <span className="text-neutral-400 block text-[10px] uppercase">{s.label}</span>
                          <span className="text-neutral-900 font-bold text-[11px] sm:text-xs">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Editorial Link Action */}
                  <div className="mt-6">
                    {p.isExternal ? (
                      <a
                        href={p.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 font-mono text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
                      >
                        <span className="underline underline-offset-4">{p.linkText}</span>
                        <ArrowUpRight size={13} weight="bold" className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    ) : (
                      <Link
                        href={p.linkHref}
                        className="group/btn inline-flex items-center gap-2 font-mono text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
                      >
                        <span className="underline underline-offset-4">{p.linkText}</span>
                        <ArrowRight size={13} weight="bold" className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Column 3: Live Interactive Preview Widget (lg: 4 cols) */}
                <div className="lg:col-span-4">
                  {p.previewType === "recruai" && (
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-xs">
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#212121] text-[11px] font-mono font-bold text-white shadow-2xs">
                            SA
                          </div>
                          <div>
                            <p className="text-xs font-bold text-neutral-900">Lead AI Engineer</p>
                            <p className="text-[10px] text-neutral-500 font-mono">Semantic Fit Index</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-black text-emerald-600 font-mono">{matchScore}%</span>
                          <p className="text-[8px] text-neutral-400 font-bold uppercase">MATCH</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-2 border border-neutral-200/80 font-mono text-[10px]">
                          <span className="text-neutral-600">FastAPI / Python</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle size={11} weight="fill" /> 98%
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-2 border border-neutral-200/80 font-mono text-[10px]">
                          <span className="text-neutral-600">LLM Orchestration</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle size={11} weight="fill" /> 96%
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-2 border border-neutral-200/80 font-mono text-[10px]">
                          <span className="text-neutral-600">System Architecture</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle size={11} weight="fill" /> 94%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {p.previewType === "docsbox" && (
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-xs">
                      <SecurityVisualizer />
                    </div>
                  )}

                  {p.previewType === "datafit" && (
                    <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-xs">
                      <LiveTerminal />
                    </div>
                  )}

                  {p.previewType === "vision" && (
                    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111113] p-4 text-white font-mono shadow-md">
                      <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-3">
                        <span className="flex items-center gap-2 text-red-400 font-semibold">
                          <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                          FEED_01 // 60 FPS
                        </span>
                        <span className="text-emerald-400 text-[10px]">12.4ms LATENCY</span>
                      </div>
                      <div className="rounded-xl bg-[#18181b] p-3 border border-neutral-800 flex flex-col justify-between h-24">
                        <div className="inline-flex w-fit items-center gap-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] text-emerald-300 font-bold">
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
        ))}
      </div>
    </section>
  );
}
