import React from 'react';
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
const HeroSection = () => {
  return (
    <section className="bg-[#1a2b47] text-white py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${bricolage.className}`}>
          Let&apos;s Talk About<br />
          Your Next Step
        </h1>
        <p className={`text-xl text-white max-w-2xl mx-auto ${plusJakarta.className}`}>
          Whether you have a question about our programs, need help with your 
          application, or just want to understand how ReCreax Talent works, our team is 
          here to support your journey.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;