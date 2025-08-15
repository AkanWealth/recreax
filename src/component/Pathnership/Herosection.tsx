import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants} from "framer-motion";
import { RiSparkling2Line } from "react-icons/ri";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});
const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
};
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const HeroSection = () => {
  return (
    <section className={`bg-[#1a2b47] text-white py-20 px-4 sm:px-8 ${plusJakarta.className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Drive Tech Innovation

            
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">through {"  "}
             <span className="bg-[#B6EB6A] text-[#1a2b47] px-4 py-2 rounded-2xl inline-block italic">
                  Strategic Partnership
            </span>
          </h2>
        
        
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
         ReCreaX Talent is for those who&apos;ve done the learning and are ready to execute. We turn skills into experience through REX AI mentor preparation and hands-on programs that get you hired.

        </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                  variants={containerVariants}
                >
                  <Link href="/partnership">
        <motion.button
            className="bg-[#00FFFF] text-black hover:bg-[#00c4ef] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner <span><RiSparkling2Line className="w-5 h-5"/></span>
          </motion.button>
          </Link>
</motion.div>
        

        {/* Video Conference Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/pathner/Partnership Hero.svg"
              alt="Mentoring session video conference"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            
            {/* Video Conference UI Overlay */}
            {/* <div className="absolute top-2 right-4">
              <div className="bg-[#B6EB6A] text-black px-3 py-1 rounded-full text-sm font-semibold">
                ReCreaX Talent
              </div>
            </div> */}
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;