"use client";

import React from "react";
import Image from "next/image";

const CAPABILITY_TICKERS = [
  "Employee Engagement & Team Building",
  "Venue-Based Immersive Experiences",
  "Corporate Training & Leadership Development",
  "Full-Scope Corporate Events & Conferences",
  "Offsite Retreats & Incentive Programmes",
  "Curated Corporate & Cultural Events",
  "Gamified Learning & Training Programmes",
  "Event Photography & Film",
  "CSR & Community Programmes",
  "Employee Engagement & Team Building",
  "Venue-Based Immersive Experiences",
  "Corporate Training & Leadership Development",
];

export default function BeatsBeyond() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-28 overflow-hidden text-[#0B0A0D] border-b border-[#242057]/15">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Narrative Left */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#75559C] font-bold block">
              OUR APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0A0D] leading-tight">
              Experiences That
              <br />
              Bring Teams Together.
            </h2>
            <p className="text-xs sm:text-base text-[#0B0A0D] leading-relaxed max-w-xl font-normal">
              Thriveus brings a corporate intelligence approach to experience design, built on multi year relationships with enterprise teams across the UAE. Our expert team carries more than twenty years of combined experience curating unique experiences, large scale exhibitions, conferences and summits. We listen the way an insider listens, then design around your objectives, your culture and your people.
            </p>
            <p className="text-xs sm:text-sm text-[#0B0A0D]/75 leading-relaxed max-w-xl">
              From staging, lighting and logistics to games, facilitation and on the day coordination, everything is handled by one accountable partner. Whether it is a fully private experience deep in the desert, on a megayacht or an island, a gamified safety programme, a cultural celebration or a full conference and summit, we make it seamless, professional and memorable.
            </p>
          </div>

          {/* Large Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-[#242057]/5 shadow-[0_20px_50px_rgba(11,10,13,0.06)]">
              <Image
                src="/images/gala-stage.jpg"
                alt="Corporate Experience Production in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-[#75559C]">
              <span className="uppercase tracking-widest text-[#0B0A0D] font-semibold">FLAGSHIP EXPERIENCES · UAE</span>
              <span>STAGE ARCHITECTURE &amp; PRODUCTION</span>
            </div>
          </div>
        </div>

        {/* 3.6 Statistics Strip — Four Items, Paste Exactly With These Labels */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#242057]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0A0D] block">
                300+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#75559C] leading-snug">
                Clients Served by the Team
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0A0D] block">
                20+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#75559C] leading-snug">
                Years Combined Experience
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0A0D] block">
                30+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#75559C] leading-snug">
                Signature Events Delivered
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0A0D] block">
                3,000+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#75559C] leading-snug">
                Participants Engaged
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Running Capabilities Marquee Ribbon in Deep Brand Ink & Indigo */}
      <div className="relative w-full overflow-hidden border-t border-b border-[#242057] bg-[#0B0A0D] py-4 shadow-inner">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {CAPABILITY_TICKERS.map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold text-white">
                {item}
              </span>
              <span className="mx-6 text-[#1782A8] text-xs">✶</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
