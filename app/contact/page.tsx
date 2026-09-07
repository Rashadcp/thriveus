import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact | Thriveus Corporate Events UAE",
  description:
    "Get in touch with Thriveus to curate your next corporate event, executive retreat, or experiential production across Dubai and the UAE.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1C164B] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  );
}
