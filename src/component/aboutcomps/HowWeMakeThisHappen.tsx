import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from "next/font/google";



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});
const HowWeMakeThisHappen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#032353]  p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 items-center">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-[#B6EB6A] mb-6 leading-tight">
              How We Make This Happen
            </h1>
            <p className={`text-white text-lg leading-relaxed ${plusJakarta.className}`}>
              We built REX, your AI career mentor, to help you practice 
              real-world scenarios, prep for interviews, refine your resume, 
              and find direction.
            </p>
          </div>

          {/* Team collaboration image with arrow */}
          <div className="relative">
            <div className="p-6 relative">
              <Image
                src="/about/HowHappen.svg" 
                alt="Team collaboration" 
                width={528.0001220703125}
                height={330}
                className="w-auto h-auto object-cover rounded-2xl"
              />
              
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="text-white mb-8">
            <p className={`text-lg leading-relaxed ${plusJakarta.className}`}>
              Then, we created two clear execution paths:
            </p>
          </div>

          {/* Execution Path 1 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                  src={"/about/Vector22358(1).svg"}
                  height={84}
                  width={139}
                  alt='profile'
                  className='w-auto h-auto'/>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#6ECDDD] mb-4">
                  The ReCreaX Internship
                </h3>
                
                {/* Profile avatars */}
                <div className="flex -space-x-3 mb-4">
                  <Image
                  src={"/about/Frame2.svg"}
                  height={84}
                  width={139}
                  alt='profile'
                  className='w-auto h-auto'/>
                </div>
                
                <p className={`text-white/90 leading-relaxed ${plusJakarta.className}`}>
                  a 3-month structured experience working with real teams on 
                  internal product initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Execution Path 2 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                  src={"/about/Vector22358.svg"}
                  height={84}
                  width={139}
                  alt='profile'
                  className='w-auto h-auto'/>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#6ECDDD] mb-4">
                  The ReCreaX Studio Cohort
                </h3>
                
                {/* Studio image placeholder */}
                <div className="">
                  <Image
                    src="/about/RCXStudio.svg" 
                    alt="Studio cohort"
                    width={139}
                    height={60} 
                    className="w-auto h-auto object-cover rounded-lg"
                  />
                </div>
                
                <p className={`text-white/90 leading-relaxed ${plusJakarta.className}`}>
                  a collaborative sprint program where talents co-create MVP 
                  features in startup-style teams.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="pt-8 ">
            <p className={`text-white/90 text-lg leading-relaxed mb-2 ${plusJakarta.className}`}>
              Together, these tools and programs give you the one thing 
              missing from most early tech journeys:
            </p>
            <p className={`text-[#6ECDDD] text-xl font-semibold ${plusJakarta.className}`}>
              proof that you can deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeMakeThisHappen;