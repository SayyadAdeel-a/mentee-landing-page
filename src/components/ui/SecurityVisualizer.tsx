"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Key } from "@phosphor-icons/react";

export function SecurityVisualizer() {
  const [isEncrypted, setIsEncrypted] = useState(true);

  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} weight="fill" className="text-emerald-600" />
          <span className="text-xs font-bold text-neutral-950">DocsBox Cryptographic Vault</span>
        </div>
        <button
          onClick={() => setIsEncrypted(!isEncrypted)}
          className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100"
        >
          <Key size={13} />
          <span>{isEncrypted ? "Simulate Decrypt" : "Encrypt Stream"}</span>
        </button>
      </div>

      <div className="mt-4 space-y-2 font-mono text-xs">
        <div className="rounded-lg bg-white p-3 border border-neutral-200 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
            <span>Payload State</span>
            <span className={isEncrypted ? "text-emerald-600 font-bold" : "text-amber-600 font-bold"}>
              {isEncrypted ? "🔒 AES-256-GCM (Zero-Knowledge)" : "🔓 Plaintext View"}
            </span>
          </div>
          <motion.p
            key={isEncrypted ? "enc" : "dec"}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="break-all text-[11px] leading-relaxed text-neutral-800"
          >
            {isEncrypted
              ? "0x8f3c7b2a9e1d4f6c88b0a13e77f2c819aa34bc98de71120f5c8893..."
              : "Financial_Report_Q3_Confidential.pdf (Checksum: 8a7f1e)"}
          </motion.p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <span>Enclave: Hardware-Protected</span>
        <span className="text-emerald-700 font-semibold">SOC-2 Type II Verified</span>
      </div>
    </div>
  );
}
