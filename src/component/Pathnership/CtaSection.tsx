"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";


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
      className="bg-[#DBF1F9] text-white py-2 sm:py-4 px-2 sm:px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <section className="bg-[#12233D] px-4 sm:px-6 lg:px-8 py-2 sm:py-2 lg:py-2 relative overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 lg:mx-8 mb-4 sm:mb-8">
        {/* Background decoration - hidden on mobile for cleaner look */}


        <div className=" mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Content Section */}
            <motion.div variants={itemVariants} className="flex-1 text-white text-center lg:text-left">
              <motion.h2
                variants={itemVariants}
                className={`text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 `}
              >
                Let&apos;s Create the Future of 
              </motion.h2>

              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
                <Image
                src={"/Arrow.png"}
                alt="Arrow"
                width={40}
                height={40}
                className="w-auto h-auto"/>
                <h3 className={`text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold `}>
                  Tech Talent Together
                </h3>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-sm sm:text-sm text-white/90 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-lg leading-relaxed ${plusJakarta.className}`}
              >
                Whether you&apos;re hiring, mentoring, building, or enabling others to grow, ReCreaX Talent gives you a clear way to contribute and benefit. Share a bit about your goals, and we&apos;ll follow up to explore the right partnership fit.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* Primary button */}
                <Button
                  asChild
                  className="bg-[#00D4FF] text-[#12233D] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                >
                  <Link href="https://talents.recreax.com/authorization" passHref>
                    <RiSparklingLine className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Try REX Free</span>
                  </Link>
                </Button>

                {/* Outline button */}
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12233D] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                >
                  <Link href="/program" passHref>
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </motion.div>

            </motion.div>

            {/* Image Section - Single responsive image */}
            <motion.div
              variants={itemVariants}
              className="flex-1 relative w-full lg:w-auto mt-4 lg:mt-0"
              style={{ scale: imageScale }}
            >
              <div className="relative  w-full max-w-sm mx-auto lg:max-w-md">
                <div className="relative w-full aspect-[4/5] lg:aspect-[4/4]">
                  <div className="w-full h-full rounded-xl  relative">
                    <Image
                      src="/parthner.svg"
                      alt="Woman with laptop"
                      fill
                      className="w-auto h-auto object-center"
                    // sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
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