"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  num: string;
  title: string;
  location: string;
  tags: string[];
  heroImage: string;
  gallery: string[];
  description: string;
  metrics: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "summit",
    num: "01",
    title: "Global Corporate Summit",
    location: "Dubai Arena · UAE",
    tags: ["Summit", "Stage Production"],
    heroImage: "/images/hero-event.jpg",
    gallery: [
      "/images/hero-event.jpg",
      "/images/vip-lounge.jpg",
      "/images/cta-texture.jpg",
    ],
    description:
      "An international corporate summit for 1,400 business leaders at the Dubai Arena, featuring custom stage design, immersive lighting, and interactive keynote sessions.",
    metrics: [
      { label: "Attendees", value: "1,400+" },
      { label: "Satisfaction", value: "98%" },
      { label: "Location", value: "Dubai" },
    ],
  },
  {
    id: "gala",
    num: "02",
    title: "Burj Khalifa Gala Dinner",
    location: "Downtown Dubai · UAE",
    tags: ["Gala Dinner", "VIP Experience"],
    heroImage: "/images/featured-experience.jpg",
    gallery: [
      "/images/featured-experience.jpg",
      "/images/vip-lounge.jpg",
      "/images/hero-event.jpg",
    ],
    description:
      "An exclusive gala dinner overlooking the Burj Khalifa with custom lighting, bespoke dining, and an unforgettable evening for 1,200 guests.",
    metrics: [
      { label: "Guests", value: "1,200" },
      { label: "Client Rating", value: "10/10" },
      { label: "Location", value: "Downtown" },
    ],
  },
  {
    id: "retreat",
    num: "03",
    title: "Desert Leadership Retreat",
    location: "Bab Al Shams · Dubai",
    tags: ["Executive Retreat", "Team Bonding"],
    heroImage: "/images/desert-retreat.jpg",
    gallery: [
      "/images/desert-retreat.jpg",
      "/images/vip-lounge.jpg",
      "/images/featured-experience.jpg",
    ],
    description:
      "A peaceful desert getaway designed for leadership teams, combining strategy workshops with evening campfire discussions under the stars.",
    metrics: [
      { label: "Leaders", value: "48" },
      { label: "Duration", value: "2 Days" },
      { label: "Location", value: "Desert Oasis" },
    ],
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full bg-white py-20 sm:py-36 px-5 sm:px-12 overflow-hidden text-[#17163F] border-b border-[#E3E6EF]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#E3E6EF]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#62627A] font-semibold block mb-2 sm:mb-3">
              SELECTED WORKS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17163F]">
              Recent Productions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#62627A] max-w-xs font-light leading-relaxed">
            Curated corporate events delivered across Dubai, Abu Dhabi, and the wider UAE.
          </p>
        </div>

        {/* Open Editorial Showcase - Zero Container Box Clutter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => setActiveProject(project)}
            >
              <div>
                {/* Clean Photographic Visual */}
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-[#F7F9FC]">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Meta & Title */}
                <div className="mt-5 sm:mt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#62627A]">
                    <span className="font-semibold text-[#17163F]">{project.num} // {project.location}</span>
                    <span>{project.tags[0]}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-2xl font-bold text-[#17163F] group-hover:text-[#28245F] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62627A] font-light leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Clean Text Action */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-[#E3E6EF] flex items-center justify-between text-xs font-mono">
                <span className="text-[#62627A]">
                  {project.metrics[0].label}: <strong className="text-[#17163F]">{project.metrics[0].value}</strong>
                </span>
                <span className="font-semibold uppercase tracking-wider text-[#12103D] group-hover:text-[#28245F] transition-colors inline-flex items-center gap-1">
                  View Case Study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#12103D]/80 p-3 sm:p-8 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden border border-[#28245F] bg-[#12103D] shadow-2xl my-4 sm:my-8 text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#28245F]">
              <div className="pr-4">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8EDAF2] font-semibold block">
                  CASE STUDY ARCHIVE
                </span>
                <h3 className="font-display text-base sm:text-xl font-bold text-white mt-0.5 truncate max-w-[240px] sm:max-w-none">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#28245F] text-[#E3E6EF] hover:text-white text-xs sm:text-sm font-bold transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 max-h-[75vh] overflow-y-auto">
              <div className="relative h-48 sm:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#28245F]">
                <Image
                  src={activeProject.heroImage}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  The Experience Brief &amp; Delivery
                </h4>
                <p className="text-sm sm:text-base text-[#E3E6EF]/90 leading-relaxed font-light">
                  {activeProject.description}
                </p>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-[#28245F]">
                {activeProject.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-display text-xl sm:text-3xl font-bold text-white block">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#8EDAF2]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Multi-Photo Gallery Preview */}
              <div className="space-y-3 pt-5 sm:pt-6 border-t border-[#28245F]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8EDAF2] block">
                  Production Moments
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {activeProject.gallery.map((img, i) => (
                    <div key={i} className="relative h-24 sm:h-36 rounded-lg sm:rounded-xl overflow-hidden border border-[#28245F]">
                      <Image
                        src={img}
                        alt="Production gallery detail"
                        fill
                        sizes="(max-width: 640px) 50vw, 300px"
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
    </section>
  );
}
