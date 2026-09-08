import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorksClient from "@/components/WorksClient";

export const metadata: Metadata = {
  title: "Recent Productions & Event Films | Thriveus Corporate Events UAE",
  description:
    "Explore curated corporate event productions, summits, celebrations, and live event films delivered across Dubai, Abu Dhabi, and the UAE by Thriveus.",
  alternates: {
    canonical: "https://thriveus.ae/works",
  },
  openGraph: {
    title: "Recent Productions & Event Films | Thriveus Corporate Events UAE",
    description:
      "Explore curated corporate event productions, summits, celebrations, and live event films delivered across Dubai, Abu Dhabi, and the UAE by Thriveus.",
    url: "https://thriveus.ae/works",
    siteName: "Thriveus",
    images: ["/images/arena-games-squidgame.jpg"],
  },
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#EAE7DC] text-[#1C164B] flex flex-col justify-between overflow-x-clip">
      <Navbar />
      <WorksClient />
      <Footer />
    </main>
  );
}
