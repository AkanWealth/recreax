import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

const HelpTalentsGrow = () => {
  return (
    <section className={`bg-[#1a2b47] text-white py-20 px-4 sm:px-8 ${plusJakarta.className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Help{" "}
            <span className="bg-[#B6EB6A] text-[#1a2b47] px-4 py-2 rounded-2xl inline-block">
              Talents Grow
            </span>
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            With You as Their Guide
          </h3>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Mentor rising tech talents, build leadership, and grow visibility by sharing what you
          know with talents building their tech experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Become a Mentor ✨
          </button>
          <button className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Log in as a Mentor →
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#B6EB6A] mb-2">500+</div>
            <div className="text-gray-300 text-lg">sessions hosted</div>
          </div>
          
          <div className="hidden lg:block w-px h-16 bg-gray-600"></div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-[#B6EB6A] mb-2">200+</div>
            <div className="text-gray-300 text-lg">talents mentored</div>
          </div>
          
          <div className="hidden lg:block w-px h-16 bg-gray-600"></div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-300 text-sm">Mentors from</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-2xl">🇳🇬</span>
              <span className="text-2xl">🇬🇧</span>
              <span className="text-2xl">🇨🇦</span>
              <span className="text-2xl">🇺🇸</span>
            </div>
            <div className="text-3xl font-bold text-[#B6EB6A]">10+ <span className="text-gray-300 text-lg font-normal">countries</span></div>
          </div>
        </div>

        {/* Video Conference Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/AboutImage.jpg"
              alt="Mentoring session video conference"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            
            {/* Video Conference UI Overlay */}
            <div className="absolute top-4 right-4">
              <div className="bg-[#B6EB6A] text-black px-3 py-1 rounded-full text-sm font-semibold">
                Mentor
              </div>
            </div>
            
            {/* Bottom Controls Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full">
                <button className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">🎤</span>
                </button>
                <button className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">📹</span>
                </button>
                <button className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">📱</span>
                </button>
                <button className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">✕</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTalentsGrow;