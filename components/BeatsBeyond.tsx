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
    <section className="relative w-full bg-[#F7F9FC] py-16 sm:py-28 overflow-hidden text-[#17163F] border-b border-[#E3E6EF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Narrative Left */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#28245F] font-bold block">
              OUR APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#17163F] leading-tight">
              Experiences That
              <br />
              Bring Teams Together.
            </h2>
            <p className="text-xs sm:text-base text-[#17163F] leading-relaxed max-w-xl font-normal">
              Thriveus brings a corporate intelligence approach to experience design, built on multi year relationships with enterprise teams across the UAE. Our expert team carries more than twenty years of combined experience curating unique experiences, large scale exhibitions, conferences and summits. We listen the way an insider listens, then design around your objectives, your culture and your people.
            </p>
            <p className="text-xs sm:text-sm text-[#62627A] leading-relaxed max-w-xl">
              From staging, lighting and logistics to games, facilitation and on the day coordination, everything is handled by one accountable partner. Whether it is a fully private experience deep in the desert, on a megayacht or an island, a gamified safety programme, a cultural celebration or a full conference and summit, we make it seamless, professional and memorable.
            </p>
          </div>

          {/* Large Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-[#E3E6EF]/40 shadow-[0_20px_50px_rgba(18,16,61,0.06)]">
              <Image
                src="/images/gala-stage.jpg"
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

        {/* 3.6 Statistics Strip — Four Items, Paste Exactly With These Labels */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E3E6EF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#17163F] block">
                300+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#62627A] leading-snug">
                Clients Served by the Team
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#17163F] block">
                20+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#62627A] leading-snug">
                Years Combined Experience
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#17163F] block">
                30+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#62627A] leading-snug">
                Signature Events Delivered
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#17163F] block">
                3,000+
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#62627A] leading-snug">
                Participants Engaged
              </p>
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
              <span className="mx-6 text-[#8EDAF2] text-xs">✶</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
