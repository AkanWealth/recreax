"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Button} from "../ui/button";
import { PiBookOpenTextLight} from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { ArrowRight } from "lucide-react";
import {  Plus_Jakarta_Sans } from "next/font/google";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { ChevronDown, Menu, X } from "lucide-react";
// import NewsModal from "@/components/homecomps/blogpage/NewsModal";




const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-plus-jakarta-sans",
});


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 w-full py-0 px-0 sm:py-4 sm:p-8   bg-[#12233D] shadow-md ${plusJakarta.className}`}>
      <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5  h-fit w-full  items-center justify-between">
        <Link href="/">
          <Image
            unoptimized={true}
            src="/recreaxlogo.png"
            alt="logo"
            width={120}
            height={75}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-1 md:gap-2 text-white">
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-white"
            href="/"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
              <div className="flex items-center h-fit">
                <p className="font-medium font-plus-jakarta-sans text-xs sm:text-sm text-white">
                  Programs
                </p>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 pt-1" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[716px] h-[143px] bg-white border-none shadow-xl rounded-2xl">
              <div className="grid grid-cols-2 gap-2 p-2">
                {/* ReCreaX Internship */}
                <div className="flex flex-col cursor-pointer group">
                  <Link href="/program" className="flex flex-cols-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full bg-[#E3E4FE] rounded-xl  transition-colors">
                      <Image
                        src="/progress.png"
                        alt="Internship Icon"
                        width={83}
                        height={95}
                        className="relative w-auto h-auto top-2  rounded-xl"
                      />
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      ReCreaX Internship
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                      Gain real-world experience by working on live projects across product, design, and tech.
                    </p>
                    <div className="flex items-center mt-2 text-black text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </div>
                  </Link>
                </div>

                {/* ReCreaX Studio */}
                <div className="flex flex-col rounded-xl transition-all duration-200 cursor-pointer group">
                  <Link href="/recreaxStudio" className="flex flex-cols-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full bg-[#E4FFE0] rounded-xl transition-colors">
                      <Image
                        src="/Group(2).png"
                        alt="Group Icon"
                        width={70}
                        height={124}
                        className="relative w-auto h-auto top-2   rounded-xl"
                       
                      />
                      {/* <MdWeb className="w-6 h-6 text-white hidden fallback-icon" /> */}
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      ReCreaX Studio
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                      Collaborate globally to design and ship digital products with real teams and deadlines.
                    </p>
                    <div className="flex items-center mt-2 text-black text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-white"
            href="/mentor"
          >
            Mentor
          </Link>
          
          
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
              <div className="flex items-center h-fit gap-1 md:gap-2">
                <p className="font-medium font-plus-jakarta-sans text-xs sm:text-sm text-white">
                  Why ReCreaX
                </p>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 pt-1" />
              </div>
            </DropdownMenuTrigger>
             <DropdownMenuContent className="w-[716px] h-[288px] bg-white border-none shadow-xl rounded-2xl">
              <div className="grid grid-cols-2 gap-4 p-2">
                {/* AboutUs */}
                <div className="flex flex-col cursor-pointer group">
                  <Link href="/aboutUs" className="flex flex-cols-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full bg-[#E3E4FE] rounded-xl  transition-colors">
                      <Image
                        src="/Frame (1).png"
                        alt="Internship Icon"
                        width={83}
                        height={95}
                        className="relative w-auto h-auto top-2  rounded-xl"
                      />
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      About Us
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                      Gain real-world experience by working on live projects across product, design, and tech.
                    </p>
                    <div className="flex items-center mt-2 text-black text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </div>
                  </Link>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col rounded-xl transition-all duration-200 cursor-pointer group">
                  <Link href="/contactus" className="flex flex-cols-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full bg-[#FFE0F7] rounded-xl transition-colors">
                      <Image
                        src="/Group (3).png"
                        alt="Group Icon"
                        width={70}
                        height={124}
                        className="relative w-auto h-auto top-2   rounded-xl"
                       
                      />
                      {/* <MdWeb className="w-6 h-6 text-white hidden fallback-icon" /> */}
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Contact Us
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                      Collaborate globally to design and ship digital products with real teams and deadlines.
                    </p>
                    <div className="flex items-center mt-2 text-black text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </div>
                  </Link>
                </div>
                 {/* ReCreaX Studio */}
                <div className="flex flex-col rounded-xl transition-all duration-200 cursor-pointer group">
                  <Link href="/pathnership" className="flex flex-cols-2 gap-2">
                    <div className="flex items-center justify-center w-full h-full bg-[#E4FFE0] rounded-xl transition-colors">
                      <Image
                        src="/Group (4).png"
                        alt="Group Icon"
                        width={70}
                        height={124}
                        className="relative w-auto h-auto top-2   rounded-xl"
                       
                      />
                      {/* <MdWeb className="w-6 h-6 text-white hidden fallback-icon" /> */}
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Partnership
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                      Collaborate globally to design and ship digital products with real teams and deadlines.
                    </p>
                    <div className="flex items-center mt-2 text-black text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu> 
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-white"
            href="/blog"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 cursor-pointer text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-[74px] left-0 right-0 bg-[#12233D] shadow-lg rounded-lg w-full p-4 sm:hidden z-50">
            <div className="flex flex-col bg-light gap-4">
              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-white"
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Programs Dropdown */}
              <Accordion type="single" collapsible>
                <AccordionItem value="programs">
                  <AccordionTrigger className="focus-visible:outline-none py-0 no-underline cursor-pointer">
                    <p className="font-medium font-plus-jakarta-sans text-sm text-white">
                      Programs
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-white rounded-lg flex flex-col gap-4">
                      <Link
                        href="/program"
                        className="flex flex-row gap-3 items-center justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="bg-white w-8 h-8 p-1 flex items-center justify-center rounded-xl">
                          <Image
                            src="/progress.png"
                            alt="Internship Icon"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            ReCreaX Internship
                          </p>
                          <p className="text-xs font-plus-jakarta-sans text-gray-600">
                            Gain real-world experience working on live projects
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/recreaxStudio"
                        className="flex flex-row gap-3 items-center justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="bg-green-100 text-green-600 w-8 h-8 p-1 flex items-center justify-center rounded-xl">
                          <MdWeb className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            ReCreaX Studio
                          </p>
                          <p className="text-xs font-plus-jakarta-sans text-gray-600">
                            Collaborate globally on digital products
                          </p>
                        </div>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-white"
                href="/mentor"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mentor
              </Link>

              {/* Mobile Why ReCreaX Dropdown */}
              <Accordion type="single" collapsible>
                <AccordionItem value="why-recreax">
                  <AccordionTrigger className="focus-visible:outline-none py-0 no-underline cursor-pointer">
                    <p className="font-medium font-plus-jakarta-sans text-sm text-white">
                      Why ReCreaX
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-white rounded-lg flex flex-col gap-2">
                      <Link
                        href="/aboutUs"
                        className="flex flex-row gap-3 items-center justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="bg-purple-100 text-purple-600 w-8 h-8 p-1 flex items-center justify-center rounded-xl">
                          <MdWeb className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            About us
                          </p>
                          <p className="text-xs font-plus-jakarta-sans text-gray-600">
                            Weekly insights to help you build smarter
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/contactus"
                        onClick={() => setIsModalOpen(true)}
                        className="flex flex-row gap-3 items-center justify-start cursor-pointer"
                      >
                        <div className="bg-orange-100 text-orange-600 w-8 h-8 p-1 flex items-center justify-center rounded-xl">
                          <IoMailUnreadOutline className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            Contact us
                          </p>
                          <p className="text-xs font-plus-jakarta-sans text-gray-600">
                            Get curated founder tips in your inbox
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/partnership"
                        className="flex flex-row gap-3 items-center justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="bg-blue-100 text-blue-600 w-8 h-8 p-1 flex items-center justify-center rounded-xl">
                          <PiBookOpenTextLight className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                          Partnership
                          </p>
                          <p className="text-xs font-plus-jakarta-sans text-gray-600">
                            Step-by-step guides for product execution
                          </p>
                        </div>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-white"
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

               <Link href="https://talents.recreax.com/log-in" passHref>
                <Button
                  className="border border-gray-300 text-sm font-medium rounded-lg py-[12px] px-4 hover:bg-gray-50 text-white w-full cursor-pointer bg-transparent"
                >
                  Login
                </Button>
              </Link>
              <Link href="https://talents.recreax.com/authorization" passHref>
                <Button
                  className="bg-[#00FFFF] text-sm font-medium rounded-lg py-[12px] px-4 hover:bg-[#00FFFF]/80 text-[#12233D] w-full cursor-pointer"
                >
                  Join ReCreaX
                </Button>
              </Link>
            </div>
          </div> 
        )}

        <div className="hidden sm:flex items-center gap-2">
          <Link href="https://talents.recreax.com/log-in" passHref>
            <Button
              className="border border-white text-sm font-medium rounded-lg py-[12px] px-4 hover:bg-[#12233D]/80 text-white bg-transparent"
            >
              Login
            </Button>
          </Link>
          <Link href="https://talents.recreax.com/authorization" passHref>
            <Button
              className="bg-[#00FFFF] text-sm font-medium rounded-lg py-[12px] px-4 hover:bg-[#00FFFF]/80 text-[#12233D] w-full sm:w-auto"
            >
              Join ReCreaX
            </Button>
          </Link>
        </div>
      </div>
      {/* {isModalOpen && (
        <NewsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      )} */}
    </nav>
  );
}

export default Header;