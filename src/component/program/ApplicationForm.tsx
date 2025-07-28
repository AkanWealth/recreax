"use client";
import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
const bricolage = Bricolage_Grotesque({
  weight: ['700'], // Bold
  subsets: ['latin'],
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta-sans',
});

  
function ApplicationForm(){
    const [formData, setFormData] = useState({
    role: '',
    hours: '',
    experience: '',
    interest: '',
    resume: '',
    linkedin: '',
    portfolio: ''
  });
    const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };
return(
    <section className="bg-gray-50 py-20 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form Info */}
          <div className={` ${plusJakarta.variable}`}>
            <h2 className={`text-5xl font-bold text-[#1a2b47] mb-6 ${bricolage.className}`}>Reserve Your Spot</h2>
            <p className="text-lg font-semibold text-[#003267] mb-4">
              Complete the short form to apply for the next cohort.
            </p>
            <p className="text-lg text-gray-600">
              No experience required. Just foundational tech skills and a willingness to grow.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className={`bg-[#F8FAFC] rounded-2xl p-8 shadow-lg ${plusJakarta.variable}`}>
            <div className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What role are you applying for? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                >
                  <option value="">Select your preferred role</option>
                  <option value="product-design">Product Design</option>
                  <option value="fullDev">Development (Frontend / Backend)</option>
                  <option value="pm">Product Management (PM)</option>
                  <option value="pm">Project Management</option>
                  <option value="pm">Product Manager</option>
                  <option value="qa">Quality Assurance (QA)</option>
                </select>
              </div>

              {/* Hours Commitment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many hours/week can you commit? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10, 20, or 30 hours/week"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.hours}
                  onChange={(e) => handleInputChange('hours', e.target.value)}
                />
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What&apos;s your level of experience? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="beginner">Beginner </option>
                  <option value="intermediate">Intermediate </option>
                  <option value="self">Self-taught </option>
                  <option value="bootcamp">Bootcamp Graduate </option>
                  <option value="other">Other (please specify) </option>
                </select>
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in this internship? <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell us in 1-2 sentences what excites you about this role."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.interest}
                  onChange={(e) => handleInputChange('interest', e.target.value)}
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {formData.interest.length}/300
                </div>
              </div>

              {/* Resume Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link to your CV or resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="Paste a Google Drive or PDF link to your resume"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.resume}
                  onChange={(e) => handleInputChange('resume', e.target.value)}
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn profile (optional)
                </label>
                <input
                  type="url"
                  placeholder="Paste your LinkedIn profile link"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                />
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio or project link (if available)
                </label>
                <input
                  type="url"
                  placeholder="Link to your portfolio or a recent project"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#12233D] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-500 transition-colors"
              >
                Submit Application <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ApplicationForm;