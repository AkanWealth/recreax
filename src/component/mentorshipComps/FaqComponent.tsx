
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
    question: "Do I have to mentor for free?",
    answer: "No. You can choose whether your sessions are free or paid. If you choose to charge, 100% of your fee goes to you."
  },
  {
    question: "How flexible is the time commitment?",
    answer: "Very flexible. You set your own availability using your calendar. You only mentor when you want to."
  },
  {
    question: "Can I mentor from anywhere?",
    answer: "Yes. ReCreaX mentorship is fully remote and available globally."
  },
  {
    question: "What kind of support do I get as a mentor?",
    answer: "You' ll get onboarding guidance, access to your mentor dashboard, and updates from the ReCreaX team to help you succeed."
  },
  {
    question: "Do I need prior mentoring experience?",
    answer: "Not necessarily. If you’ve worked in a relevant tech role and are open to sharing what you know, that’s a great start."
  },
  
];

const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item }) => {
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