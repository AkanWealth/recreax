
"use client";
import React from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { RiSparklingLine } from "react-icons/ri";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

// Animation variants with explicit Variants typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const CareerSection = () => {
  // Reference for scroll-based animation
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background image
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#12233D] py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Cover Image Background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/Group36460.png" // Replace with your desired background image path
          alt="Decorative Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto text-center text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className={`text-5xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${bricolage.className}`}
          variants={fadeInUpVariants}
        >
          Gain Real Tech Experience. <br />
          Get Ready to <span className={`text-[#B6EB6A] ${bricolage.className}`}>Get Hired.</span>
        </motion.h2>

        <motion.p
          className={`text-lg sm:text-lg text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed ${plusJakarta.className}`}
          variants={fadeInUpVariants}
        >
          Join a 100% remote internship program where you work full-time with a real product team for 3 months, gain experience, build your portfolio, and grow under mentorship.
        </motion.p>

        <motion.div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16 ${plusJakarta.className}`}
          variants={fadeInUpVariants}
        >
          <motion.button
            className="bg-[#00FFFF] text-[#12233D] hover:bg-[#00c4ef] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center gap-2 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            Secure Your Spot <RiSparklingLine className="w-5 h-5" />
          </motion.button>
          <motion.span className="text-lg sm:text-base text-white" variants={fadeInUpVariants}>
            Next cohort starts: July
          </motion.span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
        >
          {/* Left Image with Background */}
          <motion.div
            className="bg-[#1B2C45] rounded-2xl overflow-hidden shadow-xl transform relative"
            variants={imageVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B2C45] via-[#243856] to-[#2d4467] opacity-90"></div>
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/10 rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 right-6 w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
            <Image
              src="/Program4.jpg"
              alt="Team collaboration"
              height={288}
              width={288}
              quality={90}
              priority
              className="w-[346px] h-[395.32px] object-cover relative z-10"
            />
          </motion.div>

          {/* /* Center Image with Profile Pictures */ }
          <motion.div
            className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-xl"
            variants={imageVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex justify-center items-center gap-2 mb-6 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex -space-x-2">
                {[
                  "/profile/profile1.jpg",
                  "/profile/profile2.png",
                  "/profile/profile3.jpg",
                  "/profile/profile4.jpg",
                  "/profile/profile5.jpg",
                  "/profile/profile6.png",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={src}
                      alt={`Talent ${index + 1}`}
                      height={80}
                      width={80}
                      quality={90}
                      priority
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-white ml-2">1,000+ talents</span>
            </motion.div>
            <Image
              src="/Program1.jpg"
              alt="Professional working"
              height={348}
              width={288}
              quality={90}
              priority
              className="w-[346px] h-[395.32px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* /* Right Image with Background */}
          <motion.div
            className="bg-[#CEFDFF] rounded-2xl overflow-hidden shadow-xl transform relative"
            variants={imageVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-[#CEFDFF] via-[#B8F5F7] to-[#A3EDF0] opacity-90"></div>
            <div className="absolute inset-0">
              <div className="absolute top-6 right-6 w-24 h-24 border-2 border-[#00FFFF]/30 rounded-full"></div>
              <div className="absolute bottom-8 left-6 w-12 h-12 bg-[#00FFFF]/20 rounded-lg rotate-12"></div>
              <div className="absolute top-1/3 left-4 w-3 h-3 bg-[#00FFFF]/40 rounded-full"></div>
              <div className="absolute bottom-1/4 right-8 w-8 h-8 border border-[#00FFFF]/25 rotate-45"></div>
            </div>
            <Image
              src="/Program2.jpg"
              alt="Mentoring session"
              height={348}
              width={288}
              quality={90}
              priority
              className="w-[346px] h-[395.32px] object-cover relative z-10"
            />
          </motion.div>
        </motion.div>

        <motion.div className="border-t border-gray-600 pt-8 sm:pt-12" variants={fadeInUpVariants}>
          <motion.h3
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8"
            variants={fadeInUpVariants}
          >
            Some Companies Where Our Talents Now Work
          </motion.h3>
          <motion.div
            className="flex sm:justify-center sm:items-center gap-6 sm:gap-12"
            variants={containerVariants}
          >
            {[
              { src: "/Frame (3).png", alt: "TeamApt" },
              { src: "/Seamless.png", alt: "SeamlessHR" },
              { src: "/brand1.png", alt: "QuickFold" },
              { src: "/spotify.png", alt: "Spotify" },
              { src: "/Component 50.png", alt: "Visa" },
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="text-lg sm:text-2xl font-bold"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5,
                    },
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="w-24 sm:w-32 h-auto mb-2 filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CareerSection;
