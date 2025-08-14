
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
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Partnership Section Component
const PartnershipSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const partnerTypes = [
    {
      title: "Startups",
      description: "hiring early-stage talent with execution experience",
      color: "text-[#11AF22]",
    },
    {
      title: "Companies",
      description: "looking to sponsor innovation without building new teams",
      color: "text-[#024EC2]",
    },
    {
      title: "Communities and accelerators",
      description: "that want to give members access to real-world product experience",
      color: "text-[#5B14E9] col-span-2",
    },
    {
      title: "Professionals",
      description: "seeking to mentor or co-lead workshops",
      color: "text-[#E91494]",
    },
    {
      title: "Universities or training programs",
      description: "looking for applied learning opportunities",
      color: "text-[#E96D14] col-span-2",
    },
    {
      title: "Recruitment Teams",
      description: "Sourcing talent who've already built in agile teams and have proof",
      color: "text-[#E91414] col-span-2",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen bg-white py-12 px-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Main Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="space-y-4" variants={fadeInUpVariants}>
              <div className="flex item-center">
              <h1 className="text-4xl font-bold text-[#003267] leading-tight">
                Join us in{" "}
                
                
              </h1>

              <Image
                src={"/pathner/ShapingtheFuture.png"}
                alt="shadowText"
                width={282.9999938216404}
                height={44.99999901757533}
                className="w-auto h-auto incline-block"/>
                </div>
                <p className="text-4xl font-bold text-[#003267] leading-tight">of Tech</p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Our partners are bridging the gap between learning and execution by supporting
                career-ready talent, real product execution, and industry-aligned learning.
              </p>
            </motion.div>

            {/* Image Container with Animation */}
            <motion.div
              className="relative group"
              variants={fadeInUpVariants}
            >
              <Image
                src="/pathner/Shapethefuture.svg"
                alt=""
                width={413.27}
                height={373.09}
                className="w-auto h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Partner Types */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-4" variants={containerVariants}>
            {partnerTypes.map((partner, index) => {
              const classes = partner.color.split(" ").map((cls) => cls.trim());
              const colorClass = classes[0];
              const spanClass = classes.includes("col-span-2") ? "lg:col-span-2" : "";

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${spanClass}`}
                >
                  <div className="bg-[#F1FAFC] rounded-2xl p-6 shadow-md border border-gray-100 hover:border-gray-200">
                    <h3 className={`text-2xl font-bold mb-2 ${colorClass}`}>
                      {partner.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnershipSection;
