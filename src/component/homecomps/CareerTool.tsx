import React from "react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});



const CareerToolsSection = () => {
  return (
    <div className="bg-[#DBF1F9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${bricolage.className}`}>
            REX Helps You Get <span className="text-blue-600">Career-Ready,</span>
          </h2>
          <div className={`flex items-center justify-center gap-2 mb-6 ${bricolage.className}`}>
            <div className="relative bg-white border border-[#024690] px-4  rounded-xl flex items-center gap-2 -rotate-4">
              <span className="text-blue-600 font-semibold">Rex AI</span>
              <div className="w-10 h-10 rounded flex items-center justify-center">
                
                  <Image
                    src="/clipPath.png"
                    alt="Rex Icon"
                    width={58}  
                    height={44}
                    />
              </div>
            </div>
            <span className="text-4xl font-bold text-slate-800">Faster</span>
          </div>
          <p className={`text-slate-600 text-lg max-w-2xl mx-auto ${plusJakarta.className}`}>
            Practice with case studies, improve your resume, prep for interviews, and figure out your 
            best next career move
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Live Case Study */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Live Case Study</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Chat with REX to practice real-world scenarios with industry-based case studies in real time
            </p>
            
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${plusJakarta.className}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Rex</div>
                  <div className="text-slate-500 text-sm">Online Mentor</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Type your response to the case study question below.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-gray-400 text-sm">Ask anything</span>
                <div className="ml-auto w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💬</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Resume Reviewer */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Resume Reviewer</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Instantly spot gaps and get suggestions to improve your resume.
            </p>
            
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${plusJakarta.className}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⚡</span>
                </div>
                <span className="font-semibold text-slate-800">ATS Score</span>
                <span className="ml-auto text-green-600 font-bold">7/10</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{width: '70%'}}></div>
                </div>
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-gray-300 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-orange-500 text-sm mb-2">
                <span>⭐</span>
              </div>
              
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs text-slate-600 mb-1">Job Title</div>
                <div className={`font-medium text-slate-800 ${plusJakarta.className}`}>Software Developer</div>
              </div>
            </div>
          </div>
          
          {/* Smart Resume Builder */}
          <div className={`bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 ${plusJakarta.className}`}>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Smart Resume Builder</h3>
            <p className="text-slate-700 mb-6 leading-relaxed text-sm">
              Create clean ATS-optimized resumes tailored to specific roles in minutes.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 font-semibold text-sm">CV Builder</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-3 bg-blue-500 rounded" style={{width: '40%'}}></div>
                  <div className="h-3 bg-blue-500 rounded" style={{width: '30%'}}></div>
                </div>
                <div className="h-2 bg-gray-200 rounded" style={{width: '60%'}}></div>
                <div className="h-2 bg-gray-200 rounded" style={{width: '45%'}}></div>
                
                <div className="space-y-2 mt-4">
                  <div className="h-2 bg-blue-400 rounded" style={{width: '80%'}}></div>
                  <div className="h-2 bg-gray-200 rounded" style={{width: '30%'}}></div>
                  <div className="h-2 bg-blue-300 rounded" style={{width: '50%'}}></div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="bg-green-500 text-white px-4 py-1 rounded text-xs font-medium">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interview Coach */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Interview Coach</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Prepare with AI-powered mock interviews that simulate real scenarios and give feedback to sharpen your answers.
            </p>
            
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${plusJakarta.className}`}>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <div className="text-xs text-slate-500 mb-1">Questions</div>
                  <div className="flex gap-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Technical</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Behavioral</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span>5 mins</span>
                </div>
                
                <div className="bg-blue-600 text-white rounded-lg p-4 text-right">
                  <div className="text-xs mb-1">Interview Question</div>
                  <div className="font-medium">Tell me about yourself</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Career Pathfinder */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Career Pathfinder</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Discover ideal roles and career paths that align with your goals, strengths, interests, and project experience.
            </p>
            
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${plusJakarta.className}`}>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-800 text-lg">💡</span>
                </div>
                <div className="font-semibold text-slate-800 mb-1">Learning path to make you an expert!</div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Product Manager</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Level</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Mentor */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Mentor</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Get personalized guidance, feedback, and direction by chatting with REX anytime.
            </p>
            
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${plusJakarta.className}`}>
              <div className="bg-blue-600 text-white rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs">💬</span>
                  </div>
                  <span className="font-semibold">Rex Mentor</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white bg-opacity-20 rounded"></div>
                  <div className="h-2 bg-white bg-opacity-20 rounded" style={{width: '80%'}}></div>
                  <div className="h-2 bg-white bg-opacity-20 rounded" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerToolsSection;