import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata = {
  title: "About Us | Thriveus Corporate Consulting & Events UAE",
  description:
    "At Thriveus, we believe everyone deserves to thrive. Premier UAE corporate consulting, employee engagement, team-building experiences, and event management.",
};

const DETAILED_SERVICES = [
  {
    num: "01",
    title: "Employee Engagement & Team Building",
    desc: "We design interactive, high-impact team-building activities that promote trust, communication, and problem-solving. Whether adventure-based, strategy-driven, or CSR-focused, our programs are customized to align with your company’s goals.",
    image: "/images/team-building.jpg",
    tag: "ENGAGEMENT",
  },
  {
    num: "02",
    title: "Venue-Based Immersive Experiences",
    desc: "We create dynamic corporate experiences in unique venues across the UAE, offering themed challenges, cultural immersions, and interactive workshops that go beyond traditional team-building.",
    image: "/images/featured-experience.jpg",
    tag: "EXPERIENCES",
  },
  {
    num: "03",
    title: "Corporate Training & Leadership Development",
    desc: "Our expert-led programs focus on leadership, communication, problem-solving, and personal growth, designed to equip professionals with skills that drive both individual and organizational success.",
    image: "/images/leadership-training.jpg",
    tag: "TRAINING",
  },
  {
    num: "04",
    title: "Full-Scope Corporate Events & Conferences",
    desc: "We manage the end-to-end planning and execution of corporate events, conferences, product launches, networking sessions, and executive meetings, ensuring seamless coordination, impactful content, and engaging attendee experiences.",
    image: "/images/hero-event.jpg",
    tag: "CONFERENCES",
  },
  {
    num: "05",
    title: "Offsite Retreats & Incentive Programs",
    desc: "We curate bespoke corporate retreats and incentive experiences in exceptional locations, blending strategy, relaxation, and team-building for a transformative impact.",
    image: "/images/desert-retreat.jpg",
    tag: "RETREATS",
  },
  {
    num: "06",
    title: "Curated Corporate & Cultural Events",
    desc: "From Ramadan Iftars to executive roundtables, CSR programs, and prestigious awards ceremonies, we design authentic and culturally resonant corporate experiences tailored to your organization.",
    image: "/images/vip-lounge.jpg",
    tag: "CULTURAL",
  },
];

const CAPABILITIES = [
  "Corporate Events",
  "Event Coordination",
  "Event Production",
  "Live Events",
  "Product Launch Events",
  "Gamified Learning & Training",
  "CSR Events & Programs",
  "High-End Video Production",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="max-w-4xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block mb-4">
            ABOUT THRIVEUS · UAE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Everyone Deserves to Thrive—
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EDAF2] via-[#8B7BC0] to-white">
              Both Individuals &amp; Organizations.
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-[#E3E6EF] leading-relaxed font-normal">
            As a premier corporate consulting and events company based in the UAE,
            we specialize in employee engagement, team-building experiences,
            corporate training, and large-scale event management.
          </p>
        </div>

        {/* Mission Statement Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#28245F] border border-[#8EDAF2]/25 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8EDAF2] font-semibold block mb-3">
              OUR MISSION
            </span>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug">
              &ldquo;To design and execute impactful corporate experiences that foster
              strong team dynamics, inspire leadership, and elevate professional
              growth through tailored events and training solutions.&rdquo;
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#8EDAF2]/10 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-3">
            WHAT WE SPECIALIZE IN
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Our Core Services
          </h2>
          <p className="mt-4 text-[#E3E6EF] text-base sm:text-lg">
            Immersive, purpose-driven solutions engineered to strengthen workplace
            culture, enhance collaboration, and drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="group rounded-2xl bg-[#28245F] border border-[#E3E6EF]/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#8EDAF2]/60 hover:shadow-[0_15px_40px_rgba(142,218,242,0.15)]"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#12103D]">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#12103D]/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white border border-[#8EDAF2]/20">
                  {srv.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#E3E6EF]/80 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E6EF]/15 flex items-center justify-between text-xs font-mono text-[#8EDAF2]">
                  <span>SERVICE // {srv.num}</span>
                  <span className="text-white font-bold">THRIVEUS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities & Headquarters */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
              SERVICES PROVIDED
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              End-to-End Execution Across Screens &amp; Spaces
            </h2>
            <div className="flex flex-wrap gap-3 pt-2">
              {CAPABILITIES.map((cap) => (
                <span
                  key={cap}
                  className="px-4 py-2 rounded-full bg-[#28245F]/60 border border-[#E3E6EF]/20 text-xs sm:text-sm font-mono text-[#F7F9FC]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#28245F] border border-[#8EDAF2]/25 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
              HEADQUARTERS
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Dubai, United Arab Emirates
            </h3>
            <p className="text-sm text-[#E3E6EF]/80 leading-relaxed">
              Serving corporate enterprises, government entities, and global
              brands across Dubai, Abu Dhabi, Riyadh, and the wider GCC region.
            </p>
            <div className="pt-4 flex gap-4">
              <MagneticButton href="/contact" variant="primary">
                Contact Our Team
              </MagneticButton>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#8EDAF2] hover:text-white transition-colors"
              >
                Explore Homepage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
