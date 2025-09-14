import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer";
import LatestPostBlog from "../LatestPostBlog";
import Navbar from "../Navbar";
import SliderAbout from "../SliderAbout";

export default function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-kalam w-full text-amber-100 relative bg-greenC">
      <Navbar />
      <div data-aos="fade-down">
        <SliderAbout />
      </div>
      <div data-aos="fade-up">
        <LatestPostBlog />
      </div>
      <Footer />
    </div>
  );
}
