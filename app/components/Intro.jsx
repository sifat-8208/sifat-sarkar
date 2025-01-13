
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import { Suspense } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";


export default function Intro() {
    return (
        <div
        id="intro"
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <Suspense fallback={<LoadingSpinner/>}>
            <Image alt="logo" src={assets.profile_img} className="w-32 rounded-full"/>
            </Suspense>
            <div className="flex gap-2 items-center"><p className="font-Ovo">Hi! I'm Sifat </p>
            <Image alt="" src={assets.hand_icon} className="w-5"/>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo App">
            <Typewriter
            words={["cybersecurity specialist.", "penetration tester.", "vulnerability analyst.", "web developer."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            />
            </h1>

            <p className="text-center dark:text-white/80">I am specialist in bug hunting, social security, vulnerability analysis. I love my work because I found my happiness in my work. If I am able to help you I will help.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="/contact" className="bg-darkTheme text-white px-10 py-5 flex gap-2 rounded-full border border-gray-600 items-center shadow-black">
                    Contact me 
                    <Image className="w-5" alt="" src={assets.right_arrow_white}/>
                </a>

                <a href="/resume-sifat.pdf" download className="px-10 py-5 flex gap-2 rounded-full border border-gray-600 items-center shadow-black hover:bg-gray-500 dark:bg-white dark:text-black duration-500 hover:text-white dark:hover:bg-transparent dark:hover:text-white">
                    My resume
                    <Image alt="" src={assets.download_icon} className="w-5"/>
                </a>
            </div>

        </div>
    );
}
