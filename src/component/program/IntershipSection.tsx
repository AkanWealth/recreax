import React from 'react';
import Image from 'next/image';
import {  Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta-sans',
});

const InternshipProgram = () => (
  <section className="bg-white py-20 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className={`text-4xl sm:text-6xl font-bold text-[#12233D] mb-4 `}>
        Inside the <span className="">ReCreax</span>
      </h2>
      <div className="flex items-center justify-center mb-8">
        <Image
        src={"/download7.png"}
        alt='icon'
        height={41}
        width={90}
        quality={100}
        priority
        className='w-auto h-auto'/>
        <span className={`text-4xl sm:text-6xl font-bold text-[#003267] `}>Internship Program</span>
      </div>
      <p className={`text-lg text-gray-600 mb-16 max-w-2xl mx-auto ${plusJakarta.className}`}>
        Your 3-month journey from learner to confident professional
      </p>

      {/* Updated Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Row - Two Equal Cards */}
        <div className="bg-[#032353] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-1 -right-2  rounded-full flex items-center justify-center">
            <div className=" flex items-center justify-center">
               <Image
            src="/svg/Vector(4).svg"
            alt="Graduation"
            width={196}
            height={196}
            className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* <div> */}
          <div className='flex space-x-4 mb-4'>
            
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white">
              <Image src={"/svg/Vector.svg"}
              alt='vector'
              width={32}
              height={32}
              className='w-8 h-8'/>
            </div><div><h3 className="text-2xl font-bold mb-4 text-left">Join a Product Team</h3></div>
            
          </div>
          
          <p className="text-gray-300 text-left">
            Get placed inside a real product squad working on internal real company projects
          </p>
          {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
             <Image
            src="/Vector(5).png"
            alt="Graduation"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"/>
          </div> */}
        </div>

        <div className="bg-[#032353] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-1 -right-2  rounded-full flex items-center justify-center">
            <div className=" flex items-center justify-center">
               <Image
            src="/svg/Vector(4).svg"
            alt="Graduation"
            width={196}
            height={196}
            className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* <div> */}
          <div className='flex space-x-4 mb-4'>
            
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white">
              <Image src={"/svg/Vector(6).svg"}
              alt='vector'
              width={32}
              height={32}
              className='w-8 h-8'/>
            </div><div><h3 className="text-2xl font-bold mb-4 text-left">Follow a Structured Workflow</h3></div>
            
          </div>
          <p className="text-gray-300 text-left">
            Work like a professional: agile sprints, stand-ups, peer reviews, and deadlines.
          </p>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
             <Image
            src="/svg/bagicon.svg"
            alt="Graduation"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>

        {/* Second Row - Two Equal Cards */}
        <div className="bg-[#032353] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-1 -right-2  rounded-full flex items-center justify-center">
            <div className=" flex items-center justify-center">
               <Image
            src="/svg/Vector(4).svg"
            alt="Graduation"
            width={196}
            height={196}
            className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* <div> */}
          <div className='flex space-x-4 mb-4'>
            
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white">
              <Image src={"/svg/bagicon.svg"}
              alt='vector'
              width={32}
              height={32}
              className='w-8 h-8'/>
            </div><div><h3 className="text-2xl font-bold mb-4 text-left">Collaborate Across Roles</h3></div>
            
          </div>
          <p className="text-gray-300 text-left">
            Work with product designers, developers, PMs, QA testers, and analysts.
          </p>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
            <Image
            src="/svg/Vector(1).svg"
            alt="Graduation"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>

        <div className="bg-[#032353] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-1 -right-2  rounded-full flex items-center justify-center">
            <div className=" flex items-center justify-center">
               <Image
            src="/svg/Vector(4).svg"
            alt="Graduation"
            width={196}
            height={196}
            className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* <div> */}
          <div className='flex space-x-4 mb-4'>
            
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white">
              <Image src={"/svg/Vector(1).svg"}
              alt='vector'
              width={32}
              height={32}
              className='w-8 h-8'/>
            </div><div><h3 className="text-2xl font-bold mb-4 text-left">Get Reviewed and Mentored</h3></div>
            
          </div>

          <p className="text-gray-300 text-left">
            Receive direct feedback from senior team members throughout the program.
          </p>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
            <Image
            src="/Vector(5).png"
            alt="Graduation"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Card */}
      <div className="bg-[#032353] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-1 -right-2  rounded-full flex items-center justify-center">
            <div className=" flex items-center justify-center">
               <Image
            src="/svg/Vector(4).svg"
            alt="Graduation"
            width={196}
            height={196}
            className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* <div> */}
          <div className='flex space-x-4 mb-4'>
            
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white">
              <Image src={"/svg/Vector(5).svg"}
              alt='vector'
              width={32}
              height={32}
              className='w-8 h-8'/>
            </div><div><h3 className="text-2xl font-bold mb-4 text-left">Graduate With Proof</h3></div>
            
          </div>
        <h3 className="text-2xl font-bold mb-4 text-left">Graduate With Proof</h3>
        <p className="text-gray-300 text-left">
          Leave with a validated portfolio, references, and a certificate. Top performers may be offered full-time roles or placed with partner companies.
        </p>
        {/* <div className="absolute -bottom-4 -right-4 w-24 h-24">
          <Image
            src="/Vector(5).png"
            alt="Graduation"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"/>
        </div> */}
      </div>
    </div>
  </section>
);
export default InternshipProgram;