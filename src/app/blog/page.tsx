"use client";
import React, {useState}from 'react';
import HeroSection from '@/component/blogcomps/Herosection';
import BlogSection from '@/component/blogcomps/MainBlog';
import NewsletterSection from '@/component/blogcomps/Subcribe';
export default function Program () {
    const [searchQuery, setSearchQuery] = useState('');
  return (
   <div  className="min-h-screen">
     <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogSection searchQuery={searchQuery} />
        <NewsletterSection />
    </div>
  );
}
