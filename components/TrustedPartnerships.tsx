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

export default function TrustedPartnerships() {
  return (
    <section className="relative w-full bg-[#12103D] py-20 sm:py-32 px-5 sm:px-12 overflow-hidden text-white border-t border-[#28245F]/50">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
            TRUSTED PARTNERSHIPS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Enterprise Teams Return.
          </h2>
          <p className="text-sm sm:text-base text-[#E3E6EF]/80 leading-relaxed font-light">
            Enterprise teams across energy, engineering, logistics, water technologies and industrial automation return to Thriveus year after year. Most of our work comes from repeat clients and referrals.
          </p>
        </div>

        {/* Modular Client Trust Strip (Built so plain text sector descriptors can later be swapped for client logos without changing layout) */}
        <div className="pt-8 sm:pt-10 border-t border-[#28245F]/60">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SECTOR_DESCRIPTORS.map((sector, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#28245F]/30 border border-[#28245F]/60 text-center transition-all duration-300 hover:border-[#8EDAF2]/50 hover:bg-[#28245F]/50 min-h-[90px] sm:min-h-[110px]"
              >
                <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-[#E3E6EF] group-hover:text-white">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
