import React from 'react';
// import HeroSection from '@/component/contactComponent/Herosection';
// import ContactForm from '@/component/contactComponent/ContactForm';
// import NewsletterSection from '@/component/contactComponent/Subcribe';

import HeroSection from '@/component/homecomps/contactComponent/Herosection';
import ContactForm from '@/component/homecomps/contactComponent/ContactForm';
import NewsletterSection from '@/component/homecomps/contactComponent/Subcribe';

export default function Program () {
  return (
   <div  className="min-h-screen">
   <HeroSection />
    <ContactForm />
    <NewsletterSection />
    </div>
  );
}
