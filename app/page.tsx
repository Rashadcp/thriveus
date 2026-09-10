import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualMarqueeGallery from "@/components/DualMarqueeGallery";
import AboutSection from "@/components/AboutSection";
import Services3DCarousel from "@/components/Services3DCarousel";
import BeatsBeyond from "@/components/BeatsBeyond";
import SignatureExperiences from "@/components/SignatureExperiences";
import ProjectsSection from "@/components/ProjectsSection";
import ClientReviews from "@/components/ClientReviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-clip bg-[#EAE7DC] text-[#1C164B]">
      <Navbar />
      <Hero />
      <DualMarqueeGallery />
      <AboutSection />
      <Services3DCarousel />
      <BeatsBeyond />
      <SignatureExperiences />
      <ProjectsSection />
      <ClientReviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}
