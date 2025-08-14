
"use client";
import React, { useRef } from "react";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

interface ProgramBenefit {
  image: string; // Changed from icon to image path
  title: string;
  description: string;
}

const programBenefits: ProgramBenefit[] = [
  {
    image: "/pathner/vacancy.svg", 
    title: "Talent Access",
    description: "Get priority access to a pipeline of talents who have already executed on real product work inside internship or cohort environments.",
  },
  {
    image: "/pathner/money-tick.svg", 
    title: "Studio Cohort Sponsorship",
    description: "Support internal studio teams by sponsoring MVP feature builds, pilot projects, or early product validation in a structured 3-month sprint.",
  },
  {
    image: "/pathner/instruction.svg", 
    title: "Mentorship & Knowledge Sessions",
    description: "Lead portfolio reviews, host mentorship calls, or join panel-style sessions that expose talents to real-world insights.",
  },
  {
    image: "/pathner/human-resources-hiring.svg", 
    title: "Hiring & Placement",
    description: "Convert top talent directly into internships, contract roles, or junior positions with no middle layers and no hidden fees.",
  },
  {
    image: "/pathner/Group.svg", 
    title: "Brand Collaboration & Co-Creation",
    description: "Collaborate on talent-focused workshops, hackathons and events, and content that bring visibility to your brand.",
  },
  {
    image: "/pathner/school.svg", 
    title: "REX for Institutions",
    description: "Offer guided career tools like resume building, case study practice, and interview prep to your learners or members through our AI-powered suite.",
  },
];

const TalentProgram: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#032353] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-left mb-16" variants={fadeInUpVariants}>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${bricolage.className}`}>
            Strategic Ways to Partner With Us
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
          {programBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="rounded-lg p-6 bg-[#FFFFFF] hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                <motion.div
                  className="mb-10 p-3 rounded-lg"
                  variants={fadeInUpVariants}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={40} // Matches original icon size (w-5 h-5)
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
                <h3 className={`text-xl font-semibold text-[#12233D] mb-3 ${bricolage.className}`}>
                  {benefit.title}
                </h3>
                <p className={`text-black leading-relaxed text-lg ${plusJakarta.className}`}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TalentProgram;
