"use client";

import React from "react";

const ROW_1 = [
  "Global Energy Multinationals",
  "Leading EPC & Engineering Firms",
  "Regional Technology Scale-ups",
  "Logistics & Supply Chain Leaders",
  "Water & Environmental Infrastructure",
  "Automotive Conglomerates",
];

const ROW_2 = [
  "Industrial Manufacturing Groups",
  "Government & Semi-Gov Entities",
  "FMCG & Consumer Brands",
  "Financial Institutions & Fintechs",
  "Healthcare & Life Sciences Leaders",
  "Real Estate & Development Giants",
];

// Doubled to ensure seamless 0% -> -50% infinite marquee loop
const SLIDE_ROW_1 = [...ROW_1, ...ROW_1];
const SLIDE_ROW_2 = [...ROW_2, ...ROW_2];

export default function TrustedPartnerships() {
  return (
    <section className="relative w-full bg-[#1C164B] py-20 sm:py-32 overflow-hidden text-white border-t border-[#8A5FA8]/30">
      {/* Header Content constrained to max-w-7xl */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-12">
        <div className="max-w-3xl space-y-4 sm:space-y-5 pb-10 sm:pb-14">
          <span className="font-light text-xs uppercase tracking-widest text-[#98DAF6] font-semibold block">
            TRUSTED PARTNERSHIPS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Enterprise Teams Return.
          </h2>
          <p className="text-sm sm:text-base text-[#EAE7DC]/80 leading-relaxed font-light">
            Enterprise teams across energy, engineering, logistics, water technologies and industrial automation return to Thriveus year after year. Most of our work comes from repeat clients and referrals.
          </p>
        </div>
      </div>

      {/* Full-bleed Dual Continuous Sliding Marquee with Smooth Edge Vignettes */}
      <div className="relative w-full overflow-hidden pt-4 sm:pt-6">
        {/* Left and Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-[#1C164B] via-[#1C164B]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-[#1C164B] via-[#1C164B]/80 to-transparent z-20" />

        <div className="space-y-4 sm:space-y-5">
          {/* Row 1: Sliding Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
              {SLIDE_ROW_1.map((sector, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 flex items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#1C164B]/60 border border-[#8A5FA8]/30 text-center transition-all duration-300 hover:border-[#98DAF6] hover:bg-[#8A5FA8]/20 hover:shadow-[0_0_25px_rgba(152,218,246,0.25)] min-h-[85px] sm:min-h-[105px] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#98DAF6] group-hover:scale-125 group-hover:bg-white transition-all duration-300 flex-shrink-0" />
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
                  className="w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 flex items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#1C164B]/60 border border-[#8A5FA8]/30 text-center transition-all duration-300 hover:border-[#98DAF6] hover:bg-[#8A5FA8]/20 hover:shadow-[0_0_25px_rgba(152,218,246,0.25)] min-h-[85px] sm:min-h-[105px] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8A5FA8] group-hover:scale-125 group-hover:bg-[#98DAF6] transition-all duration-300 flex-shrink-0" />
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
