"use client";

import React from "react";
import MagneticButton from "./ui/MagneticButton";

const PILLARS = [
  {
    num: "01",
    title: "Smart Team Connections",
    description:
      "Quickly connect coworkers across different departments through fun, interactive team challenges.",
    metric: "98%",
    metricLabel: "Team Connection",
  },
  {
    num: "02",
    title: "Interactive Stage Games",
    description:
      "Live polls, group quizzes, and stage activities that get everyone in the room participating.",
    metric: "97%",
    metricLabel: "Active Participation",
  },
  {
    num: "03",
    title: "Clear Event Feedback",
    description:
      "Easy-to-read summaries and attendee feedback showing what your team loved most about the event.",
    metric: "4.8★",
    metricLabel: "Average Rating",
  },
];

export default function NeoThrive() {
  return (
    <section className="relative w-full bg-[#12103D] py-20 sm:py-36 px-5 sm:px-12 overflow-hidden text-white border-t border-[#28245F]/50">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Open Editorial Layout: Header + 3 Clean Typographic Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#28245F]/40">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
              NEOTHRIVE · SMART ENGAGEMENT
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Engage Every Attendee.
            </h2>
            <p className="text-sm sm:text-lg text-[#E3E6EF]/75 leading-relaxed font-light">
              Interactive activities and real-time games designed to make your corporate events lively, participatory, and memorable.
            </p>
            <div className="pt-2">
              <MagneticButton href="/neothrive" variant="primary">
                Discover NeoThrive
              </MagneticButton>
            </div>
          </div>

          {/* Right Open Typographic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-4 lg:pt-0">
            {PILLARS.map((pillar) => (
              <div key={pillar.num} className="space-y-4 flex flex-col justify-between pb-6 sm:pb-0 border-b border-[#28245F]/30 sm:border-b-0">
                <div>
                  <span className="font-mono text-sm font-bold text-[#8EDAF2] block mb-2 sm:mb-3">
                    {pillar.num}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#E3E6EF]/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#28245F]/40">
                  <span className="font-display text-xl sm:text-3xl font-bold text-white block">
                    {pillar.metric}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8EDAF2]">
                    {pillar.metricLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
