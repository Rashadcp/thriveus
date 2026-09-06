import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualMarqueeGallery from "@/components/DualMarqueeGallery";
import AboutSection from "@/components/AboutSection";
import Services3DCarousel from "@/components/Services3DCarousel";
import BeatsBeyond from "@/components/BeatsBeyond";
import ProjectsSection from "@/components/ProjectsSection";
import NeoThrive from "@/components/NeoThrive";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-clip bg-[#12103D] text-white">
      <Navbar />
      <Hero />
      <DualMarqueeGallery />
      <AboutSection />
      <Services3DCarousel />
      <BeatsBeyond />
      <ProjectsSection />
      <NeoThrive />
      <FinalCTA />
      <Footer />
    </main>
  );
}
