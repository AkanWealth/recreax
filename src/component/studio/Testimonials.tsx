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
      quote: "Working on projects through ReCreaX has really helped me grow. I have become more confident in what I do. It has made me more open, curious and better prepared for real world work.",
      name: "Olaide",
      role: "Project Manager",
      avatar: "/vanessa.jpg",
      fallback: "V"
    },
    {
      quote: "This project has significantly improved my design skills and opened new opportunities and connections in the tech industry helping me grow personally and professionally.",
      name: "Monsurah",
      role: "Product Designer",
      avatar: "/guy2.jpg",
      fallback: "H"
    },
    {
      quote: "This project made me build my portfolio and gained valuable skills. It impacted my career and was able to build collaboration with other developers.",
      name: "Amarachi",
      role: "Backend Developer",
      avatar: "/chineye.jpg",
      fallback: "C"
    }
  ];

  return (
    <section className={`flex item-center justify-center bg-[#B6EB6A] py-20 px-4 sm:px-8 ${plusJakarta.variable}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-16 ${bricolage.className}`}>
          Talent Spotlights from  <br /> Past Cohorts
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-[#B6BBC3] font-serif leading-none mb-26">
                <VscQuote className='w-8 h-8' />
              </div>

              {/* Avatar */}
              {/* <div className="flex justify-center mb-6 mt-8">
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
                    style={{ display: 'none' }}
                  >
                    <span className="text-white text-xl font-bold">{testimonial.fallback}</span>
                  </div>
                </div>
              </div> */}

              {/* Quote */}
              <p className="text-[#2A2829] text-xl text-center leading-relaxed mb-8 relative mt-4 z-10">
                {testimonial.quote}
              </p>
              <div className='flex item-center justify-center max-w-sm grid grid-cols-2'>
                {/* <div className="flex justify-center"> */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"

                    />
                    {/* <div
                      className="w-full h-full bg-[#1a2b47] rounded-full flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <span className="text-white text-xl font-bold">{testimonial.fallback}</span>
                    </div> */}
                  </div>
                {/* </div> */}
                {/* Name and Role */}
                <div className="text-left">
                  <h4 className="font-semibold text-[#060C15] text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
