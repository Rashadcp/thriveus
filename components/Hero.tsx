"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[580px] w-full overflow-hidden bg-[#1C164B] select-none flex items-center justify-center">
      {/* Fullscreen Background Video with Fast-Start Mobile & Desktop Sources */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/corporate-ballroom-team.jpg"
          className="h-full w-full object-cover object-center brightness-[0.88] contrast-[1.06]"
        >
          <source
            src="/hero-video-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Brand Indigo Overlays & 3D Atmospheric Glow */}
        <div className="absolute inset-0 bg-[#1C164B]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C164B] via-transparent to-[#1C164B]/70 pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#8A5FA8]/20 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Editorial Hero Content with Helvetica Now & The Seasons Italic Accent */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center pt-20 sm:pt-20">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]">
          Curating{" "}
          <span className="font-seasons italic font-bold text-[#98DAF6]">
            Impact
          </span>
          ,
          <br className="hidden sm:inline" />
          {" "}One{" "}
          <span className="font-seasons italic font-bold text-[#8A5FA8]">
            Experience
          </span>{" "}
          at a Time.
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#EAE7DC]/90 max-w-2xl mx-auto font-light leading-relaxed">
          Corporate events, executive summits, and experiential productions across Dubai and the UAE.
        </p>

        {/* Brand Aligned CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] font-display text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 hover:bg-[#8A5FA8] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(152,218,246,0.4)]"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#98DAF6]/40 text-[#EAE7DC] font-display text-xs sm:text-sm font-medium tracking-wider uppercase px-7 py-3.5 hover:border-[#98DAF6] hover:text-[#98DAF6] transition-colors duration-300 backdrop-blur-sm"
          >
            Let&apos;s Create
          </Link>
        </div>
      </div>
    </section>
  );
}
