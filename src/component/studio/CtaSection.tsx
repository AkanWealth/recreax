
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine, RiSparkling2Line } from "react-icons/ri";
import { motion, Variants, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

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

const scrollItemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function CtaSection() {
  const projects = [
    { id: 1, title: "Next cycle starts in July." },
    { id: 2, title: "Limited spaces available" },
    { id: 3, title: "Next cycle starts in July." },
    { id: 4, title: "Limited spaces available" },
    { id: 5, title: "Next cycle starts in July." },
    { id: 6, title: "Limited spaces available" },
    { id: 7, title: "Next cycle starts in July." },
    { id: 8, title: "Limited spaces available" },
  ];

  const duplicatedProjects = [...projects, ...projects];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const scrollRef = useRef(null);
  const controls = useAnimation();

  // Scroll animation for text items
  const { scrollXProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollXProgress, [0, 1], [0, -duplicatedProjects.length * 320]);

  React.useEffect(() => {
    controls.start({
      x: -(duplicatedProjects.length * 320) / 2,
      transition: {
        x: { repeat: Infinity, duration: 20, ease: "linear" },
      },
    });
  }, [controls, duplicatedProjects.length]);

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
          <motion.div className="flex-1 text-white" variants={containerVariants}>
            <motion.h2
              className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}
              variants={fadeInUpVariants}
            >
              Join Talents That Builds Real Products
            </motion.h2>
            <motion.p
              className={`text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg ${plusJakarta.className}`}
              variants={fadeInUpVariants}
            >
              The tech roles you&apos;re dreaming of want proof. This is where you get it
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUpVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2">
                  <span>
                    <RiSparklingLine className="w-5 h-5" />
                  </span>
                  Join the Next Cohort
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
                    src="/svg/StudioCTA.svg"
                    alt="gallery"
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

      {/* Scrolling Text and Icon Bar */}
      <motion.div
        ref={scrollRef}
        className="relative overflow-hidden bg-[#B6EB6A]"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() =>
          controls.start({
            x: -(duplicatedProjects.length * 320) / 2,
            transition: { x: { repeat: Infinity, duration: 20, ease: "linear" } },
          })
        }
      >
        <motion.div
          className="flex space-x-2 "
          animate={controls}
          style={{ x }}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-70 h-20  flex items-center justify-center text-[#12233D] font-semibold"
              variants={scrollItemVariants}
              custom={index}
            >
              <span>{project.title}</span>
              <RiSparkling2Line className="w-5 h-5 text-[#899434]" />

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CtaSection;