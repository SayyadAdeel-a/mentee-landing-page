"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Reveal>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-xl"
      >
        {sent ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle size={32} weight="fill" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-neutral-950">
              Message Transmitted
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-xs mx-auto font-normal">
              Our engineering team will review your inquiry and follow up within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Syed Syab" required />
              <Field
                label="Work Email"
                name="email"
                type="email"
                placeholder="syab@company.com"
                required
              />
            </div>
            <Field label="Company / Organization" name="company" placeholder="Enterprise / Studio name" />
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider"
              >
                Project Goals & Workflows
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about the AI systems, pipelines, or integrations you are looking to deploy..."
                className="mt-2 w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-neutral-900 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-neutral-800 active:scale-95"
            >
              <span>Transmit Message</span>
              <PaperPlaneTilt size={16} weight="bold" />
            </button>
          </form>
        )}
      </motion.div>
    </Reveal>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-neutral-900 focus:bg-white"
      />
    </div>
  );
}
