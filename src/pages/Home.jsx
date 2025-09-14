import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-kalam text-amber-100 relative  h-fit bg-greenC">
      <Navbar />
      <Slider />
      
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-right"><Serveces /></div>
      <div data-aos="fade-left"><With /></div>
      <div data-aos="fade-up"><Curses /></div>
      <div data-aos="fade-up"><WeyChos /></div>
      <div data-aos="fade-up"><Futher /></div>
      <div data-aos="fade-up"><Gallery /></div>
      <div data-aos="fade-up"><LatestPost /></div>

      <Footer />
    </div>
  );
}
