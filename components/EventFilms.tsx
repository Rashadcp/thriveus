"use client";

import React, { useState, useRef } from "react";
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
    thumbnail: "https://img.youtube.com/vi/Mb3Y80sDdZY/hqdefault.jpg",
  },
];

function SafeThumbnail({ film }: { film: FilmItem }) {
  const [src, setSrc] = useState(film.thumbnail);

  return (
    <Image
      src={src}
      alt={film.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => {
        if (src.includes("maxresdefault")) {
          setSrc(`https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`);
        } else {
          setSrc("/images/corporate-ballroom-team.jpg");
        }
      }}
      className="object-cover object-center brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
}

export default function EventFilms() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [warmedIds, setWarmedIds] = useState<Record<string, boolean>>({});
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  // Pre-warm connections and iframes on card hover or touch
  const prewarm = (id: string) => {
    setWarmedIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const handlePlay = (film: FilmItem) => {
    // Pause any currently playing video first
    if (playingId && playingId !== film.id && iframeRefs.current[playingId]) {
      try {
        iframeRefs.current[playingId]?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
          "*"
        );
      } catch {}
    }

    setLoadingId(film.id);
    setPlayingId(film.id);
    prewarm(film.id);

    // If iframe is already mounted, trigger play immediately via postMessage
    const iframe = iframeRefs.current[film.id];
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: "" }),
          "*"
        );
      } catch {}
    }
  };

  const handleClose = (id: string) => {
    if (iframeRefs.current[id]?.contentWindow) {
      try {
        iframeRefs.current[id]?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
          "*"
        );
      } catch {}
    }
    setPlayingId(null);
    setLoadingId(null);
  };

  return (
    <section className="relative w-full bg-[#1C164B] py-20 sm:py-32 px-5 sm:px-12 overflow-hidden text-white border-b border-[#8A5FA8]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#8A5FA8]/30">
          <span className="font-light text-xs uppercase tracking-widest text-[#98DAF6] font-semibold block mb-2">
            EXPERIENCE IN MOTION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Live Experiences in Motion
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#EAE7DC]/80 font-light max-w-2xl leading-relaxed">
            Watch real corporate productions, private desert challenges, and arena formats captured live across Dubai and the UAE.
          </p>
        </div>

        {/* 3-Column Fitted Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {EVENT_FILMS.map((film) => {
            const isPlaying = playingId === film.id;
            const isWarmed = warmedIds[film.id] || isPlaying;
            const isLoading = loadingId === film.id;

            return (
              <div
                key={film.id}
                onMouseEnter={() => prewarm(film.id)}
                onTouchStart={() => prewarm(film.id)}
                className="group w-full rounded-2xl bg-[#1C164B]/60 border border-[#8A5FA8]/30 p-4 sm:p-5 transition-all duration-300 hover:border-[#98DAF6]/50 hover:bg-[#8A5FA8]/15 flex flex-col justify-between"
              >
                <div>
                  {/* Video Embed Frame / Poster Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#000000] border border-[#8A5FA8]/30">
                    {/* Pre-warmed / Active Iframe */}
                    {isWarmed && (
                      <iframe
                        ref={(el) => {
                          iframeRefs.current[film.id] = el;
                        }}
                        src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?enablejsapi=1&autoplay=${
                          isPlaying ? "1" : "0"
                        }&rel=0&modestbranding=1&playsinline=1`}
                        title={film.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="eager"
                        onLoad={() => {
                          if (isPlaying) {
                            setLoadingId(null);
                            try {
                              iframeRefs.current[film.id]?.contentWindow?.postMessage(
                                JSON.stringify({ event: "command", func: "playVideo", args: "" }),
                                "*"
                              );
                            } catch {}
                          }
                        }}
                        className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-300 z-10 ${
                          isPlaying && !isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                      />
                    )}

                    {/* Poster Overlay & Play Button (Keeps poster visible while loading so there is ZERO black screen) */}
                    <div
                      className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                        isPlaying && !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      {/* Poster Image */}
                      <SafeThumbnail film={film} />

                      {/* Dark Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#1C164B]/20 to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="font-display text-[10px] uppercase tracking-wider bg-[#1C164B]/90 backdrop-blur-md text-[#98DAF6] px-2.5 py-1 rounded-full border border-[#98DAF6]/30 font-semibold">
                          {film.tag}
                        </span>
                      </div>

                      {/* Play / Instant Loading Button */}
                      <button
                        type="button"
                        onClick={() => handlePlay(film)}
                        disabled={isLoading}
                        className="group/btn absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
                        aria-label={`Play film: ${film.title}`}
                      >
                        {isLoading ? (
                          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] shadow-[0_0_35px_rgba(152,218,246,0.9)] animate-pulse">
                            <div className="h-6 w-6 border-2 border-[#1C164B] border-t-transparent rounded-full animate-spin" />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] shadow-[0_0_25px_rgba(152,218,246,0.6)] transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#8A5FA8] group-hover/btn:text-white">
                            <svg
                              className="h-6 w-6 fill-current translate-x-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>

                    {/* Close / Return Button when playing */}
                    {isPlaying && (
                      <button
                        type="button"
                        onClick={() => handleClose(film.id)}
                        className="absolute top-2.5 right-2.5 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-[#1C164B]/90 backdrop-blur-md text-white/90 hover:text-[#1C164B] hover:bg-[#98DAF6] transition-colors border border-white/15 cursor-pointer shadow-md"
                        aria-label="Close video player"
                      >
                        <span className="text-xs font-bold leading-none">✕</span>
                      </button>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-5 space-y-2">
                    <span className="font-display text-xs text-[#98DAF6] block font-medium">
                      {film.meta}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#98DAF6] transition-colors leading-snug">
                      {film.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#EAE7DC]/75 font-light leading-relaxed pt-1">
                      {film.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Channel Link */}
                <div className="mt-5 pt-3 border-t border-[#8A5FA8]/30 flex items-center justify-end text-xs">
                  <a
                    href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#98DAF6] hover:text-[#8A5FA8] transition-colors inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
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
