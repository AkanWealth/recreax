import HeroSection from "@/component/homecomps/Herosection";
import TestimonialsSection from "@/component/homecomps/Testimonials";
import CareerToolsSection from "@/component/homecomps/CareerTool";
import Program from "@/component/homecomps/Program";
import FAQ from "@/component/homecomps/FaqComponent";
import TalentProgram from "@/component/homecomps/TalentProgram";
import CtaSection from "@/component/homecomps/CtaSection";
export default function Home() {
  return (
   <div className="flex flex-col w-full">
      <HeroSection />
      <CareerToolsSection />
      <TestimonialsSection />    
      
      <Program />
      <TalentProgram />
      <FAQ />
      <CtaSection />
    </div>
  );
}
