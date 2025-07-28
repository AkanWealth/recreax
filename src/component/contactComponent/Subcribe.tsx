"use client";   
import React, { useState } from 'react';
import { Plus_Jakarta_Sans, Bricolage_Grotesque} from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});


const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 px-4 bg-[#DBF1F9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${bricolage.className}`}>
          Subscribe to our Newsletter
        </h2>
        <p className={`text-gray-600 mb-8 max-w-2xl mx-auto ${plusJakarta.className}`}>
          Every week, we send out one insight to help you build tech experience through execution.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default NewsletterSection;