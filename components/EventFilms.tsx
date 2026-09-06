"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FilmItem {
  id: string;
  youtubeId: string;
  tag: string;
  title: string;
  meta: string;
  description: string;
  thumbnail: string;
}

const EVENT_FILMS: FilmItem[] = [
  {
    id: "film-01",
    youtubeId: "97YFzz0Bk-Y",
    tag: "SIGNATURE FORMAT",
    title: "The Arena Games · Annual Staff Event",
    meta: "Dubai · 685 Guests",
    description:
      "A full arena production for the annual staff event of a global engineering consultancy. Our Squid Game inspired survival game format brought custom game zones, elimination rounds, and live scoring.",
    thumbnail: "https://img.youtube.com/vi/97YFzz0Bk-Y/maxresdefault.jpg",
  },
  {
    id: "film-02",
    youtubeId: "lYgZKVe1UIk",
    tag: "EXPERIENTIAL TEAM BUILDING",
    title: "Desert Team Challenge · Private Camp",
    meta: "Dubai Desert · Fully Private Immersion",
    description:
      "Flags, dunes, and strategic team dynamics at our fully private desert camp, delivering outcome-driven simulations and high-energy corporate engagement.",
    thumbnail: "https://img.youtube.com/vi/lYgZKVe1UIk/maxresdefault.jpg",
  },
  {
    id: "film-03",
    youtubeId: "Mb3Y80sDdZY",
    tag: "CORPORATE ENGAGEMENT",
    title: "Energy Sector Team Challenge",
    meta: "Dubai · Enterprise Workforce",
    description:
      "High-impact team building and collaborative problem-solving curated for the regional workforce of a leading global energy enterprise.",
    thumbnail: "https://img.youtube.com/vi/Mb3Y80sDdZY/maxresdefault.jpg",
  },
];

export default function EventFilms() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#12103D] py-20 sm:py-32 px-5 sm:px-12 overflow-hidden text-white border-b border-[#28245F]/50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#28245F]/60">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2 sm:mb-3">
            EVENT FILMS · ON-GROUND PRODUCTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Live Experiences in Motion
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#E3E6EF]/80 font-light max-w-2xl leading-relaxed">
            Watch real corporate productions, private desert challenges, and arena formats captured live across Dubai and the UAE.
          </p>
        </div>

        {/* 3-Column Fitted Grid - No horizontal scroll, fits all 3 cards perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {EVENT_FILMS.map((film) => {
            const isPlaying = playingId === film.id;

            return (
              <div
                key={film.id}
                className="group w-full rounded-2xl bg-[#28245F]/25 border border-[#28245F]/70 p-4 sm:p-5 transition-all duration-300 hover:border-[#8EDAF2]/50 hover:bg-[#28245F]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Video Embed Frame / Poster Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#12103D] border border-[#28245F]">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={film.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingId(film.id)}
                        className="group/btn relative h-full w-full block text-left focus:outline-none cursor-pointer"
                        aria-label={`Play film: ${film.title}`}
                      >
                        {/* Poster Thumbnail */}
                        <Image
                          src={film.thumbnail}
                          alt={film.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Dark Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12103D]/80 via-[#12103D]/20 to-transparent pointer-events-none" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="font-mono text-[9px] uppercase tracking-widest bg-[#12103D]/90 backdrop-blur-md text-[#8EDAF2] px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                            {film.tag}
                          </span>
                        </div>

                        {/* Play Button Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#8EDAF2] text-[#12103D] shadow-[0_0_25px_rgba(142,218,242,0.6)] transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white">
                            <svg
                              className="h-6 w-6 fill-current translate-x-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Click to Watch Hint */}
                        <div className="absolute bottom-2.5 right-3 font-mono text-[10px] tracking-wider uppercase text-white/90 bg-[#12103D]/80 px-2 py-0.5 rounded backdrop-blur-sm">
                          Click to Play
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-5 space-y-2">
                    <span className="font-mono text-xs text-[#8EDAF2] block font-medium">
                      {film.meta}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#8EDAF2] transition-colors leading-snug">
                      {film.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E3E6EF]/75 font-light leading-relaxed pt-1">
                      {film.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Channel Link */}
                <div className="mt-5 pt-3 border-t border-[#28245F]/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#62627A]">Thriveus Event Film</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8EDAF2] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
                  >
                    Open on YouTube →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
