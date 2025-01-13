'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c79765ce-9eda-4d43-b05b-cc96ed1a054c");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Message Sent.");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id="contact"
        className='w-full py-10 scroll-mt-20 bg-[url("/footer-bg-color.png dark:bg-transparent")] bg-no-repeat bg-center bg-[lenght:90%_auto]'
        >
            <h2
            className="text-center mb-2 text-lg font-Ovo"
            >Contact with me</h2>
            <h4
            className="text-center text-5xl font-Ovo"
            >Get in Touch</h4>
            <h2
            className="text-center text-black/80 dark:text-white/80 font-Ovo mt-3 leading-8"
            >
                Fill up the form bellow to contact me.
            </h2>

            <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto"
            >
                <div
                className="grid grid-cols-auto gap-6 mt-10 mb-8"
                >
                    <input type="text" name="name" placeholder="Enter your name" required minLength={3}
                    className="flex-1 rounded-md p-3 bg-white outline-none border-[0.5px] border-gray-400 dark:bg-darkHover"
                    />
                    <input type="email" name="email" placeholder="Enter your email" required
                    className="flex-1 rounded-md p-3 bg-white outline-none border-[0.5px] border-gray-400 dark:bg-darkHover"
                    />
                </div>
                <textarea name="message" id="message" placeholder="Type your message" required
                className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover"
                ></textarea>

                <button type="submit"
                className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-darkHover/80 dark:hover:bg-darkHover"
                >Send <Image alt="" src={assets.send} className="w-6"/></button>
                <h1 className="mt-4 text-center">{result}</h1>
            </form>
        </div>
    );
}