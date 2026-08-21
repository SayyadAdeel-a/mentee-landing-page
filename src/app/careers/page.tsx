import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Sparkle, ArrowRight, MapPin, Briefcase } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Careers — MenteE™",
  description:
    "Join our engineering studio building high-throughput AI platforms and zero-knowledge systems.",
};

const OPEN_ROLES = [
  {
    title: "Senior Full-Stack AI Engineer",
    type: "Full-Time",
    location: "Riyadh, Saudi Arabia / Remote",
    slug: "full-stack-ai-engineer",
    desc: "Architect and scale distributed FastAPI inference microservices, vector retrieval systems, and edge React architectures.",
    tags: ["FastAPI", "Python", "PyTorch", "pgvector", "Docker"],
  },
  {
    title: "Digital Marketing & Growth Strategist",
    type: "Full-Time",
    location: "Riyadh, Saudi Arabia / Hybrid",
    slug: "digital-marketer",
    desc: "Lead developer relations, technical content strategy, and product marketing across our open-source and enterprise AI software.",
    tags: ["DevRel", "Growth", "Product Marketing", "AI SaaS"],
  },
  {
    title: "Legal Adviser & Compliance Lead",
    type: "Contract / Full-Time",
    location: "Riyadh, Saudi Arabia",
    slug: "legal-adviser",
    desc: "Structure software licensing, intellectual property, international privacy compliance (GDPR/SOC-2), and commercial contracts.",
    tags: ["IP Law", "SOC-2", "Software Licensing", "Compliance"],
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>CAREERS AT MENTEE</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              Build autonomous systems with exceptional craft.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              We are a high-autonomy team engineering production software that powers recruitment intelligence, secure data storage, and machine learning infrastructure.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-5xl space-y-6">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-8">
                Open Positions
              </h2>
            </Reveal>

            {OPEN_ROLES.map((role, i) => (
              <Reveal key={role.slug} delay={i * 0.08}>
                <SpotlightCard className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
                        {role.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-600">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {role.type}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/careers/${role.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-neutral-800 transition-colors shrink-0"
                    >
                      <span>View Role Specs</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                    {role.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-100 pt-4">
                    {role.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
