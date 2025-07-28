import React from 'react';
import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

const HowWeMakeThisHappen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#032353]  p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-green-400 mb-6 leading-tight">
              How We Make This Happen
            </h1>
            <p className="text-white text-lg leading-relaxed">
              We built REX, your AI career mentor, to help you practice 
              real-world scenarios, prep for interviews, refine your resume, 
              and find direction.
            </p>
          </div>

          {/* Team collaboration image with arrow */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-3xl p-6 relative">
              <Image
                src="/about4.png" 
                alt="Team collaboration" 
                width={100}
                height={100}
                className="w-full h-64 object-cover rounded-2xl"
              />
              {/* Blue arrow */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <TrendingUp className="w-16 h-16 text-blue-500 rotate-12" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="text-white mb-8">
            <p className="text-lg leading-relaxed">
              Then, we created two clear execution paths:
            </p>
          </div>

          {/* Execution Path 1 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                  The ReCreaX Internship
                </h3>
                
                {/* Profile avatars */}
                <div className="flex -space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full border-4 border-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full border-4 border-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                </div>
                
                <p className="text-white/90 leading-relaxed">
                  a 3-month structured experience working with real teams on 
                  internal product initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Execution Path 2 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                  The ReCreaX Studio Cohort
                </h3>
                
                {/* Studio image placeholder */}
                <div className="bg-gray-600 rounded-xl p-4 mb-4 h-20 flex items-center justify-center">
                  <Image
                    src="/api/placeholder/200/60" 
                    alt="Studio cohort"
                    width={200}
                    height={60} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <p className="text-white/90 leading-relaxed">
                  a collaborative sprint program where talents co-create MVP 
                  features in startup-style teams.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="pt-8 border-t border-blue-700">
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Together, these tools and programs give you the one thing 
              missing from most early tech journeys:
            </p>
            <p className="text-cyan-300 text-xl font-semibold">
              proof that you can deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeMakeThisHappen;