



import React from "react";
import { RiSparkling2Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section
//       className={`relative overflow-visible bg-[#1a2b47] text-white py-20 px-4 sm:px-8 flex flex-col items-center text-center ${bricolage.className}`}
//     >
//       {/* Heading and Subtext */}
//       <div className="text-center max-w-3xl mb-16 z-10">
//         <h1 className="text-3xl sm:text-xl lg:text-[50px] font-bold mb-2 leading-tight">
//           From Learner to{" "}
//           <span className="relative inline-block -rotate-4">
//             <span className="bg-white text-[#2563eb] px-6 py-2 rounded-full shadow-lg font-bold inline-block transform border-2 border-[#2563eb]">
//               Professional
//             </span>
//           </span>
//         </h1>
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
//           <span className="text-[#B6EB6A]">REX</span> Gets You There
//         </h2>
//         <p
//           className={`mx-auto max-w-3xl text-sm sm:text-sm lg:text-base text-gray-300 mb-8 ${plusJakarta.className}`}
//         >
//           Meet REX, your AI career mentor that takes you beyond courses into
//           real-world readiness. Practice with case studies, build stronger
//           resumes, prep for interviews, and discover your career path.
//         </p>
//         <div
//           className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${plusJakarta.className}`}
//         >
//           <button className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
//             Try REX Free <RiSparkling2Line className="text-xl" />
//           </button>
//           <button className="border border-white text-white hover:bg-gray-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
//             Join Talent Community <FaLongArrowAltRight className="text-xl" />
//           </button>
//         </div>
//       </div>
//         {/* White band - positioned to create the background for cards */}

// <div className="absolute bottom-0 left-0 w-full h-80 bg-white z-0"></div>
     
//       <div className="relative w-full max-w-6xl mx-auto">
        

//         {/* Cards Container */}
//         <div className="relative flex items-start justify-between  lg:px-12 pb-16">
//           {/* Left card - offset down more, aligned left */}
//           <div className="relative w-48 sm:w-52 lg:w-[500px] h-52 lg:h-68 mt-36 z-10">
//             {/* back-plate */}
//             <div className="absolute inset-0 top-4 left-4 rounded-2xl z-0"></div>
//             {/* front card */}
//             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
//               <img
//                 src="/hero1.jpg"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-white text-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg">
//                 <div className="flex -space-x-2">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
//                     alt="User 1"
//                     className="w-6 h-6 rounded-full border-2 border-white object-cover"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
//                     alt="User 2"
//                     className="w-6 h-6 rounded-full border-2 border-white object-cover"
//                   />
//                 </div>
//                 <span className="hidden sm:inline">1,000+ talents are building their careers with REX</span>
//                 <span className="sm:hidden">1,000+ talents</span>
//               </div>
//             </div>
//           </div>

//           {/* Center arrow - positioned between cards */}
//           <div className="absolute left-1/2 top-[100px] transform -translate-x-1/2 translate-y-1/4 w-18 h-18 bg-white rounded-full shadow-xl border-4 border-[#1a2b47] flex items-center justify-center z-30">
//             <GoArrowUpLeft
//               className="w-20 h-8 text-[#1a2b47]"
              
//             />
             
//           </div>

//           {/* Right card - offset down less, aligned right */}
//           <div className="relative w-48 sm:w-52 lg:w-[500px] h-80 lg:h-96 mt-8 z-10">
//             {/* back-plate */}
//             <div className="absolute inset-0 bottom-4 right-4 bg-[#DCFCE7] rounded-2xl z-0"></div>
//             {/* front card */}
//             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
//               <img
//                 src="/hero2.jpg"
//                 alt="Professional mentoring"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-4 right-4 bg-[#22c55e]/20 backdrop-blur-md text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg border border-white/20">
//                 <span className="hidden sm:inline">Ask REX AI to help you with any task</span>
//                 <span className="sm:hidden">Ask REX AI</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


  // Hero Section Component
  const HeroSection = () => (
    <section className="relative overflow-visible bg-[#1a2b47] text-white py-20 px-4 sm:px-8 flex flex-col items-center text-center">
      {/* Heading and Subtext */}
      <div className="text-center max-w-4xl mb-16 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          From Learner to{" "}
          <span className="relative inline-block -rotate-2">
            <span className="bg-white text-[#2563eb] px-6 py-2 rounded-full shadow-lg font-bold inline-block transform border-2 border-[#2563eb]">
              Professional
            </span>
          </span>
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="text-[#B6EB6A]">REX</span> Gets You There
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300 mb-12">
          Meet REX, your AI career mentor that takes you beyond courses into
          real-world readiness. Practice with case studies, build stronger
          resumes, prep for interviews, and discover your career path.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#00d4ff] text-black hover:bg-[#00c4ef] px-10 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Try REX Free <RiSparkling2Line className="text-xl" />
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-[#1a2b47] px-10 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
            Join Talent Community <FaLongArrowAltRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* White background for images */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-white"></div>
      
      {/* Three Images Layout */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-end gap-8 relative z-10">
          {/* Left Image */}
          <div className="relative">
            <div className="w-72 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-8deg] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                alt="Team collaboration"
                height={400}
                width={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                <div className="flex -space-x-2">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                    alt="User 1"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
                    alt="User 2"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    alt="User 3"
                    height={32}
                    width={32}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span>1,000+ talents</span>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=600&fit=crop"
                alt="Professional working"
                height={600}
                width={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-72 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-[8deg] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop"
                alt="Mentoring session"
                height={400}
                width={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#22c55e]/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg border border-white/20">
                Ask REX AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default HeroSection;