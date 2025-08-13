
"use client";
import React, { useEffect, useRef } from "react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { motion, useInView, Variants } from "framer-motion";
import aiMentorAnimation from "./animations/ai-mentor.json";
import aiAnimation from "./animations/AIResumeReviewer.json";
import careerAnimation from "./animations/CareerPathfinder.json";
import confidenceCTAAnimation from "./animations/ConfidenceCTA.json";
import interviewAnimation from "./animations/InterviewCoach.json";
import livescasestudyAnimation from "./animations/Livescasestudy.json";
import smartResumeAnimation from "./animations/SmartResume.json";

const bricolage = Bricolage_Grotesque({ weight: ["700"], subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-plus-jakarta-sans" });

const CareerToolsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const liveCaseStudyRef = useRef<LottieRefCurrentProps>(null);
  const aiResumeRef = useRef<LottieRefCurrentProps>(null);
  const smartResumeRef = useRef<LottieRefCurrentProps>(null);
  const interviewCoachRef = useRef<LottieRefCurrentProps>(null);
  const careerPathfinderRef = useRef<LottieRefCurrentProps>(null);
  const aiMentorRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const refs = [liveCaseStudyRef, aiResumeRef, smartResumeRef, interviewCoachRef, careerPathfinderRef, aiMentorRef];
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.setSpeed(0.2);
        if (isInView) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    });
  }, [isInView]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      title: "Live Case Study",
      description: "Chat with REX to practice real-world scenarios with industry-based case studies in real time",
      animation: livescasestudyAnimation,
      ref: liveCaseStudyRef,
      gradient: "from-purple-100 to-purple-200",
    },
    {
      title: "AI Resume Reviewer",
      description: "Instantly spot gaps and get suggestions to improve your resume.",
      animation: aiAnimation,
      ref: aiResumeRef,
      gradient: "from-pink-100 to-pink-200",
    },
    {
      title: "Smart Resume Builder",
      description: "Create clean ATS-optimized resumes tailored to specific roles in minutes.",
      animation: smartResumeAnimation,
      ref: smartResumeRef,
      gradient: "from-orange-100 to-orange-200",
    },
    {
      title: "Interview Coach",
      description: "Prepare with AI-powered mock interviews that simulate real scenarios and give feedback to sharpen your answers.",
      animation: interviewAnimation,
      ref: interviewCoachRef,
      gradient: "from-pink-100 to-purple-200",
    },
    {
      title: "Career Pathfinder",
      description: "Discover ideal roles and career paths that align with your goals, strengths, interests, and project experience.",
      animation: confidenceCTAAnimation,
      ref: careerPathfinderRef,
      gradient: "from-blue-100 to-cyan-200",
    },
    {
      title: "AI Mentor",
      description: "Get personalized guidance, feedback, and direction by chatting with REX anytime.",
      animation: aiMentorAnimation,
      ref: aiMentorRef,
      gradient: "from-blue-100 to-blue-200",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="bg-[#DBF1F9] py-16 px-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
            Practice with case studies, improve your resume, prep for interviews, and figure out your best next career move
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8`}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{card.title}</h3>
              <p className={`text-slate-700 mb-6 leading-relaxed text-sm ${plusJakarta.className}`}>
                {card.description}
              </p>
              <div className={`rounded-2xl ${plusJakarta.className}`}>
                <div className="h-32 mb-2 flex items-center justify-center">
                  <Lottie
                    animationData={card.animation}
                    loop={true}
                    autoplay={false}
                    style={{ height: 350, width: 400 }}
                    lottieRef={card.ref}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerToolsSection;
