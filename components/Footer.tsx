"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/thriveus",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thriveus.uae/",
    icon: (
      <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ThriveusEvents",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#EAE7DC] border-t border-[#DEDACB] px-5 sm:px-12 py-10 sm:py-14 text-[#1C164B] overflow-hidden select-none">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#DEDACB]">
          {/* Brand Logo & Tagline */}
          <div className="space-y-2 max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center transition-opacity duration-200 hover:opacity-85"
              aria-label="Thriveus Home"
            >
              <Image
                src="/images/logo-nav-cream.png"
                alt="Thriveus"
                width={160}
                height={46}
                quality={100}
                className="h-8 sm:h-9 w-auto object-contain [image-rendering:-webkit-optimize-contrast]"
              />
            </Link>
            <p className="font-light text-xs sm:text-sm tracking-wide text-[#5B5578]">
              Curating Impact, One Experience at a Time.
            </p>
          </div>

          {/* Social Links with Icons */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-display text-xs sm:text-[13px] tracking-[0.14em] uppercase font-semibold text-[#1C164B] hover:text-[#8A5FA8] transition-all"
                aria-label={`Visit Thriveus on ${social.name}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C164B]/5 border border-[#1C164B]/15 text-[#1C164B] group-hover:bg-[#8A5FA8] group-hover:text-white group-hover:border-[#8A5FA8] transition-all duration-300 shadow-xs">
                  {social.icon}
                </span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#5B5578] text-center sm:text-left">
          <p>© 2026 THRIVEUS EVENTS CO. L.L.C. ALL RIGHTS RESERVED.</p>
          <p className="text-[#1C164B] font-semibold tracking-wider uppercase">DUBAI, UAE</p>
        </div>
      </div>
    </footer>
  );
}
