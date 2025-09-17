import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../About";
import Curses from "../Curses";
import Footer from "../Footer";
import Futher from "../Futher";
import Gallery from "../Gallery";
import LatestPost from "../LatestPost";
import Navbar from "../Navbar";
import Serveces from "../Serveces";
import Slider from "../Slider";
import WeyChos from "../WeyChos";
import With from "../With";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [dark, setDark] = useState(true); // حالت پیش‌فرض: دارک مود

  const themeBackground = dark ? "bg-greenC" : "bg-amber-50";
  const themeText = dark ? "text-amber-100" : "text-greenC";

  return (
    <div className={`overflow-x-hidden font-kalam relative h-fit ${themeBackground} ${themeText}`}>
      {/* دکمه تغییر حالت روشن/تیره */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed z-50 top-24 right-0 bg-amber-500 text-white py-4 px-5 rounded-lg rounded-r-none shadow-md hover:bg-amber-600 transition-all"
      >
        {dark ? <Moon/> : <Sun/>}
      </button>

      {/* ارسال حالت دارک به Navbar و Footer */}
      <Navbar dark={dark} />
      <Slider />

      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-right"><Serveces /></div>
      <div data-aos="fade-left"><With /></div>
      <div data-aos="fade-up"><Curses /></div>
      <div data-aos="fade-up"><WeyChos /></div>
      <div data-aos="fade-up"><Futher /></div>
      <div data-aos="fade-up"><Gallery /></div>
      <div data-aos="fade-up"><LatestPost /></div>

      <Footer dark={dark} />
    </div>
  );
}
