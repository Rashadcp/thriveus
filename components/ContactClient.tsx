"use client";

import React, { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `Thriveus Inquiry from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jahan@thriveus.ae?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 sm:pt-44 pb-20 sm:pb-32 px-5 sm:px-12 mx-auto max-w-5xl w-full flex-1">
      {/* Simple Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <span className="font-display text-xs uppercase tracking-widest text-[#98DAF6] font-semibold">
          GET IN TOUCH
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Let&apos;s <span className="font-seasons italic font-bold text-[#98DAF6]">connect</span>.
        </h1>
        <p className="text-sm sm:text-base text-[#EAE7DC]/80 font-light leading-relaxed">
          Planning a corporate event, summit, or experiential production in the UAE? Send us a quick note or reach out directly.
        </p>
      </div>

      {/* 2-Column Minimal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* Left: Quick Direct Contact Info */}
        <div className="md:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-display uppercase tracking-wider text-[#8A5FA8] font-semibold block mb-1">
              Direct Email
            </span>
            <a
              href="mailto:jahan@thriveus.ae"
              className="text-lg sm:text-2xl font-display font-bold text-[#98DAF6] hover:text-white transition-colors"
            >
              jahan@thriveus.ae
            </a>
          </div>

          <div>
            <span className="text-xs font-display uppercase tracking-wider text-[#8A5FA8] font-semibold block mb-1">
              Location
            </span>
            <p className="text-base text-white font-medium">
              Dubai, United Arab Emirates
            </p>
          </div>

          <div>
            <span className="text-xs font-display uppercase tracking-wider text-[#8A5FA8] font-semibold block mb-1">
              Response Time
            </span>
            <p className="text-sm text-[#EAE7DC]/80 font-light">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Right: Very Simple 3-Field Form */}
        <div className="md:col-span-7 bg-[#1C164B]/80 rounded-2xl p-6 sm:p-8 border border-[#8A5FA8]/30 shadow-xl">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-[#98DAF6]/20 text-[#98DAF6] flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Message Prepared
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE7DC]/80 max-w-sm mx-auto">
                Your email client has opened with your details addressed to <strong>jahan@thriveus.ae</strong>. We look forward to speaking with you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="pt-2 text-xs font-semibold text-[#98DAF6] hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-display font-medium uppercase tracking-wider text-[#EAE7DC]/80 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-[#000000]/40 border border-[#8A5FA8]/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#98DAF6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-medium uppercase tracking-wider text-[#EAE7DC]/80 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-[#000000]/40 border border-[#8A5FA8]/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#98DAF6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-medium uppercase tracking-wider text-[#EAE7DC]/80 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event (date, estimated guests, format)..."
                  className="w-full rounded-xl bg-[#000000]/40 border border-[#8A5FA8]/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#98DAF6] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#98DAF6] text-[#1C164B] py-3.5 px-6 font-display text-xs uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(152,218,246,0.3)] hover:bg-[#8A5FA8] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
