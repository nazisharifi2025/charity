import About from "../About";
import Footer from "../Footer";
import Futher from "../Futher";
import Navbar from "../Navbar";
import OurTem from "../OurTem";
import Quations from "../Quations";
import RoyKard from "../RoyKard";
import SliderAbout from "../SliderAbout";
import WeyChos from "../WeyChos";

export default function AboutUs(){
    return(
        <div className="font-kalam h-screen w-full text-amber-100 relative overflow-y-scroll bg-greenC">
            <Navbar/>
            <SliderAbout/>
            <About/>
            <RoyKard/>
            <WeyChos/>
            <Futher/>
            <OurTem/>
            <Quations/>
            <Footer/>
        </div>
    )
}