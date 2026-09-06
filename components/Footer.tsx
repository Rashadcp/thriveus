"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/thriveus",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dubai is UTC+4
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setDubaiTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#12103D] border-t border-[#28245F] px-5 sm:px-12 py-12 sm:py-20 text-white overflow-hidden select-none">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-[#28245F]">
          {/* Brand Logo & Tagline */}
          <div className="space-y-2.5 sm:space-y-3 max-w-md">
            <Link href="/" className="group inline-flex items-center gap-2.5 sm:gap-3" aria-label="Thriveus Home">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-icon.png"
                  alt="Thriveus Logo"
                  fill
                  sizes="40px"
                  className="object-contain drop-shadow-[0_0_12px_rgba(142,218,242,0.45)]"
                />
              </div>
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#8EDAF2]">
                Thrive<span className="italic font-serif font-normal text-[#8B7BC0]">us</span>
              </span>
            </Link>
            <p className="font-display text-xs sm:text-sm tracking-wide text-[#62627A]">
              Curating Impact, One Experience at a Time.
            </p>
          </div>

          {/* Social Icons & Live Dubai Time */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {dubaiTime && (
              <div className="flex flex-col text-left sm:text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#62627A]">
                  DUBAI TIME (GST)
                </span>
                <span className="font-mono text-xs text-[#8EDAF2] font-semibold">
                  {dubaiTime}
                </span>
              </div>
            )}

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#28245F] bg-[#28245F]/50 text-[#E3E6EF] transition-all duration-300 hover:border-[#8EDAF2] hover:bg-[#8EDAF2] hover:text-[#12103D] shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-[#62627A] text-center sm:text-left">
          <p>© {new Date().getFullYear()} THRIVEUS EXPERIENTIAL. ALL RIGHTS RESERVED.</p>
          <p className="text-[#E3E6EF]/70 font-medium tracking-wider uppercase">DUBAI, UAE</p>
        </div>
      </div>
    </footer>
  );
}
