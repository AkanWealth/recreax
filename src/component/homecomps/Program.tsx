import React from "react";
import {  FaBriefcase } from "react-icons/fa";
import { Plus_Jakarta_Sans, Bricolage_Grotesque} from "next/font/google";
import { RiSparkling2Line } from "react-icons/ri";
import { TbClockCheck  } from "react-icons/tb";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});


const Program = () => {
  return (
    <div className="text-white">

      <div className="bg-[#032353] w-full mx-auto">
        <div className="py-16 px-4 sm:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
          <span className="text-[#B6EB6A]">REX Prepares You.</span> These Programs<br />
          Take You Further.
        </h1>
        
        {/* <div className="space-y-8"> */}
          {/* ReCreaX Internship Program */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <Image
                  src="/image7.jpg" 
                  alt="Two people working together"
                  height={400}
                  width={400}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 bg-[#0D192B] order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#CCFF82] rounded-lg flex items-center justify-center">
                    <FaBriefcase className="text-slate-900 text-xl" />
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold text-white ${bricolage.className}`}>ReCreaX Internship Program</h3>
                </div>
                
                <p className={`text-white text-sm lg:text-base mb-6 leading-relaxed ${plusJakarta.className}`}>
                  Join the ReCreaX team full-time for 3 months and work across real 
                  internal projects in fintech, edtech, HRtech, AI, and multi-domains. 
                  You&apos;ll collaborate with senior mentors, build your portfolio, and get 
                  evaluated for full-time roles.
                </p>
                
                <ul className={`space-y-3 mb-8 ${plusJakarta.className}`}>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Structured 9-5 work schedule
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Exposure to multi-product domains
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Active mentorship
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    Pathway to full-time roles
                  </li>
                </ul>
                
                <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-300 transition-colors text-sm">
                 
                  Learn About ReCreaX Internship
                    <RiSparkling2Line className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
          {/* ReCreaX Studio Cohort */}
          <div className="bg-white rounded-2xl overflow-hidden  py-8 px-8">
          <div className="bg-[#B6EB6A] rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 text-[#12233D] order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TbClockCheck className="text-[#003267] text-xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold ">ReCreaX Studio Cohort</h3>
                </div>
                
                <p className="text-[#2A2829] text-sm lg:text-lg mb-6 leading-relaxed">
                  Join a 3-month product-building sprint inside ReCreaX 
                  Studio. Work in cohorts with other talents with early-stage 
                  founders to bring startup ideas to life. You&apos;ll focus on real 
                  features, gain practical experience, and walk away with 
                  certification, recommendations, and solid case studies.
                </p>
                
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                    <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                    Cohort-based product sprints
                  </li>
                  <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                    <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                    Build real MVPs and features
                  </li>
                  <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                    <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                    Collaborate with founders
                  </li>
                  <li className="flex items-center gap-3 text-[#2A2829] text-lg">
                    <div className="w-2 h-2 bg-[#00138E] rounded-full flex-shrink-0"></div>
                    Certification and testimonials
                  </li>
                </ul>
                
                <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm">
                   <RiSparkling2Line className="text-2xl" />
                 
                  Explore Studio Cohorts
                </button>
              </div>
              
              <div className="lg:w-1/2 bg-slate-800 relative flex items-center justify-center order-2 min-h-[400px]">
                {/* Network visualization */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Central person - larger */}
                  <div className="absolute w-20 lg:w-28 h-20 lg:h-28 rounded-full bg-white flex items-center justify-center z-10 shadow-xl border-4 border-white">
                    <Image
                      src="/image5.jpg" 
                      alt="Central team member" 
                      height={112}
                      width={112}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Top left member */}
                  <div className="absolute w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white" style={{top: '12%', left: '18%'}}>
                    <Image
                      src="/image4.jpg" 
                      alt="Team member" 
                      height={64}
                      width={64}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Top right member */}
                  <div className="absolute w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white" style={{top: '12%', right: '18%'}}>
                    <Image
                      src="/image6.png" 
                      alt="Team member" 
                      height={64}
                      width={64}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Bottom left member */}
                  <div className="absolute w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white" style={{bottom: '22%', left: '12%'}}>
                    <Image
                      src="/image3.jpg" 
                      alt="Team member" 
                      height={64}
                      width={64}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Bottom right member */}
                  <div className="absolute w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white" style={{bottom: '12%', right: '22%'}}>
                    <Image
                      src="/image2.png" 
                      alt="Team member" 
                      height={64}
                      width={64}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Small member near center */}
                  <div className="absolute w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white" style={{bottom: '32%', left: '32%'}}>
                    <Image
                      src="/image1.png" 
                      alt="Team member" 
                      height={48 }
                      width={48}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Role badges */}
                  <div className="absolute bg-purple-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium shadow-lg" style={{top: '6%', right: '12%'}}>
                    Developer
                  </div>
                  <div className="absolute bg-blue-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium shadow-lg" style={{bottom: '6%', left: '8%'}}>
                    Product Designer
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default Program;