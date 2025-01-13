'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
    return (
        <div className="py-5" suppressHydrationWarning>
            <a href="#top">
            <Image alt="logo" src={assets.logo} className="w-28 mx-auto mt-5 pt-5"/>
            </a>
            <div className="flex gap-2 items-center justify-center border-t border-gray-700 mt-5 py-3">
                <a href="mailto:sifatsarkar3934@outlook.com"><Image alt="." src={assets.mail_icon} className="w-6"/></a>
                sifatsarkar3934@outlook.com
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
                <Link className="text-black/80 dark:text-white/80" href={'/about'}>Copyright©2025 by Sifat</Link>

                <div className="flex gap-5">
                    <a href="https://github.com/sifat-8208" target="_blank"><Image className="w-7 dark:bg-slate-400 dark:rounded-full" alt="" src={assets.github_icon}/></a>
                    <a href="https://www.facebook.com/sifat.3934" target="_blank"><Image className="w-7" alt="" src={assets.facebook_icon}/></a>
                    <a href="https://www.instagram.com/sifat.3934/" target="_blank"><Image className="w-7" alt="" src={assets.instagram_icon}/></a>
                    <a href="https://www.linkedin.com/in/sifat-sarkar-4044392b4/" target="_blank"><Image className="w-7" alt="" src={assets.linkedin_icon}/></a>
                </div>
            </div>
        </div>
    );
}