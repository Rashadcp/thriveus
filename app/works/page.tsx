"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  location: string;
  year: string;
  tags: string[];
  heroImage: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
}

const ALL_PROJECTS: Project[] = [
  {
    id: "summit",
    num: "01",
    title: "Global Corporate Summit",
    category: "Arena Summits",
    location: "Dubai Arena · UAE",
    year: "2025",
    tags: ["Summit", "Stage Production", "LED Architecture"],
    heroImage: "/images/hero-event.jpg",
    gallery: [
      "/images/hero-event.jpg",
      "/images/vip-lounge.jpg",
      "/images/cta-texture.jpg",
    ],
    description:
      "An international corporate summit for 1,400 business leaders at the Dubai Arena, featuring custom stage design, immersive kinetic lighting, and interactive keynote sessions.",
    challenge:
      "Delivering seamless live synchronization for high-profile executive keynotes while managing multi-zone spatial audio across a cavernous arena setting.",
    solution:
      "Custom curved 8K LED backdrops, zoned acoustic line arrays, and proprietary NeoThrive RFID badge tracking for frictionless VIP routing.",
    metrics: [
      { label: "Attendees", value: "1,400+" },
      { label: "Satisfaction", value: "98%" },
      { label: "Keynotes", value: "18" },
      { label: "Countries", value: "24" },
    ],
  },
  {
    id: "gala",
    num: "02",
    title: "Burj Khalifa Gala Dinner",
    category: "VIP Galas",
    location: "Downtown Dubai · UAE",
    year: "2024",
    tags: ["Gala Dinner", "VIP Experience", "Spatial Lighting"],
    heroImage: "/images/featured-experience.jpg",
    gallery: [
      "/images/featured-experience.jpg",
      "/images/vip-lounge.jpg",
      "/images/hero-event.jpg",
    ],
    description:
      "An exclusive gala dinner overlooking the Burj Khalifa with bespoke lighting design, architectural projection mapping, and fine dining for 1,200 international dignitaries.",
    challenge:
      "Transforming an outdoor urban terrace into an intimate, high-glamour sanctuary while maintaining rigorous private security protocol.",
    solution:
      "Fabricated illuminated crystal tunnels, bespoke tabletop kinetic light pieces, and silent concierge coordination throughout the evening.",
    metrics: [
      { label: "VIP Guests", value: "1,200" },
      { label: "Client Rating", value: "10/10" },
      { label: "Courses Served", value: "5-Star" },
      { label: "Net Promoter", value: "+92" },
    ],
  },
  {
    id: "retreat",
    num: "03",
    title: "Desert Leadership Retreat",
    category: "Executive Retreats",
    location: "Bab Al Shams · Dubai",
    year: "2024",
    tags: ["Executive Retreat", "Team Bonding", "Strategy"],
    heroImage: "/images/desert-retreat.jpg",
    gallery: [
      "/images/desert-retreat.jpg",
      "/images/vip-lounge.jpg",
      "/images/featured-experience.jpg",
    ],
    description:
      "A secluded desert sanctuary designed for C-suite leadership teams, blending strategic facilitation sessions with restorative evening fireside conversations.",
    challenge:
      "Balancing high-intensity quarterly roadmap planning with mindful disconnection in an off-grid desert environment.",
    solution:
      "Custom luxury dome architecture with climate-controlled acoustic breakout suites, gourmet Bedouin dining, and starlit strategy salons.",
    metrics: [
      { label: "C-Level Leaders", value: "48" },
      { label: "Duration", value: "2 Days" },
      { label: "Alignment Score", value: "99%" },
      { label: "Venue", value: "Dune Sanctuary" },
    ],
  },
  {
    id: "lounge",
    num: "04",
    title: "Bespoke Experiential Lounge",
    category: "VIP Galas",
    location: "DIFC Corporate Build · Dubai",
    year: "2024",
    tags: ["VIP Lounge", "Custom Fabrication", "Spatial Build"],
    heroImage: "/images/vip-lounge.jpg",
    gallery: [
      "/images/vip-lounge.jpg",
      "/images/hero-event.jpg",
      "/images/cta-texture.jpg",
    ],
    description:
      "A permanent-standard experiential pop-up lounge engineered inside Dubai International Financial Centre for private corporate networking and closed-door deal-making.",
    challenge:
      "Fast-track 72-hour design, fabrication, and MEP integration in a restricted commercial high-rise environment.",
    solution:
      "Modular brass-and-midnight-velvet architectural panels, concealed fiber-optic perimeter illumination, and an integrated private barista bar.",
    metrics: [
      { label: "Build Time", value: "72 Hours" },
      { label: "Delegates", value: "650+" },
      { label: "Finish Quality", value: "Luxury Grade" },
      { label: "Safety Rating", value: "100%" },
    ],
  },
];

const CATEGORIES = ["All", "Arena Summits", "VIP Galas", "Executive Retreats"];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Section - Confident Typography & Whitespace */}
      <section className="relative pt-28 sm:pt-48 pb-14 sm:pb-24 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            DOCUMENTED PORTFOLIO · UAE &amp; GCC
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Curated Impact.
            <br className="hidden sm:inline" />
            {" "}Documented Excellence.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-2xl text-[#E3E6EF]/85 leading-relaxed font-light max-w-3xl">
            Explore our signature portfolio of international arena conferences, avant-garde VIP galas, and secluded executive sanctuaries produced across Dubai and the UAE.
          </p>
        </div>

        {/* Clean Filter Links */}
        <div className="mt-10 sm:mt-14 flex flex-wrap gap-3 sm:gap-6 border-t border-[#28245F]/50 pt-6 sm:pt-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-colors ${
                  isSelected
                    ? "text-[#8EDAF2] font-bold border-b-2 border-[#8EDAF2] pb-1"
                    : "text-[#E3E6EF]/60 hover:text-white pb-1"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => setActiveProject(project)}
            >
              <div>
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-[#28245F]/30">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                  />
                </div>

                <div className="mt-5 sm:mt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#E3E6EF]/60">
                    <span className="font-semibold text-[#8EDAF2]">{project.num} // {project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white group-hover:text-[#8EDAF2] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E3E6EF]/75 font-light leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-[#28245F]/40 flex items-center justify-between text-xs font-mono">
                <span className="text-[#E3E6EF]/70">
                  {project.metrics[0].label}: <strong className="text-white">{project.metrics[0].value}</strong>
                </span>
                <span className="font-semibold uppercase tracking-wider text-[#8EDAF2] group-hover:text-white transition-colors inline-flex items-center gap-1">
                  View Case Study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Performance Stats */}
      <section className="py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-left">
          <div className="space-y-1.5 sm:space-y-2 pb-5 sm:pb-6 border-b border-[#28245F]/50 md:border-b-0">
            <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white block">
              50+
            </span>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Major UAE Productions
            </p>
          </div>
          <div className="space-y-1.5 sm:space-y-2 pb-5 sm:pb-6 border-b border-[#28245F]/50 md:border-b-0">
            <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white block">
              1,400+
            </span>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Peak Arena Capacity
            </p>
          </div>
          <div className="space-y-1.5 sm:space-y-2 pb-5 sm:pb-6 border-b border-[#28245F]/50 md:border-b-0">
            <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white block">
              98%
            </span>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Attendee Engagement
            </p>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white block">
              100%
            </span>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              On-Time UAE Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full text-center">
        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            PRIVATE PORTFOLIO DECKS
          </span>
          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
            Have a Specific Production in Mind?
          </h2>
          <p className="text-[#E3E6EF]/85 text-sm sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Request our private portfolio deck including comprehensive floor plans, AV schematics, and confidential client references.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <MagneticButton href="/contact" variant="primary">
              Request Full Portfolio
            </MagneticButton>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-[#8EDAF2] hover:text-white transition-colors"
            >
              Return Home →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#12103D]/85 p-4 sm:p-8 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-[#28245F] bg-[#12103D] shadow-2xl my-8 text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#28245F]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8EDAF2] font-semibold block">
                  CASE STUDY ARCHIVE // {activeProject.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#28245F] text-[#E3E6EF] hover:text-white text-sm font-bold transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#28245F]">
                <Image
                  src={activeProject.heroImage}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-white">
                  Executive Summary
                </h4>
                <p className="text-base text-[#E3E6EF]/90 leading-relaxed font-light">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#28245F]">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8EDAF2] block font-semibold">
                    THE CHALLENGE
                  </span>
                  <p className="text-sm text-[#E3E6EF]/85 leading-relaxed font-light">
                    {activeProject.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8EDAF2] block font-semibold">
                    THE EXECUTION &amp; RESULT
                  </span>
                  <p className="text-sm text-[#E3E6EF]/85 leading-relaxed font-light">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#28245F]">
                {activeProject.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#8EDAF2]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-[#28245F]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8EDAF2] block">
                  Production Moments
                </span>
                <div className="grid grid-cols-3 gap-4">
                  {activeProject.gallery.map((img, i) => (
                    <div key={i} className="relative h-28 sm:h-36 rounded-xl overflow-hidden border border-[#28245F]">
                      <Image
                        src={img}
                        alt="Production gallery detail"
                        fill
                        className="object-cover brightness-95 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
