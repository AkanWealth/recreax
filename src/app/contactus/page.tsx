import React from 'react';
import HeroSection from '@/component/contactComponent/Herosection';
import ContactForm from '@/component/contactComponent/ContactForm';
import NewsletterSection from '@/component/contactComponent/Subcribe';

export default function Program () {
  return (
   <div  className="min-h-screen">
   <HeroSection />
    <ContactForm />
    <NewsletterSection />
    </div>
  );
}
