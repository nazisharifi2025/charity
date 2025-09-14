import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer";
import Navbar from "../Navbar";
import ServecesS from "../ServecesS";
import SliderServes from "../SliderServes";

export default function Servecse() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-kalam  w-full text-amber-100 relative bg-greenC">
      <Navbar />
      <div data-aos="fade-down">
        <SliderServes />
      </div>
      <div data-aos="fade-up">
        <ServecesS />
      </div>
      <Footer />
    </div>
  );
}
