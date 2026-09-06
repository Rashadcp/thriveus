"use client";

import React from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  dataCursor?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-display text-xs sm:text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 select-none overflow-hidden rounded-full py-3.5 px-7 outline-none focus-visible:ring-2 focus-visible:ring-[#8EDAF2] hover:scale-[1.02] active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#12103D] text-white hover:bg-[#28245F] border border-[#8EDAF2]/50 transition-colors duration-300",
    secondary:
      "bg-transparent text-[#17163F] border border-[#28245F]/30 hover:border-[#8EDAF2] hover:bg-[#F7F9FC] transition-colors duration-300",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[#8EDAF2] hover:text-[#8EDAF2] transition-colors duration-300",
    ghost:
      "bg-transparent text-[#62627A] hover:text-[#17163F] p-0 hover:scale-100 transition-colors duration-300",
    dark:
      "bg-[#28245F] text-white border border-[#8EDAF2]/30 hover:border-[#8EDAF2] hover:bg-[#12103D] transition-colors duration-300",
  };

  const content = (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {/* Light sweep animation on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block border-none bg-transparent p-0 outline-none"
    >
      {content}
    </button>
  );
}
