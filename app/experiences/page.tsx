import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between">
      <Navbar />
      <div className="pt-40 pb-24 px-6 sm:px-12 mx-auto max-w-5xl w-full">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8EDAF2]">
          EXPERIENTIAL PORTFOLIO
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Bespoke Corporate Gatherings, Galas & Summits.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-[#E3E6EF] max-w-2xl leading-relaxed">
          From leadership retreats in the Arabian desert to flagship technology summits at the Dubai World Trade Centre, each production is engineered from the ground up to cultivate connection and inspiration.
        </p>
        <div className="mt-12 flex gap-4">
          <MagneticButton href="/" variant="primary">
            Return to Homepage
          </MagneticButton>
          <MagneticButton href="/our-work" variant="outline">
            View Case Studies
          </MagneticButton>
        </div>
      </div>
      <Footer />
    </main>
  );
}
