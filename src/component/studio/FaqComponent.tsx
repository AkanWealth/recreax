

'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Plus_Jakarta_Sans, Bricolage_Grotesque} from "next/font/google";

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
    question: "Who is the Studio Cohort for?",
    answer: "Talents who want to build real products and gain proof of execution."
  },
  {
    question: "Is this paid?",
    answer: "No. This is a learning and experience program. You gain proof, not pay."
  },
  {
    question: "Is it remote?",
    answer: "Yes. You’ll join a fully remote cohort with structured weekly collaboration."
  },
  {
    question: "What do I need to join?",
    answer: "Basic role-specific skills and commitment. No professional experience is required."
  },
  {
    question: "What is the time commitment?",
    answer: "Expect 8 to 12 hours per week for 3 months."
  },
   {
    question: "Can I apply again if I miss this cycle?",
    answer: "Yes. Applications reopen each cycle, and returning applicants are welcome."
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  return (
    <div className={`border-b border-gray-200 last:border-b-0 py-6 ${bricolage.className}`}>
        <div className="mb-4 flex item-center justify-between"><h3 className="text-lg font-medium text-gray-900 mb-4">
        {item.question}
      </h3>
        <ArrowDown className="w-5 h-5 text-[#97A339]" />
      </div>
      
      <p className={`text-gray-600 text-sm leading-relaxed ${plusJakarta.className}`}>
        {item.answer}
      </p>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full mx-auto px-10 max-w-8xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have a question? We are here to answer.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;