'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Check, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation'

interface FormData {
    fullName: string;
    email: string;
    organization: string;
    partnershipType: string;
    message: string;
}

const PartnershipForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        organization: '',
        partnershipType: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xblkqeol', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    organization: formData.organization,
                    partnershipType: formData.partnershipType,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setShowSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    organization: '',
                    partnershipType: '',
                    message: '',
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const goBack = () => {
        router.back() ;
        console.log('Going back');
    };

    const goToHomePage = () => {
    router.push('/') ;
        console.log('Going to home page');
    };

    const closeSuccessModal = () => {
        setShowSuccess(false);
    };

    return (
        <>
            <div className="min-h-screen bg-white">
                {/* Back Button */}
                <div className="absolute top-6 left-6 z-10">
                    <button
                        onClick={goBack}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shadow-sm"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>
                </div>

                <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-[#12233D]">
                                Let&apos;s Build the Future of<br />
                                Tech Talent Together
                            </h1>
                            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
                                Whether you&apos;re hiring, mentoring, sponsoring, or enabling execution, ReCreaX Talent gives you a clear way to contribute and benefit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                        >
                            <div className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="block text-gray-800 font-medium mb-2">
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
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
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
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                </div>

                                {/* Organization */}
                                <div>
                                    <label htmlFor="organization" className="block text-gray-800 font-medium mb-2">
                                        Organization Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleInputChange}
                                        placeholder="Enter company name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                </div>

                                {/* Partnership Type */}
                                <div>
                                    <label htmlFor="partnershipType" className="block text-gray-800 font-medium mb-2">
                                        Partnership Type <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="partnershipType"
                                            name="partnershipType"
                                            value={formData.partnershipType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-gray-400">Select option</option>
                                            <option value="hiring" className="bg-white text-gray-800">Hiring Partner</option>
                                            <option value="mentoring" className="bg-white text-gray-800">Mentoring Partner</option>
                                            <option value="sponsoring" className="bg-white text-gray-800">Sponsoring Partner</option>
                                            <option value="execution" className="bg-white text-gray-800">Execution Partner</option>
                                            <option value="other" className="bg-white text-gray-800">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us why you want to partner with ReCreaX"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#12233D] hover:bg-gray-900 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Success Modal Overlay */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            onClick={closeSuccessModal}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Success Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-green-500 rounded-full p-4">
                                        <Check className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Success Message */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Thank you for reaching out!
                                </h2>

                                <p className="text-gray-600 mb-2">
                                    We&apos;ve received your interest in partnering with ReCreaX.
                                </p>

                                <p className="text-gray-600 mb-8">
                                    Our team will review your submission and get back to you within 48 hours. Let&apos;s build the future of tech talent together.
                                </p>

                                {/* Home Page Button */}
                                <motion.button
                                    onClick={goToHomePage}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                                >
                                    Home Page
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default PartnershipForm;