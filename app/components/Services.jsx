import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

export default function Services() {
    return (
        <div id="services"
        className="w-full py-10 scroll-mt-20"
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
                        <Image alt=">" src={assets.right_arrow} className="w-6"/>
                    </a>
                </div>
                )}
            </div>
        </div>
    );
}