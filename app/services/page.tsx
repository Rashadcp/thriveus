import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata = {
  title: "Our Services | Thriveus Corporate Experiences & Events UAE",
  description:
    "Comprehensive corporate event production, team engagement, executive retreats, immersive summits, and proprietary NeoThrive intelligence in Dubai & UAE.",
};

const CORE_SERVICES = [
  {
    num: "01",
    title: "Creative Strategy & Brand Systems",
    subtitle: "Identity & Visual Direction",
    desc: "We define the narrative arc, visual identity, and spatial storytelling that transform standard corporate gatherings into iconic brand milestones.",
    image: "/images/hero-event.jpg",
    tags: ["Narrative Design", "Spatial Storytelling", "Brand Architecture"],
  },
  {
    num: "02",
    title: "Flagship Summits & Arena Stages",
    subtitle: "Large-Scale Productions",
    desc: "End-to-end technical production, massive LED installations, synchronized audiovisual architecture, and stage choreography for up to 5,000+ executives.",
    image: "/images/vip-lounge.jpg",
    tags: ["Arena Production", "Live Streaming", "Keynote Staging"],
  },
  {
    num: "03",
    title: "Immersive Galas & Spatial Design",
    subtitle: "High-End Corporate Evenings",
    desc: "Avant-garde corporate dinners and award nights combining bespoke spatial lighting, architectural projection, gourmet hospitality, and sensory moments.",
    image: "/images/featured-experience.jpg",
    tags: ["Gala Dinners", "Kinetic Lighting", "VIP Hospitality"],
  },
  {
    num: "04",
    title: "Desert Retreats & Private Sanctuaries",
    subtitle: "Executive Offsites",
    desc: "Secluded leadership offsites in the Arabian dunes and private luxury islands, harmonizing high-level strategy sessions with restorative wellness.",
    image: "/images/desert-retreat.jpg",
    tags: ["Leadership Offsites", "Arabian Dunes", "Executive Wellness"],
  },
  {
    num: "05",
    title: "Team Building & Gamified CSR",
    subtitle: "Employee Engagement",
    desc: "Interactive, adrenaline-rich team missions and purpose-driven CSR initiatives that forge authentic interpersonal bonds and strengthen organizational alignment.",
    image: "/images/team-building.jpg",
    tags: ["CSR Missions", "Adrenaline Challenges", "Team Cohesion"],
  },
  {
    num: "06",
    title: "Corporate Training & Leadership Growth",
    subtitle: "Professional Development",
    desc: "Expert-facilitated workshops, executive leadership coaching, and gamified problem-solving modules designed to cultivate resilient modern leadership.",
    image: "/images/leadership-training.jpg",
    tags: ["Executive Coaching", "Gamified Learning", "Culture Development"],
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Strategic Discovery",
    desc: "We analyze your organizational goals, stakeholder demographics, and messaging imperatives to define clear experience objectives.",
  },
  {
    step: "02",
    title: "Spatial & Creative Concept",
    desc: "Our architects and creative directors engineer custom 3D renders, stage designs, lighting plots, and narrative timelines.",
  },
  {
    step: "03",
    title: "Turnkey Execution",
    desc: "Dedicated UAE-based production managers oversee every millisecond—from government permitting and AV engineering to VIP concierge.",
  },
  {
    step: "04",
    title: "Quantified Impact",
    desc: "Post-event analytics, attendee sentiment tracking, and organizational insights delivered through our NeoThrive platform.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="max-w-4xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block mb-4">
            OUR DISCIPLINES · UAE &amp; GCC
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Purpose-Built Experiences.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EDAF2] via-[#8B7BC0] to-white">
              Flawless Turnkey Execution.
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-[#E3E6EF] leading-relaxed font-normal">
            From arena-scale technology conferences and high-glamour awards galas to intimate executive desert offsites and gamified team-building journeys.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="/contact" variant="primary">
              Request a Proposal
            </MagneticButton>
            <MagneticButton href="/works" variant="outline">
              Explore Our Portfolio
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Flagship Services Grid */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Core Capabilities
            </h2>
          </div>
          <p className="text-sm font-mono text-[#8EDAF2]/80 uppercase tracking-widest">
            Full In-House AV, Staging &amp; Content Production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="group rounded-3xl bg-[#28245F] border border-[#E3E6EF]/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#8EDAF2]/60 hover:shadow-[0_20px_45px_rgba(142,218,242,0.15)]"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#12103D]">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28245F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 rounded-full bg-[#12103D]/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#8EDAF2] border border-[#8EDAF2]/20">
                  {srv.num} // {srv.subtitle}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#E3E6EF]/80 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E3E6EF]/15 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#12103D]/60 border border-[#8EDAF2]/20 px-2.5 py-0.5 text-[10px] font-mono text-[#8EDAF2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Methodology */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-3">
            OUR FRAMEWORK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            How We Curate Impact
          </h2>
          <p className="mt-4 text-[#E3E6EF] text-base sm:text-lg">
            A battle-tested production methodology delivering flawless precision for the world&apos;s most demanding brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((m) => (
            <div
              key={m.step}
              className="p-8 rounded-3xl bg-[#28245F] border border-[#E3E6EF]/15 relative overflow-hidden group hover:border-[#8EDAF2]/40 transition-all duration-300"
            >
              <span className="font-mono text-3xl font-black text-[#8EDAF2]/30 group-hover:text-[#8EDAF2] transition-colors block mb-4">
                {m.step}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-[#E3E6EF]/80 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 mx-auto max-w-7xl w-full text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            LET&apos;S COLLABORATE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Ready to Elevate Your Next Corporate Event?
          </h2>
          <p className="text-[#E3E6EF] text-base sm:text-lg">
            Speak directly with our executive producers in Dubai to map your vision, dates, and venue requirements.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Start a Conversation
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

      <Footer />
    </main>
  );
}
