
"use client";
import React, { useRef } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
};

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.4 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HelpTalentsGrow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className={`bg-[#1a2b47] text-white py-20 px-4 sm:px-8 ${plusJakarta.className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div className="mb-8" variants={fadeInUpVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={fadeInUpVariants}
          >
            Help{" "}
            <span className="bg-[#B6EB6A] text-[#1a2b47] px-4 py-2 rounded-2xl inline-block">
              Talents Grow
            </span>
          </motion.h2>
          <motion.h3
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={fadeInUpVariants}
          >
            With You as Their Guide
          </motion.h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUpVariants}
        >
          Mentor rising tech talents, build leadership, and grow visibility by sharing what you know with talents building their tech experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={containerVariants}
        >
          <motion.button
            className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Become a Mentor ✨
          </motion.button>
          <motion.button
            className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Log in as a Mentor →
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 mb-16"
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={statVariants}>
            <div className="text-5xl font-bold text-[#B6EB6A] mb-2">500+</div>
            <div className="text-gray-300 text-lg">sessions hosted</div>
          </motion.div>

          <div className="hidden lg:block w-px h-16 bg-gray-600"></div>

          <motion.div className="text-center" variants={statVariants}>
            <div className="text-5xl font-bold text-[#B6EB6A] mb-2">200+</div>
            <div className="text-gray-300 text-lg">talents mentored</div>
          </motion.div>

          <div className="hidden lg:block w-px h-16 bg-gray-600"></div>

          <motion.div className="text-center" variants={statVariants}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-300 text-sm">Mentors from</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-2xl">🇳🇬</span>
              <span className="text-2xl">🇬🇧</span>
              <span className="text-2xl">🇨🇦</span>
              <span className="text-2xl">🇺🇸</span>
            </div>
            <div className="text-3xl font-bold text-[#B6EB6A]">
              10+ <span className="text-gray-300 text-lg font-normal">countries</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Conference Image */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={imageVariants}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/AboutImage.jpg"
              alt="Mentoring session video conference"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Video Conference UI Overlay */}
            <motion.div
              className="absolute top-4 right-4"
              variants={fadeInUpVariants}
            >
              <div className="bg-[#B6EB6A] text-black px-3 py-1 rounded-full text-sm font-semibold">
                Mentor
              </div>
            </motion.div>

            {/* Bottom Controls Overlay */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              variants={fadeInUpVariants}
            >
              <div className="flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full">
                <motion.button
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm">🎤</span>
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm">📹</span>
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm">📱</span>
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm">✕</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelpTalentsGrow;
