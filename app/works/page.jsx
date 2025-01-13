import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Works() {
    return (
        <div id="services"
        className="w-full mb-32 pt-32 relative scroll-mt-20 flex flex-col items-center">

            <div id="fronted_project" className="flex flex-col items-center gap-5">
            <h2 className="text-center text-2xl font-Ovo mb-5">Frontend project</h2>
            <Image alt="" src='/work-1.png'  width='400' height='400' className="rounded-3xl hover:scale-105 duration-500"/>

            <p className="text-center px-5 text-gray-700 dark:text-white/80">
            Frontend web development, often referred to as client-side development, focuses on creating the visual and interactive aspects of a website that users see and engage with. It involves designing and implementing the layout, structure, and features of a website, ensuring an intuitive and engaging user experience.
            </p>

            <div className="grid grid-cols-auto gap-4 border-t border-gray-700">
                <div className="border-r border- border-gray-700">
                    <h2 className="text-center text-xl font-Ovo mt-10">Key Elements of Frontend Development:</h2>

                    <ul className="list-decimal px-5">
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">HTML (HyperText Markup Language)</h2>
                            HTML is the backbone of any website. It provides the structure and content, such as headings, paragraphs, and images, allowing browsers to render a webpage.
                        </li>
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">CSS (Cascading Style Sheets)</h2>
                            CSS controls the visual styling of a website, including colors, fonts, layouts, and responsive design. It ensures that the website looks appealing on various devices and screen sizes.
                        </li>
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">JavaScript</h2>
                            JavaScript adds interactivity and functionality to a website. From dynamic forms and sliders to complex single-page applications, JavaScript enables real-time updates and user interactions.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-center text-xl font-Ovo mt-10">Why is Frontend Development Important?</h2>

                    <ul className="list-disc px-5">
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">User Experience (UX):</h2>
                            A well-crafted frontend ensures smooth navigation and an enjoyable experience for users.
                        </li>
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">First Impressions:</h2>
                            The frontend is the first thing visitors notice about a website, making it crucial for building trust and engagement.
                        </li>
                        <li className="text-gray-700 dark:text-white/80">
                            <h2 className="text-black dark:text-white font-semibold">Cross-Device Compatibility:</h2>
                            Responsive and adaptable designs ensure accessibility across desktops, tablets, and smartphones.
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div id="ctf" className="flex flex-col items-center gap-5">
                <h2 className="text-center text-2xl font-Ovo mb-5 mt-20">CTF</h2>
                <Image alt="" src='/work-2.png'  width='400' height='400' className="rounded-3xl hover:scale-105 duration-500"/>

                <p className="text-center px-5 text-gray-700 dark:text-white/80">
                CTF (Capture The Flag) is a type of cybersecurity competition where participants solve challenges to find "flags," which are hidden pieces of information. These competitions are widely used to test and improve skills in various areas of cybersecurity, including ethical hacking, cryptography, reverse engineering, and network security.
            </p>
            <h3 className="text-center">Top CTF Platform</h3>
            <div  className="border border-gray-700 px-5">
                <ul className="flex gap-4">
                    <li>TryHackMe</li>
                    <li>HackTheBox</li>
                    <li>picoCTF</li>
                    <li>DEF CON CTF</li>
                </ul>
            </div>
            </div>
            <div id="bug_hunt" className="flex flex-col items-center gap-5">
                <h2 className="text-center text-2xl font-Ovo mb-5 mt-20">Bug Hunting</h2>
                <Image alt="" src='/work-3.png'  width='400' height='400' className="rounded-3xl hover:scale-105 duration-500"/>

                <p className="text-center px-5 text-gray-700 dark:text-white/80">
                Bug hunting, also known as bug bounty hunting, is the process of identifying and reporting security vulnerabilities in software, websites, or systems. Organizations often reward ethical hackers or security researchers for uncovering these vulnerabilities, helping them improve security and prevent potential breaches.
            </p>
            <a href="/services#bug_hunting"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-darkHover/80 dark:hover:bg-darkHover"
            >See more 
                <Image alt=">" src={assets.right_arrow_bold_dark} className="w-6"/>
            </a>
            </div>
            <div id="cybersecurityconsulting" className="flex flex-col items-center gap-5">
                <h2 className="text-center text-2xl font-Ovo mb-5 mt-20">Cybersecurity Consulting</h2>
                <Image alt="" src='/work-4.png'  width='400' height='400' className="rounded-3xl hover:scale-105 duration-500"/>

                <p className="text-center px-5 text-gray-700 dark:text-white/80">
                Cybersecurity consulting involves providing expert advice and strategies to help organizations identify, mitigate, and manage risks to their digital assets. Cybersecurity consultants work with businesses to strengthen their defenses, ensure compliance with regulations, and safeguard sensitive information from cyber threats.
            </p>
            <a href="/services#applicaiton"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-darkHover/80 dark:hover:bg-darkHover"
            >See more 
                <Image alt=">" src={assets.right_arrow_bold_dark} className="w-6"/>
            </a>
            </div>
        </div>
    );
}