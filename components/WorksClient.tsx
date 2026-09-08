"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export interface ProductionItem {
  id: string;
  refCode?: string;
  tag: string;
  category: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  backupImage?: string;
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
    image: "https://i.ytimg.com/vi/97YFzz0Bk-Y/maxresdefault.jpg",
    backupImage: "/images/arena-games-squidgame.jpg",
    youtubeId: "97YFzz0Bk-Y",
  },
  {
    id: "work-02-megayacht",
    refCode: "V2",
    tag: "MARINE EXPERIENCE",
    category: "Marine & Experiential",
    title: "Rhythm & Revelry · Luxury Megayacht Experience",
    meta: "275 guests · Dubai Marina",
    description:
      "A private megayacht takeover combining live entertainment, curated dining and open water views of the Dubai skyline, produced end to end from charter to final guest departure.",
    image: "https://i.ytimg.com/vi/DTFL_27sPoo/maxresdefault.jpg",
    backupImage: "/images/resort-leadership-circle.jpg",
    youtubeId: "DTFL_27sPoo",
  },
  {
    id: "work-03-amazing-race",
    refCode: "V3",
    tag: "CHALLENGE RACE",
    category: "Team Challenges",
    title: "The Amazing Race · City Edition",
    meta: "210+ participants · Across Dubai",
    description:
      "A multi location urban challenge race for a global logistics leader, moving teams through checkpoints across the city with live tracking, coordinated transport and a finale celebration.",
    image: "https://i.ytimg.com/vi/lYgZKVe1UIk/maxresdefault.jpg",
    backupImage: "/images/team-challenge-burj.jpg",
    youtubeId: "lYgZKVe1UIk",
  },
  {
    id: "work-04-mountain-retreat",
    refCode: "V4",
    tag: "EXECUTIVE RETREAT",
    category: "Executive Retreats",
    title: "Mountain Leadership Retreat",
    meta: "Senior leadership team · Al Ain",
    description:
      "A leadership retreat in the foothills of Jebel Hafeet for the regional leadership of a global energy services firm, pairing structured strategy sessions with the shared meals and unhurried conversation senior teams rarely get.",
    image: "https://i.ytimg.com/vi/LL4fVOxpfpg/maxresdefault.jpg",
    backupImage: "/images/alain-mountain-summit.jpg",
    youtubeId: "LL4fVOxpfpg",
  },
  {
    id: "work-05-channel-partner-award",
    refCode: "V5",
    tag: "RECOGNITION EVENING",
    category: "Celebrations & Galas",
    title: "Channel Partner Award Night",
    meta: "200 guests · January 2026",
    description:
      "A recognition evening for a free zone's channel partner network: staging, entertainment, custom awards and more than 200 curated gift boxes, engineered so every partner left feeling individually acknowledged.",
    image: "https://i.ytimg.com/vi/uUE_j7b9VEg/maxresdefault.jpg",
    backupImage: "/images/gala-dinner-ballroom.jpg",
    youtubeId: "uUE_j7b9VEg",
  },
  {
    id: "work-06-onam-celebration",
    refCode: "V6",
    tag: "CULTURAL FESTIVAL",
    category: "Cultural & Community",
    title: "Onam Cultural Celebration",
    meta: "350 guests",
    description:
      "A full scale Onam celebration for an engineering firm's workforce, from pookkalam and sadhya service to traditional performances, delivered with the cultural precision that makes these festivals feel owned rather than outsourced.",
    image: "https://i.ytimg.com/vi/efSenVMW-OA/maxresdefault.jpg",
    backupImage: "/images/cultural-drum-celebration.jpg",
    youtubeId: "efSenVMW-OA",
  },
  {
    id: "work-07-supplier-summit",
    refCode: "V7",
    tag: "CONFERENCES & SUMMITS",
    category: "Conferences & Summits",
    title: "Supplier Summit · Global Conference & Showcase",
    meta: "Enterprise Partners · Dubai",
    description:
      "A premier supplier summit and conference for Veolia Water Technologies, featuring branded mainstage presentation environments, interactive supplier showcase booths, panel discussion setups, and seamless bilingual broadcasting.",
    image: "https://i.ytimg.com/vi/yHJsQIrh8S0/maxresdefault.jpg",
    backupImage: "/images/conference-summit.jpg",
    youtubeId: "yHJsQIrh8S0",
  },
  {
    id: "work-08-energy-challenge",
    refCode: "V8",
    tag: "CORPORATE ENGAGEMENT",
    category: "Team Challenges",
    title: "Energy Sector Team Challenge",
    meta: "Dubai · Enterprise Workforce",
    description:
      "High-impact team building and collaborative problem-solving curated for the regional workforce of a leading global energy enterprise, combining outcome-driven simulations and high-energy engagement.",
    image: "https://i.ytimg.com/vi/Mb3Y80sDdZY/maxresdefault.jpg",
    backupImage: "/images/corporate-ballroom-team.jpg",
    youtubeId: "Mb3Y80sDdZY",
  },
  {
    id: "work-09-beach-programme",
    refCode: "V9",
    tag: "OUTDOOR TEAM BUILDING",
    category: "Team Challenges",
    title: "Beach Team Building · Coastal Challenge",
    meta: "Halian UAE · Dubai Coast",
    description:
      "A high-octane seaside corporate team building expedition on the Dubai coastline, featuring custom sand obstacle courses, collaborative water relays, and rapid communication challenges.",
    image: "https://i.ytimg.com/vi/ktB7HbTs0Gw/maxresdefault.jpg",
    backupImage: "/images/family-carnival.jpg",
    youtubeId: "ktB7HbTs0Gw",
  },
];

function SafeThumbnail({ prod }: { prod: ProductionItem }) {
  const defaultThumb = prod.youtubeId
    ? `https://i.ytimg.com/vi/${prod.youtubeId}/maxresdefault.jpg`
    : prod.image;
  const [src, setSrc] = useState(defaultThumb);

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
        } else if (src.includes("hqdefault") && prod.youtubeId) {
          setSrc(`https://i.ytimg.com/vi/${prod.youtubeId}/mqdefault.jpg`);
        } else {
          setSrc(prod.backupImage || "/images/corporate-ballroom-team.jpg");
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
              <span className="text-xs uppercase tracking-widest text-[#5B5578] font-display font-medium">
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
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#FF0000] text-white hover:bg-[#CC0000] transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-105"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-sm">
                <svg className="h-3.5 w-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-white/90 block font-medium">
                  Official Channel
                </span>
                <span className="font-display text-xs font-bold tracking-wide">
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
                          className="group/btn absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
                          aria-label={`Watch event film for ${prod.title}`}
                        >
                          {isLoading ? (
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1C164B] text-[#EAE7DC] shadow-lg animate-pulse">
                              <div className="h-6 w-6 border-2 border-[#EAE7DC] border-t-transparent rounded-full animate-spin" />
                            </div>
                          ) : (
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1C164B]/90 backdrop-blur-sm text-[#EAE7DC] shadow-lg transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#8A5FA8] group-hover/btn:text-white border border-white/20">
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6 fill-current translate-x-0.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Close button when video is playing */}
                    {hasVideo && isPlaying && (
                      <button
                        type="button"
                        onClick={() => handleClose(prod.id)}
                        className="absolute top-2.5 right-2.5 z-30 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#1C164B]/90 backdrop-blur-md text-white hover:text-white hover:bg-[#8A5FA8] transition-all border border-white/20 text-xs sm:text-sm font-semibold cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                        aria-label="Close video"
                      >
                        ✕
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
                <div className="mt-5 pt-3.5 border-t border-[#DEDACB] flex items-center justify-between gap-2 text-xs">
                  <span className="text-[#8A5FA8] inline-flex items-center gap-1.5 font-medium uppercase tracking-wider text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8A5FA8]" />
                    {prod.tag}
                  </span>

                  {/* High-visibility YouTube Button */}
                  <a
                    href={hasVideo ? `https://www.youtube.com/watch?v=${prod.youtubeId}` : "https://www.youtube.com/@ThriveusEvents"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF0000] text-white hover:bg-[#CC0000] transition-all font-display text-[11px] font-bold tracking-wide shadow-sm hover:shadow hover:scale-105 ml-auto"
                    aria-label={`Watch ${prod.title} on YouTube`}
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Watch on YouTube ↗</span>
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
