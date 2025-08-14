
"use client";
import React, { useState, useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { motion, Variants, useInView } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

function ApplicationForm() {
  const [formData, setFormData] = useState({
    role: "",
    hours: "",
    experience: "",
    interest: "",
    resume: "",
    linkedin: "",
    portfolio: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-20 px-2 sm:px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form Info */}
          <motion.div className={plusJakarta.variable} variants={containerVariants}>
            <motion.h2
              className={`text-5xl font-bold text-[#1a2b47] mb-6 ${bricolage.className}`}
              variants={fadeInUpVariants}
            >
              Reserve Your Spot
            </motion.h2>
            <motion.p
              className="text-lg font-semibold text-[#003267] mb-4"
              variants={fadeInUpVariants}
            >
              Complete the short form to apply for the next cohort.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600"
              variants={fadeInUpVariants}
            >
              No experience required. Just foundational tech skills and a willingness to grow.
            </motion.p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className={`bg-[#F8FAFC] rounded-2xl p-8 shadow-lg ${plusJakarta.variable}`}
            variants={containerVariants}
          >
            <div className="bg-[#F8FAFC] space-y-6">
              {/* Role Selection */}
              <motion.div custom={0} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What role are you applying for? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                >
                  <option value="">Select your preferred role</option>
                  <option value="product-design">Product Design</option>
                  <option value="fullDev">Development (Frontend / Backend)</option>
                  <option value="pm">Product Management (PM)</option>
                  <option value="project-management">Project Management</option>
                  <option value="product-manager">Product Manager</option>
                  <option value="qa">Quality Assurance (QA)</option>
                </select>
              </motion.div>

              {/* Hours Commitment */}
              <motion.div custom={1} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many hours/week can you commit? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10, 20, or 30 hours/week"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.hours}
                  onChange={(e) => handleInputChange("hours", e.target.value)}
                />
              </motion.div>

              {/* Experience Level */}
              <motion.div custom={2} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What&apos;s your level of experience? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="self">Self-taught</option>
                  <option value="bootcamp">Bootcamp Graduate</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </motion.div>

              {/* Interest */}
              <motion.div custom={3} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in this internship? <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell us in 1-2 sentences what excites you about this role."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.interest}
                  onChange={(e) => handleInputChange("interest", e.target.value)}
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {formData.interest.length}/300
                </div>
              </motion.div>

              {/* Resume Link */}
              <motion.div custom={4} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link to your CV or resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="Paste a Google Drive or PDF link to your resume"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.resume}
                  onChange={(e) => handleInputChange("resume", e.target.value)}
                />
              </motion.div>

              {/* LinkedIn */}
              <motion.div custom={5} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn profile (optional)
                </label>
                <input
                  type="url"
                  placeholder="Paste your LinkedIn profile link"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                />
              </motion.div>

              {/* Portfolio */}
              <motion.div custom={6} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio or project link (if available)
                </label>
                <input
                  type="url"
                  placeholder="Link to your portfolio or a recent project"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-[#12233D] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-500 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Submit Application <FaLongArrowAltRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ApplicationForm;
