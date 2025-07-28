// import React from "react";
// import { FaClock, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
// import { Plus_Jakarta_Sans, Bricolage_Grotesque} from "next/font/google";
// import { RiSparkling2Line } from "react-icons/ri";
// import { TbClockCheck  } from "react-icons/tb";
// import Image from "next/image";

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-plus-jakarta-sans",
// });

// const bricolage = Bricolage_Grotesque({
//   weight: ["700"],
//   subsets: ["latin"],
// });


// const ProgramSection = () => {
//   return (
//     <div className="text-white">

//       <div className="bg-[#B6EB6A] w-full mx-auto">
//         <div className="py-16 px-4 sm:px-8 lg:px-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
//           Build Confidence 
//         </h1>
//          <div className="flex items-center gap-4 mb-8">
//                                 {/* <div className="w-12 h-0.5 bg-[#00D4FF]"></div> */}
//                                <div className="w-12 h-12 rounded-full bg-[#D2F0F4]">
//                                 <p className="text-lg">💪🏼</p>
//                                </div>

                              
//                                 <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}>
//                                     Before Day One
//                                 </h3>
//                             </div>
//         {/* <div className="space-y-8"> */}
//           {/* ReCreaX Internship Program */}
//           <div className="bg-slate-800 rounded-2xl overflow-hidden">
//             <div className="flex flex-col lg:flex-row">
//               <div className="lg:w-1/2 order-2 lg:order-1">
//                 <img 
//                   src="/image7.jpg" 
//                   alt="Two people working together"
//                   className="w-full h-64 lg:h-full object-cover"
//                 />
//               </div>
//               <div className="lg:w-1/2 p-8 bg-[#0D192B] order-1 lg:order-2">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 bg-[#CCFF82] rounded-lg flex items-center justify-center">
//                     <FaBriefcase className="text-slate-900 text-xl" />
//                   </div>
//                   <h3 className={`text-xl lg:text-2xl font-bold text-white ${bricolage.className}`}>ReCreaX Internship Program</h3>
//                 </div>
                
//                 <p className={`text-white text-sm lg:text-base mb-6 leading-relaxed ${plusJakarta.className}`}>
//                   Start using REX AI career mentor to sharpen your skills before the internship begins. Practice with case studies, fix your resume, and prep for interviews with intelligent guidance.
//                 </p>
                
               
                
//                 <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-300 transition-colors text-sm">
//                     <RiSparkling2Line className="text-2xl" />
                 
//                  Try REX Free
//                 </button>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
         
//       </div>
//     // </div>
//   );
// };

// export default ProgramSection;




import React from "react";
import Image from "next/image";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";

const bricolage = Bricolage_Grotesque({
    weight: ["700"], // Bold
    subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-plus-jakarta-sans",
});
function ProgramSection() {
    return (
        
    <div className="bg-[#B6EB6A] text-white py-10 px-4 ">
        <section className="bg-[#12233D] py-10 px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8">


            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 text-white">
                    <h2 className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}>
                         Build Confidence 
       </h2>
        <div className="flex items-center gap-4 mb-8">
                              {/* <div className="w-12 h-0.5 bg-[#00D4FF]"></div> */}
                             <div className="w-8 h-8   rounded-full bg-[#D2F0F4]">
                              <p className="text-center text-xl">💪🏼</p>
                             </div>

                              
                             <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}>
                                  Before Day One
                              </h3>
                          </div>
                    
                    <p className={`"text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg" ${plusJakarta.className}`}>
                        Start using REX AI career mentor to sharpen your skills before the internship begins. Practice with case studies, fix your resume, and prep for interviews with intelligent guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2">
                            <span><RiSparklingLine className="w-5 h-5"/></span>
                            Try REX Free
                        </Button>
                        
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <div className="relative  w-full max-w-md mx-auto">
                        <div className="w-full max-w-md mx-auto  p-8 relative">
                            <div className="w-full h-64  rounded-xl mb-4 flex items-center justify-center">
                                <Image
                                    src="/buildCOnfidence.svg" // <-- Change to your actual image path
                                    alt="Woman with laptop"
                                    width={334}                 
                                    height={281}
                                    className="absolute rounded-xl object-cover w-auto h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default ProgramSection;