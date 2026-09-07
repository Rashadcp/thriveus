"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

// Doubled to ensure seamless 0% -> -50% infinite hardware-accelerated marquee loop
const RIBBON_ROW_1 = [...TICKER_ROW_1, ...TICKER_ROW_1];
const RIBBON_ROW_2 = [...TICKER_ROW_2, ...TICKER_ROW_2];

const GALLERY_IMAGES = [
  {
    src: "/images/corporate-ballroom-team.jpg",
    alt: "Enterprise annual corporate team gathering in Dubai",
    category: "ANNUAL GATHERINGS",
    title: "Annual Staff Gathering · Grand Ballroom",
  },
  {
    src: "/images/team-challenge-burj.jpg",
    alt: "Corporate team challenge with live gamified competition in Dubai",
    category: "SIGNATURE FORMATS",
    title: "The Team Challenge · Burj Al Arab Edition",
  },
  {
    src: "/images/cultural-drum-celebration.jpg",
    alt: "Corporate celebration with traditional live cultural performance",
    category: "CORPORATE CELEBRATIONS",
    title: "Cultural Drum Celebration · Live Festival",
  },
  {
    src: "/images/alain-mountain-summit.jpg",
    alt: "Executive mountain leadership retreat in Jebel Hafeet, Al Ain",
    category: "LEADERSHIP RETREATS",
    title: "Mountain Retreat · Jebel Hafeet, Al Ain",
  },
  {
    src: "/images/gala-dinner-ballroom.jpg",
    alt: "Corporate gala dinner celebration and awards evening in luxury hotel ballroom",
    category: "GALAS & AWARDS",
    title: "Corporate Gala Dinner · Luxury Ballroom",
  },
  {
    src: "/images/resort-teambuilding-lawn.jpg",
    alt: "Corporate outdoor engagement and team dynamic experience",
    category: "EXPERIENTIAL TEAM BUILDING",
    title: "Resort Team Building · Engagement Day",
  },
];

export default function DualMarqueeGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect desktop for parallax drift (disabled on mobile to ensure zero touch latency)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Desktop-only smooth scroll tracking for gentle gallery drift
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const galleryX = useTransform(scrollYProgress, [0, 1], ["4%", "-20%"]);
  const galleryY = useTransform(scrollYProgress, [0, 1], ["0px", "-24px"]);
  const smoothGalleryX = useSpring(galleryX, { stiffness: 90, damping: 24, mass: 0.5 });
  const smoothGalleryY = useSpring(galleryY, { stiffness: 90, damping: 24, mass: 0.5 });

  // Mobile horizontal scroll tracker for active pagination indicator
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const index = Math.min(
      Math.max(0, Math.round(progress * (GALLERY_IMAGES.length - 1))),
      GALLERY_IMAGES.length - 1
    );
    setActiveIndex(index);
  }, []);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll<HTMLElement>("[data-gallery-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#1C164B] pt-6 sm:pt-10 pb-14 sm:pb-24 border-b border-[#8A5FA8]/30"
    >
      {/* 1. DUAL ANGLED TICKER RIBBONS (Secondary Brand Colors with Crisp High-Contrast Typography) */}
      <div className="relative w-full py-8 sm:py-14 overflow-hidden select-none">
        {/* Ribbon 1: Secondary Orchid Purple (#8A5FA8) with Crisp White Typography */}
        <div className="relative z-10 w-[160vw] -ml-[30vw] -rotate-[1.8deg] origin-center overflow-hidden py-1 transform-gpu">
          <div className="animate-marquee flex items-center w-max bg-[#8A5FA8] py-3.5 sm:py-4.5 border-y border-white/25 shadow-[0_8px_25px_rgba(0,0,0,0.45)]">
            {RIBBON_ROW_1.map((item, idx) => (
              <div key={`r1-${idx}`} className="flex items-center mx-4 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-xs sm:text-base md:text-lg font-black uppercase tracking-tight text-white drop-shadow-sm">
                  {item}
                </span>
                <span className="mx-4 sm:mx-8 text-[#98DAF6] text-xs sm:text-base select-none">
                  ✶
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Secondary Ice Blue (#98DAF6) with Deep Navy (#1C164B) Typography */}
        <div className="relative z-20 w-[160vw] -ml-[30vw] mt-3 sm:mt-4 -rotate-[1.8deg] origin-center overflow-hidden py-1 transform-gpu">
          <div className="animate-marquee-reverse flex items-center w-max bg-[#98DAF6] py-3.5 sm:py-4.5 border-y border-[#1C164B]/20 shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
            {RIBBON_ROW_2.map((item, idx) => (
              <div key={`r2-${idx}`} className="flex items-center mx-4 sm:mx-8 whitespace-nowrap">
                <span className="font-display text-xs sm:text-base md:text-lg font-black uppercase tracking-tight text-[#1C164B]">
                  {item}
                </span>
                <span className="mx-4 sm:mx-8 text-[#8A5FA8] text-xs sm:text-base select-none">
                  ✶
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MEDIA CAROUSEL / GALLERY (Touch-Optimized Snap Carousel on Mobile, Parallax on Desktop) */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="relative mt-6 sm:mt-12 w-full overflow-x-auto sm:overflow-hidden scrollbar-none overscroll-x-contain touch-pan-x"
      >
        <motion.div
          style={isDesktop ? { x: smoothGalleryX, y: smoothGalleryY } : undefined}
          className="flex items-center gap-4 sm:gap-7 w-max px-5 sm:px-12 py-3 sm:py-6 snap-x snap-mandatory"
        >
          {GALLERY_IMAGES.map((card, idx) => (
            <motion.div
              key={idx}
              data-gallery-card
              whileHover={
                isDesktop
                  ? {
                      rotate: -2,
                      y: 4,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }
                  : undefined
              }
              className="group relative h-[215px] sm:h-[250px] md:h-[265px] w-[275px] sm:w-[350px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#8A5FA8]/40 bg-[#1C164B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer transition-colors duration-300 hover:border-[#98DAF6] origin-center snap-center select-none"
            >
              {/* High-Contrast Photo */}
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 275px, (max-width: 1024px) 350px, 380px"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Vignette - always visible for crisp legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#1C164B]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Clean Editorial Caption - permanently visible */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20 pointer-events-none opacity-100 translate-y-0 transition-all duration-300 ease-out">
                <span className="font-light text-[10px] uppercase tracking-wider text-[#98DAF6] block mb-0.5 sm:mb-1 font-semibold">
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

      {/* 3. Mobile Active Slide Indicator (Clean Minimal Dot Navigation) */}
      <div className="flex sm:hidden items-center justify-between px-6 mt-3 text-xs text-white/50">
        <span className="font-mono text-[11px] tracking-wider uppercase">
          0{activeIndex + 1} / 0{GALLERY_IMAGES.length}
        </span>
        <div className="flex items-center gap-1.5">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to experience ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-6 bg-[#98DAF6]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] tracking-wider uppercase text-[#98DAF6]">
          Swipe →
        </span>
      </div>
    </section>
  );
}
