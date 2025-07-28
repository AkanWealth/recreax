import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { RiSparklingLine } from "react-icons/ri";   


const bricolage = Bricolage_Grotesque({
    weight: ["700"], // Bold
    subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-plus-jakarta-sans",
});
function CtaSection() {
    return (
        
    <div className="bg-[#DBF1F9] text-white py-10 px-4 ">
        <section className="bg-[#12233D] px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8">



            <Image
                src="/blog2.png"
                alt="Background Circle"
                width={360}
                height={160}
                // style={{ objectFit: "cover" }}
                className="absolute top-180 sm-top-180 lg:top-40 right-0  rounded-full"
                unoptimized={true}
            />

            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 text-white">
                    <h2 className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}>
                        You&apos;ve Learned Enough.
                    </h2>
                    <div className="flex items-center gap-4 mb-8">
                        {/* <div className="w-12 h-0.5 bg-[#00D4FF]"></div> */}
                        <Image
                            src="/Arrow.png"
                            height={31}
                            width={70}
                            unoptimized={true}
                            alt="Arrow Logo"
                            className=""
                        />
                        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}>
                            It&apos;s Time to Work
                        </h3>
                    </div>
                    <p className={`"text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg" ${plusJakarta.className}`}>
                        Join thousands of talents building skills, confidence, and real-world
                        experience with guidance every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2">
                            <RiSparklingLine className="w-5 h-5" />
                            Try REX Free
                        </Button>
                        <Button
                            variant="outline"
                            className="border-white text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12233D] transition-colors flex items-center gap-2"
                        >
                            Explore Programs
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Right Image - Responsive */}
                <div className="flex-1 relative w-full lg:w-auto">
                    <div className="relative w-full max-w-sm mx-auto lg:max-w-md lg:mx-0">
                        <div className="relative w-full top-40 left-40 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/5]">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <Image
                                   src="/laptopgirl.png"
                                    alt="Woman with laptop"
                                    height={500}
                                    width={500}
                                    className="object-cover object-center"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default CtaSection;