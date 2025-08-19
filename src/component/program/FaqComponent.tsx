"use client";
import React, { useState, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need prior work experience?",
    answer: "No. If you have basic skills in a tech role and are ready to commit, you're eligible.",
  },
  {
    question: "Is this remote?",
    answer: "Yes. The internship is 100% remote but structured like a full-time job.",
  },
  {
    question: "Is it paid?",
    answer: "No, but top performers may be offered full-time roles or referred to paid opportunities.",
  },
  {
    question: "How long is the internship?",
    answer: "It lasts 3 months. Expect to commit 30–40 hours per week.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. You will receive a verified program certificate, portfolio proof, and references.",
  },
];

const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: index * 0.1 
      } 
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`border-b border-gray-200 last:border-b-0 py-6 ${bricolage.className}`}
    >
      <div
        className="mb-4 flex items-center justify-between cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 mb-0">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#97A339]" />
        </motion.div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className={`text-gray-600 text-sm leading-relaxed pt-2 ${plusJakarta.className}`}>
          {item.answer}
        </p>
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto px-10 max-w-8xl">
        {/* Header */}
        <motion.div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUpVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            variants={fadeInUpVariants}
          >
            Have a question? We are here to answer.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0"
          variants={containerVariants}
        >
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;