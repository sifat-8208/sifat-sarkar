import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";


export default function About() {
    return (
        <div id="about">
            <h2
            className="text-center mb-2 text-lg font-Ovo"
            >Introduction</h2>
            <h4
            className="text-center text-5xl font-Ovo"
            >About me</h4>

            <div
            className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
            >
                <div
                className="w-64 sm:w-80 rounded-3xl max-w-none"
                >
                <Image alt="Admin Image" src={assets.user_image} className="w-full rounded-3xl"/>
                </div>

                <div
                className="flex-1"
                >
                    <p
                    className="mb-10 max-w-2xl font-Ovo"
                    >
                    Hi, I'm Sifat, a passionate ethical hacker, security analyst, and bug hunter dedicated to making the digital world safer. My expertise lies in identifying vulnerabilities and strengthening security systems to protect sensitive data from potential threats. In addition to my cybersecurity skills, I have a solid background in web development, with proficiency in HTML, CSS, JavaScript, and Python. This dual expertise enables me to understand and secure applications from both a developer's and a hacker's perspective. I thrive on challenges, whether it's uncovering hidden vulnerabilities, building secure web applications, or staying ahead in the ever-evolving cybersecurity landscape. Let's work together to create secure and innovative solutions!
                    </p>

                    <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                    >
                        {infoList.map(({icon, title, description, link}, index)=>(
                            <Link href={link} key={index}
                            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white dark:border-white/80 dark:bg-transparent dark:hover:bg-darkHover">
                                <Image alt="" src={icon}
                                className="w-8 mt-3"
                                />
                                <h2
                                className="my-4 font-semibold text-gray-700 dark:text-white"
                                >
                                    {title}
                                </h2>
                                <p
                                className="text-gray-600 dark:text-white/80 text-sm"
                                >
                                    {description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <h3
                    className="my-6 text-gray-700 dark:text-white/80 font-Ovo"
                    >Tools I used</h3>
                    <div
                    className="flex items-center gap-3 sm:gap-5"
                    >
                        {toolsData.map(({icon, link}, index)=>
                        <a href={link} target="_blank"
                        className="flex items-center justify-center w-12 sm:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500"
                        >
                            <Image alt="" src={icon}
                            className="w-5 sm:w-7"
                            />
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}