"use client";
import React, { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiSparkling2Line } from "react-icons/ri";
import { TbClockCheck } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-plus-jakarta-sans" });
// const bricolage = Bricolage_Grotesque({ weight: ["700"], subsets: ["latin"] });

const Program = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.3
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="text-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="bg-[#032353] mx-auto">
        <div className="py-16 px-4 sm:px-8 lg:px-12">
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight"
          >
            <span className="text-[#B6EB6A]">REX Prepares You.</span> These Programs<br />
            Take You Further.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800 rounded-2xl overflow-hidden mb-8"
          >
            <div className="flex flex-col lg:flex-row">
              <motion.div
                style={{ scale: scaleImage }}
                className="lg:w-1/2 order-2 lg:order-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/image7.jpg"
                  alt="Two people working together"
                  height={400}
                  width={400}
                  className="w-full h-64 lg:h-full object-cover"
                  quality={100}
                  priority
                />
              </motion.div>
              <div className="lg:w-1/2 p-8 bg-[#0D192B] order-1 lg:order-2">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="w-8 h-8 bg-[#CCFF82] rounded-lg flex items-center justify-center">
                    <FaBriefcase className="text-slate-900 text-xl" />
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold text-white `}>
                    ReCreaX Internship Program
                  </h3>
                </motion.div>
                <motion.p 
                  className={`text-white text-sm lg:text-base mb-6 leading-relaxed ${plusJakarta.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Join the ReCreaX team full-time for 3 months and work across real internal projects in fintech, edtech, HRtech, AI, and multi-domains. You&apos;ll collaborate with senior mentors, build your portfolio, and get evaluated for full-time roles.
                </motion.p>
                <motion.ul 
                  className={`space-y-3 mb-8 ${plusJakarta.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Structured 9-5 work schedule
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Exposure to multi-product domains
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Active mentorship
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Pathway to full-time roles
                  </li>
                </motion.ul>
               <Link href="/program" passHref>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-300 transition-colors text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Learn About ReCreaX Internship
                  <RiSparkling2Line className="text-2xl" />
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl overflow-hidden py-8 px-8"
          >
            <div className="bg-[#B6EB6A] rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 text-[#12233D] order-1">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TbClockCheck className="text-[#003267] text-xl" />
                    </div>
                    <h3 className={`text-xl lg:text-2xl font-bold`}>
                      ReCreaX Studio Cohort
                    </h3>
                  </motion.div>
                  <motion.p 
                    className={`text-[#2A2829] text-sm lg:text-lg mb-6 leading-relaxed ${plusJakarta.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Join a 3-month product-building sprint inside ReCreaX Studio. Work in cohorts with other talents with early-stage founders to bring startup ideas to life. You&apos;ll focus on real features, gain practical experience, and walk away with certification, recommendations, and solid case studies.
                  </motion.p>
                  <motion.ul 
                    className={`space-y-3 mb-10 ${plusJakarta.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                      <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                      Cohort-based product sprints
                    </li>
                    <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                      <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                      Build real MVPs and features
                    </li>
                    <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                      <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                      Collaborate with founders
                    </li>
                    <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                      <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                      Certification and testimonials
                    </li>
                  </motion.ul>
                  <Link href="/recreaxStudio" passHref>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <RiSparkling2Line className="text-2xl" />
                    Explore Studio Cohorts
                  </motion.button>
                  </Link>
                </div>
                <motion.div
                  style={{ scale: scaleImage }}
                  className="lg:w-1/2 bg-slate-800 relative flex items-center justify-center order-2 min-h-[400px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative -left-4 w-full h-full flex items-center justify-center">
                    <Image
                      src="/StudioCohort.png"
                      alt="Central team member"
                      height={500}
                      width={500}
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Program;