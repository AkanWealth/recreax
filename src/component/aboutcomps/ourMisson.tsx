import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans} from "next/font/google";



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const OurMission: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#D2F0F4] flex items-center p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        {/* Left Column - Isometric Cubes */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-[#B6EB6A] rounded-3xl p-16 flex items-center justify-center">
            <div className="relative">
              <Image
              src={"/about/FRame.svg"}
              alt=''
              width={140}
              height={188}
              className='w-auto h-auto'/>
            </div>
          </div>
        </div>

        {/* Right Column - Mission Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Mission
          </h1>
          
          <p className={`text-gray-700 text-lg leading-relaxed ${plusJakarta.className}`}>
            To turn learning into execution, and help early-career tech talents gain the 
            clarity, confidence, and real-world experience they need to grow and get 
            hired with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;