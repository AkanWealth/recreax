"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import { RiSparkling2Line, RiSparklingFill, RiSendPlaneFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";




const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});



const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxYLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const parallaxYRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const roles = [
    { text: "Professional", bgColor: "bg-white", textColor: "text-[#2563eb]", borderColor: "border-[#2563eb]" },
    { text: "Product Designer", bgColor: "bg-white", textColor: "text-green-500", borderColor: "border-green-500" },
    { text: "Software Engineer", bgColor: "bg-white", textColor: "text-orange-500", borderColor: "border-orange-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={sectionRef}
      className={`relative overflow-visible bg-[#1a2b47] text-white py-20 px-4 sm:px-8 flex flex-col items-center text-center`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center max-w-7xl lg:max-w-7xl sm:max-w-5xl mb-16 z-10">
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 leading-tight">
          From Learner to{" "}
          <span className="relative inline-block -rotate-4">
            <span
              className={`${roles[currentRole].bgColor} ${roles[currentRole].textColor} px-6 py-2 rounded-full shadow-lg font-bold inline-block transform border-2 ${roles[currentRole].borderColor} transition-all duration-500 ease-in-out`}
            >
              {roles[currentRole].text}
            </span>
          </span>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="text-[#B6EB6A]">REX</span> Gets You There
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className={`mx-auto max-w-3xl text-sm sm:text-sm lg:text-base text-gray-300 mb-8 ${plusJakarta.className}`}
        >
          Meet REX, your AI career mentor that takes you beyond courses into real-world readiness. Practice with case studies, build stronger resumes, prep for interviews, and discover your career path.
        </motion.p>
        <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${plusJakarta.className}`}>
          <Link href="https://talents.recreax.com/log-in" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
          >
            Try REX Free <RiSparkling2Line className="text-xl" />
          </motion.button>
          </Link>
          <Link href="https://talents.recreax.com/log-in" passHref>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white hover:bg-gray-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
          >
            Join Talent Community <FaLongArrowAltRight className="text-xl" />
          </motion.button>
          </Link>

        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-80 bg-white z-0"></div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Mobile: Single centered image */}
        <div className="block lg:hidden relative flex justify-center pb-16">
          <motion.div
            className="relative w-full h-full z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-full z-10">
              <Image
                src="/HomeHero.svg"
                alt="REX AI Career Mentoring - Mobile"
                height={190}
                width={350}
                className="w-auto h-auto object-cover"
                quality={100}
                priority
              />
              
            </div>
          </motion.div>
        </div>

        {/* Desktop: Two images with parallax */}
        <div className="hidden lg:block relative">
          <div className="relative flex items-start justify-between lg:px-12 pb-16">
            <motion.div
              style={{ y: parallaxYLeft }}
              className="relative w-[500px] h-68 mt-36 z-10"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 top-4 left-4 rounded-2xl z-0"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/hero1.jpg"
                  alt="Team collaboration"
                  height={700}
                  width={900}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-1 bg-white text-black px-3 py-2 rounded-2xl text-sm font-medium gap-2 shadow-lg"
                >
                  <div className="flex -space-x-2 bg-[#003267] p-2 rounded-2xl w-[112px]">
                    <Image
                      src="/profile/profile1.jpg"
                      alt="User 1"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/profile/profile2.png"
                      alt="User 2"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/profile/profile3.jpg"
                      alt="User 3"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/profile/profile4.jpg"
                      alt="User 4"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/profile/profile5.jpg"
                      alt="User 5"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/profile/profile6.png"
                      alt="User 6"
                      height={32}
                      width={32}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      quality={100}
                      priority
                    />
                  </div>
                  <p><span className="text-[#003267]">1,000+</span> talents are building their careers with REX</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-1/2 top-[100px] transform -translate-x-1/2 translate-y-1/4 w-18 h-18 bg-white rounded-full shadow-xl border-4 border-[#1a2b47] flex items-center justify-center z-30"
            >
              <GoArrowUpLeft className="w-20 h-8 text-[#1a2b47]" />
            </motion.div>

            <motion.div
              style={{ y: parallaxYRight }}
              className="relative w-[500px] h-96 mt-8 z-10"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bottom-4 right-4 bg-[#DCFCE7] rounded-2xl z-0"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/hero2.jpg"
                  alt="Professional mentoring"
                  height={700}
                  width={900}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg border border-white/20"
                >
                  <span className="bg-[#9FDD62] rounded-full p-2"><RiSparklingFill className="text-[#3F4418]" /></span>
                  <span>Ask REX AI to help you with any task</span>
                  <span className="bg-[#12233D] rounded-full p-2"><RiSendPlaneFill className="text-[#FFFFFF]" /></span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;