import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans,Bricolage_Grotesque } from "next/font/google";
import { RiSparklingLine } from 'react-icons/ri';
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});


const CareerSection = () => (
    <section className="bg-[#12233D] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${bricolage.className}`}>
          Gain Real Tech Experience. <br/>Get Ready to{" "}
          <span className={`text-[#B6EB6A] ${bricolage.className}`}>Get Hired.</span>
        </h2>
        <p className={`text-lg sm:text-lg text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed ${plusJakarta.className}`}>
          Join a 100% remote internship program where you work full-time with a real product team for 3 months,
          gain experience, build your portfolio, and grow under mentorship.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16 ${plusJakarta.className}`}>
          <button className="bg-[#00FFFF] text-[#12233D] hover:bg-[#00c4ef] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center gap-2 transition-colors">
            Secure Your Spot <RiSparklingLine className="w-5 h-5" />
          </button>
          <span className="text-lg sm:text-base text-white">Next cohort starts: July</span>
        </div>

       

        {/* Three Images - Responsive Layout */}
        <div className="flex flex-col-3 sm:flex-col-3 justify-center items-center gap-4 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-[#1B2C45] rounded-2xl overflow-hidden shadow-xl transform ">
            <Image
              src="/Program4.jpg"
              alt="Team collaboration"
              height={288}
              width={288}
              className="w-[346px] h-[395.32px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-xl">
             {/* Profile Pictures */}
        <div className="flex justify-center items-center gap-2 mb-6 sm:mb-4">
          <div className="flex -space-x-2">
            <Image
              src="/image1.png"
              alt="Talent 1"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/image2.png"
              alt="Talent 2"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/image3.jpg"
              alt="Talent 3"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/image4.jpg"
              alt="Talent 4"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
             <Image
              src="/image5.jpg"
              alt="Talent 4"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
             <Image
              src="/image6.png"
              alt="Talent 4"
              height={32}
              width={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-xs sm:text-sm text-white ml-2">1,000+ talents</span>
        </div>
            <Image
            
              src="/Program1.jpg"
              alt="Professional working"
              height={348}
              width={288}
              className="w-[346px] h-[395.32px] object-cover rounded-2xl"
            />
          </div>
          <div className="bg-[#CEFDFF] rounded-2xl overflow-hidden shadow-xl transform ">
            <Image
              src="/Program2.jpg"
              alt="Mentoring session"
              height={348}
              width={288}
              className=" w-[346px] h-[395.32px] object-cover"
            />
          </div>
        </div>

        {/* Company Logos */}
        <div className="border-t border-gray-600 pt-8 sm:pt-12">
          <h3 className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Some Companies Where Our Talents Now Work</h3>
          <div className="flex sm:justify-center sm:items-center gap-6 sm:gap-12">
            <div className="text-lg sm:text-2xl font-bold">
              <Image
                src="/Frame (3).png"
                alt="Company Logo"
                width={100}
                height={50}
                className="w-24 sm:w-32 h-auto mb-2"
                /></div>
            <div className="text-lg sm:text-2xl font-bold"><Image
                src="/Seamless.png"
                alt="Company Logo"
                width={100}
                height={50}
                className="w-24 sm:w-32 h-auto mb-2"
                /></div>
            <div className="text-lg sm:text-2xl font-bold"><Image
                src="/brand1.png"
                alt="Company Logo"
                width={100}
                height={50}
                className="w-24 sm:w-32 h-auto mb-2"
                /></div>
            <div className="text-lg sm:text-2xl font-bold"><Image
                src="/spotify.png"
                alt="Company Logo"
                width={100}
                height={50}
                className="w-24 sm:w-32 h-auto mb-2"
                /></div>
            <div className="text-lg sm:text-2xl font-bold col-span-2 sm:col-span-1"><Image
                src="/Component 50.png"
                alt="Company Logo"
                width={100}
                height={50}
                className="w-24 sm:w-32 h-auto mb-2"
                /></div>
          </div>
        </div>
      </div>
    </section>
  );
export default CareerSection;