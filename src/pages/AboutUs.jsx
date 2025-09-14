import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../About";
import Footer from "../Footer";
import Futher from "../Futher";
import Navbar from "../Navbar";
import OurTem from "../OurTem";
import Quations from "../Quations";
import RoyKard from "../RoyKard";
import SliderAbout from "../SliderAbout";
import WeyChos from "../WeyChos";

export default function AboutUs({ dark, setDark }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // تغییر رنگ بر اساس مود
  const bgClass = dark ? "bg-greenC" : "bg-amber-100";
  const textClass = dark ? "text-amber-100" : "text-greenC";

  return (
    <div className={`font-kalam min-h-screen w-full relative ${bgClass} ${textClass}`}>
      <Navbar dark={dark} setDark={setDark} />
      <SliderAbout />

      <div data-aos="fade-up"><About dark={dark} /></div>
      <div data-aos="fade-right"><RoyKard dark={dark} /></div>
      <div data-aos="fade-left"><WeyChos dark={dark} /></div>
      <div data-aos="fade-up"><Futher dark={dark} /></div>
      <div data-aos="fade-up"><OurTem dark={dark} /></div>
      <div data-aos="fade-up"><Quations dark={dark} /></div>

      <Footer dark={dark} />
    </div>
  );
}
