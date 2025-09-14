import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sun, Moon } from "lucide-react"; // یا آیکون‌های دلخواهت

import Footer from "../Footer";
import LatestPostBlog from "../LatestPostBlog";
import Navbar from "../Navbar";
import SliderAbout from "../SliderAbout";

export default function Blog({ dark, setDark }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // کلاس‌های داینامیک بر اساس دارک یا لایت
  const bgClass = dark ? "bg-greenC" : "bg-amber-100";
  const textClass = dark ? "text-amber-100" : "text-greenC";

  return (
    <div className={`font-kalam w-full relative ${bgClass} ${textClass}`}>
      {/* دکمه تغییر حالت دارک/لایت */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed z-50 top-24 right-0 bg-amber-500 text-white py-4 px-5 rounded-lg rounded-r-none shadow-md hover:bg-amber-600 transition-all"
      >
        {dark ? <Moon /> : <Sun />}
      </button>

      <Navbar dark={dark} setDark={setDark} />
      <div data-aos="fade-down">
        <SliderAbout dark={dark} />
      </div>
      <div data-aos="fade-up">
        <LatestPostBlog dark={dark} />
      </div>
      <Footer dark={dark} />
    </div>
  );
}
