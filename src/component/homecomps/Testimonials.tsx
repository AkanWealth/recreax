
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const mainTestimonials = [
    {
      quote: "I had always wanted to manage a software development project from scratch to finish and ReCreaX has given me the opportunity. It's been amazing having to put my knowledge into real world application as well as managing tech people to achieve the desired goal or product.",
      name: "Demilade Olufayo",
      role: "Project Manager",
      image: "/testimonial1.png"
    },
    {
      quote: "Truly what is in the training is different from what’s happening when working on a project. ReCreaX made me understand this . Now, I confidently work as a project manager without fidgeting.",
      name: "Mary",
      role: "Project Manager",
      image: "/profile/profile7.png"
    },
    {
      quote: "I finally have leverage to apply for the roles I’m interested in. I was able to get an internship at a company based in Canada, leveraging my practical experience at ReCreaX",
      name: "Akorede",
      role: "Business Analyst",
      image: "/profile/profile8.jpg"
    },
    {
      quote: "Today, I’m proud to say that I have not only gained valuable skills but also landed a contract gig to design for a client.",
      name: "Mabel",
      role: "UI/UX Designer",
      image: "/profile/profile9.jpg"
    }
  ];

  const cardTestimonials = [
    {
      quote: "This experience strengthened my technical expertise, expanded my industry knowledge and given me real world exposure to collaborative problem-solving.",
      name: "Philip",
      role: "Backend Developer"
    },
    {
      quote: "This project sharpened my project management skills and boosted my self confidence. I am so grateful for this opportunity.",
      name: "Grace",
      role: "Product Manager"
    },
    {
      quote: "ReCreaX allowed me to practice in real time, turning raw ideas into finished products. I also got to work with tools like Jira and became familiar with the scrum framework",
      name: "Peter",
      role: "Business Analyst"
    },
    {
      quote: "Working on projects through ReCreaX, made me learn and operate more independently.",
      name: "Francis",
      role: "Frontend Developer"
    },
    {
      quote: "Working on this project opened me to many opportunities. ReCreaX helped me stand alone. Now, I'm proud of myself and can do any task given to me as a backend developer.",
      name: "Aliyu",
      role: "Backend Developer"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % mainTestimonials.length);
  }, [mainTestimonials.length]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + mainTestimonials.length) % mainTestimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000); // Changed from 5000ms to 8000ms to slow down
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="bg-[#B6EB6A] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main testimonial */}
        <div className="text-center mb-16">
          <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-slate-800 hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="transition-all duration-500 ease-in-out transform">
            <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 max-w-4xl mx-auto leading-relaxed">
              &quot;{mainTestimonials[currentTestimonial].quote}&quot;  
            </blockquote>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-12 h-12  rounded-full">
                  <Image 
                    src={mainTestimonials[currentTestimonial].image} 
                    alt={mainTestimonials[currentTestimonial].name} 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800 text-lg">
                  {mainTestimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-700 font-medium">
                  {mainTestimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mb-12">
            {mainTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-slate-800 scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16 leading-tight">
          Real impact, no code: hear from the ReCreaX<br />
          community
        </h2>
        
        {/* Animated testimonial cards */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...cardTestimonials, ...cardTestimonials].map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                  index % 5 === 0 ? 'rotate-2' :
                  index % 5 === 1 ? '-rotate-1' :
                  index % 5 === 2 ? 'rotate-1' :
                  index % 5 === 3 ? '-rotate-2' :
                  'rotate-1'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <p className="text-slate-700 text-sm font-medium mb-6 leading-relaxed min-h-[100px]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-bold text-slate-800 text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite; /* Changed from 30s to 25s for faster scrolling */
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
