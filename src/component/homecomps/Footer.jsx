"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const bricolage = Bricolage_Grotesque({
  weight: ["700"], // Bold
  subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

function Footer() {
  const [footerEmail, setFooterEmail] = useState("");

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    console.log("Footer subscribed with email:", footerEmail);
    setFooterEmail("");
  };

  const handleScrollToFAQ = (e) => {
    e.preventDefault();
    const element = document.getElementById("faq-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#DBF1F9]">
      {/* Footer Content */}
      <footer className={`bg-[#12233D] rounded-t-4xl text-white py-8 sm:py-16 px-4 sm:px-12 lg:px-18 ${plusJakarta.className}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Logo and Social Media */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <Image
              src="/recreaxlogo.png"
              height={32}
              width={120}
              unoptimized={true}
              alt="ReCreaX Logo"
              className=""
            />
            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="https://m.facebook.com/100094738337826/"
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/recreax_?s=21"
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/recreax_?igsh=MTRsaTdqeG8zaXQ2YQ=="
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/recreaxtalent/"
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@recreax?_t=ZS-8yzLmjOU5Mm&_r=1"
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-22 mb-8 sm:mb-12">
            {/* Newsletter Section - Full width on mobile, 1/3 on desktop */}
            <div className="lg:col-span-1">
              <h3 className="font-normal text-white mb-4 text-base">Subscribe to our Newsletter</h3>
              <form onSubmit={handleFooterSubscribe} className="flex items-center gap-0 max-w-md lg:max-w-none">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">✉</span>
                  <input
                    type="email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] text-white placeholder-gray-400 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#00D4FF] text-[#12233D] p-3 rounded-r-lg hover:bg-[#00C4EF] transition-colors flex items-center justify-center border-l-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Pages and Resources - Side by side on mobile, individual columns on desktop */}
            <div className="grid grid-cols-2 gap-8 lg:contents">
              {/* Pages Column */}
              <div className="lg:col-span-1">
                <h3 className="font-medium text-[#00D4FF] mb-4 sm:mb-6 text-base">Pages</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link href="https://talents.recreax.com/authorization" passHref className="text-white hover:text-white transition-colors text-sm">
                      Rex AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/program" className="text-white hover:text-white transition-colors text-sm">
                      ReCreaX Internship
                    </Link>
                  </li>
                  <li>
                    <Link href="/recreaxStudio" className="text-white hover:text-white transition-colors text-sm">
                      Studio
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutUs" className="text-white hover:text-white transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="lg:col-span-1">
                <h3 className="font-medium text-[#00D4FF] mb-4 sm:mb-6 text-base">Resources</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" className="text-white hover:text-white transition-colors text-sm">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faq-section"
                      onClick={handleScrollToFAQ}
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      FAQ
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/newsletter" className="text-white hover:text-white transition-colors text-sm">
                      Newsletter
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm order-2 sm:order-1">
              <Link href="/privacy-policy" className="text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-white text-sm order-1 sm:order-2">
              Copyright © 2025 ReCreaX. All rights reserved.
            </p>
          </div>
        </div>
        {/* <div><h1 className="lg:text-[165px] s text-center text-white opacity-20"> ReCreax Talent
          </h1></div> */}
      </footer>
    </div>
  );
}

export default Footer;