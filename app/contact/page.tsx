"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const INQUIRY_TYPES = [
  "Curated Experiences & Arena Games",
  "Conferences & Corporate Productions",
  "Celebrations & Cultural Events",
  "Experiential Team Building",
  "Coaching, Training & Capability Building",
  "Gamified Learning & Training",
  "Leadership Retreats & Executive Offsites",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: INQUIRY_TYPES[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Route inquiry directly to jahan@thriveus.ae
    const subject = encodeURIComponent(`Thriveus Website Inquiry: ${formData.inquiryType} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.company}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiryType}\n\nProject Vision:\n${formData.message}`
    );
    window.location.href = `mailto:jahan@thriveus.ae?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#12103D] text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-48 pb-14 sm:pb-20 px-5 sm:px-12 mx-auto max-w-7xl w-full border-b border-[#28245F]/50">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#8EDAF2] block">
            INITIATE A CONVERSATION · DUBAI, UAE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Let&apos;s Create Something
            <br className="hidden sm:inline" />
            {" "}Remarkable Together.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-2xl text-[#E3E6EF]/85 leading-relaxed font-light max-w-3xl">
            Whether you are curating an executive retreat, an arena game format, or a full conference production, our team is ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-24 px-5 sm:px-12 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#28245F]/30 border border-[#28245F]/80 shadow-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block mb-2">
                PROJECT INQUIRY FORM
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                Tell Us About Your Event
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#12103D] border border-[#8EDAF2]/40 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#8EDAF2]/20 text-[#8EDAF2] flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Prepared
                  </h3>
                  <p className="text-sm text-[#E3E6EF] max-w-md mx-auto">
                    Your inquiry has been routed to <strong>jahan@thriveus.ae</strong>. Our team will review your requirements and respond promptly.
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
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
                        placeholder="you@company.com"
                        className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Organisation / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your organisation"
                        className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#E3E6EF] mb-2">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
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
                      className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8EDAF2]"
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
                      placeholder="Share details on your dates, estimated guest count, preferred venue or desert setting, and core objectives..."
                      className="w-full rounded-xl bg-[#12103D] border border-[#28245F] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8EDAF2]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#8EDAF2] text-[#12103D] py-4 px-8 font-display text-xs uppercase tracking-widest font-bold shadow-[0_4px_20px_rgba(142,218,242,0.3)] hover:bg-white transition-all duration-300"
                  >
                    Send Inquiry to jahan@thriveus.ae
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#28245F]/30 border border-[#28245F]/80 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8EDAF2] font-semibold block">
                DIRECT CONTACT
              </span>

              <div>
                <p className="text-xs uppercase font-mono tracking-widest text-[#62627A]">
                  Email Direct
                </p>
                <a
                  href="mailto:jahan@thriveus.ae"
                  className="mt-1 block font-display text-xl sm:text-2xl font-bold text-[#8EDAF2] hover:text-white transition-colors"
                >
                  jahan@thriveus.ae
                </a>
              </div>

              <div className="pt-4 border-t border-[#28245F]/60">
                <p className="text-xs uppercase font-mono tracking-widest text-[#62627A]">
                  Location
                </p>
                <p className="mt-1 text-base text-white font-medium">
                  Dubai, United Arab Emirates
                </p>
                <p className="text-xs font-mono text-[#8EDAF2] mt-0.5">
                  DUBAI · ABU DHABI · AL AIN · UAE WIDE
                </p>
              </div>

              <div className="pt-4 border-t border-[#28245F]/60">
                <p className="text-xs uppercase font-mono tracking-widest text-[#62627A]">
                  Experience Delivery
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#E3E6EF]/75 leading-relaxed font-light">
                  Serving enterprise clients across energy, engineering, logistics, water technologies, and industrial automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
