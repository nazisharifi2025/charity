import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Servecse from "./pages/Serveces";

// آیکون‌ها (با `lucide-react` یا آیکون دلخواه)
import { Moon, Sun } from "lucide-react";

function App() {
  const [dark, setDark] = useState(true);

  const bgClass = dark ? "bg-greenC" : "bg-amber-100";
  const textClass = dark ? "text-amber-100" : "text-greenC";

  return (
    <div className={`relative w-full min-h-screen ${bgClass} ${textClass}`}>
      {/* دکمه دارک/لایت مود */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed z-50 top-24 right-0 bg-amber-500 text-white py-4 px-5 rounded-lg rounded-r-none shadow-md hover:bg-amber-600 transition-all"
      >
        {dark ? <Moon /> : <Sun />}
      </button>

      {/* روت‌ها */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
          <Route path="/AboutUs" element={<AboutUs dark={dark} setDark={setDark} />} />
          <Route path="/Blog" element={<Blog dark={dark} setDark={setDark} />} />
          <Route path="/Servecse" element={<Servecse dark={dark} setDark={setDark} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
