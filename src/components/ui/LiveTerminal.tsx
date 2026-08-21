"use client";

import React, { useState } from "react";

export function LiveTerminal() {
  const [activeTab, setActiveTab] = useState<"python" | "api">("python");

  const pythonSnippet = `# DataFit: Automated Feature Engineering
from datafit import DataOptimizer, AutoPipeline

optimizer = DataOptimizer(strategy="adaptive_scaling")
clean_features = optimizer.fit_transform(raw_dataset)

# Output: 99.4% variance preserved, zero NaNs
print(f"Engineered {clean_features.shape[1]} optimal tensors.")`;

  const apiSnippet = `// MenteE AI Workflow Engine
POST /v2/orchestrate
Host: api.mentee.tech
Authorization: Bearer mentee_live_sec_994

{
  "task": "candidate_deep_match",
  "model": "mentee-recru-v3",
  "vector_similarity_threshold": 0.94,
  "status": "COMPLETED (142ms)"
}`;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#09090b] font-mono text-xs shadow-xl text-neutral-200">
      <div className="flex items-center justify-between border-b border-neutral-800 bg-[#121215] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-neutral-400">terminal@mentee:~</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("python")}
            className={`rounded px-2.5 py-0.5 text-[11px] transition-colors ${
              activeTab === "python"
                ? "bg-white/20 text-white font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            datafit.py
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`rounded px-2.5 py-0.5 text-[11px] transition-colors ${
              activeTab === "api"
                ? "bg-white/20 text-white font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            api_request.json
          </button>
        </div>
      </div>
      <div className="p-4">
        <pre className="overflow-x-auto leading-relaxed text-neutral-200">
          <code>{activeTab === "python" ? pythonSnippet : apiSnippet}</code>
        </pre>
        <div className="mt-3 flex items-center gap-2 text-emerald-400 text-[11px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span>Execution latency: 142ms · Status: OK 200</span>
        </div>
      </div>
    </div>
  );
}
