"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";

interface ServiceItem {
  id: string;
  serviceNum: string;
  title: string;
  image: string;
  tag: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "team-building",
    serviceNum: "01",
    title: "TEAM BUILDING & ENGAGEMENT",
    tag: "TEAM BUILDING",
    image: "/images/team-building.jpg",
    description:
      "Fun team activities that build trust, teamwork, and strong company culture.",
  },
  {
    id: "immersive-venues",
    serviceNum: "02",
    title: "VENUE EXPERIENCES",
    tag: "VENUE EVENTS",
    image: "/images/featured-experience.jpg",
    description:
      "Exciting corporate events hosted in top venues across Dubai and the UAE.",
  },
  {
    id: "training-leadership",
    serviceNum: "03",
    title: "LEADERSHIP & TRAINING",
    tag: "TRAINING",
    image: "/images/leadership-training.jpg",
    description:
      "Practical workshops that help leaders and teams communicate and succeed.",
  },
  {
    id: "conferences-events",
    serviceNum: "04",
    title: "EVENTS & CONFERENCES",
    tag: "CONFERENCES",
    image: "/images/hero-event.jpg",
    description:
      "Complete event planning and production for summits, galas, and launches.",
  },
  {
    id: "retreats-incentives",
    serviceNum: "05",
    title: "COMPANY RETREATS",
    tag: "RETREATS",
    image: "/images/desert-retreat.jpg",
    description:
      "Custom offsite trips in beautiful locations for relaxation and team bonding.",
  },
  {
    id: "cultural-events",
    serviceNum: "06",
    title: "CORPORATE CELEBRATIONS",
    tag: "SPECIAL EVENTS",
    image: "/images/vip-lounge.jpg",
    description:
      "Memorable awards nights, Iftar gatherings, and celebrations for your brand.",
  },
];

export default function Services3DCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(250);
  const [activeIndex, setActiveIndex] = useState(0);

  const N = SERVICES.length;
  const angleStep = 360 / N; // 60 degrees per card

  // Framer Motion scroll tracking over the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Manual angle offset controlled via arrows, drag, or direct card clicks
  const manualOffset = useMotionValue(0);

  // Map scroll progress 0 -> 1 to 0 -> -360 degrees (1 full 3D revolution across cards)
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // Combine scroll-driven angle and manual user interaction
  const combinedAngle = useTransform(
    [scrollRotation, manualOffset],
    ([scroll, manual]) => (scroll as number) + (manual as number)
  );

  // Luxurious spring smoothing for heavy, fluid physical rotation
  const smoothRotation = useSpring(combinedAngle, {
    stiffness: 95,
    damping: 24,
    mass: 0.5,
  });

  // Dynamic responsive radius scaled proportionally for 100vh viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(175);
      } else if (window.innerWidth < 1024) {
        setRadius(215);
      } else {
        setRadius(250);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track active front-facing card index from rotation angle
  useEffect(() => {
    const unsubscribe = smoothRotation.on("change", (latest) => {
      const normalized = ((-latest % 360) + 360) % 360;
      const idx = Math.round(normalized / angleStep) % N;
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothRotation, angleStep, N]);

  // Navigation handlers
  const handlePrev = () => {
    const current = manualOffset.get();
    animate(manualOffset, current + angleStep, {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    });
  };

  const handleNext = () => {
    const current = manualOffset.get();
    animate(manualOffset, current - angleStep, {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    });
  };

  const handleSelectCard = (index: number) => {
    const currentTotal = combinedAngle.get();
    const currentNorm = ((-currentTotal % 360) + 360) % 360;
    const targetNorm = index * angleStep;
    let diff = targetNorm - currentNorm;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    const currentManual = manualOffset.get();
    animate(manualOffset, currentManual - diff, {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    });
  };

  // Drag / Swipe interaction
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startAngle.current = manualOffset.get();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    manualOffset.set(startAngle.current + delta * 0.35);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-[#12103D] text-white h-[300vh] border-b border-[#28245F]"
    >
      {/* Subtle Ambient Radial Lighting in Cyan & Lavender */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,218,242,0.12)_0%,rgba(139,123,192,0.05)_40%,transparent_65%)]" />

      {/* Pinned Sticky Viewport: perfectly fitted within 100vh with dedicated top navbar clearance */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-8 select-none">
        {/* 1. Header: Positioned with generous clearance below floating navbar */}
        <div className="text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-1">
            WHAT WE DELIVER
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">
            OUR SERVICES
          </h2>
        </div>

        {/* 2. 3D Cylindrical Carousel Viewport: sized so cards never touch header or footer */}
        <div
          className="relative h-[280px] sm:h-[300px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing my-auto"
          style={{
            perspective: "1200px",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* 3D Revolving Cylinder Ring */}
          <motion.div
            className="relative h-full w-full flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              rotateY: smoothRotation,
            }}
          >
            {SERVICES.map((service, index) => {
              const itemAngle = index * angleStep;
              const isCurrent = activeIndex === index;

              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectCard(index)}
                  className={`absolute w-[185px] sm:w-[215px] md:w-[225px] bg-[#28245F] text-white rounded-xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer ${
                    isCurrent
                      ? "border-[#8EDAF2] shadow-[0_20px_50px_rgba(142,218,242,0.25)] opacity-100 ring-1 ring-[#8EDAF2]/40"
                      : "border-[#E3E6EF]/15 shadow-[0_15px_35px_rgba(18,16,61,0.6)] opacity-65 hover:opacity-90 hover:border-[#8EDAF2]/50"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "visible", // Rear cards show mirrored perspective in 3D
                  }}
                >
                  {/* Top: Compact Media Container */}
                  <div className="relative h-[90px] sm:h-[100px] w-full bg-[#12103D]/60 overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 185px, 225px"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105 brightness-95"
                    />
                    <div className="absolute top-2 left-2 bg-[#12103D]/85 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider text-[#8EDAF2] border border-[#8EDAF2]/30">
                      {service.tag}
                    </div>
                  </div>

                  {/* Bottom: Compact Title & Clean Description */}
                  <div className="p-2.5 sm:p-3 flex flex-col justify-between bg-[#28245F] flex-1 min-h-[95px] sm:min-h-[105px]">
                    <div>
                      <h3 className="font-display text-[10.5px] sm:text-[11.5px] font-black uppercase tracking-tight text-white leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[9.5px] sm:text-[10px] text-[#E3E6EF]/80 leading-relaxed line-clamp-2 font-normal">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-[#E3E6EF]/15 flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-[#E3E6EF]/60">
                      <span className="text-[#8EDAF2] font-semibold">SERVICE // {service.serviceNum}</span>
                      <span className="text-white font-bold">THRIVEUS</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 3. Bottom Controls & Pagination: Clean separation with generous breathing room */}
        <div className="w-full max-w-sm flex flex-col items-center gap-2.5">
          {/* Active Service Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {SERVICES.map((srv, idx) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => handleSelectCard(idx)}
                aria-label={`Go to ${srv.title}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? "w-6 h-1.5 bg-[#8EDAF2] shadow-[0_0_10px_#8edaf2]"
                    : "w-1.5 h-1.5 bg-[#28245F] border border-[#E3E6EF]/30 hover:border-[#8EDAF2]"
                }`}
              />
            ))}
          </div>

          {/* Arrows & Active Counter */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#E3E6EF]/20 bg-[#28245F] text-white transition-all duration-300 hover:bg-[#8EDAF2] hover:text-[#12103D] hover:border-[#8EDAF2] active:scale-95 shadow-md backdrop-blur-sm"
              aria-label="Previous Service"
            >
              <span className="text-sm sm:text-base font-bold transition-transform duration-300 group-hover:-translate-x-0.5">
                ←
              </span>
            </button>

            <div className="text-center min-w-[140px] sm:min-w-[160px]">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E3E6EF] block font-semibold">
                SERVICE 0{activeIndex + 1} OF 0{N}
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#8EDAF2]/80 block">
                SCROLL · DRAG · CLICK
              </span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#E3E6EF]/20 bg-[#28245F] text-white transition-all duration-300 hover:bg-[#8EDAF2] hover:text-[#12103D] hover:border-[#8EDAF2] active:scale-95 shadow-md backdrop-blur-sm"
              aria-label="Next Service"
            >
              <span className="text-sm sm:text-base font-bold transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
