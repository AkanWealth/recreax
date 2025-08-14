
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";
import { motion, Variants, useInView } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

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

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function ProgramSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-[#B6EB6A] text-white py-10 px-4">
      <motion.section
        ref={sectionRef}
        className="bg-[#12233D] py-10 px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div className="flex-1 text-white" variants={containerVariants}>
            <motion.h2
              className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}
              variants={fadeInUpVariants}
            >
              Build Confidence
            </motion.h2>
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-[#D2F0F4]"
                variants={fadeInUpVariants}
              >
                <p className="text-center text-xl">💪🏼</p>
              </motion.div>
              <motion.h3
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}
                variants={fadeInUpVariants}
              >
                Before Day One
              </motion.h3>
            </motion.div>
            <motion.p
              className={`text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg ${plusJakarta.className}`}
              variants={fadeInUpVariants}
            >
              Start using REX AI career mentor to sharpen your skills before the internship begins. Practice with case studies, fix your resume, and prep for interviews with intelligent guidance.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUpVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2"
                >
                  <span>
                    <RiSparklingLine className="w-5 h-5" />
                  </span>
                  Try REX Free
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex-1 relative" variants={imageVariants}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full max-w-md mx-auto p-8 relative">
                <div className="w-full h-64 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="/buildCOnfidence.svg"
                    alt="Woman with laptop"
                    width={334}
                    height={281}
                    className="absolute rounded-xl object-cover w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default ProgramSection;