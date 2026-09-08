import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Thriveus Corporate Events UAE",
  description:
    "Get in touch with Thriveus to curate your next corporate event, executive retreat, or experiential production across Dubai and the UAE.",
  alternates: {
    canonical: "https://thriveus.ae/contact",
  },
  openGraph: {
    title: "Contact Us | Thriveus Corporate Events UAE",
    description:
      "Get in touch with Thriveus to curate your next corporate event, executive retreat, or experiential production across Dubai and the UAE.",
    url: "https://thriveus.ae/contact",
    siteName: "Thriveus",
    images: ["/images/corporate-ballroom-team.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#EAE7DC] text-[#1C164B] flex flex-col justify-between overflow-x-clip">
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  );
}
