"use client";

import React from "react";
import { ShieldCheck, Lightning, TreeStructure, GitFork } from "@phosphor-icons/react";

const STATS = [
  {
    value: "99.99%",
    label: "Platform Availability",
    sub: "Enterprise SLA standard",
    icon: Lightning,
  },
  {
    value: "<180ms",
    label: "Median Inference Latency",
    sub: "Global edge dispatch",
    icon: TreeStructure,
  },
  {
    value: "AES-256",
    label: "Zero-Knowledge Encryption",
    sub: "Client-side encrypted vaults",
    icon: ShieldCheck,
  },
  {
    value: "285+",
    label: "Open Source Repos",
    sub: "Founder & studio portfolio",
    icon: GitFork,
  },
];

export function Metrics() {
  return (
    <section className="relative border-y border-neutral-200 bg-neutral-50/70 py-20 px-6 text-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                    {stat.value}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
                    <Icon size={20} weight="duotone" />
                  </div>
                </div>
                <p className="mt-3 text-sm font-bold text-neutral-900">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500 font-mono">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
