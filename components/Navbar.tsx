"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

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
      setIsScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "py-3 px-4 sm:px-8"
            : "py-6 sm:py-7 px-6 sm:px-12"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "max-w-6xl rounded-full bg-[#0B0A0D]/90 px-6 py-2.5 shadow-[0_12px_40px_rgba(11,10,13,0.6)] backdrop-blur-2xl border-none"
              : "max-w-7xl"
          }`}
        >
          {/* Logo with new 3D Emblem & Brand Typography */}
          <Link
            href="/"
            className="group relative flex items-center gap-2.5 sm:gap-3 py-1 outline-none"
            aria-label="Thriveus Home"
          >
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-icon.png"
                alt="Thriveus Logo"
                fill
                priority
                sizes="40px"
                className="object-contain drop-shadow-[0_0_12px_rgba(23,130,168,0.45)]"
              />
            </div>
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#1782A8]">
              Thrive<span className="italic font-serif font-normal text-[#75559C]">us</span>
            </span>
          </Link>

          {/* Center Agency Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 font-semibold ${
                    isActive
                      ? "text-[#1782A8]"
                      : "text-white/80 hover:text-[#1782A8]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="!py-2.5 !px-5 text-xs font-semibold !border-none !border-0 shadow-sm"
            >
              Let&apos;s Create
            </MagneticButton>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 rounded-full bg-[#242057]/60 text-white backdrop-blur-md focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0B0A0D]/98 px-8 pt-32 pb-12 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-2xl font-bold tracking-tight text-white hover:text-[#1782A8]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-[#242057]">
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#1782A8] mb-4">
                DUBAI, UNITED ARAB EMIRATES
              </p>
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full text-center py-4 uppercase tracking-widest text-sm"
              >
                Let&apos;s Create
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
