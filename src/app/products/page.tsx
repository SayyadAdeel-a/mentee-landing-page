import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { UsersThree, ShieldCheck, Code, Eye, ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Platforms — MenteE™",
  description:
    "Production-grade AI platforms, zero-knowledge security vaults, and automated machine learning libraries.",
};

const PLATFORM_SUITE = [
  {
    title: "MenteE Automate",
    desc: "Autonomous multi-step workflow orchestration engine with self-healing task pipelines, live retries, and comprehensive auditability.",
    tag: "Workflows",
  },
  {
    title: "MenteE Insight",
    desc: "Real-time vector intelligence converting high-velocity logs and heterogeneous data streams into structured decision telemetry.",
    tag: "Intelligence",
  },
  {
    title: "MenteE Assist",
    desc: "Context-aware domain decision engines that reason over internal business logic to power high-confidence team recommendations.",
    tag: "Decision Support",
  },
  {
    title: "MenteE Process",
    desc: "High-volume document intelligence, parsing complex layouts, tables, and unstructured PDF files automatically without human triage.",
    tag: "Doc Intelligence",
  },
];

const METRICS = [
  { k: "99.99%", v: "Uptime SLA standard" },
  { k: "<180ms", v: "Median inference latency" },
  { k: "AES-256", v: "Zero-knowledge cryptography" },
  { k: "SOC-2", v: "Type II verified controls" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        {/* Hero Header */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>PRODUCTION PLATFORMS</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              Software built for scale, not showroom demos.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Every platform in the MenteE ecosystem is engineered for resilience, zero-knowledge security, and automated high-throughput operations.
            </p>
          </Reveal>
        </section>

        {/* Flagship Products Grid */}
        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-10">
                Flagship Deployments
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {/* RecruAI */}
              <SpotlightCard className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                      <UsersThree size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">RecruAI</h3>
                      <p className="text-xs text-neutral-500 font-mono">Talent Matching & Automated Evaluation</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-700">
                    FastAPI
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Autonomous CV comprehension, semantic job-fit scoring, and automated candidate evaluation workflows built on FastAPI and LLM vector embeddings.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                  <span className="text-neutral-500 font-mono">FastAPI · PostgreSQL · Vector Search</span>
                  <Link href="/contact" className="flex items-center gap-1 text-neutral-950 hover:underline">
                    <span>Deploy Sandbox</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </SpotlightCard>

              {/* DocsBox */}
              <SpotlightCard className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                      <ShieldCheck size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">DocsBox</h3>
                      <p className="text-xs text-neutral-500 font-mono">Zero-Knowledge Encrypted Vault</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-700">
                    AES-256
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Client-side AES-256-GCM encrypted document storage application. Cryptographic keys remain on client devices for zero-leakage enterprise compliance.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                  <span className="text-neutral-500 font-mono">Kotlin · AES-256 · Firebase</span>
                  <Link href="/contact" className="flex items-center gap-1 text-neutral-950 hover:underline">
                    <span>Vault Architecture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </SpotlightCard>

              {/* DataFit */}
              <SpotlightCard className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                      <Code size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">DataFit</h3>
                      <p className="text-xs text-neutral-500 font-mono">PyPI Published Library</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neutral-800">
                    Python 3.12
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Published open-source Python library for automated tabular cleaning, missing value interpolation, and optimized ML feature engineering.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                  <span className="text-neutral-500 font-mono">pip install datafit</span>
                  <a
                    href="https://github.com/SyabAhmad/datafit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neutral-950 hover:underline"
                  >
                    <span>PyPI & GitHub</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </SpotlightCard>

              {/* Vision & CamWatch */}
              <SpotlightCard className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-xs">
                      <Eye size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">Vision Systems</h3>
                      <p className="text-xs text-neutral-500 font-mono">Edge Object Detection & Telemetry</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-800">
                    YOLOv8
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Real-time perimeter monitoring, object tracking, and low-latency computer vision pipelines running on YOLOv8 and OpenCV.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                  <span className="text-neutral-500 font-mono">YOLOv8 · OpenCV · TensorRT</span>
                  <Link href="/contact" className="flex items-center gap-1 text-neutral-950 hover:underline">
                    <span>Edge Telemetry</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* MenteE Platform Suite */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-4">
              Enterprise Orchestration Suite
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mb-12 font-normal">
              Modular microservices engineered to connect into existing enterprise data lakes and cloud infrastructure.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {PLATFORM_SUITE.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-mono text-neutral-700 font-bold uppercase">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-neutral-950">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Metrics Bar */}
        <section className="border-y border-neutral-200 bg-neutral-50/60 py-16 px-6">
          <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((s) => (
              <div key={s.v} className="rounded-2xl border border-neutral-200/80 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-extrabold font-mono text-neutral-950">{s.k}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-500">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Ready to integrate MenteE into your stack?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal">
              Speak directly with our engineering team for private cluster deployments and sandbox access.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-neutral-800 active:scale-95"
              >
                Contact Engineering
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
