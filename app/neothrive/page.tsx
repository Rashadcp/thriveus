import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NeoThrivePage() {
  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between">
      <Navbar />
      <div className="pt-40 pb-24 px-6 sm:px-12 mx-auto max-w-5xl w-full">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8EDAF2]">
          PROPRIETARY TECHNOLOGY
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          NeoThrive: Experiential Intelligence & Measurable Impact.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-[#E3E6EF] max-w-2xl leading-relaxed">
          The proprietary technology platform by Thriveus powering intelligent attendee clustering, gamified physical activations, and post-experience organizational insights.
        </p>
        <div className="mt-12 flex gap-4">
          <MagneticButton href="/" variant="primary">
            Return to Homepage
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Request a Platform Demo
          </MagneticButton>
        </div>
      </div>
      <Footer />
    </main>
  );
}
