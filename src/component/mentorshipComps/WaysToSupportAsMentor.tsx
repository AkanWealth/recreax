import React from 'react';
import Image from 'next/image';

const WaysToSupportAsMentor: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#032353] p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          Ways to Support as a <span className="text-green-400">Mentor</span>
        </h1>
      </div>

      {/* Support Options Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* One-on-One Sessions */}
        <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">One-on-One Sessions</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Support tech talents directly with feedback, career advice, or industry navigation.
          </p>

          {/* Video call mockup */}
          <Image
          src={"/mentor/One-On-One.png"}
          alt='support'
          height={624}
          width={242}
          className='w-auto h-auto'
          />
        </div>

        {/* Host Skill Workshops */}
        <div className="bg-[#DFFFE4] rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Host Skill Workshops</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Lead focused sessions on design, coding, product thinking, or collaboration.
          </p>

          <Image
          src={"/mentor/HostSkill.png"}
          alt='support'
          height={624}
          width={242}
          className='w-auto h-auto'
          />
        </div>

        {/* Review Portfolios */}
        <div className="bg-[#FFE3AF] rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Review Portfolios</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Give constructive feedback that helps talents refine their public-facing work.
          </p>

           <Image
          src={"/mentor/Frame2147227203.png"}
          alt='support'
          height={624}
          width={242}
          className='w-auto h-auto'
          />
        </div>

        {/* Share Tools & Resources */}
        <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Tools & Resources</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Help mentees stay current by sharing relevant links, playbooks, or tools you actually use.
          </p>

           <Image
          src={"/mentor/ToolsndResources (1).png"}
          alt='support'
          height={624}
          width={242}
          className='w-auto h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default WaysToSupportAsMentor;