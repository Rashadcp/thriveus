"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  serviceNum: string;
  title: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "curated-experiences",
    serviceNum: "01",
    title: "Curated Experiences",
    tag: "SIGNATURE FORMATS",
    image: "/images/arena-games-wide.jpg",
    description:
      "Original, large format experiences designed around your people and your objectives. Arena scale game shows inspired by the survival formats everyone knows, city wide challenge races, megayacht productions, island and beach escapes, and fully private experiences deep in the desert, each built as a storyline rather than a schedule of activities.",
    highlights: [
      "Arena Game Formats",
      "City Wide Challenge Races",
      "Yacht, Island & Beach Escapes",
      "Fully Private Desert Experiences",
    ],
  },
  {
    id: "conferences-productions",
    serviceNum: "02",
    title: "Conferences & Corporate Productions",
    tag: "SUMMITS & PRODUCTIONS",
    image: "/images/conference-summit.jpg",
    description:
      "End to end delivery for multi day conferences, summits and executive gatherings: venue, staging, audio visual, registration and delegate operations under one accountable partner.",
    highlights: [
      "Multi Day Conferences",
      "Turnkey Audio Visual",
      "Delegate Operations",
    ],
  },
  {
    id: "celebrations-cultural",
    serviceNum: "03",
    title: "Celebrations & Cultural Events",
    tag: "MILESTONES & CULTURE",
    image: "/images/gala-stage.jpg",
    description:
      "Annual staff events, award nights, themed galas, iftars, cultural festivals and family day carnivals, designed with genuine cultural fluency across Emirati, South Asian and international workforces.",
    highlights: [
      "Award Nights & Galas",
      "Iftar & Cultural Programmes",
      "Family Day Carnivals",
    ],
  },
  {
    id: "team-building",
    serviceNum: "04",
    title: "Experiential Team Building",
    tag: "TEAM DYNAMICS",
    image: "/images/desert-golden-hour.jpg",
    description:
      "Desert, beach, island, yacht, city and indoor programmes across two tiers: high energy engagement days, and outcome driven simulations with storylines, roles and stakes. Our desert programmes run at a fully private camp in the middle of the desert, an experience generic operators cannot replicate.",
    highlights: [
      "Fully Private Desert Camp",
      "Beach, Island & Marine Formats",
      "Indoor Simulations",
    ],
  },
  {
    id: "coaching-training",
    serviceNum: "05",
    title: "Coaching, Training & Capability Building",
    tag: "WHERE THRIVE IS EARNED",
    image: "/images/training-session.jpg",
    description:
      "One to one coaching, group training and experiential leadership programmes for managers and rising leaders, delivered by senior facilitators and measured before and after so development is proven, not presumed.",
    highlights: [
      "Leadership Development Programmes",
      "One to One Coaching",
      "Measured Outcomes",
    ],
  },
  {
    id: "gamified-learning",
    serviceNum: "06",
    title: "Gamified Learning & Training",
    tag: "LEARNING THAT LANDS",
    image: "/images/gamified-learning.jpg",
    description:
      "Safety awareness, KPI reinforcement and leadership development delivered through play, simulation and competition, with measurement built in so outcomes are visible rather than assumed.",
    highlights: [
      "Safety & Compliance Games",
      "Leadership Programmes",
      "Built In Measurement",
    ],
  },
  {
    id: "leadership-retreats",
    serviceNum: "07",
    title: "Leadership Retreats",
    tag: "EXECUTIVE OFFSITES",
    image: "/images/alain-retreat.jpg",
    description:
      "Mountain, desert and resort retreats built for senior teams: strategy sessions by day, campfires and shared tables by night. Recent programmes include a mountain retreat in Al Ain and private desert experiences for senior leadership groups.",
    highlights: [
      "Mountain & Desert Settings",
      "Facilitated Strategy Sessions",
      "Overnight Formats",
    ],
  },
];

export default function Services3DCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  // Smooth scroll to a specific service step
  const scrollToService = useCallback((targetIndex: number) => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;

    if (scrollableDistance <= 0) return;

    // Position each service at the comfortable center of its segment
    const segmentSize = scrollableDistance / SERVICES.length;
    const targetScrollY = containerTop + targetIndex * segmentSize + 15;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  // RequestAnimationFrame-throttled scroll listener for 60/120fps mobile smoothness
  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableDistance = containerHeight - viewportHeight;

        if (scrollableDistance <= 0) return;

        // Before reaching section top
        if (rect.top > 0) {
          setActiveIndex((prev) => (prev !== 0 ? 0 : prev));
          return;
        }

        // Distance scrolled past the top of the container
        const scrolledPastTop = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolledPastTop / scrollableDistance));

        // Smoothly map 0..1 progress to active service with slight boundary margin to prevent flip-flopping
        const rawIndex = Math.floor(progress * SERVICES.length);
        const clampedIndex = Math.min(SERVICES.length - 1, Math.max(0, rawIndex));

        setActiveIndex((prev) => (prev !== clampedIndex ? clampedIndex : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Mobile Horizontal Touch Swipe Support (allows users to swipe left/right between cards seamlessly)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // If horizontal swipe is prominent and exceeds threshold
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0 && activeIndex < SERVICES.length - 1) {
        // Swiped Left -> Next service
        scrollToService(activeIndex + 1);
      } else if (deltaX > 0 && activeIndex > 0) {
        // Swiped Right -> Previous service
        scrollToService(activeIndex - 1);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeService = SERVICES[activeIndex];

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-[#12103D] text-white h-[350vh] sm:h-[420vh] border-t border-[#28245F]/50"
    >
      {/* Pinned Viewport: 100dvh avoids jumpy mobile address bar resizing */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="sticky top-0 h-[100dvh] min-h-[560px] w-full flex flex-col justify-between overflow-hidden pt-16 sm:pt-24 pb-4 sm:pb-8 px-4 sm:px-10 lg:px-16 select-none bg-[#12103D]"
      >
        {/* 1. Header & Live Segment Progress Bar */}
        <div className="w-full max-w-7xl mx-auto flex items-end justify-between pb-2.5 sm:pb-4 border-b border-[#28245F]/60 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold">
                What We Deliver
              </span>
              <span className="text-[10px] font-mono text-[#62627A] hidden sm:inline">
                // Scroll down or swipe to explore
              </span>
            </div>
            <h2 className="font-display text-lg sm:text-3xl font-bold tracking-tight text-white mt-0.5 sm:mt-1">
              Our Services
            </h2>
          </div>

          {/* Stepper indicator: 01 / 07 with 7 segmented bars */}
          <div className="flex flex-col items-end gap-1 sm:gap-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-sm">
              <span className="font-bold text-[#8EDAF2]">
                {activeService.serviceNum}
              </span>
              <span className="text-[#62627A]">/ 07</span>
            </div>

            {/* Segmented Clickable Progress Track */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {SERVICES.map((srv, idx) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => scrollToService(idx)}
                  aria-label={`Jump to Service 0${idx + 1}: ${srv.title}`}
                  className="group py-1 cursor-pointer"
                >
                  <div
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeIndex === idx
                        ? "w-6 sm:w-10 bg-[#8EDAF2]"
                        : activeIndex > idx
                        ? "w-2.5 sm:w-4 bg-[#8EDAF2]/50"
                        : "w-2.5 sm:w-4 bg-[#28245F] group-hover:bg-[#28245F]/80"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Main Center Content: Dual-Layered Smooth Cross-Fade Layout */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center my-auto flex-1 overflow-hidden py-1 sm:py-4">
          {/* Visual Photography Frame: Top on Mobile, Right on Desktop */}
          <div className="order-first lg:order-last lg:col-span-6 flex flex-col justify-center">
            <div className="relative w-full h-[185px] sm:h-[280px] lg:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#28245F]/30 border border-[#28245F]/60 shadow-xl">
              {/* Stacked Images for instantaneous, silky cross-fading */}
              {SERVICES.map((srv, idx) => (
                <div
                  key={srv.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out will-change-transform ${
                    activeIndex === idx
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-[1.03] z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                  {/* Subtle film overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12103D]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2">
                    <span className="font-mono text-[9px] sm:text-xs uppercase tracking-wider bg-[#12103D]/85 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 text-white font-medium">
                      {srv.tag}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#8EDAF2] hidden sm:inline">
                      DUBAI &amp; UAE
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Description Column: Bottom on Mobile, Left on Desktop */}
          <div className="order-last lg:order-first lg:col-span-6 flex flex-col justify-center relative min-h-[190px] sm:min-h-[260px]">
            {/* Stacked Editorial Cards for smooth cross-fading without blank flashes */}
            {SERVICES.map((srv, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <div
                  key={srv.id}
                  className={`space-y-2.5 sm:space-y-4 transition-all duration-500 ease-out will-change-transform ${
                    isCurrent
                      ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                      : "opacity-0 translate-y-3 absolute inset-0 z-0 pointer-events-none"
                  }`}
                >
                  {/* Number & Category */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-sm sm:text-lg text-[#8EDAF2] font-bold">
                      {srv.serviceNum}
                    </span>
                    <span className="h-px w-6 sm:w-8 bg-[#28245F]" />
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#62627A]">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Service Headline */}
                  <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                    {srv.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-base text-[#E3E6EF]/80 leading-relaxed font-light max-w-xl line-clamp-2 sm:line-clamp-none">
                    {srv.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-0.5 sm:pt-1 flex flex-wrap gap-1 sm:gap-2">
                    {srv.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 font-mono text-[8.5px] sm:text-xs text-[#E3E6EF]/75 bg-[#28245F]/50 border border-[#28245F] rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1"
                      >
                        <span className="text-[#8EDAF2]">✦</span>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-1 sm:pt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 font-display text-[11px] sm:text-sm uppercase tracking-wider font-semibold text-[#8EDAF2] hover:text-white transition-colors"
                    >
                      <span>View full service details</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Controls & Scroll Hint */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-2 sm:pt-3 border-t border-[#28245F]/40 text-[11px] sm:text-xs font-mono text-[#62627A] flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToService(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="inline-flex items-center gap-1 uppercase tracking-wider text-[10px] sm:text-xs font-semibold text-[#E3E6EF] hover:text-[#8EDAF2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            <span className="text-[#28245F]">|</span>
            <button
              type="button"
              onClick={() => scrollToService(Math.min(SERVICES.length - 1, activeIndex + 1))}
              disabled={activeIndex === SERVICES.length - 1}
              className="inline-flex items-center gap-1 uppercase tracking-wider text-[10px] sm:text-xs font-semibold text-[#E3E6EF] hover:text-[#8EDAF2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#8EDAF2] animate-bounce">↓</span>
            <span className="hidden sm:inline">
              {activeIndex === SERVICES.length - 1
                ? "Scroll down to continue to Beats & Beyond"
                : `Keep scrolling down to reveal 0${activeIndex + 2}`}
            </span>
            <span className="sm:hidden text-[10px]">
              {activeIndex === SERVICES.length - 1 ? "Scroll down to continue" : "Scroll / swipe to explore"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
