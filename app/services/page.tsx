import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata = {
  title: "Our Services | Thriveus Corporate Experiences & Events UAE",
  description:
    "Discover Thriveus corporate services across the UAE: curated experiences, conferences, celebrations, experiential team building, training, and leadership retreats.",
};

interface ServiceItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "curated-experiences",
    num: "01",
    tag: "SIGNATURE FORMATS",
    title: "Curated Experiences",
    description:
      "Original, large format experiences designed around your people and your objectives. Arena scale game shows inspired by the survival formats everyone knows, city wide challenge races, megayacht productions, island and beach escapes, and fully private experiences deep in the desert, each built as a storyline rather than a schedule of activities.",
    bullets: [
      "Arena Game Formats",
      "City Wide Challenge Races",
      "Yacht, Island & Beach Escapes",
      "Fully Private Desert Experiences",
    ],
    image: "/images/arena-games-wide.jpg",
  },
  {
    id: "conferences-productions",
    num: "02",
    tag: "SUMMITS & PRODUCTIONS",
    title: "Conferences & Corporate Productions",
    description:
      "End to end delivery for multi day conferences, summits and executive gatherings: venue, staging, audio visual, registration and delegate operations under one accountable partner.",
    bullets: [
      "Multi Day Conferences",
      "Turnkey Audio Visual",
      "Delegate Operations",
    ],
    image: "/images/conference-summit.jpg",
  },
  {
    id: "celebrations-cultural",
    num: "03",
    tag: "MILESTONES & CULTURE",
    title: "Celebrations & Cultural Events",
    description:
      "Annual staff events, award nights, themed galas, iftars, cultural festivals and family day carnivals, designed with genuine cultural fluency across Emirati, South Asian and international workforces.",
    bullets: [
      "Award Nights & Galas",
      "Iftar & Cultural Programmes",
      "Family Day Carnivals",
    ],
    image: "/images/gala-stage.jpg",
  },
  {
    id: "team-building",
    num: "04",
    tag: "TEAM DYNAMICS",
    title: "Experiential Team Building",
    description:
      "Desert, beach, island, yacht, city and indoor programmes across two tiers: high energy engagement days, and outcome driven simulations with storylines, roles and stakes. Our desert programmes run at a fully private camp in the middle of the desert, an experience generic operators cannot replicate.",
    bullets: [
      "Fully Private Desert Camp",
      "Beach, Island & Marine Formats",
      "Indoor Simulations",
    ],
    image: "/images/desert-golden-hour.jpg",
  },
  {
    id: "coaching-training",
    num: "05",
    tag: "WHERE THRIVE IS EARNED",
    title: "Coaching, Training & Capability Building",
    description:
      "One to one coaching, group training and experiential leadership programmes for managers and rising leaders, delivered by senior facilitators and measured before and after so development is proven, not presumed.",
    bullets: [
      "Leadership Development Programmes",
      "One to One Coaching",
      "Measured Outcomes",
    ],
    image: "/images/training-session.jpg",
  },
  {
    id: "gamified-learning",
    num: "06",
    tag: "LEARNING THAT LANDS",
    title: "Gamified Learning & Training",
    description:
      "Safety awareness, KPI reinforcement and leadership development delivered through play, simulation and competition, with measurement built in so outcomes are visible rather than assumed.",
    bullets: [
      "Safety & Compliance Games",
      "Leadership Programmes",
      "Built In Measurement",
    ],
    image: "/images/gamified-learning.jpg",
  },
  {
    id: "leadership-retreats",
    num: "07",
    tag: "EXECUTIVE OFFSITES",
    title: "Leadership Retreats",
    description:
      "Mountain, desert and resort retreats built for senior teams: strategy sessions by day, campfires and shared tables by night. Recent programmes include a mountain retreat in Al Ain and private desert experiences for senior leadership groups.",
    bullets: [
      "Mountain & Desert Settings",
      "Facilitated Strategy Sessions",
      "Overnight Formats",
    ],
    image: "/images/alain-retreat.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0A0D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-24 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#242057]/50">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#1782A8] block">
            WHAT WE DELIVER · UAE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Our Services
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-2xl text-white/85 leading-relaxed font-light max-w-3xl">
            Original corporate experiences, turnkey summits, cultural celebrations, and leadership development delivered across Dubai, Abu Dhabi, Al Ain, and UAE-wide.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <MagneticButton href="/contact" variant="primary">
              Start a Conversation
            </MagneticButton>
            <MagneticButton href="/works" variant="outline">
              Explore Recent Productions
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Seven Flagship Services */}
      <section className="py-16 sm:py-28 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#242057]/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#242057]/25 border border-[#242057]/70 p-5 sm:p-6 transition-all duration-300 hover:border-[#1782A8]/50 hover:bg-[#242057]/40"
            >
              <div>
                <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-xl bg-[#242057]/40 border border-[#242057]">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-widest bg-[#0B0A0D]/85 backdrop-blur-md text-[#1782A8] px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                      {srv.tag}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#1782A8]">
                    <span className="font-bold">{srv.num}</span>
                    <span className="text-[#75559C]">/ 07</span>
                  </div>

                  <h2 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#1782A8] transition-colors leading-snug">
                    {srv.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {srv.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {srv.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-white/85 bg-[#0B0A0D]/60 border border-[#242057] rounded-md px-2.5 py-1"
                      >
                        <span className="text-[#1782A8]">✶</span>
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-7xl w-full text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#1782A8] block">
            INITIATE A CONVERSATION
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-white leading-tight">
            Ready to Create Something Remarkable?
          </h2>
          <p className="text-white/85 text-sm sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Let&apos;s design an experience your people will remember.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <MagneticButton href="/contact" variant="primary">
              Start a Conversation
            </MagneticButton>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-[#1782A8] hover:text-white transition-colors"
            >
              Return Home →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
