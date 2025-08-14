import React from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from 'next/image';


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const WhatWeBelieve: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            What We Believe
          </h1>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Learning is just the start */}
          <div className="bg-[#D2F0F4] rounded-3xl p-8">
            <div className=" mb-6 flex items-center justify-center">
            <Image
              src={"/about/download9.svg"}
              alt='first'
              width={528}
              height={283}
              className='w-auto h-auto'
            />
            </div>
            <h3 className="text-xl font-bold text-[#003267] mb-3">
              Learning is just the start.
            </h3>
            <p className={`text-gray-600 leading-relaxed ${plusJakarta.className}`}>
              Without a way to apply it, it&apos;s incomplete
            </p>
          </div>

          {/* Execution builds confidence */}
          <div className="bg-[#D2F0F4] rounded-3xl p-8">
            <div className=" mb-6 flex items-center justify-center">
              <Image
                src={"/about/download9(1).svg"}
                alt='first'
                width={528}
                height={283}
                className='w-auto h-auto'
              />
            </div>

            <h3 className="text-xl font-bold text-[#003267] mb-3">
              Execution builds confidence
            </h3>
            <p className={`text-gray-600 leading-relaxed ${plusJakarta.className}`}>
              Not theory. Not tutorials. Actual product work.
            </p>
          </div>

          {/* Mentorship multiplies growth */}
          <div className="bg-[#D2F0F4] rounded-3xl p-8">
            <div className=" mb-6 flex items-center justify-center">
              <Image
                src={"/about/download8.svg"}
                alt='first'
                width={528}
                height={283}
                className='w-auto h-auto'
              />
            </div>

            <h3 className="text-xl font-bold text-[#003267] mb-3">
              Mentorship multiplies growth.
            </h3>
            <p className={`text-gray-600 leading-relaxed ${plusJakarta.className}`}>
              Talents don&apos;t just need feedback. They need context,
              structure, and guidance from those ahead
            </p>
          </div>

          {/* Portfolios should reflect work that mattered */}
          <div className="bg-[#D2F0F4] rounded-3xl p-8">
            <div className=" mb-6 flex items-center justify-center">
              <Image
                src={"/about/download9(2).svg"}
                alt='first'
                width={528}
                height={283}
                className='w-auto h-auto'
              />
            </div>
            <h3 className="text-xl font-bold text-[#003267] mb-3">
          Portfolios should reflect work that mattered.
        </h3>
        <p className={`text-gray-600 leading-relaxed ${plusJakarta.className}`}>
          Not just capstones, but features that shipped.
        </p>
        
        </div>

        
      </div>
    </div>
    </div>

  );
};

export default WhatWeBelieve;