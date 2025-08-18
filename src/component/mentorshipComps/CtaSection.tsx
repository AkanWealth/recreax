
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";
import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";

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

function CtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-[#DBF1F9] text-white py-10 px-4">
      <motion.section
        ref={sectionRef}
        className="bg-[#12233D] py-10 px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.h2
              className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}
              variants={fadeInUpVariants}
            >
              Your Experience is
            </motion.h2>
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeInUpVariants}
            >
              <Image
                src="/information.png"
                height={31}
                width={70}
                unoptimized={true}
                alt="Arrow Logo"
                className=""
              />
              <h3
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}
              >
                Worth Sharing
              </h3>
            </motion.div>
            <motion.p
              className={`text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg ${plusJakarta.className}`}
              variants={fadeInUpVariants}
            >
              If you’ve ever said “I wish someone told me this sooner,” this is your chance to be that someone.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUpVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                          <Link href="https://talents.recreax.com/mentorship" passHref>
                <Button
                  className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2"
                >
                  <RiSparklingLine className="w-5 h-5" />
                  Apply to Be a Mentor
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative left-8 w-full max-w-md h-64 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/mentor/Lady.png"
                alt="Woman with laptop"
                width={586}
                height={390}
                className="object-cover w-auto h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default CtaSection;
