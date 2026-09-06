import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Recent Productions | Thriveus Corporate Events UAE",
  description:
    "Curated corporate events delivered across Dubai, Abu Dhabi and the wider UAE by Thriveus.",
};

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

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#0B0A0D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-28 sm:pt-48 pb-14 sm:pb-20 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#242057]/50">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Recent Productions
          </h1>
          <p className="text-base sm:text-2xl text-white/85 leading-relaxed font-light max-w-3xl">
            Curated corporate events delivered across Dubai, Abu Dhabi and the wider UAE.
          </p>
        </div>
      </section>

      {/* Six Productions Grid */}
      <section className="py-16 sm:py-28 px-5 sm:px-12 mx-auto max-w-7xl w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {PRODUCTIONS.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col justify-between bg-[#242057]/20 rounded-2xl p-4 sm:p-5 border border-[#242057]/60"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl bg-[#242057]/40 border border-[#242057]">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-display text-[10px] uppercase tracking-wider bg-[#0B0A0D]/85 backdrop-blur-md text-[#1782A8] px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                      {prod.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 sm:mt-5 space-y-2">
                  <span className="font-display text-xs text-[#1782A8] block font-medium">
                    {prod.meta}
                  </span>

                  <h2 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#1782A8] transition-colors leading-snug">
                    {prod.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed pt-1">
                    {prod.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
