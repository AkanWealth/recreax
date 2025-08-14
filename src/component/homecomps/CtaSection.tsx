"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const CtaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="bg-[#DBF1F9] text-white py-6 sm:py-10 px-2 sm:px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <section className="bg-[#12233D] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 lg:mx-8 mb-4 sm:mb-8">
        {/* Background decoration - hidden on mobile for cleaner look */}
        

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Content Section */}
            <motion.div variants={itemVariants} className="flex-1 text-white text-center lg:text-left">
              <motion.h2
                variants={itemVariants}
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight ${bricolage.className}`}
              >
                You&apos;ve Learned Enough.
              </motion.h2>
              
              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${bricolage.className}`}>
                  It&apos;s Time to Work
                </h3>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className={`text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-lg leading-relaxed ${plusJakarta.className}`}
              >
                Join thousands of talents building skills, confidence, and real-world experience with guidance every step of the way.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-[#00D4FF] text-[#12233D] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <RiSparklingLine className="w-4 h-4 sm:w-5 sm:h-5" />
                    Try REX Free
                  </motion.button>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12233D] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Explore Programs
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image Section - Single responsive image */}
            <motion.div
              variants={itemVariants}
              className="flex-1 relative w-full lg:w-auto mt-4 lg:mt-0"
              style={{ scale: imageScale }}
            >
              <div className="relative left-10 top-10 w-full max-w-sm mx-auto lg:max-w-md">
                <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <Image
                      src="/mentor/Lady.png"
                      alt="Woman with laptop"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CtaSection;