"use client";
import React from 'react';
import HeroSection from '@/component/Pathnership/Herosection';
import CtaSection from '@/component/Pathnership/CtaSection';
import TalentProgram from '@/component/Pathnership/Strategic';
import TrustedPartnersSection from '@/component/Pathnership/TrustedPartnersSection';
import PartnershipSection from '@/component/Pathnership/ourMisson';

export default function Program () {
  return (
   <div  className="flex flex-col w-full">
    <HeroSection />
  <TrustedPartnersSection/>
  <TalentProgram/>
  <PartnershipSection/>
   
    <CtaSection />
  
    </div>
  );
}
