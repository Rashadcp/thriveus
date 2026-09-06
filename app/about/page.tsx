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
  },
  {
    num: "02",
    title: "Venue-Based Immersive Experiences",
    desc: "We create dynamic corporate experiences in unique venues across the UAE, offering themed challenges, cultural immersions, and interactive workshops that go beyond traditional team-building.",
    image: "/images/featured-experience.jpg",
  },
  {
    num: "03",
    title: "Corporate Training & Leadership Development",
    desc: "Our expert-led programs focus on leadership, communication, problem-solving, and personal growth, designed to equip professionals with skills that drive both individual and organizational success.",
    image: "/images/leadership-training.jpg",
  },
  {
    num: "04",
    title: "Full-Scope Corporate Events & Conferences",
    desc: "We manage the end-to-end planning and execution of corporate events, conferences, product launches, networking sessions, and executive meetings, ensuring seamless coordination, impactful content, and engaging attendee experiences.",
    image: "/images/hero-event.jpg",
  },
  {
    num: "05",
    title: "Offsite Retreats & Incentive Programs",
    desc: "We curate bespoke corporate retreats and incentive experiences in exceptional locations, blending strategy, relaxation, and team-building for a transformative impact.",
    image: "/images/desert-retreat.jpg",
  },
  {
    num: "06",
    title: "Curated Corporate & Cultural Events",
    desc: "From Ramadan Iftars to executive roundtables, CSR programs, and prestigious awards ceremonies, we design authentic and culturally resonant corporate experiences tailored to your organization.",
    image: "/images/vip-lounge.jpg",
  },
];

const CAPABILITIES = [
  "Corporate Events & Arena Conferences",
  "Turnkey Event Production & AV Architecture",
  "Live & Hybrid Event Coordination",
  "Product Launch & Brand Reveal Staging",
  "Gamified Learning & Leadership Workshops",
  "Corporate Social Responsibility Programs",
  "Cinematic Event Video Production",
  "Executive Retreat Facilitation",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Section - Confident Editorial Typography */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-28 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            ABOUT THRIVEUS · UAE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Everyone Deserves to Thrive—
            <br className="hidden sm:inline" />
            {" "}Individuals &amp; Organizations.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-2xl text-[#E3E6EF]/85 leading-relaxed font-light max-w-3xl">
            As a premier corporate consulting and events company based in the UAE, we specialize in employee engagement, leadership experiences, and large-scale event production.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-[#28245F]/60 max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-3 sm:mb-4">
            OUR PURPOSE
          </span>
          <blockquote className="text-xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
            &ldquo;To design and execute impactful corporate experiences that foster strong team dynamics, inspire leadership, and elevate professional growth through tailored events and training solutions.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2 sm:mb-3">
            AREAS OF EXPERTISE
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Our Core Specializations
          </h2>
          <p className="mt-3 sm:mt-4 text-[#E3E6EF]/75 text-sm sm:text-lg font-light leading-relaxed">
            Purpose-driven solutions engineered to strengthen workplace culture, enhance collaboration, and drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {DETAILED_SERVICES.map((srv) => (
            <div key={srv.num} className="group flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-[#28245F]/30">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 sm:mt-6 space-y-2">
                  <span className="font-mono text-xs text-[#8EDAF2] font-bold block">
                    {srv.num}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E3E6EF]/75 leading-relaxed font-light pt-1">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities & Headquarters */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2 sm:mb-3">
                CAPABILITIES
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Turnkey Execution Across Screens &amp; Spaces
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 pt-2">
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="flex items-baseline gap-3 py-2 border-b border-[#28245F]/40 text-xs sm:text-sm font-light text-[#E3E6EF]">
                  <span className="font-mono text-xs text-[#8EDAF2] font-bold">0{i + 1}</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 sm:space-y-6 pt-4 lg:pt-0">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
              HEADQUARTERS
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
              Dubai, United Arab Emirates
            </h3>
            <p className="text-sm sm:text-base text-[#E3E6EF]/75 leading-relaxed font-light">
              Serving corporate enterprises, government entities, and global brands across Dubai, Abu Dhabi, Riyadh, and the wider GCC region.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <MagneticButton href="/contact" variant="primary">
                Contact Our Team
              </MagneticButton>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-[#8EDAF2] hover:text-white transition-colors"
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
