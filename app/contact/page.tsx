"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

const INQUIRY_TYPES = [
  "Flagship Summit / Conference",
  "VIP Gala / Award Night",
  "Executive Desert Retreat",
  "Employee Engagement / Team Building",
  "Corporate Training & Leadership",
  "Turnkey Production / AV Staging",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: INQUIRY_TYPES[0],
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#E3E6EF]/15">
        <div className="max-w-4xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block mb-4">
            INITIATE A CONVERSATION · DUBAI HQ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Let&apos;s Create Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EDAF2] via-[#8B7BC0] to-white">
              Remarkable Together.
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-[#E3E6EF] leading-relaxed font-normal">
            Whether you are curating an executive summit in Dubai or a signature corporate gala, our producers and experiential strategists are ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Info */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#28245F] border border-[#E3E6EF]/15 shadow-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2">
                PROJECT INQUIRY FORM
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
                Tell Us About Your Event
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#12103D] border border-[#8EDAF2]/40 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#8EDAF2]/20 text-[#8EDAF2] flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#E3E6EF] max-w-md mx-auto">
                    Thank you for contacting Thriveus. Our executive production team will review your requirements and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono uppercase tracking-widest text-[#8EDAF2] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Al-Mansoor"
                        className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Technologies"
                        className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                      Experience / Event Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8EDAF2]"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#12103D]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                      Project Vision &amp; Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details on your dates, estimated guest count, preferred UAE venue or desert location, and core objectives..."
                      className="w-full rounded-xl bg-[#12103D] border border-[#E3E6EF]/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#12103D] text-white py-4 px-8 font-display text-xs uppercase tracking-widest font-semibold border border-[#8EDAF2]/50 shadow-[0_4px_20px_rgba(142,218,242,0.22)] hover:bg-[#12103D]/80 hover:border-[#8EDAF2] transition-all duration-300"
                  >
                    Transmit Inquiry to Executive Producers
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-8 rounded-3xl bg-[#28245F] border border-[#E3E6EF]/15 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
                DIRECT CHANNELS
              </span>

              <div>
                <p className="text-xs uppercase font-mono tracking-widest text-[#E3E6EF]/70">
                  Email Inquiries
                </p>
                <a
                  href="mailto:curate@thriveus.ae"
                  className="mt-1 block font-display text-2xl font-bold text-[#8EDAF2] hover:text-[#8B7BC0] transition-colors"
                >
                  curate@thriveus.ae
                </a>
              </div>

              <div className="pt-4 border-t border-[#E3E6EF]/15">
                <p className="text-xs uppercase font-mono tracking-widest text-[#E3E6EF]/70">
                  Dubai Headquarters
                </p>
                <p className="mt-1 text-base text-white font-medium">
                  Dubai International Financial Centre (DIFC)
                </p>
                <p className="text-sm text-[#E3E6EF]/70">
                  Dubai, United Arab Emirates
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E6EF]/15">
                <p className="text-xs uppercase font-mono tracking-widest text-[#E3E6EF]/70">
                  Operating Hours
                </p>
                <p className="mt-1 text-sm text-white font-medium">
                  Monday – Friday · 09:00 – 18:00 GST
                </p>
                <p className="text-xs text-[#8EDAF2] font-mono mt-0.5">
                  24/7 Live Event Production Support
                </p>
              </div>
            </div>

            {/* Turnkey Assurance Card */}
            <div className="p-8 rounded-3xl bg-[#28245F] border border-[#8EDAF2]/25 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
                THE THRIVEUS PLEDGE
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Turnkey Reliability &amp; Rapid Turnaround
              </h3>
              <ul className="space-y-2.5 text-sm text-[#E3E6EF]/80">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
                  <span>Detailed concept proposal within 48 hours</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
                  <span>Comprehensive UAE government permits &amp; licensing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
                  <span>Dedicated Senior Producer assigned to your account</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8EDAF2]" />
                  <span>Confidentiality &amp; NDA compliance guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
