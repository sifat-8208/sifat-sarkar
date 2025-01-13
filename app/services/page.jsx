import { assets, serviceData, vaptData, webData, bugData, applicationData } from "@/assets/assets";
import Image from "next/image";

export default function Services() {
    return (
        <div id="services"
        className="w-full mb-32 pt-32 relative scroll-mt-20"
        >
            <h2
            className="text-center mb-2 text-lg font-Ovo"
            >What I offer</h2>
            <h4
            className="text-center text-5xl font-Ovo"
            >Services</h4>

            <div
            className="grid grid-cols-auto gap-4 my-10"
            >
                {serviceData.map(({icon, title, description, link}, index)=>
                <div key={index}
                className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white duration-500"
                >
                    <div>
                        <Image alt="" src={icon} className="w-10"/>
                        <h3
                        className="text-lg my-4 text-gray-700 dark:text-white"
                        >
                            {title}
                        </h3>
                        <p
                        className="text-sm text-gray-600 leading-5 dark:text-white/80"
                        >
                            {description}
                        </p>
                    </div>
                    <a href={link}
                    className="flex items-center gap-4 hover:border-b border-gray-400/50 duration-500"
                    ><p>See more</p>
                        <Image alt=">" src={assets.next_button} className="w-6"/>
                    </a>
                </div>
                )}
            </div>

            <div className="w-full pt-32 flex items-center flex-col" id="web_design">
                <Image alt="" src={assets.web_icon} className="w-20"/>
                <h2
                className="text-2xl my-5 font-Ovo"
                >All about Web Development</h2>
                <p>
                As a professional web developer, I specialize in crafting modern, responsive, and secure websites and web applications tailored to meet your unique needs. Whether you’re building a personal portfolio, an e-commerce platform, or a complex web application, I am here to bring your vision to life with cutting-edge technologies and a focus on user experience.
                </p>

                <h2
            className="text-center my-5 text-lg font-Ovo"
            >What I offer</h2>
                <div className="grid grid-cols-auto gap-4 my-10">
                    {webData.map(({title, description}, index)=>(
                        <div key={index} 
                        className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white duration-500">
                            <h4 className="text-lg border-b border-gray-500 py-3">
                            {title}
                        </h4>
                        <p className="text-black/80 dark:text-white/80">
                            {description}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full pt-32 flex items-center flex-col" id="vapt">
                <Image alt="" src={assets.vapt} className="w-20"/>
                <h2
                className="text-2xl my-5 font-Ovo"
                >All about VAPT</h2>
                <p>
                In today’s digital landscape, security is more critical than ever. As a certified VAPT tester, I help businesses safeguard their digital assets by identifying vulnerabilities and implementing effective security measures to prevent cyber threats.
                </p>

                <h2 className="mt-5">What is VAPT?</h2>
                <p className="text-black/80 dark:text-white/80">Vulnerability Assessment and Penetration Testing (VAPT) is a comprehensive approach to security testing that involves:</p>
                <ul className="px-10 list-disc">
                    <li>Vulnerability Assessment: Identifying weaknesses in your systems, networks, or applications.</li>
                    <li>Penetration Testing: Simulating real-world cyberattacks to test the effectiveness of your security measures.</li>
                </ul>

                <h2
            className="text-center my-5 text-lg font-Ovo"
            >What I offer</h2>
                <div className="grid grid-cols-auto gap-4 my-10">
                    {vaptData.map(({title, description}, index)=>(
                        <div key={index} 
                        className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white duration-500">
                            <h4 className="text-lg border-b border-gray-500 py-3">
                            {title}
                        </h4>
                        <p className="text-black/80 dark:text-white/80">
                            {description}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full pt-32 flex items-center flex-col" id="bug_hunting">
                <Image alt="" src={assets.bug_hunting} className="w-20"/>
                <h2
                className="text-2xl my-5 font-Ovo"
                >All about Bug Hunting</h2>
                <p>
                In the fast-paced digital world, software bugs and vulnerabilities can harm your business reputation and compromise user experience. As an experienced bug hunter, I specialize in identifying, reporting, and helping you fix critical flaws in your web applications, websites, and digital systems.
                </p>

                <h2 className="mt-5">What is Bug Hunting?</h2>
                <p className="text-black/80 dark:text-white/80 px-10">Bug hunting involves finding and addressing vulnerabilities, errors, or misconfigurations in your systems that could be exploited by attackers or lead to performance issues.</p>
                

                <h2
            className="text-center my-5 text-lg font-Ovo"
            >What I offer</h2>
                <div className="grid grid-cols-auto gap-4 my-10">
                    {bugData.map(({title, description}, index)=>(
                        <div key={index} 
                        className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white duration-500">
                            <h4 className="text-lg border-b border-gray-500 py-3">
                            {title}
                        </h4>
                        <p className="text-black/80 dark:text-white/80">
                            {description}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full pt-32 flex items-center flex-col" id="application">
                <Image alt="" src={assets.bug_hunting} className="w-20"/>
                <h2
                className="text-2xl my-5 font-Ovo"
                >Web Application Security</h2>
                <p>
                In an era where cyber threats are constantly evolving, securing your web applications is not just a necessity—it’s a responsibility. I provide comprehensive web application security services to protect your digital assets, safeguard user data, and ensure the trust of your clients.
                </p>

                <h2 className="mt-5">Why Web Application Security Matters?</h2>
                <p className="text-black/80 dark:text-white/80 px-10">Web applications are prime targets for cyberattacks like SQL injection, cross-site scripting (XSS), and session hijacking. Without proper security measures, these vulnerabilities can lead to data breaches, financial loss, and reputational damage.</p>
                

                <h2
            className="text-center my-5 text-lg font-Ovo"
            >What I offer</h2>
                <div className="grid grid-cols-auto gap-4 my-10">
                    {applicationData.map(({title, description}, index)=>(
                        <div key={index} 
                        className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white duration-500">
                            <h4 className="text-lg border-b border-gray-500 py-3">
                            {title}
                        </h4>
                        <p className="text-black/80 dark:text-white/80">
                            {description}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}