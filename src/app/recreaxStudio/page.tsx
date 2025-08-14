import React from 'react';
import FAQ from '@/component/studio/FaqComponent';
import TestimonialsSection from '@/component/studio/Testimonials';  
import EarlyStageIdeasSection from '@/component/studio/Herosection';
import StudioCohortSection from '@/component/studio/studioCohort';
import ProjectGallerySection from '@/component/studio/ProjectCompleted';
import CtaSection from '@/component/studio/CtaSection';
export default function Program () {
  return (
   <div  className="flex flex-col w-full">
   <EarlyStageIdeasSection />
    <ProjectGallerySection />
    <StudioCohortSection />
   <TestimonialsSection />
  
      <FAQ />
      <CtaSection />
    </div>
  );
}
