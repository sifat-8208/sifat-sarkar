'use client'
import { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from 'next-themes';



export default function Navber() {
    const [isScroll, setIsScroll] = useState(false);
    const { theme, setTheme } = useTheme(false)
    const currentTheme = theme === "system"? systemTheme : theme
    const sideMenuRef = useRef()
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        if(currentTheme==='dark'){
            document.cookie = `theme=${currentTheme}; path=/;`
        }else{
            document.cookie = `theme=${currentTheme}; path=/;`
        }
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

    return (
      <div suppressHydrationWarning className="">
        <div className="fixed dark:hidden top-0 right-0 w-11/12 -z-10 mb-5">
            <Image src={assets.header_bg_color} alt="" className="w-full"/>
        </div>

        <div className={`w-full select-none fixed -mx-5 lg:-mx-8 xl:-mx-[8%] -my-4 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 ${isScroll ?  "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50 dark:backdrop-blur-lg" : ""}`}>

            {/* Desktop menu  */}
            <div className="flex w-full items-center justify-between py-3">
                <a href="#top">
                    <Image className="w-28 cursor-pointer mr-14"
                     alt="Sifat logo" src={currentTheme === 'dark'? assets.logo_dark: assets.logo}/>
                </a>

                <div>
                    <ul className={`hidden md:flex items-center gap-2 rounded-full px-8 py-3 border-gray-500/20 border ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:bg-darkTheme"}`}>
                        <li><Link className="font-Ovo px-3 lg:px-4" href={'/'}>Home</Link></li>
                        {/* <li><Link className="font-Ovo px-3 lg:px-4" href={'/blogs'}>Blogs</Link></li> */}
                        <li><Link className="font-Ovo px-3 lg:px-4" href={'/services'}>Services</Link></li>
                        <li><Link className="font-Ovo px-3 lg:px-4" href={'/works'}>Works</Link></li>
                        <li><Link className="font-Ovo px-3 lg:px-4" href={'/contact'}>Contact</Link></li>
                        <li><Link className="font-Ovo px-3 lg:px-4" href={'/about'}>About</Link></li>
                    </ul>
                </div>

                <div className="flex gap-5 items-center ml-3 justify-between" >
                    {currentTheme === 'light'? (
                        <Image
                        alt="o"
                        src={assets.moon_icon}
                        className="w-6"
                        onClick={() => (
                            setTheme('dark')
                        )}
                        />
                    ) : (
                        <Image
                        alt="s"
                        src={assets.sun_icon}
                        className="w-6"
                        onClick={() => (
                            
                            setTheme('light'))}
                        />
                    )}
                    <a href="mailto:sifatsrkar3934@outlook.com">
                    <div className="hidden lg:flex gap-2 mx-4 border border-gray-700/20 font-Ovo px-4 py-2 rounded-full shadow-md items-center justify-end hover:shadow-xl hover:scale-[.9] duration-500 dark:bg-darkTheme dark:border-white/20">
                        Contact now
                        <Image className="w-4" alt="/" src={currentTheme==='dark'? assets.arrow_icon_dark : assets.arrow_icon}/>
                    </div>
                    </a>

                    <Image alt="menu" src={currentTheme === 'dark'? assets.menu_white: assets.menu_black} className="md:hidden w-7" onClick={openMenu}/>
                </div>
            </div>

            {/* Mobile menu */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500 z-50 px-10 dark:bg-darkHover">

                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={currentTheme==='dark'? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer"/>
                </div>

                <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/'}>Home</Link></li>
                {/* <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/blogs'}>Blogs</Link></li> */}
                <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/services'}>Services</Link></li>
                <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/works'}>Works</Link></li>
                <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/contact'}>Contact</Link></li>
                <li><Link className="font-Ovo pr-20" onClick={closeMenu} href={'/about'}>About</Link></li>
                </ul>
        </div>
      </div>
    );
}