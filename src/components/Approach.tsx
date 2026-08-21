"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { 
  GitBranch, 
  CloudArrowUp, 
  TrendUp, 
  Check, 
  ArrowsClockwise,
  TerminalWindow
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PHASES = [
  {
    num: "01",
    phase: "Architect & Engineer",
    title: "High-Throughput Full-Stack AI",
    subtitle: "Enterprise-grade inference pipelines engineered from day zero.",
    desc: "We engineer production-ready intelligence pipelines from ground zero. No mockups or throwaway prototypes—every line of code is structured for massive enterprise concurrency, fault tolerance, and end-to-end observability.",
    icon: GitBranch,
    accent: "border-neutral-200 bg-white",
    badgeColor: "bg-neutral-100 text-neutral-900 border-neutral-300",
    tag: "Multi-Agent System",
    highlights: [
      "Custom asynchronous FastAPI & Python distributed microservices",
      "Vector embeddings with sub-millisecond similarity retrieval (pgvector)",
      "Distributed telemetry, trace propagation & Prometheus metrics",
      "High-throughput event streaming architecture with Redis persistence"
    ],
    metric: "Latency: <140ms p99 · 99.99% Availability",
    techStack: ["FastAPI", "Python 3.12", "PyTorch", "Redis", "pgvector"]
  },
  {
    num: "02",
    phase: "Harden & Deploy",
    title: "Zero-Trust Cloud & Cryptography",
    subtitle: "Hardware-enclave protection and client-side encryption baked in.",
    desc: "Platforms ship with enterprise security, automated CI/CD pipelines, and client-side encryption baked in from day one. SOC-2 readiness and ISO-27001 standard practices are foundational engineering requirements.",
    icon: CloudArrowUp,
    accent: "border-neutral-200 bg-white",
    badgeColor: "bg-neutral-100 text-neutral-900 border-neutral-300",
    tag: "Zero-Knowledge",
    highlights: [
      "Containerized Docker & Kubernetes production cluster manifests",
      "Client-side AES-256-GCM zero-knowledge cryptographic vaults",
      "Automated continuous security scanning, linting & integration tests",
      "Role-based access controls (RBAC) with immutable audit logs"
    ],
    metric: "AES-256-GCM Vault · Hardware Protected Enclave",
    techStack: ["AES-256", "Kubernetes", "Docker", "SOC-2 Type II", "Terraform"]
  },
  {
    num: "03",
    phase: "Autonomous Scale",
    title: "Continuous Self-Healing & Learning",
    subtitle: "Autonomous background agents and adaptive inference scaling.",
    desc: "Real-world usage feeds continuous iteration. Machine learning pipelines automatically adapt, re-train, and optimize latency based on production traffic patterns and user telemetry without human intervention.",
    icon: TrendUp,
    accent: "border-neutral-200 bg-white",
    badgeColor: "bg-neutral-950 text-white border-neutral-950",
    tag: "Autonomous Scale",
    highlights: [
      "Dynamic continuous model fine-tuning and intelligent caching",
      "Sub-180ms global inference latency targets across distributed edge",
      "Self-healing background worker orchestration with circuit breaking",
      "Real-time feedback loop ingestion and automated evaluation sweeps"
    ],
    metric: "Scale: Global Edge CDN · Active Autonomous Failover",
    techStack: ["AutoML", "Edge Workers", "LangChain", "OpenCV", "Prometheus"]
  },
];

export function Approach() {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cardElements = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const totalCards = cardElements.length;

      if (totalCards === 0) return;

      // Set initial positions cleanly
      gsap.set(cardElements[0], { yPercent: 0, scale: 1, rotation: 0, opacity: 1, force3D: true });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cardElements[i], { yPercent: 100, scale: 1, rotation: 0, opacity: 1, force3D: true });
      }

      // Linear continuous scrub timeline pinned to section
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];

        scrollTimeline
          .to(
            currentCard,
            {
              scale: 0.94,
              rotation: i % 2 === 0 ? 1 : -1,
              opacity: 0.35,
              ease: "none",
              duration: 1,
              force3D: true,
            },
            i
          )
          .to(
            nextCard,
            {
              yPercent: 0,
              ease: "none",
              duration: 1,
              force3D: true,
            },
            i
          );
      }

      ScrollTrigger.refresh();

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.trigger === container.current) t.kill();
        });
      };
    },
    { scope: container }
  );

  return (
    <section
      id="approach"
      ref={container}
      className="relative w-full bg-neutral-50/70 border-t border-neutral-200 text-neutral-950 py-10 sm:py-16"
    >
      <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-40" />

      {/* Header */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-mono font-semibold text-neutral-700 mb-3 shadow-xs">
          <ArrowsClockwise size={14} />
          <span>ENGINEERING METHODOLOGY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
          From concept to production. We build, not consult.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          MenteE operates as a dedicated product studio. We architect what should exist, ship it to production, and let the software speak for itself.
        </p>
      </div>

      {/* GSAP Sticky Stacked Stage */}
      <div className="relative flex min-h-[520px] sm:min-h-[600px] w-full items-center justify-center overflow-hidden px-3 sm:px-4 md:px-8">
        <div className="relative h-[500px] sm:h-[580px] md:h-[600px] w-full max-w-6xl">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.num}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn(
                  "absolute inset-0 flex flex-col justify-between rounded-3xl border p-7 sm:p-10 lg:p-12 shadow-xl transition-none",
                  phase.accent
                )}
                style={{
                  willChange: "transform, opacity",
                }}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 sm:pb-5">
                    <div className="flex items-center gap-2 sm:gap-3.5">
                      <span className="font-mono text-sm font-bold text-neutral-400">
                        PHASE {phase.num}
                      </span>
                      <span className="h-px w-8 bg-neutral-300" />
                      <span className={cn(
                        "rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase",
                        phase.badgeColor
                      )}>
                        {phase.phase}
                      </span>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 border border-neutral-200 text-neutral-950 shadow-xs">
                      <Icon size={24} weight="duotone" />
                    </div>
                  </div>

                  {/* Body Content Grid */}
                  <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-6">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
                        {phase.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm font-semibold text-neutral-800">
                        {phase.subtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 font-normal">
                        {phase.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {phase.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs font-semibold text-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Highlights Checklist */}
                    <div className="lg:col-span-6 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4 sm:p-6">
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                        <TerminalWindow size={15} />
                        <span>Core Deliverables & Standards</span>
                      </p>
                      <div className="space-y-2.5">
                        {phase.highlights.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium leading-normal"
                          >
                            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                              <Check size={11} weight="bold" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="border-t border-neutral-100 pt-4 flex items-center justify-between font-mono text-xs font-semibold text-neutral-500">
                  <span className="flex items-center gap-2 text-neutral-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {phase.metric}
                  </span>
                  <span className="text-neutral-950 font-bold bg-neutral-100 border border-neutral-200 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">
                    Step {phase.num} / 03
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
