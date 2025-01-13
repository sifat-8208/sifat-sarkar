import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Works() {
    return (
        <div id="works"
        className="w-full py-10 scroll-mt-20"
        >
            <h2
            className="text-center mb-2 text-lg font-Ovo"
            >My Portfolio.</h2>
            <h4
            className="text-center text-5xl font-Ovo"
            >My Works</h4>
            <h2
            className="text-center text-black/80 font-Ovo mt-3 leading-8"
            >
                Here you can see.
            </h2>

            <div
            className="grid grid-cols-auto my-10 gap-5">
                {workData.map(({title, bgImage,description, link}, index)=>(
                    <div key={index}
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{backgroundImage: `url(${bgImage})`}}
                    >
                    
                    <a href={link}>

                    <div
                    className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">

                    <div>
                        <h2 className="font-semibold dark:text-black">
                            {title}
                        </h2>
                        <p className="text-sm text-gray-700">
                            {description}
                        </p>
                    </div>
                    <div className="border h-9 rounded-full border-black w-9 aspect-square flex items-center justify-center shadow[2px_2px_0_#000] group-hover:bg-lime-300">
                        <Image alt="send icon" src={assets.arrow_icon} className="w-3"/>
                    </div>
                    </div>
                    </a>
                    </div>
                ))}
            </div>
            <a href="/works"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-darkHover/80 dark:hover:bg-darkHover"
            >See details 
                <Image alt=">" src={assets.right_arrow_bold_dark} className="w-6"/>
            </a>
        </div>
    );
}