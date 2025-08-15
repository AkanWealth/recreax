
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {  Plus_Jakarta_Sans } from "next/font/google";
import { VscQuote } from "react-icons/vsc";
import { motion, Variants, useInView } from "framer-motion";



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.3 },
  }),
};

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.4 } },
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote:
        "Working on projects through ReCreaX has really helped me grow. I have become more confident in what I do. It has made me more open, curious and better prepared for real world work.",
      name: "Olaide",
      role: "Project Manager",
      avatar: "/profile/profilestudio1.png",
      fallback: "V",
    },
    {
      quote:
        "This project has significantly improved my design skills and opened new opportunities and connections in the tech industry helping me grow personally and professionally.",
      name: "Monsurah",
      role: "Product Designer",
      avatar: "/profile/profileatudio2.jpg",
      fallback: "H",
    },
    {
      quote:
        "This project made me build my portfolio and gained valuable skills. It impacted my career and was able to build collaboration with other developers.",
      name: "Amarachi",
      role: "Backend Developer",
      avatar: "/profile/profilestudio3.jpg",
      fallback: "C",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className={`flex items-center justify-center bg-[#B6EB6A] py-20 px-4 sm:px-8 ${plusJakarta.variable}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className={`text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-16`}
          variants={fadeInUpVariants}
        >
          Talent Spotlights from <br /> Past Cohorts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              variants={cardVariants}
              custom={index}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 left-6 text-6xl text-[#B6BBC3] font-serif leading-none mb-26"
                variants={quoteVariants}
              >
                <VscQuote className="w-8 h-8" />
              </motion.div>

              {/* Quote */}
              <motion.p
                className="text-[#2A2829] text-lg text-center leading-relaxed mb-8 relative mt-4 z-10"
                variants={fadeInUpVariants}
              >
                {testimonial.quote}
              </motion.p>

              {/* Avatar and Name/Role */}
              <motion.div
                className="flex item-center justify-center gap-2"
                variants={containerVariants}
              >
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200"
                  variants={avatarVariants}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div className="text-left" variants={fadeInUpVariants}>
                  <h4 className="font-semibold text-[#060C15] text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
