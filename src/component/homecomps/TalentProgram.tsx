"use client";
import React, { useRef } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HiNewspaper } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
import { VscBook } from "react-icons/vsc";
import {  RiFolderImageLine, RiBookletFill, RiGroup2Line } from "react-icons/ri";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

interface ProgramBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const programBenefits: ProgramBenefit[] = [
  {
    icon: <HiNewspaper className="w-5 h-5" />,
    title: "Real-World Experience",
    description: "Experience working on actual projects with real deliverables and outcomes, not simulated training tasks or mock projects.",
  },
  {
    icon: <RiFolderImageLine className="w-5 h-5" />,
    title: "Real World Focused Portfolio",
    description: "Verified, referenceable credential you can showcase in interviews, LinkedIn, and your personal site.",
  },
  {
    icon: <RiBookletFill className="w-5 h-5" />,
    title: "Credible Expert References",
    description: "Professional references from experienced team leads who've reviewed your work and can vouch for your skills.",
  },
  {
    icon: <VscBook className="w-5 h-5" />,
    title: "Role-Based Execution Frameworks",
    description: "Proven structured frameworks tailored to your role (PM, Design, Engineering, Growth) so you deliver confidently from day one.",
  },
  {
    icon: <HiDesktopComputer className="w-5 h-5" />,
    title: "Resume & Interview Prep That Works",
    description: "Exclusive access to our AI-powered tools to optimize your resume, practice interviews, and uncover the best-fit path for you.",
  },
  {
    icon: <RiGroup2Line className="w-5 h-5" />,
    title: "A Community of Doers",
    description: "Opportunity to work with a team of focused, driven talents across roles to build and ship real products together.",
  },
];

const decorativeWords = [
  {
    text: "Portfolio",
    color: "text-blue-500",
    rotation: "-rotate-44",
    position: "bottom-10",
    background: "bg-blue-100",
    border: "border-blue-500",
  },
  {
    text: "Resume Review",
    color: "text-red-500",
    rotation: "rotate-2",
    position: "left-36 bottom-4",
    background: "bg-red-100",
    border: "border-red-500",
  },
  {
    text: "Mentorship",
    color: "text-green-500",
    rotation: "rotate-40",
    position: "left-88 bottom-18",
    background: "bg-green-100",
    border: "border-green-500",
  },
  {
    text: "Get Hired",
    color: "text-pink-500",
    rotation: "-rotate-40",
    position: "left-146 bottom-16",
    background: "bg-pink-100",
    border: "border-pink-500",
  },
  {
    text: "Teamwork",
    color: "text-purple-500",
    rotation: "-rotate-4",
    position: "left-190",
    background: "bg-purple-100",
    border: "border-purple-500",
  },
];

const TalentProgram: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 },
    }),
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EEFFEF] relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 `}>
            What You&apos;ll Gain at ReCreaX Talent <br /> Program
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-26">
          {programBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="rounded-lg p-8 hover:shadow-md transition-shadow bg-white duration-300"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 p-3 bg-blue-100 rounded-lg">
                  <div className="text-[#97A339]">{benefit.icon}</div>
                </div>
                <h3 className={`text-lg font-semibold text-gray-900 mb-3`}>
                  {benefit.title}
                </h3>
                <p className={`text-gray-600 text-justify leading-relaxed text-sm ${plusJakarta.className}`}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Image View - Hidden on lg and above */}
        <motion.div 
          className="flex justify-center items-center mt-16 lg:hidden"
          variants={imageVariants}
        >
          <Image
            src="/svg/TalentProgram(1).svg" 
            alt="Talent Program Benefits"
            width={400}
            height={300}
            className="w-full  h-auto "
          />
        </motion.div>

        {/* Desktop Decorative Words - Hidden on mobile, visible on lg and above */}
        <div className="relative h-32 mt-16 hidden lg:block">
          {decorativeWords.map((word, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={wordVariants}
              className={`absolute ${word.position} ${word.rotation} ${word.color} ${word.background} ${word.border} font-semibold border-b-2 rounded-lg text-xl md:text-4xl p-4 transform hover:scale-110 transition-transform duration-300 cursor-default select-none `}
            >
              <span className="relative">{word.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-100 rounded-full opacity-20"></div>
    </motion.section>
  );
};

export default TalentProgram;