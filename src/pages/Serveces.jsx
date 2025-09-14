import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer";
import Navbar from "../Navbar";
import ServecesS from "../ServecesS";
import SliderServes from "../SliderServes";

export default function Servecse({ dark, setDark }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const bgClass = dark ? "bg-greenC" : "bg-amber-100";
  const textClass = dark ? "text-amber-100" : "text-greenC";

  return (
    <div className={`font-kalam w-full relative ${bgClass} ${textClass}`}>
      <Navbar dark={dark} setDark={setDark} />
      <div data-aos="fade-down">
        <SliderServes dark={dark} />
      </div>
      <div data-aos="fade-up">
        <ServecesS dark={dark} />
      </div>
      <Footer dark={dark} />
    </div>
  );
}
