import ProgramSection from "@/component/program/Program";
import FAQ from "@/component/program/FaqComponent";
import CtaSection from "@/component/program/CtaSection";
import ApplicationForm from "@/component/program/ApplicationForm";
import CareerSection from "@/component/program/Careers";
import IntershipSection from "@/component/program/IntershipSection";
import TestimonialsSection from "@/component/program/Testimonials";
export default function Program () {
  return (
   <div  className="min-h-screen">
     <CareerSection />
   <IntershipSection />
   <TestimonialsSection />
   <ApplicationForm />
      <ProgramSection />
      <FAQ />
      <CtaSection />
    </div>
  );
}
