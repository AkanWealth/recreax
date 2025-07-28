import React from 'react';
import { Mic, MicOff } from 'lucide-react';

const WaysToSupportAsMentor: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#032353] p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          Ways to Support as a <span className="text-green-400">Mentor</span>
        </h1>
      </div>

      {/* Support Options Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* One-on-One Sessions */}
        <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">One-on-One Sessions</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Support tech talents directly with feedback, career advice, or industry navigation.
          </p>

          {/* Video call mockup */}
          <div className="bg-gray-900 rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-medium">Raymond David</div>
              <div className="text-gray-400 text-sm">1:49 PM</div>
            </div>
            
            <div className="relative mb-4">
              <div className="bg-gray-800 rounded-xl p-4 max-w-xs ml-auto">
                <p className="text-white text-sm leading-relaxed">
                  How do I become relevant today as a product designer with the wave of AI tools
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">RD</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <MicOff className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Host Skill Workshops */}
        <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Host Skill Workshops</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Lead focused sessions on design, coding, product thinking, or collaboration.
          </p>

          {/* Workshop participants mockup */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">K</span>
                </div>
                <span className="text-white text-sm font-medium">Kimberly</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                <span className="text-white text-sm font-medium">Otto</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-white text-sm font-medium">Allie</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-white text-sm font-medium">Aigbe</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="text-white text-sm font-medium">Nelson</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                <span className="text-white text-sm font-medium">Ojo</span>
              </div>
            </div>
            
            {/* Workshop tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Portfolio</span>
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">Brainstorming</span>
              <span className="px-3 py-1 bg-pink-500 text-white text-xs rounded-full">Webinar</span>
              <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">Code Review</span>
              <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Mentorship</span>
            </div>
          </div>
        </div>

        {/* Review Portfolios */}
        <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Review Portfolios</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Give constructive feedback that helps talents refine their public-facing work.
          </p>

          {/* Portfolio review mockup */}
          <div className="space-y-4">
            {/* Video call participants */}
            <div className="flex gap-4">
              <div className="flex-1 bg-gray-200 rounded-xl p-2">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                  <div className="w-2 h-2 bg-red-500 rounded-full mx-auto"></div>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-800 rounded-xl p-2">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Lucy</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
            
            {/* Portfolio preview */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Lucy Gordon</h4>
                  <p className="text-2xl font-bold text-gray-800">UI & UX Designer</p>
                  <p className="text-sm text-gray-600">I am a user-centered designer specializing in creating intuitive and engaging digital experiences...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Tools & Resources */}
        <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Tools & Resources</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Help mentees stay current by sharing relevant links, playbooks, or tools you actually use.
          </p>

          {/* Resources grid mockup */}
          <div className="grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-400 rounded"></div>
            </div>
            
            {/* Row 2 */}
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-pink-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-indigo-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-teal-400 rounded"></div>
            </div>
            
            {/* Row 3 */}
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-cyan-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-lime-400 rounded"></div>
            </div>
            <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-rose-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToSupportAsMentor;