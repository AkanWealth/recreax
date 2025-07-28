"use client";
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaInstagram,FaLinkedin, FaTiktok} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Copy } from 'lucide-react';
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

type ContactFormProps = {
  onSubmitSuccess?: (formData: {
    fullName: string;
    email: string;
    inquiryType: string;
    message: string;
  }) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form
    if (!formData.fullName || !formData.email || !formData.inquiryType || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    
    // Call parent callback if provided
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        inquiryType: '',
        message: ''
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Send Us a Message</h1>
            <p className="text-gray-600 text-lg">
              Fill out the form and we&apos;ll respond within 24-48 hours. Select the reason for your message<br />
              so we can get it to the right team faster.
            </p>
          </div>

          {/* Success Message */}
          <div className="bg-[#F1FAFC] rounded-2xl p-12 text-center shadow-sm">
            
            <h2 className={`text-4xl font-bold text-slate-900 mb-6 leading-tight ${bricolage.className}`}>
              Thank you! Your submission<br />
              has been received!
            </h2>
            <p className={`text-gray-600 text-lg ${plusJakarta.className}`}>
              We&apos;ll get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${bricolage.className}`}>Send Us a Message</h1>
          <p className={`text-gray-600 text-lg max-w-3xl mx-auto ${plusJakarta.className}`}>
            Fill out the form and we&apos;ll respond within 24-48 hours. Select the reason for your message 
            so we can get it to the right team faster.
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto ${plusJakarta.variable}`}>
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your first and last name"
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-900 mb-3">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none text-gray-900 appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="">Select request</option>
                    <option value="general">General Enquiry</option>
                    <option value="Program">Program Support</option>
                    <option value="application">Application Status</option>
                    <option value="Metorship">Metorship Interest</option>
                    <option value="Media/PR">Media/PR Partnership Request</option>
                    <option value="Technical">Technical Support</option>

                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-3">
                    Tell us what you need help with <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    rows={6}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none resize-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gray-400 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-500 transition-colors flex items-center justify-center gap-2"
                >
                  Submit Message
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Panel */}
          <div className="lg:col-span-1">
            <div className="bg-[#D2F0F4] border-b-2 border-[#12233D] rounded-2xl p-8 h-fit">
              <h3 className="text-xl text-[[#12233D]] mb-6">Connect with us online</h3>
              
              {/* Social Icons */}
              <div className="flex gap-2 mb-8">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <FaInstagram className="w-5 h-5 text-[#12233D]" />
                </div>
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <FaXTwitter className="w-5 h-5 text-[#12233D]" />
                </div>
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5 text-[#12233D]" />
                </div>
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <FaTiktok className="w-5 h-5 text-[#12233D]" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm  text-slate-900 mb-3">Email Us</h4>
                  <div className="space-y-2">
                    <p className="flex text-base text-[#060C15] font-semibold">info@recreax.com <span><Copy className='w-3 h-3 text-[#003267]'/></span></p>
                    <p className="flex text-base text-[#060C15] font-semibold">support@recreax.com <span><Copy className='w-3 h-3 text-[#003267]'/></span></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-slate-900 mb-3">Location</h4>
                  <p className="text-sm text-[#060C15] font-semibold">United Kingdom / Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;