"use client";

import React from "react";
import MagneticButton from "./ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#1C164B] py-20 sm:py-36 lg:py-48 px-5 sm:px-12 overflow-hidden text-white border-t border-[#8A5FA8]/30">
      {/* 3D Curved Ambient Gradient Lighting matching visual language */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-[#8A5FA8]/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[350px] h-[200px] bg-[#98DAF6]/15 blur-[100px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Large, Confident Headline with The Seasons Italic Accent */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Ready to Create
          <br />
          Something{" "}
          <span className="font-seasons italic font-bold text-[#98DAF6]">
            Remarkable
          </span>
          ?
        </h2>

        {/* Supporting Line */}
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-base sm:text-2xl font-light leading-relaxed text-[#EAE7DC]/90">
          Let&apos;s design an experience your people will remember.
        </p>

        {/* Single Clear Primary CTA */}
        <div className="mt-8 sm:mt-14 flex justify-center">
          <MagneticButton
            href="/contact"
            variant="primary"
            className="!py-3.5 sm:!py-4 !px-8 sm:!px-10 text-xs sm:text-sm !bg-[#98DAF6] !text-[#1C164B] hover:!bg-[#8A5FA8] hover:!text-white transition-all shadow-[0_0_25px_rgba(152,218,246,0.4)]"
          >
            Start a Conversation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
