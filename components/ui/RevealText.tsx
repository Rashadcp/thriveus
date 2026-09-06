"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
  byLine?: boolean;
}

export default function RevealText({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
  duration = 0.9,
  stagger = 0.08,
  triggerOnScroll = true,
  byLine = false,
}: RevealTextProps) {
  // If split by line or split by words
  const items = byLine ? children.split("\n") : children.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: "120%",
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, // luxury quintic/cubic ease
      },
    },
  };

  const motionProps = triggerOnScroll
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-10% 0px" },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={containerVariants}
        {...motionProps}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`inline-block overflow-hidden py-1 ${byLine ? "w-full" : "mr-[0.25em]"}`}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block transform-gpu will-change-transform"
            >
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
