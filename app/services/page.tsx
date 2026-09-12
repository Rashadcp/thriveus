import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Corporate Services & Experiential Formats | Thriveus UAE",
  description:
    "Discover Thriveus corporate services across the UAE: curated experiences, conferences, celebrations, experiential team building, CSR events, capability training, and leadership retreats.",
  alternates: {
    canonical: "https://thriveus.ae/services",
  },
  openGraph: {
    title: "Corporate Services & Experiential Formats | Thriveus UAE",
    description:
      "Discover Thriveus corporate services across the UAE: curated experiences, conferences, celebrations, experiential team building, CSR events, capability training, and leadership retreats.",
    url: "https://thriveus.ae/services",
    siteName: "Thriveus",
    images: ["/images/corporate-ballroom-team.jpg"],
  },
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
    image: "/images/yatch.jpg",
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
    image: "/images/corporate-ballroom-team.jpg",
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
    image: "/images/cultural-drum-celebration.jpg",
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
    image: "/images/desert-photo.jpeg",
  },
  {
    id: "csr-events",
    num: "05",
    tag: "PURPOSE & IMPACT",
    title: "Corporate Social Responsibility (CSR) Events",
    description:
      "High-impact CSR programmes and sustainability activations designed for corporate teams across Dubai, Abu Dhabi, and the UAE. From desert environmental cleanups and mangrove planting to community support drives and social cause challenges, we transform corporate responsibility into meaningful, hands-on team experiences with measurable real-world impact.",
    bullets: [
      "Desert Cleanups & Conservation",
      "Mangrove & Marine Initiatives",
      "Community & Social Impact Drives",
      "Sustainability Team Challenges",
    ],
    image: "/images/csr-desert-cleanup.jpg",
  },
  {
    id: "coaching-training",
    num: "06",
    tag: "WHERE THRIVE IS EARNED",
    title: "Coaching, Training & Capability Building",
    description:
      "One to one coaching, group training and experiential leadership programmes for managers and rising leaders, delivered by senior facilitators and measured before and after so development is proven, not presumed.",
    bullets: [
      "Leadership Development Programmes",
      "One to One Coaching",
      "Measured Outcomes",
    ],
    image: "/images/resort-leadership-circle.jpg",
  },
  {
    id: "gamified-learning",
    num: "07",
    tag: "LEARNING THAT LANDS",
    title: "Gamified Learning & Training",
    description:
      "Safety awareness, KPI reinforcement and leadership development delivered through play, simulation and competition, with measurement built in so outcomes are visible rather than assumed.",
    bullets: [
      "Safety & Compliance Games",
      "Leadership Programmes",
      "Built In Measurement",
    ],
    image: "/images/squidimage.png",
  },
  {
    id: "leadership-retreats",
    num: "08",
    tag: "EXECUTIVE OFFSITES",
    title: "Leadership Retreats",
    description:
      "Mountain, desert and resort retreats built for senior teams: strategy sessions by day, campfires and shared tables by night. Recent programmes include a mountain retreat in Al Ain and private desert experiences for senior leadership groups.",
    bullets: [
      "Mountain & Desert Settings",
      "Facilitated Strategy Sessions",
      "Overnight Formats",
    ],
    image: "/images/alain-mountain-summit.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EAE7DC] text-[#1C164B] flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-24 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#DEDACB]">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#8A5FA8] font-semibold block">
            EXPERIENTIAL ARCHITECTURE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C164B] leading-[1.1]">
            Our Services
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-2xl text-[#5B5578] leading-relaxed font-light max-w-3xl">
            Original corporate experiences, turnkey summits, cultural celebrations, CSR impact initiatives, and leadership development delivered across Dubai, Abu Dhabi, Al Ain, and UAE-wide.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1C164B] text-[#EAE7DC] font-display text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 hover:bg-[#8A5FA8] hover:text-white transition-all duration-300 shadow-md"
            >
              Start a Conversation
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center justify-center rounded-full border border-[#1C164B]/30 text-[#1C164B] font-display text-xs sm:text-sm font-medium tracking-wider uppercase px-7 py-3.5 hover:border-[#8A5FA8] hover:text-[#8A5FA8] transition-colors"
            >
              Explore Recent Productions
            </Link>
          </div>
        </div>
      </section>

      {/* Eight Flagship Services */}
      <section className="py-16 sm:py-28 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#DEDACB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#F2F0E8] border border-[#DEDACB] p-5 sm:p-6 transition-all duration-300 hover:border-[#8A5FA8]/50 hover:shadow-lg"
            >
              <div>
                <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-xl bg-[#EAE7DC] border border-[#DEDACB]">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 font-display text-xs text-[#8A5FA8]">
                    <span className="font-bold">{srv.num}</span>
                    <span className="text-[#5B5578]">/ 08</span>
                  </div>

                  <h2 className="font-display text-lg sm:text-xl font-bold text-[#1C164B] group-hover:text-[#8A5FA8] transition-colors leading-snug">
                    {srv.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5B5578] leading-relaxed font-light">
                    {srv.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {srv.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center gap-1 font-display text-[10px] sm:text-xs text-[#1C164B] bg-[#EAE7DC] border border-[#DEDACB] rounded-md px-2.5 py-1"
                      >
                        <span className="text-[#8A5FA8]">✶</span>
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

      {/* Bottom Conversion Banner (Signature Closing Indigo CTA) */}
      <section className="py-20 sm:py-32 px-5 sm:px-12 w-full bg-[#1C164B] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-white leading-tight">
            Ready to Create Something{" "}
            <span className="font-seasons italic font-bold text-[#98DAF6]">
              Remarkable
            </span>
            ?
          </h2>
          <p className="text-[#EAE7DC]/85 text-sm sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Let&apos;s design an experience your people will remember.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#98DAF6] text-[#1C164B] font-display text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 hover:bg-[#8A5FA8] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(152,218,246,0.4)]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-[#98DAF6] hover:text-white transition-colors"
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
