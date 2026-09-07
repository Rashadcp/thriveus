"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export interface ProductionItem {
  id: string;
  refCode: string;
  tag: string;
  category: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  youtubeId: string;
}

export const PRODUCTIONS: ProductionItem[] = [
  {
    id: "work-01-arena-games",
    refCode: "V1",
    tag: "SIGNATURE FORMAT",
    category: "Signature Formats",
    title: "The Arena Games · Annual Staff Event",
    meta: "685+ guests · Dubai · February 2026",
    description:
      "A full arena production for the annual staff event of a global engineering consultancy. Our Squid Game inspired arena format brought custom game zones, elimination style rounds, live scoring and a survival themed storyline that turned 685 colleagues into competing squads for one unforgettable afternoon.",
    image: "https://i.ytimg.com/vi/97YFzz0Bk-Y/maxresdefault.jpg",
    youtubeId: "97YFzz0Bk-Y",
  },
  {
    id: "work-02-supplier-summit",
    refCode: "V2",
    tag: "CONFERENCES & SUMMITS",
    category: "Conferences & Summits",
    title: "Supplier Summit · Global Conference & Showcase",
    meta: "Enterprise Partners · Dubai",
    description:
      "A premier supplier summit and conference for Veolia Water Technologies, featuring branded mainstage presentation environments, interactive supplier showcase booths, panel discussion setups, and seamless bilingual audiovisual broadcasting.",
    image: "https://i.ytimg.com/vi/yHJsQIrh8S0/maxresdefault.jpg",
    youtubeId: "yHJsQIrh8S0",
  },
  {
    id: "work-03-year-end-party",
    refCode: "V3",
    tag: "CORPORATE CELEBRATIONS",
    category: "Celebrations & Galas",
    title: "White & Glam Year-End Party · Corporate Celebration",
    meta: "300+ guests · Dubai",
    description:
      "An immersive all-white themed corporate gala evening, pairing bespoke crystal and monochromatic ambient lighting with live acoustic entertainment, curated dining courses, and custom recognition moments for employees.",
    image: "https://i.ytimg.com/vi/DTFL_27sPoo/maxresdefault.jpg",
    youtubeId: "DTFL_27sPoo",
  },
  {
    id: "work-04-channel-partner-award",
    refCode: "V4",
    tag: "RECOGNITION EVENING",
    category: "Celebrations & Galas",
    title: "Channel Partner Award Night · Recognition Evening",
    meta: "200 guests · January 2026",
    description:
      "A recognition evening for a free zone's channel partner network: staging, entertainment, custom awards and more than 200 curated gift boxes, engineered so every partner left feeling individually acknowledged.",
    image: "https://i.ytimg.com/vi/uUE_j7b9VEg/maxresdefault.jpg",
    youtubeId: "uUE_j7b9VEg",
  },
  {
    id: "work-05-onam-celebration",
    refCode: "V5",
    tag: "CULTURAL FESTIVAL",
    category: "Cultural & Community",
    title: "Onam Cultural Celebration · Workforce Festival",
    meta: "350 guests · UAE",
    description:
      "A full scale Onam celebration for an engineering firm's workforce, from elaborate pookkalam floral art and authentic sadhya dining service to traditional cultural performances and interactive team games, delivered with genuine cultural authenticity.",
    image: "https://i.ytimg.com/vi/efSenVMW-OA/maxresdefault.jpg",
    youtubeId: "efSenVMW-OA",
  },
  {
    id: "work-06-desert-challenge",
    refCode: "V6",
    tag: "EXPERIENTIAL TEAM BUILDING",
    category: "Team Challenges",
    title: "Desert Physical Challenge · Private Camp Immersion",
    meta: "Enterprise Teams · Private Desert Camp",
    description:
      "Flags, dunes, and strategic team dynamics at our fully private desert camp in the Dubai dunes, delivering outcome-driven survival simulations, tactical physical relays, and high-energy collaborative team problem solving.",
    image: "https://i.ytimg.com/vi/lYgZKVe1UIk/maxresdefault.jpg",
    youtubeId: "lYgZKVe1UIk",
  },
  {
    id: "work-07-beach-programme",
    refCode: "V7",
    tag: "OUTDOOR TEAM BUILDING",
    category: "Team Challenges",
    title: "Beach Team Programme · Coastal Challenge",
    meta: "Halian UAE · Dubai Coast",
    description:
      "A high-octane seaside corporate team building expedition on the Dubai coastline, featuring custom sand obstacle courses, collaborative water relays, and rapid communication challenges designed to foster camaraderie.",
    image: "https://i.ytimg.com/vi/ktB7HbTs0Gw/maxresdefault.jpg",
    youtubeId: "ktB7HbTs0Gw",
  },
  {
    id: "work-08-mountain-retreat",
    refCode: "RETREAT",
    tag: "EXECUTIVE RETREAT",
    category: "Team Challenges",
    title: "Mountain Leadership Retreat · Executive Summit",
    meta: "Senior Leadership Team · Al Ain",
    description:
      "A leadership retreat in the foothills of Jebel Hafeet for the regional leadership of a global energy services firm, pairing structured strategy sessions with shared meals and unhurried executive conversation.",
    image: "https://i.ytimg.com/vi/LL4fVOxpfpg/maxresdefault.jpg",
    youtubeId: "LL4fVOxpfpg",
  },
];

function SafeThumbnail({ prod }: { prod: ProductionItem }) {
  const [src, setSrc] = useState(prod.image);

  return (
    <Image
      src={src}
      alt={prod.title}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      onError={() => {
        if (src.includes("maxresdefault")) {
          setSrc(`https://i.ytimg.com/vi/${prod.youtubeId}/hqdefault.jpg`);
        } else {
          setSrc("/images/arena-games-hero.jpg");
        }
      }}
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
}

export default function WorksClient() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  const handlePlay = (prod: ProductionItem) => {
    // If another video is already playing, pause it first
    if (playingId && playingId !== prod.id && iframeRefs.current[playingId]) {
      try {
        iframeRefs.current[playingId]?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
          "*"
        );
      } catch {}
    }

    setLoadingId(prod.id);
    setPlayingId(prod.id);
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
    <>
      {/* Header Section */}
      <section className="relative pt-28 sm:pt-44 pb-12 sm:pb-16 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#8A5FA8]/30">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xs uppercase tracking-widest text-[#98DAF6] font-semibold">
                PORTFOLIO &amp; PRODUCTIONS
              </span>
              <span className="text-[#8A5FA8]">•</span>
              <span className="text-xs uppercase tracking-widest text-[#EAE7DC]/70 font-mono">
                {PRODUCTIONS.length} CURATED EXPERIENCES
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Recent Productions
            </h1>
            <p className="text-sm sm:text-lg text-[#EAE7DC]/85 leading-relaxed font-light max-w-2xl">
              Curated corporate events delivered across Dubai, Abu Dhabi, and the wider UAE. Each production is documented with high-definition event films captured live on location.
            </p>
          </div>

          {/* YouTube Channel Banner */}
          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@ThriveusEvents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#8A5FA8]/20 hover:bg-[#8A5FA8]/35 border border-[#8A5FA8]/40 hover:border-[#98DAF6]/60 transition-all duration-300 group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF0000] text-white">
                <svg className="h-4 w-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#98DAF6] block font-semibold">
                  Official Channel
                </span>
                <span className="text-xs text-white font-medium group-hover:text-[#98DAF6] transition-colors">
                  @ThriveusEvents on YouTube ↗
                </span>
              </div>
            </a>
          </div>
        </div>

      </section>

      {/* Productions Grid */}
      <section className="py-12 sm:py-20 px-5 sm:px-12 mx-auto max-w-7xl w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PRODUCTIONS.map((prod) => {
            const isPlaying = playingId === prod.id;
            const isLoading = loadingId === prod.id;

            return (
              <div
                key={prod.id}
                className="group flex flex-col justify-between bg-[#1C164B]/60 rounded-2xl p-4 sm:p-5 border border-[#8A5FA8]/30 hover:border-[#98DAF6]/50 transition-all duration-300"
              >
                <div>
                  {/* Media Container: Photo by default; YouTube embed on click */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#000000] border border-[#8A5FA8]/30">
                    {/* Active YouTube Iframe using privacy-enhanced youtube-nocookie.com */}
                    {isPlaying && (
                      <iframe
                        ref={(el) => {
                          iframeRefs.current[prod.id] = el;
                        }}
                        src={`https://www.youtube-nocookie.com/embed/${prod.youtubeId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={prod.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        onLoad={() => {
                          setLoadingId(null);
                        }}
                        className={`absolute inset-0 h-full w-full border-0 z-10 transition-opacity duration-300 ${
                          !isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                      />
                    )}

                    {/* Photo Poster & Click-to-Play Overlay */}
                    <div
                      className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                        isPlaying && !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      {/* Official YouTube Thumbnail */}
                      <SafeThumbnail prod={prod} />

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#1C164B]/25 to-transparent pointer-events-none" />

                      {/* Badges: Category & Ref Code */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                        <span className="font-display text-[10px] uppercase tracking-wider bg-[#1C164B]/90 backdrop-blur-md text-[#98DAF6] px-2.5 py-1 rounded-full border border-[#98DAF6]/30 font-semibold">
                          {prod.tag}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-[#8A5FA8]/85 backdrop-blur-md text-[#EAE7DC] px-2 py-1 rounded-full font-bold">
                          {prod.refCode}
                        </span>
                      </div>

                      {/* Click-to-Play Button */}
                      <button
                        type="button"
                        onClick={() => handlePlay(prod)}
                        disabled={isLoading}
                        className="group/btn absolute inset-0 flex flex-col items-center justify-center cursor-pointer focus:outline-none"
                        aria-label={`Watch event film for ${prod.title}`}
                      >
                        {isLoading ? (
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] shadow-[0_0_35px_rgba(152,218,246,0.9)] animate-pulse">
                            <div className="h-6 w-6 border-2 border-[#1C164B] border-t-transparent rounded-full animate-spin" />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] shadow-[0_0_25px_rgba(152,218,246,0.6)] transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#8A5FA8] group-hover/btn:text-white">
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6 fill-current translate-x-0.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <span className="text-[11px] uppercase tracking-wider text-white/95 font-semibold bg-[#1C164B]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20 shadow-md group-hover/btn:border-[#98DAF6]">
                              Watch Film
                            </span>
                          </div>
                        )}
                      </button>
                    </div>

                    {/* Close / Return to Photo button when video is playing */}
                    {isPlaying && (
                      <button
                        type="button"
                        onClick={() => handleClose(prod.id)}
                        className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1C164B]/90 backdrop-blur-md text-white/95 hover:text-[#1C164B] hover:bg-[#98DAF6] transition-colors border border-white/20 text-xs font-semibold cursor-pointer shadow-lg"
                        aria-label="Return to photo view"
                      >
                        <span>✕</span>
                        <span className="text-[10px] uppercase tracking-wider">Photo</span>
                      </button>
                    )}
                  </div>

                  {/* Production Content Details */}
                  <div className="mt-4 sm:mt-5 space-y-2">
                    <span className="font-display text-xs text-[#98DAF6] block font-medium">
                      {prod.meta}
                    </span>

                    <h2 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#98DAF6] transition-colors leading-snug">
                      {prod.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#EAE7DC]/75 font-light leading-relaxed pt-1">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#8A5FA8]/25 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => handlePlay(prod)}
                    className="text-[#98DAF6] hover:text-white transition-colors inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[11px] cursor-pointer"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>{isPlaying ? "Replay Film" : "Play Film"}</span>
                  </button>

                  <a
                    href={`https://www.youtube.com/watch?v=${prod.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EAE7DC]/60 hover:text-[#98DAF6] transition-colors inline-flex items-center gap-1 font-medium text-[11px]"
                  >
                    YouTube ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
