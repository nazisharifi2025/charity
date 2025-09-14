import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Servecse from "./pages/Serveces"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Servecse" element={<Servecse/>}/>
      </Routes>
    </BrowserRouter>
    // <div>
    //   {/* <Home/> */}
    //    {/* <AboutUs/> */}
    //   {/* <Blog/> */}
    //   <Servecse/>
    // </div>
  )
}

export default App
