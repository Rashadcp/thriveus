"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const BLUE_ITEMS = [
  "EXPERIENCES DESIGNED FOR IMPACT",
  "EMPLOYEE ENGAGEMENT & TEAM BUILDING",
  "DUBAI · ABU DHABI · RIYADH",
  "CURATING IMPACT, ONE EXPERIENCE AT A TIME",
  "FULL-SCOPE CORPORATE EVENTS & CONFERENCES",
  "VENUE-BASED IMMERSIVE EXPERIENCES",
  "EXPERIENCES DESIGNED FOR IMPACT",
  "EXECUTIVE LEADERSHIP & RETREATS",
  "CURATING IMPACT, ONE EXPERIENCE AT A TIME",
  "DUBAI · ABU DHABI · RIYADH",
];

const NAVY_ITEMS = [
  "THRIVEUS EXPERIENTIAL",
  "CORPORATE TRAINING & LEADERSHIP",
  "OFFSITE RETREATS & INCENTIVE PROGRAMS",
  "CURATED CORPORATE & CULTURAL EVENTS",
  "DUBAI HEADQUARTERS · UAE",
  "DESIGN + PRODUCTION + FABRICATION",
  "GAMIFIED LEARNING & LIVE EVENTS",
  "THRIVEUS EXPERIENTIAL",
  "HIGH-END VIDEO PRODUCTION",
  "DUBAI HEADQUARTERS · UAE",
];

// 4x extended arrays to ensure 100% unbroken, infinite background coverage
const EXTENDED_BLUE = [
  ...BLUE_ITEMS,
  ...BLUE_ITEMS,
  ...BLUE_ITEMS,
  ...BLUE_ITEMS,
];

const EXTENDED_NAVY = [
  ...NAVY_ITEMS,
  ...NAVY_ITEMS,
  ...NAVY_ITEMS,
  ...NAVY_ITEMS,
];

const GALLERY_IMAGES = [
  {
    src: "/images/team-building.jpg",
    alt: "Corporate Team Building and Innovation Workshop",
    category: "EMPLOYEE ENGAGEMENT",
    title: "Team Innovation Workshop Dubai",
  },
  {
    src: "/images/leadership-training.jpg",
    alt: "Executive Leadership Summit and Masterclass",
    category: "LEADERSHIP DEVELOPMENT",
    title: "Executive Leadership Masterclass",
  },
  {
    src: "/images/hero-event.jpg",
    alt: "Global Corporate Summit Arena",
    category: "CONFERENCES & SUMMITS",
    title: "Global Leadership Summit Arena",
  },
  {
    src: "/images/featured-experience.jpg",
    alt: "Avant-Garde Gala Dinner and Immersive Venue",
    category: "IMMERSIVE VENUES",
    title: "Burj Khalifa Gala Suite",
  },
  {
    src: "/images/desert-retreat.jpg",
    alt: "Executive Desert Sanctuary Retreat",
    category: "OFFSITE RETREATS",
    title: "Bab Al Shams Desert Retreat",
  },
  {
    src: "/images/vip-lounge.jpg",
    alt: "Curated Corporate Activation Lounge",
    category: "CURATED CORPORATE EVENTS",
    title: "DIFC Corporate Lounge & Activation",
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
      className="relative w-full overflow-hidden bg-[#12103D] pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#28245F]"
    >
      {/* 1. DUAL CURVED ANGLE TICKER RIBBONS (Full-bleed unbroken background ribbons) */}
      <div
        className="relative w-full py-8 sm:py-12 overflow-hidden select-none"
        style={{ perspective: "1000px" }}
      >
        {/* Background Deep Navy Ribbon with 100% full background coverage */}
        <div className="relative z-10 w-[150vw] -ml-[25vw] -rotate-[2.6deg] skew-x-[-1deg] origin-center overflow-visible">
          <motion.div
            style={{ x: navyX }}
            className="flex items-center w-max bg-gradient-to-r from-[#12103D] via-[#28245F] to-[#12103D] text-[#8EDAF2] py-3.5 sm:py-4.5 border-y border-[#28245F] shadow-[0_15px_40px_rgba(18,16,61,0.8)] will-change-transform"
          >
            {EXTENDED_NAVY.map((item, idx) => (
              <div key={idx} className="flex items-center mx-5 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-sm sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
                  {item}
                </span>
                <span className="mx-5 sm:mx-8 text-[#8EDAF2] text-xs sm:text-sm">
                  ✦
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Foreground Deep Indigo Ribbon with 100% full background coverage */}
        <div className="relative z-20 w-[150vw] -ml-[25vw] -mt-3.5 sm:-mt-5 rotate-[1.8deg] skew-x-[1.5deg] origin-center overflow-visible">
          <motion.div
            style={{ x: blueX }}
            className="flex items-center w-max bg-gradient-to-r from-[#28245F] via-[#353075] to-[#28245F] text-white py-4 sm:py-5 shadow-[0_20px_50px_rgba(18,16,61,0.5)] border-y border-[#8EDAF2]/30 will-change-transform"
          >
            {EXTENDED_BLUE.map((item, idx) => (
              <div key={idx} className="flex items-center mx-5 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-sm sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                  {item}
                </span>
                <span className="mx-5 sm:mx-8 text-[#8EDAF2] text-xs sm:text-sm">
                  ✦
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
              className="group relative h-[210px] sm:h-[250px] md:h-[265px] w-[270px] sm:w-[350px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#28245F] bg-[#28245F] shadow-[0_15px_45px_rgba(18,16,61,0.6)] cursor-pointer transition-colors duration-300 hover:border-[#8EDAF2] origin-center will-change-transform"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#12103D]/90 via-[#12103D]/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Clean Editorial Caption - Visible on mobile, hover-revealed on desktop */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20 pointer-events-none opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8EDAF2] block mb-0.5 sm:mb-1 font-semibold">
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
