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
    <section className="relative w-full bg-[#EAE7DC] py-16 sm:py-28 overflow-hidden text-[#1C164B] border-b border-[#1C164B]/15">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Narrative Left */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-light text-xs uppercase tracking-widest text-[#8A5FA8] font-semibold block">
              OUR APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1C164B] leading-tight">
              Experiences That
              <br />
              <span className="font-seasons italic font-bold text-[#8A5FA8]">
                Bring Teams Together.
              </span>
            </h2>
            <p className="text-xs sm:text-base text-[#1C164B] leading-relaxed max-w-xl font-light">
              Thriveus brings a corporate intelligence approach to experience design, built on multi year relationships with enterprise teams across the UAE. Our expert team carries more than twenty years of combined experience curating unique experiences, large scale exhibitions, conferences and summits. We listen the way an insider listens, then design around your objectives, your culture and your people.
            </p>
            <p className="text-xs sm:text-sm text-[#1C164B]/75 leading-relaxed max-w-xl font-light">
              From staging, lighting and logistics to games, facilitation and on the day coordination, everything is handled by one accountable partner. Whether it is a fully private experience deep in the desert, on a megayacht or an island, a gamified safety programme, a cultural celebration or a full conference and summit, we make it seamless, professional and memorable.
            </p>
          </div>

          {/* Large Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-[#1C164B]/5 shadow-[0_20px_50px_rgba(28,22,75,0.06)] border border-[#1C164B]/10">
              <Image
                src="/images/our-approach-team.png"
                alt="Thriveus corporate team celebration and engagement event in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Statistics Strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#1C164B]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C164B] block">
                300+
              </span>
              <p className="font-display text-xs sm:text-sm text-[#8A5FA8] font-medium leading-snug">
                Clients Served by the Team
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C164B] block">
                20+
              </span>
              <p className="font-display text-xs sm:text-sm text-[#8A5FA8] font-medium leading-snug">
                Years Combined Experience
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C164B] block">
                30+
              </span>
              <p className="font-display text-xs sm:text-sm text-[#8A5FA8] font-medium leading-snug">
                Signature Events Delivered
              </p>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C164B] block">
                3,000+
              </span>
              <p className="font-display text-xs sm:text-sm text-[#8A5FA8] font-medium leading-snug">
                Participants Engaged
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Running Capabilities Marquee Ribbon in Deep Brand Indigo */}
      <div className="relative w-full overflow-hidden border-t border-b border-[#8A5FA8]/30 bg-[#1C164B] py-4 shadow-inner">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {CAPABILITY_TICKERS.map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="font-display text-xs sm:text-sm uppercase tracking-wider font-semibold text-white">
                {item}
              </span>
              <span className="mx-6 text-[#98DAF6] text-xs">✶</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
