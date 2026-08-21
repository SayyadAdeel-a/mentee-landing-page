"use client";

import React, { useRef, useEffect, useState, useMemo, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroCurvedMarqueeProps {
  text?: string;
  color?: string;
  baseVelocity?: number;
}

export function HeroCurvedMarquee({
  text = "MENTEE AI · AUTONOMOUS WORKFLOWS · ZERO-KNOWLEDGE ENCLAVES · PYTORCH & FASTAPI · HIGH-THROUGHPUT EDGE · DISTRIBUTED AGENT MESH · SOC-2 READY ·",
  color = "#ffffff",
  baseVelocity = 18,
}: HeroCurvedMarqueeProps) {
  const prefersReduced = useReducedMotion();
  const measureRef = useRef<SVGTextElement>(null);
  const tspansRef = useRef<SVGTSpanElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // U-curve path: High at ends (80), dipping in the center (270)
  const pathId = "hero-curve-track";
  const pathD = "M-200,80 Q720,270 1640,80";

  const isDragging = useRef(false);
  const dragVelocity = useRef(0);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const gapPx = 80;
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

  const calculatedRepeats = spacing > 0 ? Math.ceil((pathLength || 2200) / spacing) + 6 : 0;
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
          moveBy = -(baseVelocity * 3.5) * (delta / 1000) + dragVelocity.current;
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
    dragVelocity.current = deltaX * 0.45;
    lastPointerPosition.current = currentPosition;
  };

  const handlePointerUp = (e: ReactPointerEvent<SVGElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDragging.current = false;
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
      style={{
        visibility: ready ? "visible" : "hidden",
        height: "220px",
        marginTop: "-40px",
      }}
    >
      <svg
        viewBox="0 0 1440 300"
        className="w-full h-full block overflow-visible"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Hidden element to measure text length */}
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
            letterSpacing: "2px",
          }}
        >
          {processedText}
        </text>

        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" />
          {/* Subtle gradient glow mask */}
          <linearGradient id="heroMarqueeFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="15%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="heroMarqueeMask">
            <rect width="100%" height="100%" fill="url(#heroMarqueeFade)" />
          </mask>
        </defs>

        {/* Charcoal #212121 Curved Ribbon Banner Underlay */}
        <path
          d={pathD}
          fill="none"
          stroke="#212121"
          strokeWidth="46"
          strokeLinecap="round"
          className="drop-shadow-lg"
          mask="url(#heroMarqueeMask)"
        />

        {/* Dashed Guideline Borders for Clean Architectural Aesthetics */}
        <path
          d={pathD}
          fill="none"
          stroke="#383838"
          strokeWidth="48"
          strokeDasharray="4 4"
          strokeLinecap="round"
          className="opacity-70"
          mask="url(#heroMarqueeMask)"
        />

        {/* Flowing Text along the Curved Path in crisp white / light gray */}
        {ready && (
          <text
            fill={color}
            fontSize="12.5px"
            fontFamily="var(--font-mono), monospace"
            fontWeight={800}
            letterSpacing="2px"
            xmlSpace="preserve"
            dy="4.5"
            mask="url(#heroMarqueeMask)"
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
