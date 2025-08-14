
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const StudioCohortSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-20 px-4 sm:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-4"
            variants={fadeInUpVariants}
          >
            Inside the <span className="text-[#1a2b47]">ReCreax</span>
          </motion.h2>
          <motion.div
            className="flex items-center justify-center text-5xl gap-2 sm:text-6xl font-bold text-[#1a2b47] mb-8"
            variants={fadeInUpVariants}
          >
            <p> Studio Cohort</p>
            <div className="text-4xl bg-[#6ECDDD] rounded-xl p-4">
              <Image
                src="/svg/idea-bulb.svg"
                alt="bulb"
                className="w-12 h-12 rounded"
                height={20}
                width={30}
              />
            </div>
          </motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
          >
            A hands-on product sprint designed to give you real experience building useful things with a team.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left - Join a Startup Building Sprint */}
          <motion.div
            className="bg-gray-100 rounded-2xl p-8 lg:col-span-2 flex items-center justify-between"
            variants={cardVariants}
            custom={0}
          >
            <div className="flex-1">
              <motion.div className="flex items-center gap-2 mb-4" variants={fadeInUpVariants}>
                <div className="w-8 h-1 bg-blue-500 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-[#1a2b47] mb-4"
                variants={fadeInUpVariants}
              >
                Join a Startup-Building Sprint
              </motion.h3>
              <motion.p
                className="text-gray-600 max-w-lg"
                variants={fadeInUpVariants}
              >
                Enter a 3-month program working on early-stage product ideas from the ReCreax Studio.
              </motion.p>
            </div>
            <motion.div className="ml-8" variants={cardVariants}>
              <Image
                src="/svg/JoinaStartup.svg"
                alt=""
                height={246}
                width={503}
                className="w-auto h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Left - Own Product Features */}
          <motion.div
            className="bg-pink-100 rounded-2xl p-8 relative overflow-hidden"
            variants={cardVariants}
            custom={1}
          >
            <motion.div className="flex items-center gap-2 mb-4" variants={fadeInUpVariants}>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-8 h-1 bg-pink-500 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-[#1a2b47] mb-4"
              variants={fadeInUpVariants}
            >
              Own Product Features
            </motion.h3>
            <motion.p className="text-gray-600 mb-8" variants={fadeInUpVariants}>
              Contribute to real deliverables that go into live minimum viable products.
            </motion.p>
            <motion.div variants={cardVariants}>
              <Image
                src="/svg/ProductFeatures.svg"
                alt=""
                height={218}
                width={466}
                className="w-auto h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Right - Collaborate in Cohorts */}
          <motion.div
            className="bg-yellow-100 rounded-2xl p-8 relative overflow-hidden"
            variants={cardVariants}
            custom={2}
          >
            <motion.div className="flex items-center gap-2 mb-4" variants={fadeInUpVariants}>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-8 h-1 bg-yellow-500 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-[#1a2b47] mb-4"
              variants={fadeInUpVariants}
            >
              Collaborate in Cohorts
            </motion.h3>
            <motion.p className="text-gray-600 mb-8" variants={fadeInUpVariants}>
              Work across roles in a guided team environment that simulates how real startups execute.
            </motion.p>
            <motion.div variants={cardVariants}>
              <Image
                src="/svg/Cohorts.svg"
                alt=""
                height={246}
                width={603}
                className="w-auto h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Full Width - Earn Certification */}
          <motion.div
            className="bg-green-100 rounded-2xl p-8 lg:col-span-2 flex lg:flex sm:block items-center justify-between"
            variants={cardVariants}
            custom={3}
          >
            <motion.div variants={cardVariants}>
              <Image
                src="/svg/Certifcate.svg"
                alt="certificate"
                height={246}
                width={603}
                className="w-auto h-auto"
              />
            </motion.div>
            <div className="flex-1">
              <motion.div className="flex items-center gap-2 mb-4" variants={fadeInUpVariants}>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-8 h-1 bg-green-500 rounded"></div>
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-[#1a2b47] mb-4"
                variants={fadeInUpVariants}
              >
                Earn Certification and Recommendations
              </motion.h3>
              <motion.p
                className="text-gray-600 max-w-lg"
                variants={fadeInUpVariants}
              >
                Receive validation of your work with a certificate and recommendation from a product lead.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudioCohortSection;
