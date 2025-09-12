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

export default function Home(){
    return(
        <div className="font-kalam h-screen  text-amber-100 relative  overflow-y-scroll bg-greenC">
            <Navbar/>
            <Slider/>
            <About/>
            <Serveces/>
            <With/>
            <Curses/>
            <WeyChos/>
            <Futher/>
            <Gallery/>
            <LatestPost/>
            <Footer/>
        </div>
    )
}