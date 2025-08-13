
"use client";
import React, { useRef } from "react";
import { Upload, Calendar, Users } from "lucide-react";
import { motion, Variants, useInView } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100, // Slide from left for even, right for odd
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mockupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const MentoringSteps: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen bg-[#DBF1F9] to-teal-50 p-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header */}
      <motion.div className="text-center mb-12" variants={fadeInUpVariants}>
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          variants={fadeInUpVariants}
        >
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-green-400 rounded"></div>
            <div className="w-6 h-1 bg-green-300 rounded"></div>
            <div className="w-4 h-1 bg-green-200 rounded"></div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900">4 steps</h1>
        </motion.div>
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          variants={fadeInUpVariants}
        >
          to start mentoring
        </motion.h2>
      </motion.div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1: Apply to Join */}
        <motion.div
          custom={0}
          variants={cardVariants}
          className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden"
        >
          <motion.div
            className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6"
            variants={fadeInUpVariants}
          >
            1
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Apply to Join</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            Complete a quick form to tell us about your background, focus areas, and mentoring goals.
          </p>
          <motion.div
            className="bg-purple-200 rounded-2xl p-6 relative"
            variants={mockupVariants}
          >
            <div className="bg-white rounded-xl p-6">
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  CV Upload*
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drag & drop files or Browse</p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG & PDF formats</p>
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  LinkedIn Profile*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium">
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Step 2: Get Approved & Matched */}
        <motion.div
          custom={1}
          variants={cardVariants}
          className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden"
        >
          <motion.div
            className="bg-[#F6FFCC] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6"
            variants={fadeInUpVariants}
          >
            2
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Get Approved & Matched</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            We&apos;ll review your profile and notify you if there&apos;s a fit. You&apos;ll also get access to your mentor dashboard.
          </p>
          <motion.div
            className="bg-yellow-200 rounded-2xl p-6"
            variants={mockupVariants}
          >
            <div className="text-center">
              <div className="bg-orange-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-300 to-red-300 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white font-bold">!</div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Application Approved!</h4>
              <p className="text-sm text-gray-600">You can now proceed to your dashboard.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Step 3: Set Your Calendar */}
        <motion.div
          custom={2}
          variants={cardVariants}
          className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden"
        >
          <motion.div
            className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6"
            variants={fadeInUpVariants}
          >
            3
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Set Your Calendar</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            Sync your availability through Calendar so mentees can book 1-on-1 time when it works best for you.
          </p>
          <motion.div
            className="bg-purple-200 rounded-2xl p-6"
            variants={mockupVariants}
          >
            <div className="bg-white rounded-xl p-4">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-800">May 2025</h4>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div
                    key={day}
                    className="text-xs font-medium text-center py-1 bg-yellow-300 text-gray-700 rounded"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 4;
                  const isCurrentMonth = day > 0 && day <= 31;
                  const isSelected = day === 31;
                  return (
                    <div
                      key={i}
                      className={`
                        h-8 flex items-center justify-center text-xs rounded
                        ${
                          isCurrentMonth
                            ? isSelected
                              ? "bg-blue-600 text-white font-bold"
                              : "bg-cyan-100 text-gray-700 hover:bg-cyan-200"
                            : "text-gray-300"
                        }
                      `}
                    >
                      {isCurrentMonth ? day : ""}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs text-gray-600">3 participants</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Step 4: Start Mentoring */}
        <motion.div
          custom={3}
          variants={cardVariants}
          className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden"
        >
          <motion.div
            className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6"
            variants={fadeInUpVariants}
          >
            4
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Start Mentoring</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            You&apos;ll get booking alerts and reminders. Show up, share honestly, and guide someone forward.
          </p>
          <motion.div
            className="bg-green-200 rounded-2xl p-6"
            variants={mockupVariants}
          >
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-bold text-gray-800 mb-4">Meeting Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm font-medium">Interview Prep</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div className="text-sm">
                    <span className="font-medium">Tue 19 March</span>
                    <span className="text-gray-500 ml-4">Tue 19 March</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 text-gray-500">@</div>
                  <span className="text-sm">emily.mason@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 text-gray-500">#</div>
                  <span className="text-sm text-blue-600">https://meet.google.com/xyz-prime-de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Participants(s)</span>
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">JD</span>
                    </div>
                    <span className="text-sm">James Davis</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-800 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">SJ</span>
                </div>
                <div className="flex-1">
                  <div className="text-yellow-400 text-xs font-medium">
                    BeGreat Mentoring Reminder
                  </div>
                  <div className="text-white text-sm">
                    Your mentorship session with James Smith is in 30 mins
                  </div>
                </div>
                <span className="text-xs text-gray-400">New</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MentoringSteps;