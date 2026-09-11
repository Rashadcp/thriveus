"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import CircularGallery with SSR disabled (WebGL requires window & canvas)
const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3 text-white/40">
      <div className="h-8 w-8 rounded-full border-2 border-[#98DAF6] border-t-transparent animate-spin" />
      <span className="font-display text-xs tracking-wider uppercase">Loading 3D Gallery...</span>
    </div>
  ),
});

const CIRCULAR_SERVICES = [
  {
    image: "/images/gallery-conference-production.jpg",
    text: "Conferences & Summits",
  },
  {
    image: "/images/gallery-arena-games-floor.jpg",
    text: "Signature Formats",
  },
  {
    image: "/images/gallery-spc-awards-stage.jpg",
    text: "Galas & Award Nights",
  },
  {
    image: "/images/gallery-onam-performance.jpg",
    text: "Celebrations & Cultural",
  },
  {
    image: "/images/gallery-desert-camp.jpg",
    text: "Desert & Outdoor Formats",
  },
  {
    image: "/images/gallery-mountain-session.jpg",
    text: "Executive Retreats",
  },
  {
    image: "/images/gallery-arena-squad-action.jpg",
    text: "Gamified Challenges",
  },
  {
    image: "/images/gallery-spc-gala-celebration.jpg",
    text: "Corporate Recognition",
  },
];

const SERVICE_PILLS = [
  { id: "curated", num: "01", name: "Curated Formats" },
  { id: "conferences", num: "02", name: "Summits & Productions" },
  { id: "galas", num: "03", name: "Galas & Culture" },
  { id: "teambuilding", num: "04", name: "Team Building" },
  { id: "leadership", num: "05", name: "Capability Building" },
  { id: "gamified", num: "06", name: "Gamified Learning" },
  { id: "retreats", num: "07", name: "Executive Retreats" },
];

export default function Services3DCarousel() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#EAE7DC] text-[#1C164B] pt-8 sm:pt-14 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background ambient lighting matching 3D curved visual language */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8A5FA8]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-[#98DAF6]/20 blur-[100px] rounded-full" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-2 sm:mb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[#DEDACB]">
          <div>
            <span className="font-light text-xs uppercase tracking-widest text-[#8A5FA8] font-semibold block">
              What We Deliver · Experiential Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C164B] mt-1">
              Our Services
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5B5578] max-w-md font-light leading-relaxed">
            Seven core experiential disciplines, delivered end-to-end across Dubai, Abu Dhabi, and the wider UAE.
          </p>
        </div>
      </div>

      {/* 3D Circular Gallery Container with proportional card scale */}
      <div className="relative z-10 w-full h-[360px] sm:h-[420px] md:h-[480px] my-0">
        {isInView ? (
          <CircularGallery
            bend={1.8}
            textColor="#1C164B"
            borderRadius={0.06}
            scrollEase={0.02}
            scrollSpeed={2}
            cardScale={0.8}
            font='bold 22px "Helvetica Now Display", sans-serif'
            items={CIRCULAR_SERVICES}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[#5B5578]/40">
            <div className="h-7 w-7 rounded-full border-2 border-[#8A5FA8] border-t-transparent animate-spin" />
            <span className="font-display text-xs tracking-wider uppercase text-[#5B5578]">Loading 3D Gallery...</span>
          </div>
        )}
      </div>

      {/* Interactive Guidance & Service Quick Nav */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-2 sm:mt-4">
        {/* Drag Hint */}
        <div className="flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs text-[#5B5578] mb-4 sm:mb-5">
          <span className="text-[#8A5FA8]">↔</span>
          <span className="tracking-wide">Drag to explore</span>
        </div>

        {/* Quick Service Category Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-6">
          {SERVICE_PILLS.map((pill) => (
            <Link
              key={pill.id}
              href="/services"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F2F0E8] border border-[#DEDACB] hover:border-[#8A5FA8] hover:bg-[#EAE7DC] text-[#1C164B] transition-all text-[11px] sm:text-xs font-display shadow-sm group"
            >
              <span className="font-display text-[10px] text-[#8A5FA8] font-bold transition-colors">
                {pill.num}
              </span>
              <span>{pill.name}</span>
            </Link>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#1C164B] text-[#EAE7DC] font-display text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase px-3.5 sm:px-8 py-2.5 sm:py-3.5 hover:bg-[#8A5FA8] hover:text-white transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <span>Explore All 7 Services</span>
            <span className="shrink-0">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#1C164B]/40 hover:border-[#8A5FA8] text-[#1C164B] hover:text-[#8A5FA8] font-display text-[10px] sm:text-xs md:text-sm font-medium tracking-wider uppercase px-3.5 sm:px-8 py-2.5 sm:py-3.5 transition-all duration-300 bg-transparent whitespace-nowrap"
          >
            <span>Discuss a Brief</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
