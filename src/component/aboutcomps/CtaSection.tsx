"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiSparkling2Line } from "react-icons/ri";
import { Button } from "../ui/button";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-plus-jakarta-sans",
});

const CtaSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div
            ref={sectionRef}
            className="bg-[#DBF1F9] text-white py-6 sm:py-10 px-2 sm:px-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <section className="bg-[#12233D] px-6 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 relative overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 lg:mx-8 mb-4 sm:mb-8">
                <div className="max-w-9xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-34">
                        {/* Content Section */}
                        <motion.div variants={itemVariants} className="flex-1 text-white text-center lg:text-left">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
                            >
                                You&apos;ve Learned Enough.
                            </motion.h2>

                            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
                                <Image
                                    src="/Arrow.png"
                                    alt="Arrow"
                                    width={70}
                                    height={31}
                                    unoptimized={true}
                                    className="w-auto h-auto"
                                />
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                                    It&apos;s Time to Work
                                </h3>
                            </motion.div>

                            <motion.p
                                variants={itemVariants}
                                className={`text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-lg leading-relaxed ${plusJakarta.className}`}
                            >
                                Join thousands of talents building skills, confidence, and real-world experience with guidance every step of the way.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <Button
                                    asChild
                                    className="bg-[#00D4FF] text-[#12233D] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    <Link href="https://talents.recreax.com/authorization" passHref>
                                        <RiSparkling2Line className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>Try REX Free</span>
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12233D] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    <Link href="/program" passHref>
                                        <span>Explore Programs</span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            variants={itemVariants}
                            className="flex-1 relative w-full lg:w-auto mt-4 lg:mt-0"
                            style={{ scale: imageScale }}
                        >
                            <div className="relative left-5 top-10 lg:left-30 lg:top-20 sm:left-10 sm:top-10 w-full max-w-sm mx-auto lg:max-w-md">
                                <div className="relative w-full h-full aspect-[5/5] lg:aspect-[4/4]">
                                    <div className="w-full h-full rounded-xl relative">
                                        <Image
                                            src="/about/AboutuCTA.svg"
                                            alt="Woman with laptop"
                                            fill
                                            className="w-auto h-auto object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default CtaSection;