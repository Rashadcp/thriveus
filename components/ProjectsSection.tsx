"use client";

import React from "react";
import Image from "next/image";

interface Production {
  id: string;
  tag: string;
  title: string;
  meta: string;
  description: string;
  image: string;
}

const PRODUCTIONS: Production[] = [
  {
    id: "work-01",
    tag: "SIGNATURE FORMAT",
    title: "The Arena Games · Annual Staff Event",
    meta: "685+ guests · Dubai · February 2026",
    description:
      "A full arena production for the annual staff event of a global engineering consultancy. Our Squid Game inspired arena format brought custom game zones, elimination style rounds, live scoring and a survival themed storyline that turned 685 colleagues into competing squads for one unforgettable afternoon.",
    image: "/images/arena-games-hero.jpg",
  },
  {
    id: "work-02",
    tag: "MARINE EXPERIENCE",
    title: "Rhythm & Revelry · Luxury Megayacht Experience",
    meta: "275 guests · Dubai Marina",
    description:
      "A private megayacht takeover combining live entertainment, curated dining and open water views of the Dubai skyline, produced end to end from charter to final guest departure.",
    image: "/images/megayacht-event.jpg",
  },
  {
    id: "work-03",
    tag: "CHALLENGE RACE",
    title: "The Amazing Race · City Edition",
    meta: "210+ participants · Across Dubai",
    description:
      "A multi location urban challenge race for a global logistics leader, moving teams through checkpoints across the city with live tracking, coordinated transport and a finale celebration.",
    image: "/images/race-checkpoint.jpg",
  },
  {
    id: "work-04",
    tag: "EXECUTIVE RETREAT",
    title: "Mountain Leadership Retreat",
    meta: "Senior leadership team · Al Ain",
    description:
      "A leadership retreat in the foothills of Jebel Hafeet for the regional leadership of a global energy services firm, pairing structured strategy sessions with the shared meals and unhurried conversation senior teams rarely get.",
    image: "/images/alain-retreat.jpg",
  },
  {
    id: "work-05",
    tag: "RECOGNITION EVENING",
    title: "Channel Partner Award Night",
    meta: "200 guests · January 2026",
    description:
      "A recognition evening for a free zone's channel partner network: staging, entertainment, custom awards and more than 200 curated gift boxes, engineered so every partner left feeling individually acknowledged.",
    image: "/images/award-night.jpg",
  },
  {
    id: "work-06",
    tag: "CULTURAL FESTIVAL",
    title: "Onam Cultural Celebration",
    meta: "350 guests",
    description:
      "A full scale Onam celebration for an engineering firm's workforce, from pookkalam and sadhya service to traditional performances, delivered with the cultural precision that makes these festivals feel owned rather than outsourced.",
    image: "/images/onam-celebration.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#EAE7DC] py-20 sm:py-36 px-5 sm:px-12 overflow-hidden text-[#1C164B] border-b border-[#1C164B]/15"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#1C164B]/15">
          <div>
            <span className="font-light text-xs uppercase tracking-widest text-[#8A5FA8] font-semibold block mb-2 sm:mb-3">
              SELECTED WORKS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C164B]">
              Recent Productions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8A5FA8] max-w-sm font-light leading-relaxed">
            Curated corporate events delivered across Dubai, Abu Dhabi and the wider UAE.
          </p>
        </div>

        {/* 6 Real Productions in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {PRODUCTIONS.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-[#1C164B]/5 border border-[#1C164B]/15">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-display text-[10px] uppercase tracking-wider bg-[#1C164B]/90 backdrop-blur-md text-[#98DAF6] px-2.5 py-1 rounded-full border border-[#98DAF6]/30 font-semibold">
                      {prod.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5 sm:mt-6 space-y-2">
                  <span className="font-display text-xs text-[#8A5FA8] block font-medium">
                    {prod.meta}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1C164B] group-hover:text-[#8A5FA8] transition-colors leading-snug">
                    {prod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1C164B]/75 font-light leading-relaxed pt-1">
                    {prod.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
