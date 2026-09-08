import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorksClient from "@/components/WorksClient";

export const metadata = {
  title: "Recent Productions & Event Films | Thriveus Corporate Events UAE",
  description:
    "Explore curated corporate event productions, summits, celebrations, and live event films delivered across Dubai, Abu Dhabi, and the UAE by Thriveus.",
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
