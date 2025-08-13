

'use client';

import React,{useState} from 'react';
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
    question: "Do I need prior work experience?",
    answer: "No. If you have basic skills in a tech role and are ready to commit, you’re eligible."
  },
  {
    question: "Is this remote?",
    answer: "Yes. The internship is 100% remote but structured like a full-time job."
  },
  {
    question: "Is it paid?",
    answer: "No, but top performers may be offered full-time roles or referred to paid opportunities."
  },
  {
    question: "How long is the internship?",
    answer: "It lasts 3 months. Expect to commit 30–40 hours per week."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. You will receive a verified program certificate, portfolio proof, and references."
  },
  
];

const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-gray-200 last:border-b-0 py-6 ${bricolage.className}`}>
      <div 
        className="mb-4 flex items-center justify-between cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 mb-0">
          {item.question}
        </h3>
        <ArrowDown 
          className={`w-5 h-5 text-[#97A339] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <p className={`text-gray-600 text-sm leading-relaxed pt-2 ${plusJakarta.className}`}>
          {item.answer}
        </p>
      </div>
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;