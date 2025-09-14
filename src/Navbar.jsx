import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="w-full">
                {/* <!-- navar start --> */}
     {/* <!-- nav md start --> */}
       <div
    id="nav"
      className="h-16 lg:hidden lite bg-greenC z-50  font-bold absolute w-full flex pb-3  shadow-md justify-between text-amber-100 list-none text-[19px]  items-end px-7"
    >
    <div
      id="nave"
        className="bg-greenC  shadow-md shadow-amber-100 flex py-24 justify-center rounded-b-2xl h-32 w-[120px]"
      >
        <div className="pt-12 px-2 rounded-b-2xl ">
          <img src="/img/logo.svg" alt="" />
        </div>
      </div>
        <span id="menu" className="material-symbols-outlined p-2 rounded-2xl bg-amber-600">
menu
</span>
    </div>
     {/* <!-- nav md end --> */}
    <div
    id="navbar"
      className="lg:h-20 h-screen lite bg-greenC z-50 overflow-y-hidden fixed -left-[100%] lg:left-0 font-bold  w-full flex lg:flex-row flex-col  shadow-md justify-evenly text-amber-100 list-none text-[19px] lg:items-center items-end px-7"
    >
    <button className="w-full border-b md:block lg:hidden p-1 items-start flex md:justify-end">
       <span className="material-symbols-outlined p-2 rounded-2xl bg-amber-600  float-right" id="close" >
close
</span>
</button>
      <li>
        <Link to="/" className="hover:border-b-2 hover:border-amber-100">خانه</Link>
      </li>
      <li>
        <Link to="/AboutUs" className="hover:border-b-2 hover:border-amber-100">درباره ما</Link>
      </li>
      <div
      id="nave"
        className="bg-greenC hidden lg:block shadow-md shadow-amber-100 mt-5 flex justify-center items-center rounded-b-2xl h-32 w-[150px]"
      >
        <div className="py-8 px-2 rounded-b-2xl ">
          <img src="../poblic/img/logo.svg" alt="" />
        </div>
      </div>
      <li>
        <Link to="/Servecse" className="hover:border-b-2 hover:border-amber-100">خدمات</Link>
      </li>
      <li>
        <Link to="/Blog" className="hover:border-b-2 hover:border-amber-100">وبلاگ</Link>
      </li>
    
   
    </div>
    {/* <!-- nav ended --> */}
        </div>
    )
}