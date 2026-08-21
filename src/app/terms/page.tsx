import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Sparkle, FileText } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Terms of Service — MenteE™",
  description: "Terms and conditions governing the use of MenteE platforms, open-source software, and enterprise APIs.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <FileText size={14} className="text-neutral-900" />
              <span>LEGAL AGREEMENT</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
              Terms of Service & Usage
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-mono">
              Last updated: August 2026 · Standard Enterprise Terms
            </p>
          </Reveal>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-700">
            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">1. Acceptance of Terms</h2>
                <p className="text-neutral-600">
                  By accessing, deploying, or utilizing platforms engineered by MenteE (&quot;MenteE,&quot; &quot;we,&quot; &quot;us&quot;), including RecruAI, DocsBox, DataFit, or custom cloud instances, you agree to be bound by these Terms of Service.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">2. Service License & Intellectual Property</h2>
                <p className="text-neutral-600">
                  MenteE grants you a non-exclusive, non-transferable license to access our platform APIs and private clusters in accordance with your signed Enterprise Master Services Agreement (MSA) or standard API tier. Open-source libraries (such as DataFit) are governed by their respective Apache-2.0 or MIT licenses.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">3. Acceptable Use & API Rate Limits</h2>
                <p className="text-neutral-600">
                  You agree not to reverse engineer proprietary neural architectures, bypass client-side security mechanisms, or exceed published inference concurrency limits without prior agreement.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">4. Service Level Commitments & Warranties</h2>
                <p className="text-neutral-600">
                  Enterprise tiers include a 99.99% monthly availability commitment for mission-critical inference clusters, backed by financial service credits detailed in individual enterprise agreements.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
