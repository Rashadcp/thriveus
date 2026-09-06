"use client";

import React from "react";
import MagneticButton from "./ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#0B0A0D] py-20 sm:py-36 lg:py-48 px-5 sm:px-12 overflow-hidden text-white border-t border-[#242057]/50">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Large, Confident Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Ready to Create
          <br />
          Something Remarkable?
        </h2>

        {/* Supporting Line */}
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-base sm:text-2xl font-light leading-relaxed text-white/85">
          Let&apos;s design an experience your people will remember.
        </p>

        {/* Single Clear Primary CTA */}
        <div className="mt-8 sm:mt-14 flex justify-center">
          <MagneticButton
            href="/contact"
            variant="primary"
            className="!py-3.5 sm:!py-4 !px-8 sm:!px-10 text-xs sm:text-sm"
          >
            Start a Conversation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
