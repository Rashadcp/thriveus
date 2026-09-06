"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const TICKER_ROW_1 = [
  "THRIVEUS EXPERIENTIAL",
  "CORPORATE TRAINING & LEADERSHIP",
  "OFFSITE RETREATS & INCENTIVE PROGRAMMES",
  "CURATED CORPORATE & CULTURAL EVENTS",
  "GAMIFIED LEARNING & LIVE EVENTS",
  "DESIGN + PRODUCTION + FABRICATION",
  "CSR & COMMUNITY PROGRAMMES",
  "DUBAI HEADQUARTERS · UAE",
];

const TICKER_ROW_2 = [
  "EXPERIENCES DESIGNED FOR IMPACT",
  "EMPLOYEE ENGAGEMENT & TEAM BUILDING",
  "DUBAI · ABU DHABI · AL AIN · UAE WIDE",
  "CURATING IMPACT, ONE EXPERIENCE AT A TIME",
  "FULL SCOPE CORPORATE EVENTS & CONFERENCES",
  "VENUE BASED IMMERSIVE EXPERIENCES",
  "EXECUTIVE LEADERSHIP & RETREATS",
];

// 4x extended arrays to ensure 100% unbroken, infinite background coverage
const EXTENDED_NAVY = [
  ...TICKER_ROW_1,
  ...TICKER_ROW_1,
  ...TICKER_ROW_1,
  ...TICKER_ROW_1,
];

const EXTENDED_BLUE = [
  ...TICKER_ROW_2,
  ...TICKER_ROW_2,
  ...TICKER_ROW_2,
  ...TICKER_ROW_2,
];

const GALLERY_IMAGES = [
  {
    src: "/images/arena-games-wide.jpg",
    alt: "Corporate teams competing in a branded arena game zone in Dubai",
    category: "SIGNATURE FORMATS",
    title: "The Arena Games · 685 Guests",
  },
  {
    src: "/images/desert-golden-hour.jpg",
    alt: "Private desert immersion experience for enterprise teams",
    category: "EXPERIENTIAL TEAM BUILDING",
    title: "Fully Private Desert Immersion · Al Faqa",
  },
  {
    src: "/images/gala-stage.jpg",
    alt: "Corporate celebrations themed gala dinner stage production",
    category: "CORPORATE CELEBRATIONS",
    title: "Themed Gala Dinner · 120 Guests",
  },
  {
    src: "/images/alain-retreat.jpg",
    alt: "Executive mountain leadership retreat in Al Ain",
    category: "LEADERSHIP RETREATS",
    title: "Mountain Retreat · Al Ain",
  },
  {
    src: "/images/megayacht-event.jpg",
    alt: "Luxury megayacht corporate hospitality event in Dubai Marina",
    category: "MARINE EXPERIENCES",
    title: "Luxury Megayacht Event · 275 Guests",
  },
  {
    src: "/images/family-carnival.jpg",
    alt: "Family day carnival and corporate cultural celebration",
    category: "FAMILY & CULTURAL EVENTS",
    title: "Family Day Carnival · 215 Guests",
  },
];

export default function DualMarqueeGallery() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll tracking for scroll-driven horizontal translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll translation over the extended marquee tracks
  const blueX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const navyX = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  // Horizontal drift for the photo gallery row on scroll
  const galleryX = useTransform(scrollYProgress, [0, 1], ["4%", "-22%"]);

  // Parallax Y-offset
  const galleryY = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0B0A0D] pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#242057]"
    >
      {/* 1. DUAL CURVED ANGLE TICKER RIBBONS (Full-bleed unbroken background ribbons) */}
      <div
        className="relative w-full py-8 sm:py-12 overflow-hidden select-none"
        style={{ perspective: "1000px" }}
      >
        {/* Background Deep Ink/Indigo Ribbon with 100% full background coverage */}
        <div className="relative z-10 w-[150vw] -ml-[25vw] -rotate-[2.6deg] skew-x-[-1deg] origin-center overflow-visible">
          <motion.div
            style={{ x: navyX }}
            className="flex items-center w-max bg-gradient-to-r from-[#0B0A0D] via-[#242057] to-[#0B0A0D] text-[#1782A8] py-3.5 sm:py-4.5 border-y border-[#242057] shadow-[0_15px_40px_rgba(11,10,13,0.8)] will-change-transform"
          >
            {EXTENDED_NAVY.map((item, idx) => (
              <div key={idx} className="flex items-center mx-5 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-sm sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
                  {item}
                </span>
                <span className="mx-5 sm:mx-8 text-[#1782A8] text-xs sm:text-sm">
                  ✶
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Foreground Deep Indigo/Purple Ribbon with 100% full background coverage */}
        <div className="relative z-20 w-[150vw] -ml-[25vw] -mt-3.5 sm:-mt-5 rotate-[1.8deg] skew-x-[1.5deg] origin-center overflow-visible">
          <motion.div
            style={{ x: blueX }}
            className="flex items-center w-max bg-gradient-to-r from-[#242057] via-[#75559C] to-[#242057] text-white py-4 sm:py-5 shadow-[0_20px_50px_rgba(11,10,13,0.5)] border-y border-[#1782A8]/40 will-change-transform"
          >
            {EXTENDED_BLUE.map((item, idx) => (
              <div key={idx} className="flex items-center mx-5 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-sm sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                  {item}
                </span>
                <span className="mx-5 sm:mx-8 text-[#1782A8] text-xs sm:text-sm">
                  ✶
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. MEDIA CAROUSEL / GALLERY (HORIZONTAL ROW OF HIGH-CONTRAST CARDS) */}
      <div className="relative mt-8 sm:mt-14 w-full overflow-x-auto sm:overflow-hidden scrollbar-none">
        <motion.div
          style={{ x: galleryX, y: galleryY }}
          className="flex items-center gap-4 sm:gap-7 w-max px-4 sm:px-12 will-change-transform py-4 sm:py-6"
        >
          {GALLERY_IMAGES.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                rotate: -2.5,
                y: 6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 320, damping: 18 },
              }}
              className="group relative h-[210px] sm:h-[250px] md:h-[265px] w-[270px] sm:w-[350px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#242057] bg-[#242057] shadow-[0_15px_45px_rgba(11,10,13,0.6)] cursor-pointer transition-colors duration-300 hover:border-[#1782A8] origin-center will-change-transform"
            >
              {/* High-Contrast Photo */}
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 350px, 380px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.95] contrast-[1.05]"
              />

              {/* Gradient Vignette - Always subtly present at bottom on mobile, intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0D]/90 via-[#0B0A0D]/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Clean Editorial Caption - Visible on mobile, hover-revealed on desktop */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20 pointer-events-none opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <span className="font-display text-[10px] uppercase tracking-wider text-[#1782A8] block mb-0.5 sm:mb-1 font-semibold">
                  {card.category}
                </span>
                <p className="font-display text-xs sm:text-base font-bold text-white leading-snug">
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
