import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Bricolage_Grotesque } from 'next/font/google';
import { HeroSectionProps } from '@/types/blog';

const bricolage = Bricolage_Grotesque({
  weight: ['700'],
  subsets: ['latin'],
});

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="bg-[#12233D] text-white py-26 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-bold mb-36 ${bricolage.className}`}>
            The ReCreax
            <br />
            Talent Blog
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for blog"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-12 pr-2 py-2 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
            />
          </div>
        </div>

        {/* Arrow Image */}
        <div className="absolute left-220 top-44 transform -translate-y-1/2">
          <div className="w-50 h-72 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Arrow2.png"
                alt="Arrow"
                width={182}
                height={254}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;