import {Outfit, Ovo, Ovo } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Provider from "./ui/themeProvider";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Sifat",
  description: "Hello I am Sifat. I am working at cyber secuirity field since few years. If you have any care of your website then you should find out vulnerabilities of this site for this I can help you. You can contact me by simply pressing contact now button.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 bg-white px-5 lg:px-8 xl:px-[8%] py-4b dark:bg-darkTheme dark:text-white text-black overflow-x-hidden`}
      >
        <Provider>
        <Navber/>
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
