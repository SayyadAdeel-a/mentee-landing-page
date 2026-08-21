"use client";

import React, { useRef, useEffect, useState, useMemo, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroCurvedMarqueeProps {
  text?: string;
  color?: string;
  baseVelocity?: number;
}

export function HeroCurvedMarquee({
  text = "MENTEE AI // AUTONOMOUS WORKFLOW ORCHESTRATION // ZERO-KNOWLEDGE CRYPTOGRAPHIC VAULTS // PYTORCH & FASTAPI CORE // HIGH-THROUGHPUT GLOBAL EDGE // DISTRIBUTED AGENT MESH // SOC-2 COMPLIANT //",
  color = "#ffffff",
  baseVelocity = 14,
}: HeroCurvedMarqueeProps) {
  const prefersReduced = useReducedMotion();
  const measureRef = useRef<SVGTextElement>(null);
  const tspansRef = useRef<SVGTSpanElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Grand Full-Bleed U-Curve Path: starts high on left edge (x: -100, y: 160), swoops deep across bottom (x: 960, y: 920), rises high on right edge (x: 2020, y: 160)
  const pathId = "hero-full-curve-track";
  const pathD = "M -100,160 Q 960,940 2020,160";

  const isDragging = useRef(false);
  const dragVelocity = useRef(0);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const gapPx = 90;
  const processedText = useMemo(() => text.trim(), [text]);
  const spacing = textWidth + gapPx;

  useEffect(() => {
    if (measureRef.current) {
      setTextWidth(measureRef.current.getComputedTextLength());
    }
  }, [text]);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const calculatedRepeats = spacing > 0 ? Math.ceil((pathLength || 3200) / spacing) + 6 : 0;
  const ready = (pathLength > 0 || textWidth > 0) && spacing > 0;

  useEffect(() => {
    if (!ready) return;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      const spans = tspansRef.current;
      const totalCount = spans.length;

      if (totalCount > 0) {
        const totalLoopWidth = totalCount * spacing;
        let moveBy = 0;

        if (prefersReduced || isHovered) {
          moveBy = dragVelocity.current;
          dragVelocity.current *= 0.92;
        } else if (isDragging.current) {
          moveBy = dragVelocity.current;
          dragVelocity.current *= 0.92;
        } else {
          moveBy = -(baseVelocity * 4) * (delta / 1000) + dragVelocity.current;
          if (Math.abs(dragVelocity.current) > 0.01) {
            dragVelocity.current *= 0.95;
          } else {
            dragVelocity.current = 0;
          }
        }

        for (let i = 0; i < totalCount; i++) {
          const tspan = spans[i];
          if (!tspan) continue;

          let x = parseFloat(tspan.getAttribute("x") || (i * spacing).toString());
          x += moveBy;

          while (x < -spacing) {
            x += totalLoopWidth;
          }
          while (x > totalLoopWidth - spacing) {
            x -= totalLoopWidth;
          }

          tspan.setAttribute("x", x.toString());
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, spacing, baseVelocity, prefersReduced, isHovered]);

  const handlePointerDown = (e: ReactPointerEvent<SVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    lastPointerPosition.current = { x: e.clientX, y: e.clientY };
    dragVelocity.current = 0;
  };

  const handlePointerMove = (e: ReactPointerEvent<SVGElement>) => {
    if (!isDragging.current) return;
    const currentPosition = { x: e.clientX, y: e.clientY };
    const deltaX = currentPosition.x - lastPointerPosition.current.x;
    dragVelocity.current = deltaX * 0.55;
    lastPointerPosition.current = currentPosition;
  };

  const handlePointerUp = (e: ReactPointerEvent<SVGElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDragging.current = false;
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
      style={{
        visibility: ready ? "visible" : "hidden",
      }}
    >
      <svg
        viewBox="0 0 1920 1000"
        preserveAspectRatio="none"
        className="pointer-events-auto h-full w-full cursor-grab active:cursor-grabbing overflow-visible"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Hidden measurement text */}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
            fontSize: "14px",
            fontFamily: "var(--font-mono), monospace",
            fontWeight: 800,
            letterSpacing: "2.5px",
          }}
        >
          {processedText}
        </text>

        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" />
          
          {/* Edge gradient mask for natural fade in and out at viewport boundaries */}
          <linearGradient id="grandHeroFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor="white" stopOpacity="1" />
            <stop offset="90%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="grandHeroMask">
            <rect width="100%" height="100%" fill="url(#grandHeroFade)" />
          </mask>
        </defs>

        {/* Charcoal #212121 Large Ribbon Track */}
        <path
          d={pathD}
          fill="none"
          stroke="#212121"
          strokeWidth="60"
          strokeLinecap="round"
          className="drop-shadow-2xl"
          mask="url(#grandHeroMask)"
        />

        {/* Subtle Architectural Dashed Border */}
        <path
          d={pathD}
          fill="none"
          stroke="#383838"
          strokeWidth="62"
          strokeDasharray="5 5"
          strokeLinecap="round"
          className="opacity-80"
          mask="url(#grandHeroMask)"
        />

        {/* Flowing Text Stream */}
        {ready && (
          <text
            fill={color}
            fontSize="13.5px"
            fontFamily="var(--font-mono), monospace"
            fontWeight={800}
            letterSpacing="2.5px"
            xmlSpace="preserve"
            dy="5"
            mask="url(#grandHeroMask)"
          >
            <textPath href={`#${pathId}`} xmlSpace="preserve">
              {Array.from({ length: calculatedRepeats }).map((_, i) => (
                <tspan
                  key={i}
                  x={i * spacing}
                  ref={(el) => {
                    if (el) tspansRef.current[i] = el;
                  }}
                >
                  {processedText}
                </tspan>
              ))}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}
