"use client";

import React from "react";
import MouseEffects from "@/components/originkit/ui/clickeffects";

export function ClickEffectsWrapper() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" aria-hidden="true">
      <MouseEffects
        color="#09090b"
        interactionMode="rings"
        duration={0.4}
        strokeWidth={1.5}
        effectSize={70}
        showLabel={false}
      />
    </div>
  );
}
