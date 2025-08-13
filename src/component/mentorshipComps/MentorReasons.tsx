
"use client";
import React, { useRef } from "react";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { HiNewspaper } from "react-icons/hi2";
import { RiFolderImageLine, RiBookletFill, RiGroup2Line } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { HiDesktopComputer } from "react-icons/hi";
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
  icon: React.ReactNode;
  title: string;
  description: string;
}

const programBenefits: ProgramBenefit[] = [
  {
    icon: <HiNewspaper className="w-5 h-5" />,
    title: "Total Control, No Pressure",
    description: "Set your availability, choose when and how often you mentor, and decide whether to offer sessions for free or paid.",
  },
  {
    icon: <RiFolderImageLine className="w-5 h-5" />,
    title: "No Hidden Fees",
    description: "If you choose to charge for sessions, 100% of the fee goes to you with no hidden cuts or commissions.",
  },
  {
    icon: <RiBookletFill className="w-5 h-5" />,
    title: "Grow While You Give",
    description: "Build leadership skills, improve how you communicate, and gain new clarity in your own work by mentoring others.",
  },
  {
    icon: <VscBook className="w-5 h-5" />,
    title: "Stay Industry-Relevant",
    description: "Coaching early talent keeps you close to fresh thinking, tools, and real-world questions.",
  },
  {
    icon: <HiDesktopComputer className="w-5 h-5" />,
    title: "Boost Your Visibility",
    description: "ReCreaX promotes mentors through spotlight content, blog features, and program visibility.",
  },
  {
    icon: <RiGroup2Line className="w-5 h-5" />,
    title: "Expand Your Network",
    description: "Collaborate with other mentors, talents, and partners across multiple regions and roles.",
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
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#B6EB6A] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-4 ${bricolage.className}`}>
            Why <span className="text-[#003267]">Mentors</span> Choose <br /> ReCreaX
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
                  className="mb-4 p-3 bg-blue-100 rounded-lg"
                  variants={fadeInUpVariants}
                >
                  <div className="text-[#97A339]">{benefit.icon}</div>
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
