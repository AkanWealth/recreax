import React from 'react';
import HeroSection from '@/component/aboutcomps/Herosection';
import CtaSection from '@/component/aboutcomps/CtaSection';
import WhatWeBelieve from '@/component/aboutcomps/WhatWeBelieve';
import OurMission from '@/component/aboutcomps/ourMisson';
import HowWeMakeThisHappen from '@/component/aboutcomps/HowWeMakeThisHappen';
import FAQ from '@/component/aboutcomps/FaqComponent';
export default function Program () {
  return (
   <div  className="flex flex-col w-full">
    <HeroSection />
    <OurMission />
    <WhatWeBelieve />
    <HowWeMakeThisHappen />
    {/* <TalentProgram /> */}
    <div id="faq-section">
        <FAQ />
      </div>
    <CtaSection />
  
    </div>
  );
}
