"use client";

import React from "react";

const SECTOR_DESCRIPTORS = [
  "Global Engineering Consultancy",
  "Subsea Energy Services",
  "Global Logistics",
  "Water & Energy Technologies",
  "Industrial Automation",
  "Process Instrumentation",
  "Facilities Management",
];

// Row 1 order
const ROW_1 = [
  SECTOR_DESCRIPTORS[0], // Global Engineering Consultancy
  SECTOR_DESCRIPTORS[1], // Subsea Energy Services
  SECTOR_DESCRIPTORS[2], // Global Logistics
  SECTOR_DESCRIPTORS[3], // Water & Energy Technologies
  SECTOR_DESCRIPTORS[4], // Industrial Automation
  SECTOR_DESCRIPTORS[5], // Process Instrumentation
  SECTOR_DESCRIPTORS[6], // Facilities Management
];

// Row 2 order (staggered for visual balance and dynamic contrast)
const ROW_2 = [
  SECTOR_DESCRIPTORS[4], // Industrial Automation
  SECTOR_DESCRIPTORS[5], // Process Instrumentation
  SECTOR_DESCRIPTORS[6], // Facilities Management
  SECTOR_DESCRIPTORS[0], // Global Engineering Consultancy
  SECTOR_DESCRIPTORS[1], // Subsea Energy Services
  SECTOR_DESCRIPTORS[2], // Global Logistics
  SECTOR_DESCRIPTORS[3], // Water & Energy Technologies
];

// Doubled to ensure seamless 0% -> -50% infinite marquee loop
const SLIDE_ROW_1 = [...ROW_1, ...ROW_1];
const SLIDE_ROW_2 = [...ROW_2, ...ROW_2];

export default function TrustedPartnerships() {
  return (
    <section className="relative w-full bg-[#0B0A0D] py-20 sm:py-32 overflow-hidden text-white border-t border-[#242057]/50">
      {/* Header Content constrained to max-w-7xl */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-12">
        <div className="max-w-3xl space-y-4 sm:space-y-5 pb-10 sm:pb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#1782A8] font-semibold block">
            TRUSTED PARTNERSHIPS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Enterprise Teams Return.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Enterprise teams across energy, engineering, logistics, water technologies and industrial automation return to Thriveus year after year. Most of our work comes from repeat clients and referrals.
          </p>
        </div>
      </div>

      {/* Full-bleed Dual Continuous Sliding Marquee with Smooth Edge Vignettes */}
      <div className="relative w-full overflow-hidden pt-4 sm:pt-6">
        {/* Left and Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-[#0B0A0D] via-[#0B0A0D]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-[#0B0A0D] via-[#0B0A0D]/80 to-transparent z-20" />

        <div className="space-y-4 sm:space-y-5">
          {/* Row 1: Sliding Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
              {SLIDE_ROW_1.map((sector, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 flex items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#242057]/25 border border-[#242057]/60 text-center transition-all duration-300 hover:border-[#1782A8] hover:bg-[#242057]/45 hover:shadow-[0_0_25px_rgba(23,130,168,0.25)] min-h-[85px] sm:min-h-[105px] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#1782A8] group-hover:scale-125 group-hover:bg-white transition-all duration-300 flex-shrink-0" />
                    <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
                      {sector}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right (Reverse) */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1">
              {SLIDE_ROW_2.map((sector, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 flex items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#242057]/25 border border-[#242057]/60 text-center transition-all duration-300 hover:border-[#1782A8] hover:bg-[#242057]/45 hover:shadow-[0_0_25px_rgba(23,130,168,0.25)] min-h-[85px] sm:min-h-[105px] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#75559C] group-hover:scale-125 group-hover:bg-[#1782A8] transition-all duration-300 flex-shrink-0" />
                    <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
                      {sector}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
