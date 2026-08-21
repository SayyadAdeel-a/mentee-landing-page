"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkle, ArrowRight } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PLATFORM_CARDS = [
  {
    title: "RecruAI",
    subtitle: "Talent Intelligence & CV Parser",
    tag: "Multi-Agent AI",
    desc: "Autonomous semantic resume parsing and candidate-job matching pipelines with sub-second scoring.",
    metrics: "98% Match Accuracy · FastAPI",
    accent: "border-blue-200 bg-blue-50/50",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "DocsBox",
    subtitle: "Zero-Knowledge Storage Vault",
    tag: "Cryptography",
    desc: "Client-side AES-256 encrypted document vault ensuring zero-leakage for sensitive corporate records.",
    metrics: "AES-256-GCM · Hardware Enclave",
    accent: "border-emerald-200 bg-emerald-50/50",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "DataFit",
    subtitle: "ML Feature Engineering Library",
    tag: "PyPI Package",
    desc: "Published open-source Python library for automated tabular cleaning, encoding, and tensor scaling.",
    metrics: "pip install datafit · Python 3.12",
    accent: "border-purple-200 bg-purple-50/50",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    title: "Vision Systems",
    subtitle: "Real-Time Object Detection",
    tag: "Computer Vision",
    desc: "Low-latency perimeter monitoring and telemetry inference running on YOLOv8 and TensorRT.",
    metrics: "60 FPS Stream · OpenCV",
    accent: "border-amber-200 bg-amber-50/50",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    title: "MenteE Automate",
    subtitle: "Self-Healing Workflow Engine",
    tag: "Orchestration",
    desc: "Multi-step autonomous workflow execution with automatic retries, circuit breaking, and live audit trails.",
    metrics: "99.99% Availability · Async Workers",
    accent: "border-neutral-200 bg-neutral-50/60",
    badgeColor: "bg-neutral-900 text-white",
  },
  {
    title: "MenteE Insight",
    subtitle: "Real-Time Vector Intelligence",
    tag: "Vector Search",
    desc: "Transforming raw enterprise event streams and documents into semantic vector indexes for instant RAG.",
    metrics: "<180ms Latency · pgvector",
    accent: "border-teal-200 bg-teal-50/50",
    badgeColor: "bg-teal-100 text-teal-800",
  },
];

export function CoverflowCards() {
  const css = `
  .MenteE_Coverflow {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 55px !important;
  }
  
  .MenteE_Coverflow .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 380px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
    opacity: 0.25;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    width: 20px !important;
    border-radius: 4px !important;
  }
  `;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-50/60 py-24 border-t border-neutral-200 text-neutral-950">
      <style>{css}</style>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 mb-4 shadow-xs">
            <Sparkle size={13} className="text-neutral-900" />
            <span>INTERACTIVE PLATFORM CAROUSEL</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            Explore the MenteE Suite in 3D
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            Drag or click through our deployed platforms, open-source libraries, and security vaults.
          </p>
        </div>

        {/* 3D Coverflow Swiper */}
        <div className="relative mx-auto max-w-5xl">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="MenteE_Coverflow"
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {PLATFORM_CARDS.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={cn(
                  "flex h-full w-full flex-col justify-between rounded-3xl border bg-white p-7 shadow-xl transition-all duration-300",
                  card.accent
                )}>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase",
                        card.badgeColor
                      )}>
                        {card.tag}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-400">0{index + 1}</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-neutral-950">
                      {card.title}
                    </h3>
                    <p className="text-xs font-bold text-neutral-500 font-mono mt-0.5">
                      {card.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-700 font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="border-t border-neutral-200/80 pt-4">
                    <p className="text-[11px] font-mono font-semibold text-neutral-500 mb-3">
                      {card.metrics}
                    </p>
                    <Link
                      href="/products"
                      className="flex items-center justify-between font-bold text-xs text-neutral-950 hover:text-neutral-700 transition-colors"
                    >
                      <span>Platform Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button
            type="button"
            aria-label="Previous Slide"
            className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-900 shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next Slide"
            className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-900 shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
