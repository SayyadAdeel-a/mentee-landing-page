"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
}

export function ShinyText({
  text,
  className = "",
  shimmerWidth = 100,
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-[length:250%_100%] bg-clip-text text-transparent font-semibold transition-all [background-position:0_0] ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, #18181b 0%, #71717a 50%, #18181b 100%)`,
        backgroundSize: `${shimmerWidth * 2.5}% 100%`,
        animation: "shimmer-light 3.5s infinite ease-in-out",
      }}
    >
      {text}
    </span>
  );
}
