"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 40, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 35, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.3, 0.7, 1]);

  return (
    <motion.span
      className={cn("inline-block text-neutral-950 font-black tracking-tight", isSpace && "w-3 sm:w-5")}
      style={{
        x,
        rotateX,
        opacity,
      }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 45, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 35, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.4, 0.8, 1]);

  return (
    <motion.div
      className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-md"
      style={{
        x,
        scale,
        y,
        opacity,
        transformOrigin: "center",
      }}
    >
      <span className="font-mono text-xs sm:text-sm font-bold text-neutral-900 whitespace-nowrap">
        {char}
      </span>
    </motion.div>
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 60, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 25, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.div
      className="inline-flex items-center justify-center rounded-2xl border border-neutral-950 bg-neutral-950 px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl"
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    >
      <span className="font-mono text-xs sm:text-sm font-bold text-white whitespace-nowrap">
        {char}
      </span>
    </motion.div>
  );
};

export function KineticScrollSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"],
  });

  const text = "AUTONOMOUS AT SCALE";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const techBadges = [
    "FastAPI",
    "Python 3.12",
    "PyTorch",
    "AES-256",
    "Docker",
    "PostgreSQL",
    "pgvector",
    "Next.js",
  ];
  const badgeCenterIndex = Math.floor(techBadges.length / 2);

  const ecosystemPillars = [
    "RecruAI",
    "DocsBox",
    "DataFit",
    "CamWatch",
    "MenteE Automate",
  ];
  const pillarCenterIndex = Math.floor(ecosystemPillars.length / 2);

  return (
    <section className="relative w-full bg-white overflow-hidden border-t border-neutral-200">
      {/* Stage 1: Kinetic 3D Letter Convergence */}
      <div
        ref={targetRef}
        className="relative box-border flex min-h-[120vh] items-center justify-center overflow-hidden bg-neutral-50/70 p-6"
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
          <span className="relative font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Scroll to Converge Architecture
          </span>
        </div>

        <div
          className="w-full max-w-5xl text-center text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-neutral-950"
          style={{ perspective: "600px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Stage 2: Tech Stack Convergence */}
      <div
        ref={targetRef2}
        className="relative -mt-[30vh] box-border flex min-h-[130vh] flex-col items-center justify-center gap-8 overflow-hidden bg-white p-6 border-t border-neutral-200"
      >
        <div className="flex items-center justify-center gap-3 text-lg sm:text-2xl font-bold tracking-tight text-neutral-950 text-center">
          <Bracket className="h-8 sm:h-10 text-neutral-900" />
          <span>Integrate with your enterprise tech stack</span>
          <Bracket className="h-8 sm:h-10 scale-x-[-1] text-neutral-900" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl">
          {techBadges.map((char, index) => (
            <CharacterV2
              key={char}
              char={char}
              index={index}
              centerIndex={badgeCenterIndex}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* Stage 3: Ecosystem Platforms 3D Scale & Rotation */}
      <div
        ref={targetRef3}
        className="relative -mt-[25vh] box-border flex min-h-[130vh] flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-50/70 p-6 border-t border-neutral-200"
      >
        <div className="flex items-center justify-center gap-3 text-lg sm:text-2xl font-bold tracking-tight text-neutral-950 text-center">
          <Bracket className="h-8 sm:h-10 text-neutral-900" />
          <span>Unified intelligent platform ecosystem</span>
          <Bracket className="h-8 sm:h-10 scale-x-[-1] text-neutral-900" />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 max-w-4xl"
          style={{ perspective: "600px" }}
        >
          {ecosystemPillars.map((char, index) => (
            <CharacterV3
              key={char}
              char={char}
              index={index}
              centerIndex={pillarCenterIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};
