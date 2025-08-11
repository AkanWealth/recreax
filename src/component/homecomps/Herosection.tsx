"use client";
import { Bricolage_Grotesque } from "next/font/google";
import React, { useState, useEffect } from "react";
import { RiSparkling2Line, RiSparklingFill, RiSendPlaneFill  } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    { 
      text: "Professional", 
      bgColor: "bg-white", 
      textColor: "text-[#2563eb]", 
      borderColor: "border-[#2563eb]" 
    },
    { 
      text: "Product Designer", 
      bgColor: "bg-white", 
      textColor: "text-green-500", 
      borderColor: "border-green-500" 
    },
    { 
      text: "Software Engineer", 
      bgColor: "bg-white", 
      textColor: "text-orange-500", 
      borderColor: "border-orange-500" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative overflow-visible bg-[#1a2b47] text-white py-20 px-4 sm:px-8 flex flex-col items-center text-center ${bricolage.className}`}
    >
      {/* Heading and Subtext */}
      <div className="text-center max-w-7wl lg:max-w-7xl sm:max-w-5xl mb-16 z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 leading-tight">
          From Learner to{" "}
          <span className="relative inline-block -rotate-4">
            <span 
              className={`${roles[currentRole].bgColor} ${roles[currentRole].textColor} px-6 py-2 rounded-full shadow-lg font-bold inline-block transform border-2 ${roles[currentRole].borderColor} transition-all duration-500 ease-in-out`}
            >
              {roles[currentRole].text}
            </span>
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="text-[#B6EB6A]">REX</span> Gets You There
        </h2>
        <p
          className={`mx-auto max-w-3xl text-sm sm:text-sm lg:text-base text-gray-300 mb-8 ${plusJakarta.className}`}
        >
          Meet REX, your AI career mentor that takes you beyond courses into
          real-world readiness. Practice with case studies, build stronger
          resumes, prep for interviews, and discover your career path.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${plusJakarta.className}`}
        >
          <button className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Try REX Free <RiSparkling2Line className="text-xl" />
          </button>
          <button className="border border-white text-white hover:bg-gray-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Join Talent Community <FaLongArrowAltRight className="text-xl" />
          </button>
        </div>
      </div>
        {/* White band - positioned to create the background for cards */}

<div className="absolute bottom-0 left-0 w-full h-80 bg-white z-0"></div>
     
      <div className="relative w-full max-w-6xl mx-auto">
        

        {/* Cards Container */}
        <div className="relative flex items-start justify-between  lg:px-12 pb-16">
          {/* Left card - offset down more, aligned left */}
          <div className="relative w-48 sm:w-52 lg:w-[500px] h-52 lg:h-68 mt-36 z-10">
            {/* back-plate */}
            <div className="absolute inset-0 top-4 left-4 rounded-2xl z-0"></div>
            {/* front card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/hero1.jpg"
                alt="Team collaboration"
                height={700}
                width={900}
                className="w-full h-full object-cover"
                quality={100}
                priority
              />
              <div className="absolute top-1 bg-white text-black px-3 py-2 rounded-2xl text-xs sm:text-sm font-medium  gap-2 shadow-lg">
                <div>
                <div className="flex -space-x-2 bg-[#003267] p-2 rounded-2xl w-[112px]">
                  <Image
                    src="/profile/profile1.jpg"
                    alt="User 1"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/profile/profile2.png"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/profile/profile3.jpg"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/profile/profile4.jpg"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/profile/profile5.jpg"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/profile/profile6.png"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    quality={100}
                    priority
                  />
                </div>
                </div>
                <p className="hidden sm:inline"><span className="text-[#003267]">1,000+</span> talents are building their careers with REX</p>
                <p className="sm:hidden"><span className="text-[#003267]">1,000+</span>talents</p>
              </div>
            </div>        </div>

          {/* Center arrow - positioned between cards */}
          <div className="absolute left-1/2 top-[100px] transform -translate-x-1/2 translate-y-1/4 w-18 h-18 bg-white rounded-full shadow-xl border-4 border-[#1a2b47] flex items-center justify-center z-30">
            <GoArrowUpLeft
              className="w-20 h-8 text-[#1a2b47]"
              
            />
             
          </div>

          {/* Right card - offset down less, aligned right */}
          <div className="relative w-48 sm:w-52 lg:w-[500px] h-80 lg:h-96 mt-8 z-10">
            {/* back-plate */}
            <div className="absolute inset-0 bottom-4 right-4 bg-[#DCFCE7] rounded-2xl z-0"></div>
            {/* front card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/hero2.jpg"
                alt="Professional mentoring"
                height={700}
                width={900}
                className="w-full h-full object-cover"
                quality={100}
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg border border-white/20">
                <span className="bg-[#9FDD62] rounded-full p-2"><RiSparklingFill className="text-[#3F4418]"/></span>
                <span className="hidden sm:inline"> Ask REX AI to help you with any task</span>
                <span className="sm:hidden">Ask REX AI</span>
               <span className="bg-[#12233D] rounded-full p-2"><RiSendPlaneFill className="text-[#FFFFFF]"/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;