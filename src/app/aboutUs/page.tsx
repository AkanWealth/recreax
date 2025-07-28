import React from 'react';
import HeroSection from '@/component/aboutcomps/Herosection';
import CtaSection from '@/component/aboutcomps/CtaSection';
import TalentProgram from '@/component/aboutcomps/TalentProgram';
import WhatWeBelieve from '@/component/aboutcomps/WhatWeBelieve';
import OurMission from '@/component/aboutcomps/ourMisson';
import HowWeMakeThisHappen from '@/component/aboutcomps/HowWeMakeThisHappen';
import FAQ from '@/component/aboutcomps/FaqComponent';
export default function Program () {
  return (
   <div  className="min-h-screen">
    <HeroSection />
    <OurMission />
    <WhatWeBelieve />
    <HowWeMakeThisHappen />
    <TalentProgram />
    <FAQ />
    <CtaSection />
  
    </div>
  );
}
