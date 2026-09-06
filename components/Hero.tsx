"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[580px] w-full overflow-hidden bg-[#0B0A0D] select-none flex items-center justify-center">
      {/* Fullscreen Background Video with Fast-Start Mobile & Desktop Sources */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-event.jpg"
          className="h-full w-full object-cover object-center brightness-[0.78] contrast-[1.05]"
        >
          <source
            src="/hero-video-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Ink Shade Overlays */}
        <div className="absolute inset-0 bg-[#0B0A0D]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0D] via-transparent to-[#0B0A0D]/60 pointer-events-none" />
      </div>

      {/* Confident Editorial Hero Content - Responsive for All Mobile Screens */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center pt-16 sm:pt-0">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]">
          Curating Impact,
          <br className="hidden sm:inline" />
          {" "}One Experience at a Time.
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
          Corporate events, executive summits, and experiential productions across Dubai and the UAE.
        </p>

        {/* Mobile-Friendly CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-[#0B0A0D] font-display text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 hover:bg-[#1782A8] hover:text-white transition-colors duration-300 shadow-md"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/25 text-white font-display text-xs sm:text-sm font-medium tracking-wider uppercase px-7 py-3.5 hover:border-[#1782A8] hover:text-[#1782A8] transition-colors duration-300"
          >
            Let&apos;s Create
          </Link>
        </div>
      </div>
    </section>
  );
}
