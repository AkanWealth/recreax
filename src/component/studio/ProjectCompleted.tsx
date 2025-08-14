
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 },
  }),
};

const ProjectGallerySection = () => {
  const projects = [
    { id: 1, image: "/waddle3.png", title: "Analytics Dashboard" },
    { id: 2, image: "/waddle.png", title: "Mobile Banking App" },
    { id: 3, image: "/waddle2.png", title: "Waddle Platform" },
    { id: 4, image: "/project1.png", title: "Event Management System" },
    { id: 5, image: "/project2.png", title: "Audio Streaming Platform" },
    { id: 6, image: "/project3.png", title: "Volunteer Network" },
    { id: 7, image: "/ican.png", title: "Networking Platform" },
    { id: 8, image: "/myareli.png", title: "Hospital Website" },
  ];

  const talentImages = [
    "/talent1.jpg",
    "/talent2.jpg",
    "/Talent3.jpg",
    "/Talent4.jpg",
    "/Talent5.jpg",
    "/talent6.jpg",
  ];

  const duplicatedProjects = [...projects, ...projects];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4 sm:px-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-4"
          variants={fadeInUpVariants}
        >
          Project Completed
        </motion.h2>
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          variants={fadeInUpVariants}
        >
          <motion.h3
            className="text-4xl sm:text-5xl font-bold text-[#1a2b47]"
            variants={fadeInUpVariants}
          >
            by Our Talents
          </motion.h3>
          <motion.div className="flex -space-x-2" variants={containerVariants}>
            {talentImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                variants={avatarVariants}
                custom={index}
              >
                <Image
                  src={imageSrc}
                  alt={`Talent ${index + 1}`}
                  height={40}
                  width={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Project Gallery */}
      <div className="relative">
        <div className="flex animate-scroll-left space-x-6">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                height={240}
                width={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectGallerySection;
