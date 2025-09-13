import Footer from "../Footer";
import LatestPostBlog from "../LatestPostBlog";
import Navbar from "../Navbar";
import SliderAbout from "../SliderAbout";
export default function Blog(){
    return(
        <div className="font-kalam h-screen w-full text-amber-100 relative overflow-y-scroll bg-greenC">
            <Navbar/>
            <SliderAbout/>
            <LatestPostBlog/>
            <Footer/>
        </div>
    )
}