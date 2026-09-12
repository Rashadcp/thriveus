"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#EAE7DC] border-b border-[#DEDACB] transition-all duration-300 ${
          isScrolled
            ? "py-2 shadow-[0_4px_20px_rgba(28,22,75,0.06)]"
            : "py-2.5 sm:py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Official Thriveus Brand Lockup */}
          <Link
            href="/"
            className="group relative flex items-center py-0.5 transition-opacity duration-200 hover:opacity-85 focus:outline-none"
            aria-label="Thriveus Home"
          >
            <Image
              src="/images/logo-nav-cream.png"
              alt="Thriveus"
              width={180}
              height={52}
              priority
              quality={100}
              className="h-[32px] sm:h-[38px] md:h-[42px] w-auto object-contain [image-rendering:-webkit-optimize-contrast]"
            />
          </Link>

          {/* Clean Nav Links (No background / No pill dock) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-9"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-display text-xs sm:text-[13px] tracking-[0.14em] uppercase transition-colors duration-200 py-0.5 ${
                    isActive
                      ? "text-[#8A5FA8] font-bold"
                      : "text-[#1C164B] font-semibold hover:text-[#8A5FA8]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Luxury CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1C164B] text-[#EAE7DC] hover:bg-[#8A5FA8] hover:text-white px-5 py-2 font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-95"
            >
              Let&apos;s Create
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-8 h-8 rounded-full text-[#1C164B] focus:outline-none transition-transform active:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-3.5 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-full bg-[#1C164B] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#1C164B] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#1C164B] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Luxury Editorial Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#EAE7DC]/98 px-6 sm:px-10 pt-20 pb-10 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-between">
              {/* Navigation Links with Numbering */}
              <nav className="flex flex-col divide-y divide-[#DEDACB]">
                {NAV_LINKS.map((link, idx) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href || pathname.startsWith(link.href + "/");

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.35 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-display text-xs text-[#8A5FA8] font-semibold">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-display text-2xl font-bold tracking-tight uppercase transition-colors ${
                              isActive
                                ? "text-[#8A5FA8]"
                                : "text-[#1C164B] group-hover:text-[#8A5FA8]"
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#8A5FA8]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Card with Agency Info & CTA */}
              <div className="pt-8 mt-6 border-t border-[#DEDACB] space-y-5">
                <div className="flex items-center justify-between text-xs text-[#5B5578]">
                  <span className="uppercase font-display tracking-wider font-semibold text-[#8A5FA8]">
                    Dubai, UAE
                  </span>
                  <span>info@thriveus.ae</span>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1C164B] text-[#EAE7DC] hover:bg-[#8A5FA8] hover:text-white font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md active:scale-95"
                >
                  <span>Let&apos;s Create</span>
                  <span className="text-sm">↗</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
