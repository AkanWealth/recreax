



import React from "react";

import Image from "next/image";


const EarlyStageIdeasSection = () => {
  return (
    <section className="bg-[#1a2b47] py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-8">
          <div className="flex items-center gap-2">
            <Image src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='2' fill='%23009639'/%3E%3C/svg%3E" alt="Nigeria" className="w-5 h-5 rounded" height={20} width={30}/>
            <span className="w-5 h-5 text-red-500 text-xl"></span>
            <Image src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='2' fill='%23FF0000'/%3E%3C/svg%3E" alt="Canada" className="w-5 h-5 rounded" height={40} width={30} />
            <Image src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v7.69h-20z' fill='%23B22234'/%3E%3Cpath d='M0 7.69h20v4.62h-20z' fill='%23FFFFFF'/%3E%3Cpath d='M0 12.31h20V20h-20z' fill='%23B22234'/%3E%3C/svg%3E" alt="USA" className="w-5 h-5 rounded" height={20} width={30}/>
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">Talent from 10+ countries</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Work on <span className="text-green-400">Early-Stage Ideas</span>
        </h2>
        <h3 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          in a Product Studio <span className="text-4xl">💡</span>
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Join a 3-month cohort where you collaborate with other talents and early-stage founders to turn 
          startup ideas into working MVPs. You&apos;ll co-build real product features, earn references, and gain 
          experience that shapes your portfolio.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="bg-cyan-400 text-black font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
            Secure Your Spot <span className="text-lg">✨</span>
          </button>
          <span className="text-gray-300">Next cohort starts: July</span>
        </div>

        {/* Profile Images */}
        <div className="flex justify-center items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
            <Image
              src="/studioImage1.jpg" 
              alt="Team member" 
              height={128}
              width={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <Image 
              src="/studioImage2.jpg" 
              alt="Team member" 
              height={160}
              width={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
            <Image
              src="/studio4.jpg" 
              alt="Team member" 
              height={128}
              width={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default EarlyStageIdeasSection;