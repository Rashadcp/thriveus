"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import CircularGallery with SSR disabled (WebGL requires window & canvas)
const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3 text-white/40">
      <div className="h-8 w-8 rounded-full border-2 border-[#1782A8] border-t-transparent animate-spin" />
      <span className="font-display text-xs tracking-wider uppercase">Loading 3D Gallery...</span>
    </div>
  ),
});

const CIRCULAR_SERVICES = [
  {
    image: "/images/arena-games-wide.jpg",
    text: "Curated Experiences",
  },
  {
    image: "/images/conference-summit.jpg",
    text: "Conferences & Productions",
  },
  {
    image: "/images/gala-stage.jpg",
    text: "Celebrations & Cultural",
  },
  {
    image: "/images/desert-golden-hour.jpg",
    text: "Experiential Team Building",
  },
  {
    image: "/images/training-session.jpg",
    text: "Capability & Leadership",
  },
  {
    image: "/images/gamified-learning.jpg",
    text: "Gamified Learning",
  },
  {
    image: "/images/alain-retreat.jpg",
    text: "Leadership Retreats",
  },
];

const SERVICE_PILLS = [
  { id: "curated", num: "01", name: "Curated Formats" },
  { id: "conferences", num: "02", name: "Summits & Productions" },
  { id: "galas", num: "03", name: "Galas & Culture" },
  { id: "teambuilding", num: "04", name: "Team Building" },
  { id: "leadership", num: "05", name: "Capability Building" },
  { id: "gamified", num: "06", name: "Gamified Learning" },
  { id: "retreats", num: "07", name: "Executive Retreats" },
];

export default function Services3DCarousel() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0B0A0D] text-white pt-16 sm:pt-24 pb-14 sm:pb-20 border-t border-[#242057]/50 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#242057]/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-[#1782A8]/10 blur-[100px] rounded-full" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-6 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b border-[#242057]/50">
          <div>
            <span className="font-display text-xs uppercase tracking-widest text-[#1782A8] font-semibold block">
              What We Deliver · Experiential Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-1">
              Our Services
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/70 max-w-md font-light leading-relaxed">
            Seven core experiential disciplines, delivered end-to-end across Dubai, Abu Dhabi, and the wider UAE.
          </p>
        </div>
      </div>

      {/* 3D Circular Gallery Container with proportional card scale */}
      <div className="relative z-10 w-full h-[420px] sm:h-[480px] md:h-[540px] my-1 sm:my-2">
        <CircularGallery
          bend={2.5}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollEase={0.02}
          scrollSpeed={2}
          cardScale={0.6}
          fontUrl="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
          font="bold 20px Sora"
          items={CIRCULAR_SERVICES}
        />
      </div>

      {/* Interactive Guidance & Service Quick Nav */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-4 sm:mt-6">
        {/* Drag Hint */}
        <div className="flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs text-white/50 mb-6">
          <span className="text-[#1782A8]">↔</span>
          <span className="tracking-wide">
            Drag horizontally, use scroll wheel, or press <kbd className="px-1.5 py-0.5 bg-[#242057]/60 border border-[#242057] rounded text-[10px] text-white/80">←</kbd> <kbd className="px-1.5 py-0.5 bg-[#242057]/60 border border-[#242057] rounded text-[10px] text-white/80">→</kbd> to rotate the 3D gallery
          </span>
        </div>

        {/* Quick Service Category Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-8">
          {SERVICE_PILLS.map((pill) => (
            <Link
              key={pill.id}
              href="/services"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#242057]/30 border border-[#242057] hover:border-[#1782A8] hover:bg-[#242057]/60 text-white/85 hover:text-white transition-all text-[11px] sm:text-xs font-display group"
            >
              <span className="font-mono text-[10px] text-[#1782A8] font-bold group-hover:text-white transition-colors">
                {pill.num}
              </span>
              <span>{pill.name}</span>
            </Link>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#0B0A0D] font-display text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 hover:bg-[#1782A8] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(23,130,168,0.4)]"
          >
            <span>Explore All 7 Services</span>
            <span>→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#242057] hover:border-[#1782A8] text-white/90 hover:text-white font-display text-xs sm:text-sm font-medium tracking-wider uppercase px-6 sm:px-8 py-3.5 transition-all duration-300 bg-[#0B0A0D]/50 backdrop-blur-sm"
          >
            <span>Discuss a Brief</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
