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
    desc: "We define the narrative arc, visual identity, and spatial storytelling that transform standard corporate gatherings into iconic brand milestones.",
    image: "/images/hero-event.jpg",
  },
  {
    num: "02",
    title: "Flagship Summits & Arena Stages",
    desc: "End-to-end technical production, massive LED installations, synchronized audiovisual architecture, and stage choreography for up to 5,000+ executives.",
    image: "/images/vip-lounge.jpg",
  },
  {
    num: "03",
    title: "Immersive Galas & Spatial Design",
    desc: "Avant-garde corporate dinners and award nights combining bespoke spatial lighting, architectural projection, gourmet hospitality, and sensory moments.",
    image: "/images/featured-experience.jpg",
  },
  {
    num: "04",
    title: "Desert Retreats & Private Sanctuaries",
    desc: "Secluded leadership offsites in the Arabian dunes and private luxury islands, harmonizing high-level strategy sessions with restorative wellness.",
    image: "/images/desert-retreat.jpg",
  },
  {
    num: "05",
    title: "Team Building & Gamified CSR",
    desc: "Interactive, adrenaline-rich team missions and purpose-driven CSR initiatives that forge authentic interpersonal bonds and strengthen organizational alignment.",
    image: "/images/team-building.jpg",
  },
  {
    num: "06",
    title: "Corporate Training & Leadership Growth",
    desc: "Expert-facilitated workshops, executive leadership coaching, and gamified problem-solving modules designed to cultivate resilient modern leadership.",
    image: "/images/leadership-training.jpg",
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
    title: "Spatial Concept",
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

      {/* Hero Header - Confident Typography & Whitespace */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-28 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            DISCIPLINES · UAE &amp; GCC
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Purpose-Built Experiences.
            <br className="hidden sm:inline" />
            {" "}Flawless Turnkey Execution.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-2xl text-[#E3E6EF]/85 leading-relaxed font-light max-w-3xl">
            From arena-scale technology conferences and high-glamour awards galas to intimate executive desert offsites and gamified team-building journeys.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <MagneticButton href="/contact" variant="primary">
              Request a Proposal
            </MagneticButton>
            <MagneticButton href="/works" variant="outline">
              Explore Our Portfolio
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Flagship Services */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2 sm:mb-3">
            WHAT WE DELIVER
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Core Specializations
          </h2>
          <p className="mt-3 sm:mt-4 text-[#E3E6EF]/75 text-sm sm:text-lg font-light leading-relaxed">
            Full in-house creative direction, audiovisual architecture, and turnkey production across Dubai and the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {CORE_SERVICES.map((srv) => (
            <div key={srv.num} className="group flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-[#28245F]/30">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
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

      {/* Production Methodology */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2 sm:mb-3">
            METHODOLOGY
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold tracking-tight text-white">
            How We Curate Impact
          </h2>
          <p className="mt-3 sm:mt-4 text-[#E3E6EF]/75 text-sm sm:text-lg font-light leading-relaxed">
            A battle-tested production framework delivering precision for the world&apos;s leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {METHODOLOGY_STEPS.map((m) => (
            <div key={m.step} className="space-y-3 sm:space-y-4 pb-6 sm:pb-0 border-b border-[#28245F]/40 sm:border-b-0">
              <span className="font-mono text-2xl sm:text-3xl font-light text-[#8EDAF2] block pb-3 sm:pb-4 border-b border-[#28245F]/50">
                {m.step}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                {m.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E3E6EF]/75 leading-relaxed font-light">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-20 sm:py-36 px-5 sm:px-12 mx-auto max-w-7xl w-full text-center">
        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            LET&apos;S COLLABORATE
          </span>
          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
            Ready to Elevate Your Next Corporate Event?
          </h2>
          <p className="text-[#E3E6EF]/85 text-sm sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Speak directly with our executive producers in Dubai to map your vision, dates, and venue requirements.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <MagneticButton href="/contact" variant="primary">
              Start a Conversation
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

      <Footer />
    </main>
  );
}
