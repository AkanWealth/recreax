import React from 'react';
import Image from 'next/image';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import { VscQuote } from "react-icons/vsc";

const bricolage = Bricolage_Grotesque({
  weight: ['700'], // Bold
  subsets: ['latin'],
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta-sans',
});

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with ReCreax has greatly improved about project management skills especially prioritizing feature development given me the opportunity to turn minds into great products and made my CV more streamlined and attractive.",
      name: "Vanessa",
      role: "Project Manager",
      avatar: "/vanessa.jpg", 
      fallback: "V"
    },
    {
      quote: "Working on real projects with team members made me see product designing from a different angle which improved how I learn how to solve problems and think about solutions. This has impacted so much to my design process.",
      name: "Henry",
      role: "UI/UX Designer",
      avatar: "/guy2.jpg",
      fallback: "H"
    },
    {
      quote: "Today I am better with communication, team collaboration, project testing, sprint planning and agile methodologies and this won't be possible if ReCreax didn't give me the chance.",
      name: "Chinecherem",
      role: "Project Manager",
      avatar: "/chineye.jpg",
      fallback: "C"
    }
  ];

  return (
    <section className={`bg-[#DBF1F9] py-20 px-4 sm:px-8 ${plusJakarta.variable}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-16 ${bricolage.className}`}>
          Talents Launching Their Careers <br/> Everywhere
        </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-[#B6BBC3] font-serif leading-none">
                <VscQuote className='w-8 h-8'/>
              </div>
              
              {/* Avatar */}
              <div className="flex justify-center mb-6 mt-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    
                  />
                  <div 
                    className="w-full h-full bg-[#1a2b47] rounded-full flex items-center justify-center"
                    style={{display: 'none'}}
                  >
                    <span className="text-white text-xl font-bold">{testimonial.fallback}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#2A2829] text-xl text-center leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>

              {/* Name and Role */}
              <div className="text-center">
                <h4 className="font-semibold text-[#060C15] text-lg">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
