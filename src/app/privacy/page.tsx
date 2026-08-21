import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Privacy Policy — MenteE™",
  description:
    "MenteE privacy policy — zero-knowledge principles, data security, and how we protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>DATA GOVERNANCE</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
              Privacy Policy & Security Standards
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-mono">
              Last revised: August 2026 · SOC-2 Ready & Zero-Knowledge Architecture
            </p>
          </Reveal>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-700">
            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">
                  1. Zero-Knowledge Cryptography Philosophy
                </h2>
                <p className="text-neutral-600">
                  MenteE (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) designs platforms with privacy-first and zero-knowledge paradigms wherever feasible (such as DocsBox). In zero-knowledge deployments, encryption keys are derived and held exclusively on client hardware, meaning our servers cannot access or decrypt your confidential payloads.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">
                  2. Information Collection & Ingestion
                </h2>
                <p className="text-neutral-600">We process only the telemetry necessary to provide high-availability AI services:</p>
                <ul className="mt-3 list-disc pl-5 space-y-1.5 text-neutral-600">
                  <li>
                    <strong className="text-neutral-900">Account & Sandbox Identifiers:</strong> Name, work email, organization details submitted during enterprise sandbox onboarding.
                  </li>
                  <li>
                    <strong className="text-neutral-900">Performance Telemetry:</strong> Anonymized API latency stats, token throughput, and execution error logs.
                  </li>
                  <li>
                    <strong className="text-neutral-900">Customer Data Isolation:</strong> Tenant data processed through RecruAI or MenteE Automate is segregated in dedicated schema namespaces.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">
                  3. Non-Sale of Data & Model Training
                </h2>
                <p className="text-neutral-600">
                  We do not sell, license, or monetize customer data. Customer payloads and documents processed through enterprise pipelines are <strong className="text-neutral-900">never used to train public foundation models</strong> without explicit written authorization.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">
                  4. Security & Compliance Controls
                </h2>
                <p className="text-neutral-600">
                  All data in transit is encrypted using TLS 1.3, and data at rest is encrypted using AES-256 standards. Our infrastructure undergoes continuous vulnerability scanning and access logging.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-8 shadow-xs">
                <h2 className="mb-3 text-lg font-bold text-neutral-950">
                  5. Contact & Privacy Inquiries
                </h2>
                <p className="text-neutral-600">
                  For data requests, GDPR/CCPA inquiries, or security disclosures, please reach our compliance team at{" "}
                  <a
                    href="mailto:support@menteeai.org"
                    className="font-mono text-neutral-950 underline underline-offset-4 hover:text-neutral-700 font-semibold"
                  >
                    support@menteeai.org
                  </a>
                  .
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
