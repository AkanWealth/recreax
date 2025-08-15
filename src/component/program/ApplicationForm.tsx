"use client";
import React, { useState, useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { motion, Variants, useInView } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plus-jakarta-sans",
});

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.role || !formData.hours || !formData.experience || !formData.interest || !formData.resume) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xblkqeol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError("");
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            role: "",
            hours: "",
            experience: "",
            interest: "",
            resume: "",
            linkedin: "",
            portfolio: "",
          });
        }, 5000);
      } else {
        setError("Failed to submit the form. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while submitting the form. Please try again.");
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (isSubmitted) {
    return (
      <motion.section
        ref={sectionRef}
        className="bg-white py-20 px-2 sm:px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-2xl p-12 text-center shadow-lg">
            <motion.h2
              className={`text-4xl font-bold text-[#1a2b47] mb-6 ${bricolage.className}`}
              variants={fadeInUpVariants}
            >
              Thank you! Your application<br />has been received!
            </motion.h2>
            <motion.p
              className={`text-lg text-gray-600 ${plusJakarta.className}`}
              variants={fadeInUpVariants}
            >
              We&apos;ll get back to you shortly.
            </motion.p>
          </div>
        </div>
      </motion.section>
    );
  }

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
              className={`text-5xl font-bold text-[#1a2b47] mb-6`}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  variants={fadeInUpVariants}
                >
                  {error}
                </motion.div>
              )}
              {/* Role Selection */}
              <motion.div custom={0} variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What role are you applying for? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  required
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
                  required
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
                  required
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
                  maxLength={300}
                  required
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
                  required
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
                  Portfolio or project link (optional)
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
                type="submit"
                className="w-full bg-[#12233D] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-500 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Submit Application <FaLongArrowAltRight />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ApplicationForm;