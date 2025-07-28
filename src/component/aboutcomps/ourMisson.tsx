import React from 'react';

const OurMission: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Isometric Cubes */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-gradient-to-br from-lime-300 to-green-400 rounded-3xl p-16 flex items-center justify-center">
            <div className="relative">
              {/* Creating an isometric cube arrangement */}
              <div className="relative w-32 h-32">
                {/* Back layer cubes */}
                <div className="absolute top-0 left-4 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 transform rotate-12 skew-y-12 rounded-lg"></div>
                <div className="absolute top-4 right-0 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 transform rotate-12 skew-y-12 rounded-lg"></div>
                
                {/* Middle layer cubes */}
                <div className="absolute top-8 left-0 w-16 h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 transform rotate-12 skew-y-12 rounded-lg"></div>
                <div className="absolute top-12 left-8 w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 transform rotate-12 skew-y-12 rounded-lg"></div>
                
                {/* Front layer cubes */}
                <div className="absolute top-16 left-4 w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 transform rotate-12 skew-y-12 rounded-lg"></div>
                <div className="absolute top-20 right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 transform rotate-12 skew-y-12 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Mission Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Mission
          </h1>
          
          <p className="text-gray-700 text-lg leading-relaxed">
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