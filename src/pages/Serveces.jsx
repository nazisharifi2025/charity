import Footer from "../Footer";
import Navbar from "../Navbar";
import ServecesS from "../ServecesS";
import SliderAbout from "../SliderAbout";

export default function Servecse(){
    return(
        <div className="font-kalam h-screen w-full text-amber-100 relative overflow-y-scroll bg-greenC">
            <Navbar/>
            <SliderAbout/>
            <ServecesS/>
            <Footer/>
        </div>
    )
}