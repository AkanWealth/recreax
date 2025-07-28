"use client";
import React from 'react';
import Image from 'next/image';

const ProjectGallerySection = () => {
  const projects = [
    {
      id: 1,
      image: "/waddle3.png",
      title: "Analytics Dashboard"
    },
    {
      id: 2,
      image: "/waddle.png",
      title: "Mobile Banking App"
    },
    {
      id: 3,
      image: "/waddle2.png",
      title: "Waddle Platform"
    },
    {
      id: 4,
      image: "/project1.png",
      title: "Event Management System"
    },
    {
      id: 5,
      image: "/project2.png",
      title: "Audio Streaming Platform"
    },
    {
      id: 6,
      image: "/project3.png",
      title: "Volunteer Network"
    },
    {
      id: 7,
      image: "/ican.png",
      title: "Networking Platform"
    },
    {
      id: 8,
      image: "/myareli.png",
      title: "Hospital Website"
    }
  ];

  // Option 1: Array of your custom talent images
  const talentImages = [
    "/talent1.jpg",
    "/talent2.jpg", 
    "/Talent3.jpg",
    "/Talent4.jpg",
    "/Talent5.jpg",
    "/talent6.jpg"
  ];

  
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-4">
          Project Completed
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#1a2b47]">
            by Our Talents
          </h3>
          
          {/* Option 1: Simple image array approach */}
          <div className="flex -space-x-2">
            {talentImages.map((imageSrc, index) => (
              <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={`Talent ${index + 1}`}
                  height={40}
                  width={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Option 2: Using talent data with names (commented out - uncomment to use)
          <div className="flex -space-x-2">
            {talents.map((talent, index) => (
              <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden" title={talent.name}>
                <img 
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          */}

        </div>
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
    </section>
  );
};

export default ProjectGallerySection;