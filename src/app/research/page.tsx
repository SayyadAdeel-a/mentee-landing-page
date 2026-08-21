import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Sparkle, ArrowUpRight, FileCode, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Research & Publications — MenteE™",
  description:
    "Applied artificial intelligence research, machine learning benchmarks, and zero-knowledge cryptographic models from MenteE.",
};

const papers = [
  {
    title: "Optimized High-Throughput Feature Extraction in High-Dimensional Datasets",
    authors: "Syed Syab Ahmad",
    date: "2024",
    venue: "Open Applied Machine Learning",
    summary:
      "A formal evaluation of adaptive scaling and automated missing value imputation implemented in the open-source DataFit framework, achieving a 34% reduction in preprocessing compute latency.",
    doi: "https://orcid.org/0009-0003-9183-582X",
    tag: "Machine Learning",
  },
  {
    title: "Client-Side Zero-Knowledge Cryptographic Vaults on Resource-Constrained Devices",
    authors: "Syed Syab Ahmad",
    date: "2023",
    venue: "Applied Security Systems",
    summary:
      "Architecture analysis of AES-256-GCM hardware enclave key generation on mobile platforms, detailing zero-knowledge verification mechanisms used in DocsBox.",
    doi: "https://github.com/SyabAhmad",
    tag: "Cryptography",
  },
  {
    title: "Real-Time Spatial Edge Tracking via Pruned YOLOv8 Models",
    authors: "Syed Syab Ahmad",
    date: "2023",
    venue: "Computer Vision Telemetry",
    summary:
      "Benchmarking low-latency frame evaluation on embedded edge devices for continuous perimeter monitoring and object classification.",
    doi: "https://github.com/SyabAhmad",
    tag: "Computer Vision",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>APPLIED AI RESEARCH</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              Foundational engineering backed by rigorous research.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              We publish and validate our mathematical architectures, data pipelines, and security mechanisms in real-world benchmarks.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-5xl space-y-6">
            {papers.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <SpotlightCard className="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-[10px] font-bold uppercase text-neutral-700">
                      {p.tag}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {p.venue} · {p.date}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl sm:text-2xl font-bold text-neutral-950">
                    {p.title}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-neutral-500 font-semibold">
                    Author: {p.authors}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 font-normal">
                    {p.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                    <a
                      href={p.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-950 font-bold hover:underline"
                    >
                      <span>View Publication / Author Record</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ORCID badge */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 shadow-sm">
              <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">Academic & Open Source Profile</span>
              <h3 className="mt-2 text-2xl font-bold text-neutral-950">ORCID Verified Researcher</h3>
              <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto font-normal">
                Syed Syab Ahmad holds an ORCID record (0009-0003-9183-582X) documenting scholarly contributions and open-source software libraries.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://orcid.org/0009-0003-9183-582X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-neutral-800 transition-colors"
                >
                  <span>View ORCID Record</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
