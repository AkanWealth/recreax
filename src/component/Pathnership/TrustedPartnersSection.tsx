import React from 'react';
import Image from 'next/image';
const TrustedPartnersSection: React.FC = () => {
  const partners = [
    {
      name: "TBC",
      tagline: "re-invent. thrive",
      description: "Recruitment partner for internship and entry-level placement",
      logo: "/pathner/TBO-Logo1.svg",
      color: "border-r border-[#928F8B]"
    },
    {
      name: "Propel",
      tagline: "",
      description: "Global career mobility and access to remote roles",
      logo: "/pathner/Propel.svg",
      color: "border-r border-[#928F8B]"
    },
    {
      name: "CredPal",
      tagline: "",
      description: "Financial tools to support tech career development",
      logo: "/pathner/LOGOS.svg",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Forward-Thinking Companies and Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our partners are bridging the gap between learning and execution by supporting 
            career-ready talent, real product execution, and industry-aligned learning.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className={` ${partner.color} p-8 transition-all duration-300 transform hover:-translate-y-2`}>
               
                <div className={` p-6 mb-2 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105`}>
                  <Image
                    src={partner.logo} 
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                
               
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {partner.description}
                </p>

              
              </div>
            </div>
          ))}
        </div>

       
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};


export default TrustedPartnersSection;