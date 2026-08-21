import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Sparkle, ArrowUpRight, EnvelopeSimple, Globe } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact Engineering — MenteE™",
  description: "Connect with the MenteE engineering studio regarding AI platform deployments, private sandboxes, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-neutral-950">
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="ambient-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
              <Sparkle size={13} weight="fill" className="text-neutral-900" />
              <span>DIRECT ACCESS</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl leading-tight">
              Connect directly with our engineering studio.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Whether you need sandbox access to RecruAI, architecture details on DocsBox, or custom integrations for DataFit, tell us about your goals.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50/60 py-20 px-6">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-neutral-950">Studio Leadership</h3>
                  <p className="mt-2 text-sm text-neutral-600 font-normal">
                    Inquiries are triaged directly by Syed Syab Ahmad and core platform engineers.
                  </p>
                  <div className="mt-6 space-y-3 font-mono text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <Globe size={15} />
                      <span>Riyadh, Saudi Arabia · Global Edge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvelopeSimple size={15} />
                      <span>contact@mentee.tech</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <a
                      href="https://syab.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 hover:underline"
                    >
                      <span>Founder Portfolio: syab.tech</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
