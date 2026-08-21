"use client";

import React, { useState } from "react";

export function LiveTerminal() {
  const [activeTab, setActiveTab] = useState<"python" | "api">("python");

  const pythonSnippet = `# DataFit: Automated Feature Engineering
from datafit import DataOptimizer, AutoPipeline

optimizer = DataOptimizer(strategy="adaptive_scaling")
clean_features = optimizer.fit_transform(raw_dataset)
print(f"Engineered {clean_features.shape[1]} optimal tensors.")`;

  const apiSnippet = `// MenteE AI Workflow Engine
POST /v2/orchestrate HTTP/1.1
Host: api.mentee.tech
Authorization: Bearer mentee_live_sec_994

{ "task": "candidate_deep_match", "status": "COMPLETED (142ms)" }`;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#111113] font-mono shadow-md text-neutral-200">
      <div className="flex h-9 items-center justify-between border-b border-neutral-800 bg-[#18181b] px-3.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-neutral-600" />
          <div className="h-2 w-2 rounded-full bg-neutral-600" />
          <div className="h-2 w-2 rounded-full bg-neutral-600" />
          <span className="ml-2 text-[10px] text-neutral-400 font-medium">terminal@mentee:~</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("python")}
            className={`rounded px-2 py-0.5 text-[10px] transition-colors ${
              activeTab === "python"
                ? "bg-neutral-800 text-white font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            datafit.py
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`rounded px-2 py-0.5 text-[10px] transition-colors ${
              activeTab === "api"
                ? "bg-neutral-800 text-white font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            api_request.json
          </button>
        </div>
      </div>
      <div className="p-3.5">
        <pre className="overflow-x-auto whitespace-pre font-mono text-[11px] leading-[16px] text-neutral-200">
          <code>{activeTab === "python" ? pythonSnippet : apiSnippet}</code>
        </pre>
        <div className="mt-2.5 flex items-center gap-2 text-emerald-400 text-[11px] font-mono font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Execution latency: 142ms · Status: OK 200</span>
        </div>
      </div>
    </div>
  );
}
