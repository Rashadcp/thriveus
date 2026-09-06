"use client";

import React from "react";
import Image from "next/image";

const SLIDES = [
  {
    title: "Global Corporate Summit",
    location: "Dubai Arena",
    category: "STAGE ARCHITECTURE",
    image: "/images/hero-event.jpg",
  },
  {
    title: "Avant-Garde Gala Dinner",
    location: "Burj Khalifa Suite",
    category: "SPATIAL LIGHTING",
    image: "/images/featured-experience.jpg",
  },
  {
    title: "Executive Desert Sanctuary",
    location: "Bab Al Shams",
    category: "LEADERSHIP RETREAT",
    image: "/images/desert-retreat.jpg",
  },
  {
    title: "Bespoke Experiential Lounge",
    location: "DIFC Corporate Build",
    category: "BAR & FABRICATION",
    image: "/images/vip-lounge.jpg",
  },
  {
    title: "Kinetic Laser Architecture",
    location: "Dubai World Trade Centre",
    category: "IMMERSIVE PRODUCTION",
    image: "/images/cta-texture.jpg",
  },
  // Duplicate for seamless infinite loop
  {
    title: "Global Corporate Summit",
    location: "Dubai Arena",
    category: "STAGE ARCHITECTURE",
    image: "/images/hero-event.jpg",
  },
  {
    title: "Avant-Garde Gala Dinner",
    location: "Burj Khalifa Suite",
    category: "SPATIAL LIGHTING",
    image: "/images/featured-experience.jpg",
  },
  {
    title: "Executive Desert Sanctuary",
    location: "Bab Al Shams",
    category: "LEADERSHIP RETREAT",
    image: "/images/desert-retreat.jpg",
  },
];

export default function HorizontalSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#12103D] py-12 sm:py-20 border-b border-[#E3E6EF]/15">
      {/* Section Sub-label */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 mb-8 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold">
          LIVE EXPERIENCES REEL
        </span>
        <span className="font-mono text-xs tracking-widest text-[#8EDAF2]/60 hidden sm:inline-block">
          ON-GROUND PRODUCTIONS · UAE & GCC
        </span>
      </div>

      {/* Infinite Horizontal Gliding Photo Reel */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="group relative h-[320px] sm:h-[420px] w-[340px] sm:w-[480px] flex-shrink-0 overflow-hidden rounded-3xl border border-[#E3E6EF]/15 bg-[#28245F] shadow-2xl transition-all duration-500 hover:border-[#8EDAF2]/60 hover:shadow-[0_10px_30px_rgba(142,218,242,0.15)]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 340px, 480px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-90"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12103D]/95 via-[#12103D]/40 to-transparent" />

              {/* Text Meta at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8EDAF2] font-bold">
                  {slide.category}
                </span>
                <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white">
                  {slide.title}
                </h3>
                <p className="mt-0.5 text-xs font-mono text-[#E3E6EF]/80">
                  {slide.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
