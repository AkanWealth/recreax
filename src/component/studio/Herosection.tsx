
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiSparkling2Line } from "react-icons/ri";
import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";

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

const EarlyStageIdeasSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#1a2b47] py-20 px-4 sm:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Badge */}
        <motion.div
          className="inline-flex items-center bg-white rounded-full px-2 py-2 mb-8"
          variants={fadeInUpVariants}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/svg/flag.svg"
              alt="Nigeria"
              height={40}
              width={104.78048706054688}
            />
          </div>
          <span className={`ml-2 text-sm font-medium text-gray-70 ${plusJakarta.className}`}>
            Talent from 10+ countries
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          variants={fadeInUpVariants}
        >
          Work on <span className="text-[#b6eb6a]">Early-Stage Ideas</span>
        </motion.h2>
        <motion.div
          className="flex items-center justify-center text-5xl gap-2 sm:text-6xl font-bold text-white mb-8"
          variants={fadeInUpVariants}
        >
          <p>in a Product Studio</p>
          <div className="text-4xl bg-[#6ECDDD] rounded-xl p-4">
            <Image
              src="/svg/vector(7).svg"
              alt="bulb"
              className="w-12 h-12 rounded"
              height={20}
              width={30}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className={`text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed ${plusJakarta.className}`}
          variants={fadeInUpVariants}
        >
          Join a 3-month cohort where you collaborate with other talents and early-stage founders to turn startup ideas into working MVPs. You&apos;ll co-build real product features, earn references, and gain experience that shapes your portfolio.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          variants={fadeInUpVariants}
        >
          <Link href="https://talents.recreax.com/authorization" passHref>
          <motion.button
            className="bg-cyan-400 text-black font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Spot <span className="text-lg"><RiSparkling2Line className="w-4 h-4" /></span>
          </motion.button>
        </Link>
        {/* <motion.span className="text-gray-300" variants={fadeInUpVariants}>
            Next cohort starts: July
          </motion.span> */}
      </motion.div>

      {/* Profile Images */}
      <motion.div
        className="flex justify-center items-center gap-8"
        variants={imageVariants}
      >
        <Image
          src="/svg/StudioHero.svg"
          alt="Team member"
          height={316.4490966796875}
          width={316.4490966796875}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
    </motion.section >
  );
};

export default EarlyStageIdeasSection;
