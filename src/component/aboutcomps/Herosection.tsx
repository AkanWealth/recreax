import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

const HeroSection = () => {
  return (
    <section className={`bg-[#1a2b47] text-white py-20 px-4 sm:px-8 ${plusJakarta.className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Know What It&apos;s Like to be
            <span className="bg-white italic border border-[#6ECDDD] text-[#003267] px-4 py-2 rounded-2xl inline-block">
              Skilled But Overlooked
            </span>
          </h2>
        
        
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
         ReCreaX Talent is for those who&apos;ve done the learning and are ready to execute. We turn skills into experience through REX AI mentor preparation and hands-on programs that get you hired.

        </p>

        

        {/* Video Conference Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about/AboutusHero.svg"
              alt="Mentoring session video conference"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            
            {/* Video Conference UI Overlay */}
            {/* <div className="absolute top-2 right-4">
              <div className="bg-[#B6EB6A] text-black px-3 py-1 rounded-full text-sm font-semibold">
                ReCreaX Talent
              </div>
            </div> */}
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;