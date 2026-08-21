"use client";

import React, { useEffect } from "react";
import MouseEffects from "@/components/originkit/ui/clickeffects";
import gsap from "gsap";

export function ClickEffectsWrapper() {
  useEffect(() => {
    // Global button shimmer light sweep on mouseenter
    function handleMouseEnter(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest(
        "button, a.rounded-full, a[role='button'], .btn"
      ) as HTMLElement | null;

      if (!target) return;

      // Ensure button contains relative positioning and hidden overflow for the sweep
      const computed = window.getComputedStyle(target);
      if (computed.position === "static") {
        target.style.position = "relative";
      }
      if (computed.overflow !== "hidden") {
        target.style.overflow = "hidden";
      }

      // Check if button is dark or light to optimize shimmer brightness
      const isLightButton =
        computed.backgroundColor.includes("255, 255, 255") ||
        target.classList.contains("bg-white");

      const overlay = document.createElement("span");
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 60%;
        height: 100%;
        pointer-events: none;
        transform: skewX(-20deg);
        z-index: 10;
        background: linear-gradient(90deg, transparent, ${
          isLightButton ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.35)"
        }, transparent);
      `;

      target.appendChild(overlay);

      gsap.to(overlay, {
        left: "200%",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          overlay.remove();
        },
      });
    }

    document.addEventListener("mouseenter", handleMouseEnter, true);
    return () => document.removeEventListener("mouseenter", handleMouseEnter, true);
  }, []);

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
