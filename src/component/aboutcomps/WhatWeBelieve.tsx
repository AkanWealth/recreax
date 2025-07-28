import React from 'react';
import { Clock } from 'lucide-react';

const WhatWeBelieve: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            What We Believe
          </h1>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Learning is just the start */}
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-12 mb-6 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-12 h-12 text-purple-500" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Learning is just the start.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Without a way to apply it, it&apos;s incomplete
            </p>
          </div>

          {/* Execution builds confidence */}
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 mb-6 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Execution builds confidence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Not theory. Not tutorials. Actual product work.
            </p>
          </div>

          {/* Mentorship multiplies growth */}
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl p-12 mb-6 flex items-center justify-center">
              <div className="relative">
                {/* Creating a heart-like clover shape */}
                <div className="relative w-16 h-16">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Mentorship multiplies growth.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Talents don&apos;t just need feedback. They need context, 
              structure, and guidance from those ahead
            </p>
          </div>

          {/* Portfolios should reflect work that mattered */}
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl p-12 mb-6 flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center relative">
                {/* Creating a flower-like shape */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-800 rounded-full relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-lime-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Portfolios should reflect work that mattered.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Not just capstones, but features that shipped.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;