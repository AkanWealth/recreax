"use client";
import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import {  Plus_Jakarta_Sans } from "next/font/google";


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
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100, // Slide from left for even, right for odd
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mockupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const MentoringSteps: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen bg-[#DBF1F9] to-teal-50 p-4 sm:p-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header */}
      <motion.div className="text-center mb-8 sm:mb-12" variants={fadeInUpVariants}>
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          variants={fadeInUpVariants}
        >
          <Image
            src={"/mentor/Group1321314561.png"}
            alt="icon"
            width={56}
            height={33}
            className="w-auto h-auto"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">4 steps</h1>
        </motion.div>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-800"
          variants={fadeInUpVariants}
        >
          to start mentoring
        </motion.h2>
      </motion.div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Step 1: Apply to Join */}
        <motion.div
          custom={0}
          variants={cardVariants}
          className="bg-[#8BD7E4] flex flex-col sm:flex-row md:flex-row items-center justify-between rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden gap-4"
        >
          <div className="flex-1 w-full sm:w-1/2">
            <motion.div
              className="bg-[#B6EB6A] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              1
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003267] mb-3 sm:mb-4">Apply to Join</h3>
            <p className={`text-lg sm:text-base mb-4 sm:mb-8 leading-relaxed  ${plusJakarta.className}`}>
              Complete a quick form to tell us about your background, focus areas, and mentoring goals.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <motion.div
              className="rounded-2xl p-2 sm:p-4 md:p-6 relative"
              variants={mockupVariants}
            >
              <Image
                src={"/mentor/Applytojoin.png"}
                alt="cv"
                width={266}
                height={240.22467041015625}
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Step 2: Get Approved & Matched */}
        <motion.div
          custom={1}
          variants={cardVariants}
          className="bg-[#8BD7E4] flex flex-col sm:flex-row md:flex-row items-center justify-between rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden gap-4"
        >
          <div className="flex-1 w-full sm:w-1/2">
            <motion.div
              className="bg-[#B6EB6A] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              2
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003267] mb-3 sm:mb-4">Get Approved & Matched</h3>
            <p className={`text-lg sm:text-base mb-4 sm:mb-8 leading-relaxed  ${plusJakarta.className}`}>
              We&apos;ll review your profile and notify you if there&apos;s a fit. You&apos;ll also get access to your mentor dashboard.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <motion.div
              className="rounded-2xl p-2 sm:p-4 md:p-6"
              variants={mockupVariants}
            >
              <Image
                src={"/mentor/Approved.png"}
                alt="cv"
                width={266}
                height={240.22467041015625}
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Step 3: Set Your Calendar */}
        <motion.div
          custom={2}
          variants={cardVariants}
          className="bg-[#8BD7E4] flex flex-col sm:flex-row md:flex-row items-center justify-between rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden gap-4"
        >
          <div className="flex-1 w-full sm:w-1/2">
            <motion.div
              className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              3
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003267] mb-3 sm:mb-4">Set Your Calendar</h3>
            <p className={`text-lg sm:text-base mb-4 sm:mb-8 leading-relaxed  ${plusJakarta.className}`}>
              Sync your availability through Calendar so mentees can book 1-on-1 time when it works best for you.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <motion.div
              className="rounded-2xl p-2 sm:p-4 md:p-6"
              variants={mockupVariants}
            >
              <Image
                src={"/mentor/Setcalendar.png"}
                alt="cv"
                width={266}
                height={240.22467041015625}
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Step 4: Start Mentoring */}
        <motion.div
          custom={3}
          variants={cardVariants}
          className="bg-[#8BD7E4] flex flex-col sm:flex-row md:flex-row items-center justify-between rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden gap-4"
        >
          <div className="flex-1 w-full sm:w-1/2">
            <motion.div
              className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              4
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003267] mb-3 sm:mb-4">Start Mentoring</h3>
           <p className={`text-lg sm:text-base mb-4 sm:mb-8 leading-relaxed  ${plusJakarta.className}`}>
              You&apos;ll get booking alerts and reminders. Show up, share honestly, and guide someone forward.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <motion.div
              className="rounded-2xl p-2 sm:p-4 md:p-6"
              variants={mockupVariants}
            >
              <Image
                src={"/mentor/Startmentoring.png"}
                alt="cv"
                width={266}
                height={240.22467041015625}
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MentoringSteps;