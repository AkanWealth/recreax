"use client";
import React, { useEffect, useRef } from "react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Import your animation data
import aiMentorAnimation from "./animations/ai-mentor.json";
import aiAnimation from "./animations/AIResumeReviewer.json";
import careerAnimation from "./animations/CareerPathfinder.json";
import confidenceCTAAnimation from "./animations/ConfidenceCTA.json";
import interviewAnimation from "./animations/InterviewCoach.json";
import livescasestudyAnimation from "./animations/Livescasestudy.json";
import smartResumeAnimation from "./animations/SmartResume.json";

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
  // Create refs for each Lottie animation
  const liveCaseStudyRef = useRef<LottieRefCurrentProps>(null);
  const aiResumeRef = useRef<LottieRefCurrentProps>(null);
  const smartResumeRef = useRef<LottieRefCurrentProps>(null);
  const interviewCoachRef = useRef<LottieRefCurrentProps>(null);
  const careerPathfinderRef = useRef<LottieRefCurrentProps>(null);
  const aiMentorRef = useRef<LottieRefCurrentProps>(null);

  // Set animation speed using useEffect
  useEffect(() => {
    if (liveCaseStudyRef.current) {
      liveCaseStudyRef.current.setSpeed(0.2);
    }
    if (aiResumeRef.current) {
      aiResumeRef.current.setSpeed(0.2);
    }
    if (smartResumeRef.current) {
      smartResumeRef.current.setSpeed(0.2);
    }
    if (interviewCoachRef.current) {
      interviewCoachRef.current.setSpeed(0.2);
    }
    if (careerPathfinderRef.current) {
      careerPathfinderRef.current.setSpeed(0.2);
    }
    if (aiMentorRef.current) {
      aiMentorRef.current.setSpeed(0.2);
    }
  }, []);

  return (
    <div className="bg-[#DBF1F9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${bricolage.className}`}>
            REX Helps You Get <span className="text-blue-600">Career-Ready,</span>
          </h2>
          <div className={`flex items-center justify-center gap-2 mb-6 ${bricolage.className}`}>
            <div className="relative bg-white border border-[#024690] px-4 rounded-xl flex items-center gap-2 -rotate-4">
              <span className="text-blue-600 font-semibold">Rex AI</span>
              <div className="w-10 h-10 rounded flex items-center justify-center">
                <Image src="/clipPath.png" alt="Rex Icon" width={58} height={44} />
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
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={livescasestudyAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={liveCaseStudyRef}
                />
              </div>
            </div>
          </div>

          {/* AI Resume Reviewer */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Resume Reviewer</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Instantly spot gaps and get suggestions to improve your resume.
            </p>
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={aiAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={aiResumeRef}
                />
              </div>
            </div>
          </div>

          {/* Smart Resume Builder */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Smart Resume Builder</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Create clean ATS-optimized resumes tailored to specific roles in minutes.
            </p>
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={smartResumeAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={smartResumeRef}
                />
              </div>
            </div>
          </div>

          {/* Interview Coach */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Interview Coach</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Prepare with AI-powered mock interviews that simulate real scenarios and give feedback to sharpen your answers.
            </p>
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={interviewAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={interviewCoachRef}
                />
              </div>
            </div>
          </div>

          {/* Career Pathfinder */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Career Pathfinder</h3>
            <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
              Discover ideal roles and career paths that align with your goals, strengths, interests, and project experience.
            </p>
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={confidenceCTAAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={careerPathfinderRef}
                />
              </div>
            </div>
          </div>

          {/* AI Mentor */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Mentor</h3>
            <p className={`text-slate-700 mb-22 leading-relaxed text-sm ${plusJakarta.className}`}>
              Get personalized guidance, feedback, and direction by chatting with REX anytime.
            </p>
            <div className={`rounded-2xl ${plusJakarta.className}`}>
              <div className="h-32 mb-2 flex items-center justify-center">
                <Lottie
                  animationData={aiMentorAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 350, width: 400 }}
                  lottieRef={aiMentorRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerToolsSection;