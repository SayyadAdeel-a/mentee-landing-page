import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Sparkle, EnvelopeSimple, Lifebuoy, ShieldCheck, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support & SLA — MenteE™",
  description:
    "Enterprise support channels, technical documentation, and SLA commitments for MenteE AI platforms.",
};

const supportChannels = [
  {
    icon: EnvelopeSimple,
    title: "Engineering Support",
    desc: "Direct access to our infrastructure and core model development team for deployment assistance and API integration.",
    action: "contact@mentee.tech",
    href: "mailto:contact@mentee.tech",
  },
  {
    icon: Lifebuoy,
    title: "Enterprise SLA",
    desc: "Guaranteed 99.99% availability with 1-hour critical response windows for enterprise cluster deployments.",
    action: "Review SLA Terms",
    href: "/terms",
  },
  {
    icon: ShieldCheck,
    title: "Security & Vulnerability",
    desc: "Responsible disclosure inbox for zero-knowledge cryptographic audit inquiries and bug bounty submissions.",
    action: "security@mentee.tech",
    href: "mailto:security@mentee.tech",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>ENTERPRISE SUPPORT</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              Support engineered to keep your systems operational.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Whether integrating our open-source toolkits or running multi-tenant AI clusters, our engineering team is here to assist.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {supportChannels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={i * 0.08}>
                    <SpotlightCard className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-950 shadow-xs">
                          <Icon size={24} weight="duotone" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-neutral-950">
                          {c.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600 font-normal">
                          {c.desc}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-neutral-100 pt-4">
                        {c.href.startsWith("mailto:") ? (
                          <a
                            href={c.href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 hover:underline"
                          >
                            <span>{c.action}</span>
                            <ArrowRight size={12} />
                          </a>
                        ) : (
                          <Link
                            href={c.href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 hover:underline"
                          >
                            <span>{c.action}</span>
                            <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                    </SpotlightCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Need immediate engineering assistance?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal">
              Reach out directly through our contact form for priority triage.
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
