"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/thriveus",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thriveus.uae/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ThriveusEvents",
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

          {/* Social Links as clean text links per reference */}
          <div className="flex items-center gap-6 sm:gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs sm:text-[13px] tracking-[0.14em] uppercase font-semibold text-[#1C164B] hover:text-[#8A5FA8] transition-colors"
              >
                {social.name}
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
