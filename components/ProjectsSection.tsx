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
    tag: "ANNUAL STAFF EVENT",
    title: "Enterprise Annual Staff Gathering · Grand Ballroom",
    meta: "500+ attendees · Dubai",
    description:
      "A full arena-scale corporate annual gathering uniting teams across departments under one roof with keynote presentations, collective team recognition, and an unforgettable celebration.",
    image: "/images/corporate-ballroom-team.jpg",
  },
  {
    id: "work-02",
    tag: "CONFERENCES & SUMMITS",
    title: "Aramco & Subsea 7 · Stakeholder Alignment Summit",
    meta: "Enterprise Partners · Dubai",
    description:
      "End-to-end executive alignment summit featuring keynote presentations, interactive breakout sessions, stage lighting, and seamless audiovisual operations.",
    image: "/images/aramco-summit.jpg",
  },
  {
    id: "work-03",
    tag: "CHALLENGE RACE",
    title: "The Team Challenge · Burj Al Arab Edition",
    meta: "210+ participants · Across Dubai",
    description:
      "A multi location urban challenge race moving teams through checkpoints across the city with live tracking, coordinated transport and a finale celebration.",
    image: "/images/team-challenge-burj.jpg",
  },
  {
    id: "work-04",
    tag: "EXECUTIVE RETREAT",
    title: "Mountain Leadership Retreat · Jebel Hafeet",
    meta: "Senior leadership team · Al Ain",
    description:
      "A leadership retreat in the heights of Jebel Hafeet for the regional leadership of an enterprise firm, pairing structured strategy sessions with shared mountain expeditions and unhurried conversation.",
    image: "/images/alain-mountain-summit.jpg",
  },
  {
    id: "work-05",
    tag: "GALA & CELEBRATION",
    title: "Corporate Gala Dinner & Recognition Evening",
    meta: "300+ guests · Dubai",
    description:
      "A premier recognition evening and gala dinner featuring elegant dining tables, custom awards, stage lighting, and curated entertainment moments.",
    image: "/images/gala-dinner-ballroom.jpg",
  },
  {
    id: "work-06",
    tag: "CULTURAL FESTIVAL",
    title: "Cultural Drum Celebration & Festival",
    meta: "350+ guests · UAE",
    description:
      "A high-energy cultural festival and annual celebration with authentic traditional percussion, festive cuisine, and vibrant live performances that unite diverse teams.",
    image: "/images/cultural-drum-celebration.jpg",
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
