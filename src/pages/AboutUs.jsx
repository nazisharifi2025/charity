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

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-kalam min-h-screen w-full text-amber-100 relative bg-greenC">
      <Navbar />
      <SliderAbout />

      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-right"><RoyKard /></div>
      <div data-aos="fade-left"><WeyChos /></div>
      <div data-aos="fade-up"><Futher /></div>
      <div data-aos="fade-up"><OurTem /></div>
      <div data-aos="fade-up"><Quations /></div>

      <Footer />
    </div>
  );
}
