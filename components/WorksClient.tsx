"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductionItem {
  id: string;
  refCode?: string;
  tag: string;
  category: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  youtubeId?: string;
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
    image: "/images/arena-games-squidgame.jpg",
    youtubeId: "97YFzz0Bk-Y",
  },
  {
    id: "work-02-megayacht",
    refCode: "PHOTO",
    tag: "MARINE EXPERIENCE",
    category: "Marine & Experiential",
    title: "Rhythm & Revelry · Luxury Megayacht Experience",
    meta: "275 guests · Dubai Marina",
    description:
      "A private megayacht takeover combining live entertainment, curated dining and open water views of the Dubai skyline, produced end to end from charter to final guest departure.",
    image: "/images/resort-leadership-circle.jpg",
  },
  {
    id: "work-03-amazing-race",
    refCode: "PHOTO",
    tag: "CHALLENGE RACE",
    category: "Team Challenges",
    title: "The Amazing Race · City Edition",
    meta: "210+ participants · Across Dubai",
    description:
      "A multi location urban challenge race for a global logistics leader, moving teams through checkpoints across the city with live tracking, coordinated transport and a finale celebration.",
    image: "/images/team-challenge-burj.jpg",
  },
  {
    id: "work-04-mountain-retreat",
    refCode: "PHOTO",
    tag: "EXECUTIVE RETREAT",
    category: "Executive Retreats",
    title: "Mountain Leadership Retreat",
    meta: "Senior leadership team · Al Ain",
    description:
      "A leadership retreat in the foothills of Jebel Hafeet for the regional leadership of a global energy services firm, pairing structured strategy sessions with the shared meals and unhurried conversation senior teams rarely get.",
    image: "/images/alain-mountain-summit.jpg",
  },
  {
    id: "work-05-channel-partner-award",
    refCode: "V4",
    tag: "RECOGNITION EVENING",
    category: "Celebrations & Galas",
    title: "Channel Partner Award Night",
    meta: "200 guests · January 2026",
    description:
      "A recognition evening for a free zone's channel partner network: staging, entertainment, custom awards and more than 200 curated gift boxes, engineered so every partner left feeling individually acknowledged.",
    image: "/images/gala-dinner-ballroom.jpg",
    youtubeId: "uUE_j7b9VEg",
  },
  {
    id: "work-06-onam-celebration",
    refCode: "V5",
    tag: "CULTURAL FESTIVAL",
    category: "Cultural & Community",
    title: "Onam Cultural Celebration",
    meta: "350 guests",
    description:
      "A full scale Onam celebration for an engineering firm's workforce, from pookkalam and sadhya service to traditional performances, delivered with the cultural precision that makes these festivals feel owned rather than outsourced.",
    image: "/images/cultural-drum-celebration.jpg",
    youtubeId: "efSenVMW-OA",
  },
];

function SafeThumbnail({ prod }: { prod: ProductionItem }) {
  const [src, setSrc] = useState(prod.image);

  return (
    <Image
      src={src}
      alt={prod.title}
      fill
      quality={95}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => {
        if (src.includes("maxresdefault") && prod.youtubeId) {
          setSrc(`https://i.ytimg.com/vi/${prod.youtubeId}/hqdefault.jpg`);
        } else {
          setSrc("/images/corporate-ballroom-team.jpg");
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
    if (!prod.youtubeId) return;

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
      <section className="relative pt-28 sm:pt-44 pb-12 sm:pb-16 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#DEDACB]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xs uppercase tracking-widest text-[#8A5FA8] font-semibold">
                PORTFOLIO &amp; PRODUCTIONS
              </span>
              <span className="text-[#8A5FA8]">•</span>
              <span className="text-xs uppercase tracking-widest text-[#5B5578] font-mono">
                {PRODUCTIONS.length} CURATED EXPERIENCES
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C164B] leading-[1.1]">
              Recent Productions
            </h1>
            <p className="text-sm sm:text-lg text-[#5B5578] leading-relaxed font-light max-w-2xl">
              Curated corporate events delivered across Dubai, Abu Dhabi, and the wider UAE. Each production is documented with high-definition event films captured live on location.
            </p>
          </div>

          {/* YouTube Channel Banner */}
          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@ThriveusEvents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#F2F0E8] hover:bg-[#EAE7DC] border border-[#DEDACB] hover:border-[#8A5FA8]/60 transition-all duration-300 group shadow-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF0000] text-white">
                <svg className="h-4 w-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#8A5FA8] block font-semibold">
                  Official Channel
                </span>
                <span className="text-xs text-[#1C164B] font-medium group-hover:text-[#8A5FA8] transition-colors">
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
            const hasVideo = Boolean(prod.youtubeId);

            return (
              <div
                key={prod.id}
                className="group flex flex-col justify-between bg-[#F2F0E8] rounded-2xl p-4 sm:p-5 border border-[#DEDACB] hover:border-[#8A5FA8]/50 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Media Container: Photo by default; YouTube embed on click */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#EAE7DC] border border-[#DEDACB]">
                    {/* Active YouTube Iframe using privacy-enhanced youtube-nocookie.com */}
                    {hasVideo && isPlaying && (
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
                        hasVideo && isPlaying && !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      {/* Photo Thumbnail */}
                      <SafeThumbnail prod={prod} />

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C164B]/80 via-[#1C164B]/20 to-transparent pointer-events-none" />

                      {/* Click-to-Play Button if video is present */}
                      {hasVideo && (
                        <button
                          type="button"
                          onClick={() => handlePlay(prod)}
                          disabled={isLoading}
                          className="group/btn absolute inset-0 flex flex-col items-center justify-center cursor-pointer focus:outline-none"
                          aria-label={`Watch event film for ${prod.title}`}
                        >
                          {isLoading ? (
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1C164B] text-[#EAE7DC] shadow-lg animate-pulse">
                              <div className="h-6 w-6 border-2 border-[#EAE7DC] border-t-transparent rounded-full animate-spin" />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1C164B] text-[#EAE7DC] shadow-lg transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#8A5FA8] group-hover/btn:text-white">
                                <svg
                                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current translate-x-0.5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <span className="text-[11px] uppercase tracking-wider text-white font-semibold bg-[#1C164B]/85 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20 shadow-md group-hover/btn:border-[#8A5FA8]">
                                Watch Film
                              </span>
                            </div>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Close / Return to Photo button when video is playing */}
                    {hasVideo && isPlaying && (
                      <button
                        type="button"
                        onClick={() => handleClose(prod.id)}
                        className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1C164B]/90 backdrop-blur-md text-white hover:text-white hover:bg-[#8A5FA8] transition-colors border border-white/20 text-xs font-semibold cursor-pointer shadow-lg"
                        aria-label="Return to photo view"
                      >
                        <span>✕</span>
                        <span className="text-[10px] uppercase tracking-wider">Photo</span>
                      </button>
                    )}
                  </div>

                  {/* Production Content Details */}
                  <div className="mt-4 sm:mt-5 space-y-2">
                    <span className="font-display text-xs text-[#8A5FA8] block font-semibold">
                      {prod.meta}
                    </span>

                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#1C164B] group-hover:text-[#8A5FA8] transition-colors leading-snug">
                      {prod.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5B5578] font-light leading-relaxed pt-1">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#DEDACB] flex items-center justify-between text-xs">
                  {hasVideo ? (
                    <button
                      type="button"
                      onClick={() => handlePlay(prod)}
                      className="text-[#1C164B] hover:text-[#8A5FA8] transition-colors inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[11px] cursor-pointer"
                    >
                      <svg className="h-3 w-3 fill-current text-[#8A5FA8]" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>{isPlaying ? "Replay Film" : "Play Film"}</span>
                    </button>
                  ) : (
                    <span className="text-[#8A5FA8] inline-flex items-center gap-1.5 font-medium uppercase tracking-wider text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8A5FA8]" />
                      Photo Feature
                    </span>
                  )}

                  {hasVideo ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${prod.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5B5578] hover:text-[#1C164B] transition-colors inline-flex items-center gap-1 font-medium text-[11px]"
                    >
                      YouTube ↗
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-[#5B5578] hover:text-[#1C164B] transition-colors inline-flex items-center gap-1 font-medium text-[11px]"
                    >
                      Inquire ↗
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
