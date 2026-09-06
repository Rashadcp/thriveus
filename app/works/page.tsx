"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

interface Project {
  id: string;
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

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="max-w-4xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block mb-4">
            DOCUMENTED PORTFOLIO · UAE &amp; GCC
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Curated Impact.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EDAF2] via-[#8B7BC0] to-white">
              Documented Excellence.
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-[#E3E6EF] leading-relaxed font-normal">
            Explore our signature portfolio of international arena conferences, avant-garde VIP galas, and secluded executive sanctuaries produced across Dubai and the UAE.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-[#8EDAF2] text-[#12103D] font-bold shadow-[0_0_20px_rgba(142,218,242,0.4)]"
                    : "bg-[#28245F] text-[#E3E6EF] hover:text-white border border-[#E3E6EF]/15 hover:border-[#8EDAF2]/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid - Reduced Compact Size */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#28245F] border border-[#E3E6EF]/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#8EDAF2]/60 hover:shadow-[0_15px_35px_rgba(18,16,61,0.5)]"
            >
              {/* Media Preview - Reduced Height */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#12103D]">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28245F] via-transparent to-transparent opacity-80" />

                {/* Top Location & Year Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="rounded-full bg-[#12103D]/85 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-mono text-[#8EDAF2] border border-[#8EDAF2]/20">
                    {project.location}
                  </span>
                  <span className="rounded-full bg-[#12103D]/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono text-white/90 border border-white/10">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Meta Content - Compact Padding */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#12103D]/60 border border-[#8EDAF2]/20 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[#8EDAF2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#8EDAF2] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#E3E6EF]/75 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Quick View - Compact */}
                <div className="pt-4 border-t border-[#E3E6EF]/15 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="font-display text-base sm:text-lg font-bold text-white">
                          {m.value}
                        </span>
                        <p className="text-[9px] font-mono uppercase text-[#8EDAF2]/80">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider font-semibold text-[#8EDAF2] hover:text-white transition-colors"
                  >
                    <span>Details</span>
                    <span className="text-sm text-[#8B7BC0]">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Performance Stats */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-[#28245F]/50 border border-[#E3E6EF]/10">
            <span className="font-display text-4xl sm:text-5xl font-black text-white">
              50+
            </span>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Major UAE Productions
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#28245F]/50 border border-[#E3E6EF]/10">
            <span className="font-display text-4xl sm:text-5xl font-black text-white">
              1,400+
            </span>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Peak Arena Capacity
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#28245F]/50 border border-[#E3E6EF]/10">
            <span className="font-display text-4xl sm:text-5xl font-black text-white">
              98%
            </span>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              Attendee Engagement
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#28245F]/50 border border-[#E3E6EF]/10">
            <span className="font-display text-4xl sm:text-5xl font-black text-white">
              100%
            </span>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#8EDAF2]">
              On-Time UAE Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 mx-auto max-w-7xl w-full text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            CUSTOM CASE STUDY DECKS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Have a Specific Production in Mind?
          </h2>
          <p className="text-[#E3E6EF] text-base sm:text-lg">
            Request our private NDA portfolio deck including comprehensive floor plans, AV schematics, and client references.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Request Full Portfolio
            </MagneticButton>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#8EDAF2] hover:text-white transition-colors"
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
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#28245F] bg-[#12103D]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8EDAF2] font-bold block">
                  VERIFIED CASE STUDY // {activeProject.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#28245F] text-[#E3E6EF] hover:text-white hover:bg-[#353075] text-sm font-bold transition-colors"
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

              <div className="flex flex-wrap items-center gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#8EDAF2]/30 bg-[#28245F] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#8EDAF2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-white">
                  Executive Summary
                </h4>
                <p className="text-base text-[#E3E6EF] leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#28245F]">
                <div className="p-5 rounded-2xl bg-[#28245F]/60 border border-[#28245F]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8EDAF2] block mb-2 font-bold">
                    THE CHALLENGE
                  </span>
                  <p className="text-sm text-[#E3E6EF]/90 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#28245F]/60 border border-[#28245F]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8EDAF2] block mb-2 font-bold">
                    THE EXECUTION &amp; RESULT
                  </span>
                  <p className="text-sm text-[#E3E6EF]/90 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#28245F]">
                {activeProject.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-[#28245F] border border-[#28245F]/50 text-center">
                    <span className="font-display text-2xl font-bold text-white">
                      {m.value}
                    </span>
                    <p className="mt-1 text-[10px] font-mono uppercase text-[#8EDAF2]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-[#28245F]">
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
