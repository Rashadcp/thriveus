"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#12103D] select-none flex items-center justify-center">
      {/* 100vh Fullscreen Background Video with Brand Midnight Navy Dark Shade */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-event.jpg"
          className="h-full w-full object-cover object-center brightness-[0.78] contrast-[1.05]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/Video%20Project.mp4" type="video/mp4" />
        </video>

        {/* Midnight Navy Shade Overlays */}
        <div className="absolute inset-0 bg-[#12103D]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12103D] via-transparent to-[#12103D]/60 pointer-events-none" />
      </div>

      {/* Confident Editorial Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]">
          Curating Impact,
          <br />
          One Experience at a Time.
        </h1>
        <p className="mt-6 text-base sm:text-xl text-[#E3E6EF]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Corporate events, executive summits, and experiential productions across the UAE.
        </p>
      </div>
    </section>
  );
}
