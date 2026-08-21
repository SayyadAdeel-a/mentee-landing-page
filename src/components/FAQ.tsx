"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, Question } from "@phosphor-icons/react";

const FAQS = [
  {
    q: "What is MenteE and what does the ecosystem build?",
    a: "MenteE is a dedicated technology product studio and AI ecosystem founded by Syed Syab Ahmad. We engineer and deploy production-ready AI platforms, including RecruAI (automated talent intelligence), DocsBox (zero-knowledge encrypted document storage), and DataFit (automated data cleaning & ML feature engineering).",
  },
  {
    q: "Is MenteE a consulting agency or a product studio?",
    a: "MenteE is strictly a product-led company. We do not operate as a traditional hourly agency. We design, build, deploy, and scale proprietary software platforms that solve acute enterprise and developer problems directly in production.",
  },
  {
    q: "How secure is data processed by MenteE platforms?",
    a: "Security and privacy are engineered from the foundation up. Systems like DocsBox use client-side AES-256-GCM encryption with zero-knowledge architecture, meaning keys never touch servers. All AI pipelines adhere to strict role-based isolation and SOC-2 standard controls.",
  },
  {
    q: "How can teams deploy or integrate MenteE platforms?",
    a: "Our software is available as fully managed cloud endpoints, containerized private cluster deployments (Docker/Kubernetes), and open-source packages (such as DataFit on PyPI). Contact our engineering team for private enterprise sandbox access.",
  },
  {
    q: "What tech stack powers MenteE's AI pipelines?",
    a: "We build on a robust modern stack: Python, FastAPI, PyTorch, LangChain, PostgreSQL with pgvector, Redis, Docker, Next.js, and specialized Computer Vision models (YOLOv8 & OpenCV).",
  },
  {
    q: "How do I get in touch with the team or founder?",
    a: "You can reach out through our contact portal or connect directly with Syed Syab Ahmad via his engineering portfolio at syab.tech or on LinkedIn/GitHub.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t border-neutral-200 bg-white px-6 py-28 text-neutral-950"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
            <Question size={13} />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-normal">
            Straight answers about our platforms, security architecture, and deployment models.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left group"
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                    {f.q}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 group-hover:border-neutral-400 group-hover:text-black transition-all">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-neutral-600 font-normal">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
