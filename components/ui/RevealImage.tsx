"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface RevealImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  sizes?: string;
  dataCursor?: string;
}

export default function RevealImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  aspectRatio = "aspect-[16/9]",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px",
  dataCursor = "view",
}: RevealImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ clipPath: "inset(8% 4% 8% 4% round 16px)", opacity: 0.7 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor={dataCursor}
      className={`relative overflow-hidden w-full ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1.0 }}
        viewport={{ once: true }}
        animate={{ scale: isHovered ? 1.04 : 1.0 }}
        transition={{
          scale: { duration: isHovered ? 0.8 : 1.4, ease: [0.16, 1, 0.3, 1] as const },
        }}
        className="relative h-full w-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          sizes={sizes}
          className={`object-cover object-center ${imageClassName}`}
        />
        {/* Subtle dark vignette overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
}
