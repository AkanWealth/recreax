import React from "react";
import Image from "next/image";
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
        <section className="bg-[#12233D] py-10 px-4 sm:px-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-8">



            <Image
                src="/blog2.png"
                alt="Background Circle"
                width={360}
                height={160}
                // style={{ objectFit: "cover" }}
                className="absolute top-40 right-0  rounded-full"
                unoptimized={true}
            />

            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 text-white">
                    <h2 className={`text-xl sm:text-lg lg:text-5xl font-bold mb-4 ${bricolage.className}`}>
                        Your Experience is
                    </h2>
                    <div className="flex items-center gap-4 mb-8">
                        {/* <div className="w-12 h-0.5 bg-[#00D4FF]"></div> */}
                        <Image
                            src="/information.png"
                            height={31}
                            width={70}
                            unoptimized={true}
                            alt="Arrow Logo"
                            className=""
                        />
                        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${bricolage.className}`}>
                            Worth Sharing
                        </h3>
                    </div>
                    <p className={`"text-lg sm:text-sm lg:text-lg text-white mb-8 max-w-lg" ${plusJakarta.className}`}>
                        If you’ve ever said “I wish someone told me this sooner,” this is your chance to be that someone.

                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#00D4FF] text-[#12233D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4EF] transition-colors flex items-center gap-2">
                            <RiSparklingLine className="w-5 h-5" />
                            Apply to Be a Mentor
                        </Button>
                        
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <div className="relative top-25 left-30 w-full max-w-md mx-auto">
                        <div className="w-full max-w-md mx-auto  p-8 relative">
                            <div className="w-full h-64  rounded-xl mb-4 flex items-center justify-center">
                                <Image
                                    src="/laptopgirl.png" // <-- Change to your actual image path
                                    alt="Woman with laptop"
                                    fill
                                    className="absolute rounded-xl object-cover w-auto h-auto"
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