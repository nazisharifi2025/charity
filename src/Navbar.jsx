import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const menuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("close");
    const navbar = document.getElementById("navbar");

    const openMenu = () => {
      if (window.innerWidth < 1024) {
        navbar.style.left = "0";
      }
    };

    const closeMenu = () => {
      if (window.innerWidth < 1024) {
        navbar.style.left = "-100%";
      }
    };

    menuBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);

    return () => {
      menuBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="w-full">
      {/* موبایل ناوبار */}
      <div
        id="nav"
        className="h-16 lg:hidden bg-greenC z-50 font-bold absolute w-full flex pb-3 shadow-md justify-between text-amber-100 text-[19px] items-end px-7"
      >
        <div
          id="nave"
          className="bg-greenC shadow-md shadow-amber-100 flex py-24 justify-center rounded-b-2xl h-32 w-[120px]"
        >
          <div className="pt-12 px-2 rounded-b-2xl ">
            <img src="../poblic/img/logo.svg" alt="logo" />
          </div>
        </div>
        <span
          id="menu"
          className="material-symbols-outlined p-2 rounded-2xl bg-amber-600 cursor-pointer"
        >
          menu
        </span>
      </div>

      {/* ناوبار اصلی */}
      <div
        id="navbar"
        className="lg:h-20 h-screen bg-greenC z-50 fixed w-full -left-[100%] lg:left-0 font-bold flex lg:flex-row flex-col justify-evenly text-amber-100 text-[19px] lg:items-center items-end px-7 transition-all duration-300"
      >
        {/* دکمه بستن فقط در موبایل */}
        <button className="w-full border-b md:block lg:hidden p-1 items-start flex md:justify-end">
          <span
            className="material-symbols-outlined p-2 rounded-2xl bg-amber-600 cursor-pointer"
            id="close"
          >
            close
          </span>
        </button>

        {/* لینک‌ها */}
        <li className="list-none">
          <Link to="/" className="hover:border-b-2  hover:border-amber-100">
            خانه
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/AboutUs"
            className="hover:border-b-2 hover:border-amber-100"
          >
            درباره ما
          </Link>
        </li>

        {/* لوگو وسط منو در دسکتاپ */}
        <div
          id="nave"
          className="bg-greenC hidden lg:block shadow-md shadow-amber-100 mt-5 flex justify-center items-center rounded-b-2xl h-32 w-[150px]"
        >
          <div className="py-8 px-2 rounded-b-2xl ">
            <img src="../poblic/img/logo.svg" alt="لوگو" />
          </div>
        </div>

        <li className="list-none">
          <Link
            to="/Servecse"
            className="hover:border-b-2 hover:border-amber-100"
          >
            خدمات
          </Link>
        </li>
        <li className="list-none">
          <Link to="/Blog" className="hover:border-b-2 hover:border-amber-100">
            وبلاگ
          </Link>
        </li>
      </div>
    </div>
  );
}
