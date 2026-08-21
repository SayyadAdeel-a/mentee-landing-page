"use client";

import React, { useState } from "react";
import { 
  GearSix, 
  Database, 
  Brain, 
  FileText, 
  ShieldCheck, 
  Gauge, 
  Sparkle,
  ArrowUpRight,
  CheckCircle,
  TerminalWindow
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import EncryptButton from "@/components/originkit/ui/encrypt-button";

interface CapabilityItem {
  id: string;
  category: "all" | "workflows" | "data" | "security" | "infra";
  index: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  specs: string[];
  tag: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "orchestration",
    category: "workflows",
    index: "SYS.01",
    icon: GearSix,
    title: "Autonomous Workflow Orchestration",
    desc: "Multi-step Directed Acyclic Graph (DAG) engines that execute complex enterprise tasks with self-healing recovery, automated retries, and cryptographic auditability.",
    metric: "< 40ms",
    metricLabel: "DAG Task Dispatch",
    specs: ["Self-healing task pipelines", "Real-time state telemetry", "Granular rollback logs"],
    tag: "Workflows",
  },
  {
    id: "vector-data",
    category: "data",
    index: "SYS.02",
    icon: Database,
    title: "Real-Time Data & Vector Embeddings",
    desc: "Ingesting, normalizing, and semantically indexing high-velocity unstructured data streams into pgvector and dense embeddings for millisecond RAG lookups.",
    metric: "1536-dim",
    metricLabel: "Vector Indexing",
    specs: ["Automated chunking & deduplication", "Hybrid semantic search", "Sub-10ms query lookups"],
    tag: "Vector Data",
  },
  {
    id: "decision-engine",
    category: "workflows",
    index: "SYS.03",
    icon: Brain,
    title: "Context-Aware Decision Engines",
    desc: "Domain-tailored machine learning models that reason over enterprise business logic, evaluating multi-attribute criteria to surface high-confidence recommendations.",
    metric: "99.4%",
    metricLabel: "Evaluation Precision",
    specs: ["Multi-model ensemble routing", "Context window preservation", "Zero hallucination bounds"],
    tag: "Decision AI",
  },
  {
    id: "doc-intelligence",
    category: "data",
    index: "SYS.04",
    icon: FileText,
    title: "Document Intelligence & Layout Parsing",
    desc: "High-accuracy layout parsing, tabular data extraction, and OCR classification over multi-page PDF documents without manual human triage.",
    metric: "450 pgs/min",
    metricLabel: "Throughput Pipeline",
    specs: ["Complex table reconstruction", "Multilingual semantic OCR", "Structured JSON output"],
    tag: "Doc Intelligence",
  },
  {
    id: "cryptography",
    category: "security",
    index: "SYS.05",
    icon: ShieldCheck,
    title: "Zero-Knowledge Cryptographic Vaults",
    desc: "Hardware-enclave key derivation and client-side AES-256-GCM encryption ensuring proprietary customer data remains inaccessible to hosts or middle-boxes.",
    metric: "AES-256",
    metricLabel: "Client-Side GCM",
    specs: ["Keys never leave client device", "SOC-2 Type II audit ready", "End-to-end payload isolation"],
    tag: "Security",
  },
  {
    id: "infrastructure",
    category: "infra",
    index: "SYS.06",
    icon: Gauge,
    title: "High-Throughput Global Edge Core",
    desc: "Distributed microservice clusters built with auto-scaling compute pools, container health checking, and low-latency global CDN edge acceleration.",
    metric: "99.99%",
    metricLabel: "Guaranteed SLA",
    specs: ["Active-active failover mesh", "DDoS mitigation layer", "10,000+ RPS concurrency"],
    tag: "Infrastructure",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Systems (6)" },
  { key: "workflows", label: "Workflows & Orchestration" },
  { key: "data", label: "Vector & Document Intelligence" },
  { key: "security", label: "Zero-Knowledge Security" },
  { key: "infra", label: "Edge Infrastructure" },
];

export function Capabilities() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCapabilities = CAPABILITIES.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 bg-white text-neutral-950">
      {/* Subtle Background Glow */}
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-25" />

      {/* Header */}
      <div className="relative mx-auto max-w-3xl text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1 text-xs font-mono font-semibold text-neutral-800 mb-4 shadow-xs">
          <Sparkle size={13} weight="fill" className="text-neutral-900" />
          <span>SYSTEM CAPABILITIES // ARCHITECTURE MATRIX</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
          Core platform architecture & powers
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          Architected for zero-latency execution, hardware-enclave cryptographic resilience, and native enterprise orchestration.
        </p>

        {/* Filter Category Pills */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-mono font-semibold transition-all duration-200 shadow-2xs ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Architectural Matrix Grid */}
      <div className="relative grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredCapabilities.map((cap) => {
            const Icon = cap.icon;

            return (
              <motion.div
                key={cap.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-neutral-400 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with System Index and Benchmark Pill */}
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-neutral-100">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {cap.index}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2 sm:px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-neutral-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{cap.metric}</span>
                      <span className="text-neutral-400">·</span>
                      <span className="text-neutral-500 hidden sm:inline">{cap.metricLabel}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-4 sm:mt-5 flex items-center gap-3">
                    <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-2xl bg-neutral-100 border border-neutral-200 text-neutral-950 shadow-xs group-hover:scale-105 group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                        {cap.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600 font-normal">
                    {cap.desc}
                  </p>

                  {/* Architectural Specs Checklist */}
                  <div className="mt-4 sm:mt-5 space-y-2 border-t border-neutral-100 pt-3 sm:pt-4">
                    {cap.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-neutral-700">
                        <CheckCircle size={13} weight="fill" className="text-neutral-950 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-neutral-100 pt-3 sm:pt-4 text-xs font-semibold">
                  <span className="text-neutral-400 font-mono">Status: Verified</span>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1 text-neutral-950 font-bold hover:underline"
                  >
                    <span>Inspect Platform</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Diagnostic Banner Styled in Charcoal #212121 */}
      <div className="mt-10 sm:mt-12 rounded-3xl border border-[#333333] bg-[#212121] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl text-white">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-2xl bg-[#2a2a2a] border border-[#444444] text-white shadow-xs shrink-0">
            <TerminalWindow size={22} weight="duotone" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Need custom algorithmic modules or private cluster deployment?
            </h4>
            <p className="text-xs text-neutral-300 mt-1 font-normal">
              Our engineering studio deploys dedicated single-tenant pipelines with strict zero-knowledge security guarantees.
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <Link href="/contact">
            <EncryptButton
              label="Request Sandbox Access"
              fill="#ffffff"
              textColor="#09090b"
              hoverTextColor="#09090b"
              paddingX={28}
              paddingY={14}
              rounded={999}
              font={{
                fontFamily: "var(--font-sans), Inter, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.02em",
              }}
              sweepOptions={{
                color: "rgba(0,0,0,0.15)",
                speed: 8,
                count: 2,
                width: 12,
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
