"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

export default function FinalCTA() {
  const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative w-full bg-[#12103D] py-36 sm:py-48 px-6 sm:px-12 overflow-hidden text-white">
      {/* Background Event Lighting Texture with Dark Premium Gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/cta-texture.jpg"
          alt="Event Stage Atmosphere Texture"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12103D] via-[#28245F]/85 to-[#12103D]" />
      </div>

      {/* Dark Premium Brand Gradient Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,218,242,0.08)_0%,rgba(139,123,192,0.06)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Subtle Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="inline-flex items-center gap-2.5 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2] shadow-[0_0_8px_#8edaf2]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#8EDAF2]">
            START YOUR JOURNEY
          </span>
        </motion.div>

        {/* Masked Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white">
          <span className="block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, ease: EASE_LUXURY }}
              className="block transform-gpu will-change-transform"
            >
              Ready to Create
            </motion.span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, delay: 0.14, ease: EASE_LUXURY }}
              className="block transform-gpu will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8EDAF2] to-[#8B7BC0]"
            >
              Something Remarkable?
            </motion.span>
          </span>
        </h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE_LUXURY }}
          className="mt-8 mx-auto max-w-2xl text-lg sm:text-2xl font-normal leading-relaxed text-[#E3E6EF]/90"
        >
          Let&apos;s design an experience your people will remember.
        </motion.p>

        {/* Action Pair */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE_LUXURY }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          <MagneticButton
            href="/contact"
            variant="primary"
            className="!py-4 !px-9 text-sm"
          >
            Let&apos;s Create
          </MagneticButton>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-display text-sm sm:text-base font-semibold tracking-wide text-[#E3E6EF] hover:text-[#8EDAF2] transition-colors py-3 px-6"
          >
            <span>Start a Conversation</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-[#8B7BC0]">
              →
            </span>
          </Link>
        </motion.div>

        {/* Concierge Assurance Pill */}
        <div className="mt-16 pt-8 border-t border-[#28245F] inline-flex items-center gap-6 text-xs font-mono text-[#8EDAF2]/80">
          <span>DIRECT DESK: curate@thriveus.ae</span>
          <span className="hidden sm:inline-block text-[#28245F]">·</span>
          <span className="hidden sm:inline-block text-[#E3E6EF]/70">TYPICAL RESPONSE: WITHIN 4 HOURS</span>
        </div>
      </div>
    </section>
  );
}
