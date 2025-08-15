'use client';

import React, { useState } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-plus-jakarta-sans',
});

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
                // Reset form
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
        router.back();
    };

    const goToHomePage = () => {
        router.push('/');
    };

    const closeSuccessModal = () => {
        setShowSuccess(false);
    };

    return (
    <>
            <div className={`min-h-screen bg-gradient-to-br from-[#1a2b47] via-[#2c4a6b] to-[#1a2b47] ${plusJakarta.className}`}>
                {/* Back Button */}
                <div className="absolute top-6 left-6 z-10">
                    <button
                        onClick={goBack}
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>
                </div>

                <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left Side - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
                            >
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                        Let&apos;s Build the Future of Tech Talent Together
                                    </h1>
                                    <p className="text-gray-300 text-lg">
                                        Whether you&apos;re hiring, mentoring, sponsoring, or enabling execution, ReCreaX Talent gives you a clear way to contribute and benefit.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your first and last name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B6EB6A] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email address"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B6EB6A] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Organization */}
                                    <div>
                                        <label htmlFor="organization" className="block text-white font-semibold mb-2">
                                            Organization Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            placeholder="Enter company name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B6EB6A] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Partnership Type */}
                                    <div>
                                        <label htmlFor="partnershipType" className="block text-white font-semibold mb-2">
                                            Partnership Type <span className="text-red-400">*</span>
                                        </label>
                                        <select
                                            id="partnershipType"
                                            name="partnershipType"
                                            value={formData.partnershipType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#B6EB6A] focus:border-transparent transition-all"
                                        >
                                            <option value="" disabled className="text-gray-400">Select option</option>
                                            <option value="hiring" className="bg-[#1a2b47] text-white">Hiring Partner</option>
                                            <option value="mentoring" className="bg-[#1a2b47] text-white">Mentoring Partner</option>
                                            <option value="sponsoring" className="bg-[#1a2b47] text-white">Sponsoring Partner</option>
                                            <option value="execution" className="bg-[#1a2b47] text-white">Execution Partner</option>
                                            <option value="other" className="bg-[#1a2b47] text-white">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-white font-semibold mb-2">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us why you want to partner with ReCreaX"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B6EB6A] focus:border-transparent transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-[#B6EB6A] hover:bg-[#a5d65a] text-[#1a2b47] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1a2b47]"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Request
                                                <Send size={18} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Right Side - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/pathner/Partnership Hero.svg"
                                        alt="Partnership collaboration"
                                        width={600}
                                        height={700}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b47]/20 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
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
                                    className="w-full bg-[#1a2b47] hover:bg-[#2c4a6b] text-white font-semibold py-4 px-6 rounded-xl transition-colors"
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