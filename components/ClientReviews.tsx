"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientReview {
  id: string;
  company: string;
  logo: string;
  quote: string;
  author: string;
  companyTag: string;
  event: string;
}

const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "review-systra",
    company: "Systra",
    logo: "/images/clients/systra.png",
    quote:
      "The yacht offsite was simply magical. Every detail, from the games to the sunset dinner, was flawless — our team is still talking about it!",
    author: "Akhilesh",
    companyTag: "Systra",
    event: "Rhythm & Revelry Yacht Experience",
  },
  {
    id: "review-schneider",
    company: "Schneider Electric",
    logo: "/images/clients/schneider-electric.png",
    quote:
      "Our desert team-building experience was thrilling and perfectly organised. It pushed our teams to collaborate, think creatively, and have fun all at once.",
    author: "Vibha",
    companyTag: "Schneider Electric",
    event: "Sun & Sand Desert Challenge",
  },
  {
    id: "review-veolia",
    company: "Veolia",
    logo: "/images/clients/veolia.png",
    quote:
      "Gamified activities turned safety awareness into an engaging and memorable experience for our team. Learning and fun went hand-in-hand.",
    author: "Theiry",
    companyTag: "Veolia",
    event: "Safety Awareness Event",
  },
  {
    id: "review-nomac",
    company: "Nomac",
    logo: "/images/clients/nomac.png",
    quote:
      "The office launch was perfectly executed, from décor to engagement activities. A memorable day that brought everyone together to celebrate our milestone.",
    author: "Saritha",
    companyTag: "Nomac",
    event: "Office Opening Event",
  },
];

export default function ClientReviews() {
  return (
    <section
      id="reviews"
      className="relative w-full bg-[#EAE7DC] py-20 sm:py-28 lg:py-32 px-5 sm:px-10 lg:px-14 overflow-hidden text-[#1C164B] border-b border-[#DEDACB]"
    >
      {/* Decorative ambient background curves matching presentation slides */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Subtle top right purple flowing curve */}
        <svg
          className="absolute -top-20 right-0 w-[550px] sm:w-[750px] lg:w-[950px] h-[600px] text-[#8A5FA8]/[0.08]"
          viewBox="0 0 1000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 0C450 150 700 50 850 250C1000 450 800 650 1000 700H1000V0H200Z"
            fill="currentColor"
          />
        </svg>

        {/* Soft cyan & lavender ambient blurred spots */}
        <div className="absolute top-1/3 -left-36 w-[450px] h-[450px] bg-[#98DAF6]/[0.14] rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8A5FA8]/[0.08] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
              <span className="text-[#8A5FA8]">STORIES </span>
              <span className="text-[#1C164B]">OF SUCCESS</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-lg font-bold tracking-wider text-[#5B5578] uppercase">
              IN THE VOICES OF OUR CLIENTS.
            </p>
          </motion.div>
        </div>

        {/* 4-Column Testimonial Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {CLIENT_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between items-center text-center p-6 sm:p-7 rounded-2xl bg-[#F2F0E8] border border-[#DEDACB] hover:border-[#8A5FA8]/50 hover:shadow-[0_15px_35px_rgba(28,22,75,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full flex flex-col items-center">
                {/* Brand Logo Container */}
                <div className="relative h-14 sm:h-16 w-36 sm:w-44 mb-6 flex items-center justify-center">
                  <Image
                    src={review.logo}
                    alt={`${review.company} logo`}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 240px, 320px"
                    className="object-contain [image-rendering:-webkit-optimize-contrast]"
                  />
                </div>

                {/* Review Text */}
                <p className="text-[#1C164B] text-sm sm:text-[15px] leading-relaxed font-light">
                  {review.quote}
                </p>
              </div>

              {/* Author & Event Attribution */}
              <div className="w-full mt-8 pt-4 border-t border-[#DEDACB] flex flex-col items-center text-center">
                <p className="font-display font-bold text-base sm:text-lg text-[#1C164B] leading-snug">
                  {review.author},{" "}
                  <span className="font-semibold text-[#5B5578]">{review.companyTag}</span>
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#8A5FA8] leading-snug">
                  {review.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
