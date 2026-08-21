import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Sparkle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions by Sector — MenteE™",
  description:
    "MenteE deploys production AI platforms across financial systems, talent intelligence, document workflows, and enterprise operations.",
};

const solutions = [
  {
    t: "Talent & Recruitment Workflows",
    d: "Automated candidate sourcing, semantic CV comprehension, and scoring pipelines that reduce recruiting cycle times by up to 80%.",
    tags: ["RecruAI", "CV Parsing", "Candidate Scoring", "FastAPI"],
  },
  {
    t: "Zero-Knowledge Data Vaults",
    d: "Cryptographically secured document management for privacy-sensitive enterprises with client-side AES-256 encryption.",
    tags: ["DocsBox", "AES-256", "Zero-Knowledge", "SOC-2 Ready"],
  },
  {
    t: "Automated ML & Data Pipelines",
    d: "Automated data cleaning, anomaly detection, and feature engineering pipelines powered by our open-source DataFit framework.",
    tags: ["DataFit", "Python ML", "Automated ETL", "PyPI"],
  },
  {
    t: "Computer Vision & Perimeter Telemetry",
    d: "Real-time object detection, safety tracking, and spatial telemetry running low-latency edge inference via YOLOv8 and OpenCV.",
    tags: ["CamWatch", "YOLOv8", "OpenCV", "Edge AI"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>INDUSTRY APPLICATIONS</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              AI solutions tailored for production reality.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              MenteE deploys intelligent software tailored to acute technical problems—each one engineered for the security and uptime demands of modern organizations.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.06}>
                  <SpotlightCard className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-neutral-950">
                        {s.t}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600 font-normal">
                        {s.d}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-[11px] font-semibold text-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold">
                      <span className="text-neutral-500 font-mono">Enterprise Spec</span>
                      <Link href="/contact" className="flex items-center gap-1 text-neutral-950 font-bold hover:underline">
                        <span>Deploy Solution</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Need a specialized AI deployment?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal">
              Our core infrastructure adapters connect directly into your private VPC or cloud environment.
            </p>
            <div className="mt-8 flex justify-center">
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
