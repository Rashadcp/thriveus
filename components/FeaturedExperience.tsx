"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturedExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["3%", "-6%"]);

  const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#12103D] py-28 sm:py-40 px-6 sm:px-12 overflow-hidden text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header Meta */}
        <div className="mb-10 sm:mb-14 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#8EDAF2]">
              FEATURED EXPERIENCE
            </span>
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#8EDAF2]/70 hidden sm:inline-block">
            DUBAI, UAE · FLAGSHIP GALA CASE STUDY
          </span>
        </div>

        {/* The Heroic Single Experience Showcase */}
        <Link
          href="/our-work"
          className="group relative block w-full outline-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ clipPath: "inset(6% 0% 6% 0% round 16px)", opacity: 0.85 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.4, ease: EASE_LUXURY }}
            className="relative h-[68vh] sm:h-[82vh] w-full overflow-hidden rounded-3xl bg-[#28245F] border border-[#8EDAF2]/20 shadow-[0_24px_80px_rgba(18,16,61,0.8)]"
          >
            {/* Parallax Image Layer */}
            <motion.div
              style={{ y: imageY }}
              className="relative h-[116%] w-full -top-[8%]"
            >
              <motion.div
                animate={{ scale: isHovered ? 1.04 : 1.0 }}
                transition={{ duration: 1.0, ease: EASE_LUXURY }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src="/images/featured-experience.jpg"
                  alt="Thriveus Featured Corporate Gala Experience in Dubai"
                  fill
                  sizes="(max-width: 768px) 100vw, 1400px"
                  className="object-cover object-center brightness-95"
                />
              </motion.div>
            </motion.div>

            {/* Dark Luxury Vignette Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12103D] via-[#12103D]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#12103D]/70 via-transparent to-transparent" />

            {/* Top Right Executive Badges */}
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center gap-3">
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#12103D]/60 px-4 py-2 backdrop-blur-md text-xs font-mono text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
                <span>1,200 EXECUTIVES</span>
              </div>
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-[#12103D]/60 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#8EDAF2] group-hover:bg-[#28245F]">
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            {/* Anchored Text Content */}
            <motion.div
              style={{ y: textY }}
              className="absolute bottom-0 left-0 right-0 p-8 sm:p-14 lg:p-16 z-10"
            >
              <div className="max-w-3xl">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#8EDAF2]">
                  Global Gala & Kinetic Light Architecture
                </span>

                <h3 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.025em] text-white">
                  Experiences Worth Remembering.
                </h3>

                <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-xl font-normal leading-relaxed text-[#E3E6EF]">
                  From corporate gatherings to immersive team experiences, every detail is designed with purpose.
                </p>

                <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 font-display text-sm sm:text-base font-semibold tracking-wide text-white transition-colors group-hover:text-[#8EDAF2]">
                  <span>Explore Our Work</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
