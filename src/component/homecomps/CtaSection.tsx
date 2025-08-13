
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

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

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="bg-[#DBF1F9] text-white py-10 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <section className="bg-[#12233D] px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute top-40 sm:top-40 lg:top-40 right-0 rounded-full"
        >
          <Image
            src="/blog2.png"
            alt="Background Circle"
            width={360}
            height={160}
            className="object-cover"
            unoptimized={true}
          />
        </motion.div>

        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={itemVariants} className="flex-1 text-white">
            <motion.h2
              variants={itemVariants}
              className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}
            >
              You&apos;ve Learned Enough.
            </motion.h2>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <Image src="/Arrow.png" height={31} width={70} unoptimized={true} alt="Arrow Logo" />
              <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}>
                It&apos;s Time to Work
              </h3>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg ${plusJakarta.className}`}
            >
              Join thousands of talents building skills, confidence, and real-world experience with guidance every step of the way.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2"
              >
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <RiSparklingLine className="w-5 h-5" />
                  Try REX Free
                </motion.button>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12233D] transition-colors flex items-center gap-2"
              >
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-1 relative w-full lg:w-auto"
            style={{ scale: imageScale }}
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md lg:mx-0">
              <div className="relative w-full top-40 left-40 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/5]">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <Image
                    src="/laptopgirl.png"
                    alt="Woman with laptop"
                    height={500}
                    width={500}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CtaSection;