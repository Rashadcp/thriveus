"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F7F9FC] py-20 sm:py-32 px-5 sm:px-12 overflow-hidden text-[#17163F] border-b border-[#E3E6EF]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Narrative Column with Elegant Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#62627A] font-semibold block mb-3 sm:mb-4">
                ABOUT THRIVEUS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17163F] leading-[1.1]">
                Everyone Deserves to Thrive—
                <br className="hidden sm:inline" />
                {" "}Individuals &amp; Organizations.
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-lg leading-relaxed font-normal">
              <p className="text-[#17163F] font-normal">
                At Thriveus, we believe everyone deserves to thrive. We create engaging team-building activities, leadership workshops, and corporate events across Dubai and the UAE.
              </p>
              <p className="text-[#62627A] text-xs sm:text-base leading-relaxed">
                Our goal is simple: to bring teams together, build strong workplace culture, and create memorable corporate experiences.
              </p>
            </div>

            <div className="pt-2 sm:pt-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 font-display text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#12103D] hover:text-[#28245F] transition-colors"
              >
                <span>Read Full Story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-[#8B7BC0]">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Pure Image Frame with Subtle Scale Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] sm:h-[480px] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E3E6EF] bg-white shadow-[0_20px_50px_rgba(18,16,61,0.08)]">
              <Image
                src="/images/team-building.jpg"
                alt="Thriveus Corporate Workshop in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center brightness-100 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12103D]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
