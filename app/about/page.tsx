import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata = {
  title: "About Us | Thriveus Corporate Experiences & Events UAE",
  description:
    "Thriveus Events Co. L.L.C is a Dubai based corporate engagement company designing and delivering corporate experiences across the UAE.",
};

const STATS = [
  { value: "300+", label: "Clients Served by the Team" },
  { value: "20+", label: "Years Combined Experience" },
  { value: "30+", label: "Signature Events Delivered" },
  { value: "3,000+", label: "Participants Engaged" },
];

const CAPABILITIES = [
  "Conferences & Corporate Productions",
  "Experiential Team Building",
  "Curated Experiences & Signature Formats",
  "Celebrations & Cultural Events",
  "Coaching, Training & Capability Building",
  "Gamified Learning & Training",
  "Leadership Retreats & Executive Offsites",
  "Event Photography & Film",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EAE7DC] text-[#1C164B] flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-24 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#DEDACB]">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#8A5FA8] font-semibold block">
            ABOUT THRIVEUS
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C164B] leading-[1.1]">
            Everyone Deserves to{" "}
            <span className="font-seasons italic font-bold text-[#8A5FA8]">
              Thrive
            </span>
            <br className="hidden sm:inline" />
            {" "}Individuals &amp; Organisations.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-2xl text-[#5B5578] leading-relaxed font-light max-w-3xl">
            Thriveus Events Co. L.L.C is a Dubai based corporate engagement company designing and delivering impactful corporate experiences for large enterprise clients across the UAE.
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#DEDACB] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#5B5578] font-light leading-relaxed">
            <p>
              We design and deliver corporate experiences for large enterprise clients across the UAE: conferences and summits, corporate celebrations and cultural events, team building programmes, gamified learning, leadership retreats and corporate training.
            </p>
            <p>
              Our expert team carries more than twenty years of combined experience curating unique experiences, large scale exhibitions, conferences and summits, and today we prioritise serving our key clients in energy, engineering, logistics, water technologies and industrial automation.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#5B5578] font-light leading-relaxed">
            <p>
              Our delivery spans fully private events in the middle of the desert, on megayachts and on islands, through to full scale conferences and summits. We have delivered more than 30 corporate events for 14 enterprise clients, ranging from a six person leadership dinner to a 685 guest arena production.
            </p>
            <p>
              We bring a corporate intelligence approach to experience design, listening the way an insider listens, and designing around your objectives, your culture, and your people.
            </p>
          </div>
        </div>

        {/* Statistics Strip */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[#DEDACB]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-1 sm:space-y-1.5">
                <span className="font-display text-3xl sm:text-5xl font-bold text-[#1C164B] block">
                  {stat.value}
                </span>
                <p className="font-display text-xs sm:text-sm text-[#8A5FA8] font-semibold leading-snug uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Headquarters */}
      <section className="py-16 sm:py-28 px-5 sm:px-12 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#1C164B]">
                Turnkey Delivery Across the UAE
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 pt-2">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-3 py-2.5 border-b border-[#DEDACB] text-xs sm:text-sm font-light text-[#1C164B]"
                >
                  <span className="font-display text-xs text-[#8A5FA8] font-bold">
                    0{i + 1}
                  </span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 rounded-2xl bg-[#F2F0E8] border border-[#DEDACB] p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C164B]">
              Dubai, United Arab Emirates
            </h3>
            <p className="text-sm text-[#5B5578] leading-relaxed font-light">
              Delivering corporate experiences across Dubai, Abu Dhabi, Al Ain, and UAE-wide.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton href="/contact" variant="primary">
                Contact Our Team
              </MagneticButton>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#1C164B] hover:text-[#8A5FA8] transition-colors"
              >
                Return to Homepage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
