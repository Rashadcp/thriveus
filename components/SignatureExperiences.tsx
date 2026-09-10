"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface SignatureExperience {
  id: string;
  num: string;
  category: "Outdoor" | "Indoor";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metaBadge: string;
  highlights: string[];
}

const EXPERIENCES: SignatureExperience[] = [
  {
    id: "pearl-and-dune-quest",
    num: "01",
    category: "Outdoor",
    categoryLabel: "Outdoor Expedition",
    title: "Pearl & Dune Quest",
    subtitle: "UAE Desert Discovery Experience",
    metaBadge: "4x4 Desert Navigation · Field Discovery",
    description:
      "Teams head into the desert in 4x4 crews, navigating between checkpoints using maps, clues and handheld metal detectors. Each discovery reveals the next stage of the mission, combining real desert exploration with problem-solving, navigation and teamwork. A highly immersive challenge designed to make the UAE landscape part of the game itself.",
    image: "/pearl-and-dune-quest.webp",
    highlights: [
      "4x4 Crew Navigation",
      "Handheld Metal Detectors",
      "Desert Checkpoint Trail",
      "Tactical Teamwork",
    ],
  },
  {
    id: "the-island-code",
    num: "02",
    category: "Outdoor",
    categoryLabel: "Outdoor Exploration",
    title: "The Island Code",
    subtitle: "Island Exploration & Mystery Challenge",
    metaBadge: "Island Trails · Waterfront Mystery",
    description:
      "Teams explore winding island trails, lush natural spaces and waterfront pathways while following a trail of hidden clues and location-based challenges. Every discovery contributes another piece of the code, pushing teams to observe their surroundings, share information and think strategically as they work towards the final reveal.",
    image: "/the-island-code.webp",
    highlights: [
      "Waterfront & Island Trails",
      "Location-Based Clues",
      "Multi-Part Code Breaking",
      "Strategic Observation",
    ],
  },
  {
    id: "dhow-down",
    num: "03",
    category: "Indoor",
    categoryLabel: "Indoor Survival Challenge",
    title: "Dhow Down",
    subtitle: "Arabian Gulf Survival Challenge",
    metaBadge: "Maritime Heritage · Crisis Simulation",
    description:
      "A fast-paced team survival challenge inspired by the UAE’s maritime heritage. Crews must choose what to save, sacrifice resources as conditions change, respond to unexpected crises, and defend their final rescue strategy. It is a sharp test of decision-making, communication and adaptability under pressure.",
    image: "/dhow-down.webp",
    highlights: [
      "Maritime Heritage Theme",
      "Dynamic Crisis Response",
      "Resource Allocation",
      "High-Pressure Decisions",
    ],
  },
  {
    id: "the-falconers-villa",
    num: "04",
    category: "Indoor",
    categoryLabel: "Indoor Mystery Challenge",
    title: "The Falconer’s Villa",
    subtitle: "A UAE-Inspired Mystery Challenge",
    metaBadge: "Majlis Culture · Race Against Time",
    description:
      "Teams enter the world of a desert villa and race against time to solve a sequence of interconnected clues inspired by falconry, the Emirates and majlis culture. Observation, decoding and shared information all come together as teams work towards the final solution before time runs out.",
    image: "/falconers-villa.webp",
    highlights: [
      "Falconry & Majlis Lore",
      "Interconnected Clue Solving",
      "Information Sharing",
      "Beat the Countdown",
    ],
  },
];

export default function SignatureExperiences() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section
      id="signature-experiences"
      className="relative w-full bg-[#EAE7DC] py-14 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden text-[#1C164B] border-b border-[#DEDACB]"
    >
      {/* Soft ambient brand lighting */}
      <div className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#98DAF6]/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8A5FA8]/10 rounded-full blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#DEDACB] mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="font-light text-xs uppercase tracking-widest text-[#8A5FA8] font-semibold block">
              Curated Original Formats · UAE Inspired
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C164B] leading-tight">
              Thriveus{" "}
              <span className="font-seasons italic font-bold text-[#8A5FA8]">
                Signature
              </span>{" "}
              Team Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#5B5578] font-light leading-relaxed max-w-xl">
              Some of our curated original team challenges designed around the UAE’s
              landscapes, culture and stories. From desert expeditions and island hunts
              to immersive tabletop mysteries, every experience puts teams into a
              shared mission where communication, decision-making and collaboration
              determine what happens next.
            </p>
          </div>
        </div>

        {/* Expanding Card Accordion Container - Fully Responsive */}
        <div className="relative w-full flex flex-col md:flex-row md:h-[500px] lg:h-[540px] gap-3 sm:gap-4 select-none">
          {EXPERIENCES.map((exp, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={exp.id}
                layout
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 0.9,
                }}
                onMouseEnter={() => {
                  // Only expand on hover for desktop screens
                  if (typeof window !== "undefined" && window.innerWidth >= 768) {
                    setActiveIdx(idx);
                  }
                }}
                onClick={() => setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIdx(idx);
                  }
                }}
                aria-expanded={isActive}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer border transition-all duration-300 ${
                  isActive
                    ? "min-h-[440px] sm:min-h-[460px] md:min-h-0 md:flex-[3.6] lg:flex-[4] shadow-[0_25px_60px_rgba(28,22,75,0.25)] border-[#8A5FA8]/60 ring-1 ring-white/20"
                    : "h-[64px] sm:h-[68px] md:h-auto md:flex-1 opacity-95 hover:opacity-100 border-[#DEDACB] hover:border-[#1C164B]/40"
                }`}
              >
                {/* Background Image with Crisp Full-Res WebP */}
                <Image
                  src={exp.image}
                  alt={`${exp.title} - ${exp.subtitle}`}
                  fill
                  unoptimized
                  priority={idx === 0}
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                  }`}
                />

                {/* Refined Photographic Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/35 via-45% to-black/20"
                      : "bg-black/65 group-hover:bg-black/50 backdrop-blur-[0.5px]"
                  }`}
                />

                {/* Collapsed State Layout */}
                {!isActive && (
                  <>
                    {/* Mobile Collapsed: Horizontal Interactive Strip */}
                    <div className="relative z-10 flex md:hidden h-full items-center justify-between px-4 sm:px-5 pointer-events-none">
                      <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                        <span className="font-display text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/25 shadow-xs">
                          {exp.num}
                        </span>
                        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#98DAF6]">
                          {exp.category}
                        </span>
                        <span className="font-display text-sm font-bold text-white drop-shadow-sm truncate">
                          {exp.title}
                        </span>
                      </div>
                      <span className="text-base text-white/80 font-bold ml-2 shrink-0">
                        +
                      </span>
                    </div>

                    {/* Desktop Collapsed: Clean Rotated Title Spine */}
                    <div className="relative z-10 hidden md:flex h-full flex-col justify-between p-4 sm:p-6 lg:p-7 pointer-events-none">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate">
                          {exp.category}
                        </span>
                        <span className="font-display text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full bg-black/40 text-white/90 border border-white/15 backdrop-blur-md">
                          {exp.num}
                        </span>
                      </div>

                      <div className="flex flex-1 items-center justify-center py-6">
                        <span className="-rotate-90 whitespace-nowrap font-display text-base lg:text-lg font-bold tracking-wider text-white drop-shadow-md group-hover:text-white transition-colors">
                          {exp.title}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Active Expanded Content Layout */}
                {isActive && (
                  <div className="relative z-10 h-full w-full p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
                    {/* Top Bar: White Category Tag + Number */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {exp.category}
                      </span>

                      <span className="font-display text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-white/25 text-white border border-white/35 shadow-xs backdrop-blur-md">
                        {exp.num}
                      </span>
                    </div>

                    {/* Bottom Details with Fade-Slide Entrance */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 }}
                      className="space-y-3 pt-6 pointer-events-auto"
                    >
                      <div className="space-y-1">
                        <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-[#98DAF6] block drop-shadow-sm">
                          {exp.subtitle}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
                          {exp.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm lg:text-base text-white/95 font-light leading-relaxed max-w-2xl drop-shadow-xs">
                        {exp.description}
                      </p>

                      {/* Dynamic tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                        {exp.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-black/40 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1 rounded-full shadow-xs"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#98DAF6]" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Switcher Indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {EXPERIENCES.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "w-8 bg-[#1C164B]"
                  : "w-2 bg-[#DEDACB] hover:bg-[#8A5FA8]/60"
              }`}
              aria-label={`Select experience ${exp.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
