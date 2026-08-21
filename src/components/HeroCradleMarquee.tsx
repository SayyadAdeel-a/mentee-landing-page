"use client";

import React, { useRef, useEffect, useState, useMemo, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroCradleMarqueeProps {
  text?: string;
  color?: string;
  baseVelocity?: number;
}

export function HeroCradleMarquee({
  text = "AUTONOMOUS AI // ZERO-KNOWLEDGE ENCLAVES // DISTRIBUTED AGENTS // HIGH-THROUGHPUT RUNTIMES // PYTORCH & FASTAPI // SOC-2 READY //",
  color = "#ffffff",
  baseVelocity = 18,
}: HeroCradleMarqueeProps) {
  const prefersReduced = useReducedMotion();
  const measureRef = useRef<SVGTextElement>(null);
  const tspansRef = useRef<SVGTSpanElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const pathId = "hero-top-arc-track";
  // Smooth gentle arc spanning horizontally across the hero
  const pathD = "M 15,25 Q 500,85 985,25";

  const isDragging = useRef(false);
  const dragVelocity = useRef(0);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const gapPx = 50;
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

  const calculatedRepeats = spacing > 0 ? Math.ceil((pathLength || 1600) / spacing) + 6 : 0;
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
          moveBy = -(baseVelocity * 3) * (delta / 1000) + dragVelocity.current;
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
    dragVelocity.current = deltaX * 0.4;
    lastPointerPosition.current = currentPosition;
  };

  const handlePointerUp = (e: ReactPointerEvent<SVGElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDragging.current = false;
  };

  return (
    <div
      className="relative z-30 pointer-events-auto w-full max-w-4xl lg:max-w-5xl mx-auto select-none overflow-visible py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
      style={{
        visibility: ready ? "visible" : "hidden",
        height: "90px",
      }}
    >
      <svg
        viewBox="0 0 1000 110"
        className="w-full h-full block cursor-grab active:cursor-grabbing overflow-visible pointer-events-auto"
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
            fontSize: "11px",
            fontFamily: "var(--font-mono), monospace",
            fontWeight: 800,
            letterSpacing: "2px",
          }}
        >
          {processedText}
        </text>

        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" />
          
          <linearGradient id="arcFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor="white" stopOpacity="1" />
            <stop offset="95%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="arcMask">
            <rect width="100%" height="100%" fill="url(#arcFade)" />
          </mask>
        </defs>

        {/* Charcoal #212121 Ribbon Track */}
        <path
          d={pathD}
          fill="none"
          stroke="#212121"
          strokeWidth="34"
          strokeLinecap="round"
          className="drop-shadow-md"
          mask="url(#arcMask)"
        />

        {/* Architectural Dashed Border */}
        <path
          d={pathD}
          fill="none"
          stroke="#404040"
          strokeWidth="36"
          strokeDasharray="4 4"
          strokeLinecap="round"
          className="opacity-70"
          mask="url(#arcMask)"
        />

        {/* Streaming Text */}
        {ready && (
          <text
            fill={color}
            fontSize="10px"
            fontFamily="var(--font-mono), monospace"
            fontWeight={800}
            letterSpacing="2px"
            xmlSpace="preserve"
            dy="3.5"
            mask="url(#arcMask)"
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
