"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DISCIPLINES = [
  {
    num: "01",
    title: "Executive Summits",
    description: "Flagship arena & auditorium productions engineered for industry-defining announcements.",
  },
  {
    num: "02",
    title: "Experiential Galas",
    description: "Multisensory brand evenings combining kinetic lighting, spatial design, and fine dining.",
  },
  {
    num: "03",
    title: "Leadership Retreats",
    description: "Intimate, high-impact gatherings in bespoke UAE desert and private island sanctuaries.",
  },
  {
    num: "04",
    title: "NeoThrive Integration",
    description: "Proprietary event technology facilitating real-time networking and quantified organizational impact.",
  },
];

export default function BrandStatement() {
  const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

  const headlineLines = [
    "More Than Events.",
    "Experiences That Thrive.",
  ];

  return (
    <section className="relative w-full bg-[#F7F9FC] py-32 sm:py-44 px-6 sm:px-12 overflow-hidden text-[#17163F]">
      <div className="mx-auto max-w-7xl">
        {/* Horizontal Accent Line growing from 0% to 100% */}
        <div className="mb-16 sm:mb-24 w-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.4, ease: EASE_LUXURY }}
            style={{ originX: 0 }}
            className="h-[1.5px] w-full bg-gradient-to-r from-[#12103D]/30 via-[#8EDAF2] to-[#8B7BC0]/30"
          />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Metadata Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE_LUXURY }}
              className="inline-flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#28245F]">
                WHY THRIVEUS
              </span>
            </motion.div>
          </div>

          {/* Right Core Manifesto Column */}
          <div className="lg:col-span-9 max-w-4xl">
            {/* Masked Headline Reveal */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#17163F]">
              {headlineLines.map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: "115%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + idx * 0.15,
                      ease: EASE_LUXURY,
                    }}
                    className="block transform-gpu will-change-transform"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE_LUXURY }}
              className="mt-8 sm:mt-12 max-w-3xl text-lg sm:text-2xl font-normal leading-relaxed text-[#62627A]"
            >
              We create purposeful experiences that bring people together and move organizations forward.
            </motion.p>

            {/* Editorial Link */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE_LUXURY }}
              className="mt-8 sm:mt-12"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-display text-sm sm:text-base font-semibold tracking-wide text-[#17163F] transition-colors hover:text-[#8B7BC0]"
              >
                <span>Discover Thriveus</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 4 Experiential Discipline Pillars */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-[#E3E6EF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DISCIPLINES.map((disc, idx) => (
            <motion.div
              key={disc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: EASE_LUXURY }}
              className="group p-6 rounded-2xl bg-white border border-[#E3E6EF] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#8EDAF2]"
            >
              <span className="font-mono text-xs font-bold text-[#8B7BC0]">
                {disc.num}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-[#17163F] group-hover:text-[#28245F] transition-colors">
                {disc.title}
              </h3>
              <p className="mt-2 text-sm text-[#62627A] leading-relaxed">
                {disc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
