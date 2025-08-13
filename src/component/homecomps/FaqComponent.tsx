// 'use client';

// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "Who can use REX?",
//     answer: "Anyone building a career in tech. Whether you're a designer, developer, product manager, analyst, or tester, REX is built to guide your growth."
//   },
//   {
//     question: "Is REX free?",
//     answer: "Yes, REX is currently free to use. Some advanced features may require a subscription later, but early users get full access at no cost."
//   },
//   {
//     question: "Do I need experience to start?",
//     answer: "No. If you've taken a tech course or have basic skills and a willingness to grow, you're ready to use REX and start practicing."
//   },
//   {
//     question: "What are the case studies in REX?",
//     answer: "These are real-world scenario prompts tailored to your role. You can chat with REX to solve product problems, plan features, write specs, or prep for team dynamics."
//   },
//   {
//     question: "How do I join a program like the Internship or Studio Cohort?",
//     answer: "Start by using REX. From there, you can apply to any open pathway. We shortlist talents who show commitment, growth, and readiness to work on live projects."
//   },
//   {
//     question: "What's the difference between the Internship and the Studio Cohort?",
//     answer: "The Internship is a full-time 3-month experience working with internal teams. The Studio Cohort is more flexible and lets you co-build early product features with founders and peers in a sprint format."
//   },
//   {
//     question: "Will I get proof of work?",
//     answer: "Yes. Every project you complete, whether through the internship, or a cohort, comes with a verified portfolio reference and/or certificate."
//   },
//   {
//     question: "How much time do the programs require?",
//     answer: "The Internship runs like a standard workday schedule. The Studio Cohort is more flexible, but requires 8 to 12 hours per week for 3 months."
//   },
//   {
//     question: "Can I access mentorship during these programs?",
//     answer: "Yes. You'll receive mentorship from senior professionals, project leads, and guidance through REX at every step."
//   },
//   {
//     question: "What happens after the program?",
//     answer: "Outstanding talents may receive full-time offers from ReCreaX or referrals to partner companies. Everyone receives a project certificate, portfolio material, and feedback for their next step."
//   }
// ];

// const FAQAccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
//   item,
//   isOpen,
//   onToggle
// }) => {
//   return (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <button
//         className="w-full py-6 px-0 text-left flex justify-between items-center hover:text-gray-600 transition-colors duration-200"
//         onClick={onToggle}
//       >
//         <h3 className="text-lg font-medium text-gray-900 pr-4">
//           {item.question}
//         </h3>
//         <div className="flex-shrink-0">
//           {isOpen ? (
//             <ChevronUp className="w-5 h-5 text-gray-500" />
//           ) : (
//             <ChevronDown className="w-5 h-5 text-gray-500" />
//           )}
//         </div>
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-96 pb-6' : 'max-h-0'
//         }`}
//       >
//         <p className="text-gray-600 leading-relaxed">
//           {item.answer}
//         </p>
//       </div>
//     </div>
//   );
// };

// const FAQ: React.FC = () => {
//   const [openItems, setOpenItems] = useState<number[]>([]);

//   const toggleItem = (index: number) => {
//     setOpenItems(prev =>
//       prev.includes(index)
//         ? prev.filter(i => i !== index)
//         : [...prev, index]
//     );
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-600">
//             Have a question? We are here to answer.
//           </p>
//         </div>

//         {/* FAQ Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
//           {faqData.map((item, index) => (
//             <FAQAccordionItem
//               key={index}
//               item={item}
//               isOpen={openItems.includes(index)}
//               onToggle={() => toggleItem(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;



'use client';

import React, { useState } from 'react';
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
    question: "Who can use REX?",
    answer: "Anyone building a career in tech. Whether you're a designer, developer, product manager, analyst, or tester, REX is built to guide your growth."
  },
  {
    question: "Is REX free?",
    answer: "Yes, REX is currently free to use. Some advanced features may require a subscription later, but early users get full access at no cost."
  },
  {
    question: "Do I need experience to start?",
    answer: "No. If you've taken a tech course or have basic skills and a willingness to grow, you're ready to use REX and start practicing."
  },
  {
    question: "What are the case studies in REX?",
    answer: "These are real-world scenario prompts tailored to your role. You can chat with REX to solve product problems, plan features, write specs, or prep for team dynamics."
  },
  {
    question: "How do I join a program like the Internship or Studio Cohort?",
    answer: "Start by using REX. From there, you can apply to any open pathway. We shortlist talents who show commitment, growth, and readiness to work on live projects."
  },
  {
    question: "What's the difference between the Internship and the Studio Cohort?",
    answer: "The Internship is a full-time 3-month experience working with internal teams. The Studio Cohort is more flexible and lets you co-build early product features with founders and peers in a sprint format."
  },
  {
    question: "Will I get proof of work?",
    answer: "Yes. Every project you complete, whether through the internship, or a cohort, comes with a verified portfolio reference and/or certificate."
  },
  {
    question: "How much time do the programs require?",
    answer: "The Internship runs like a standard workday schedule. The Studio Cohort is more flexible, but requires 8 to 12 hours per week for 3 months."
  },
  {
    question: "Can I access mentorship during these programs?",
    answer: "Yes. You'll receive mentorship from senior professionals, project leads, and guidance through REX at every step."
  },
  {
    question: "What happens after the program?",
    answer: "Outstanding talents may receive full-time offers from ReCreaX or referrals to partner companies. Everyone receives a project certificate, portfolio material, and feedback for their next step."
  }
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