"use client";

import React from "react";
import Image from "next/image";

const CAPABILITY_TICKERS = [
  "Employee Engagement & Team Building",
  "Venue-Based Immersive Experiences",
  "Corporate Training & Leadership Development",
  "Full-Scope Corporate Events & Conferences",
  "Offsite Retreats & Incentive Programs",
  "Curated Corporate & Cultural Events",
  "Gamified Learning & Training Programs",
  "High-End Events Video Production",
  "CSR Events & Programs",
  "Employee Engagement & Team Building",
  "Venue-Based Immersive Experiences",
  "Corporate Training & Leadership Development",
];

export default function BeatsBeyond() {
  return (
    <section className="relative w-full bg-[#F7F9FC] py-16 sm:py-28 overflow-hidden text-[#17163F] border-b border-[#E3E6EF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Narrative Left */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#28245F] font-bold block">
              OUR APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#17163F] leading-tight">
              Experiences That
              <br />
              Bring Teams Together.
            </h2>
            <p className="text-xs sm:text-base text-[#17163F] leading-relaxed max-w-xl font-normal">
              Every company event should inspire your people and build real connections. At Thriveus, we take care of everything—from stage setups and lighting to team games and smooth on-the-day coordination.
            </p>
            <p className="text-xs sm:text-sm text-[#62627A] leading-relaxed max-w-xl">
              Whether you are planning an executive desert retreat, a staff training day, or a major gala in Dubai, we make it simple, professional, and memorable.
            </p>
          </div>

          {/* Large Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-[#E3E6EF]/40 shadow-[0_20px_50px_rgba(18,16,61,0.06)]">
              <Image
                src="/images/featured-experience.jpg"
                alt="Corporate Experience Production in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-[#62627A]">
              <span className="uppercase tracking-widest text-[#17163F] font-semibold">FLAGSHIP EXPERIENCES · UAE</span>
              <span>STAGE ARCHITECTURE &amp; PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Running Capabilities Marquee Ribbon in Deep Midnight Navy */}
      <div className="relative w-full overflow-hidden border-t border-b border-[#28245F] bg-[#12103D] py-4 shadow-inner">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {CAPABILITY_TICKERS.map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold text-white">
                {item}
              </span>
              <span className="mx-6 text-[#8EDAF2] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
