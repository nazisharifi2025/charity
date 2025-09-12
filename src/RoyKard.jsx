export default function RoyKard(){
    return(
         <div
      className="lg:h-screen md:h-[70vh] scroll-animate md:gap-4 gap-24 lg:gap-2 lg:flex-row flex-col w-full flex justify-between px-5"
      dir="rtl"
    >
      <div
        className="flex flex-col gap-2 scroll-animate relative h-[100vh] lg:h-full lg:px-6 px-1 lg-w-[45%] md:w-full w-full"
      >
        <p className="font-bold text-xl">
          <span
            className="material-symbols-outlined px-3 text-amber-600"
           
          >
            volunteer_activism </span>رویکرد ما
        </p>
        <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl">
          راهکارهایی همراه با همدلی برای ایجاد اثری پایدار
        </h1>
        <p className="text-xl">
          رویکرد ما بر ایجاد تغییرات پایدار تمرکز دارد؛ از طریق پرداختن به
          ریشه‌های مسائل، توانمندسازی جوامع، و ارائه راه‌حل‌هایی دلسوزانه.
        </p>
        <button className="bg-amber-100 text-greenC rounded-full py-2 px-4 w-[40%]">
          همین حالا تماس بگیرید
          <span className="material-symbols-outlined"> arrow_forward </span>
        </button>
        <div
          className="lg:h-[250px] md:h-[250px] h-[80vh] w-full scroll-animate bg-greenC bottom-2 shadow-md shadow-amber-100 rounded-xl flex lg:flex-row md:flex-row flex-col items-center justify-evenly"
        >
          <div
            className="h-[80%] lg:w-[30%] md:w-[30%] w-full flex flex-col gap-3 items-center justify-center"
          >
            <span
              className="material-symbols-outlined text-amber-600"
             
            >
              diversity_1
            </span>
            <h1 className="font-bold text-2xl">هدف ما</h1>
            <p className="font-bold text-center">
              ما در تلاشیم تا تغییرات مثبتی ایجاد کرده و به توانمندسازی افراد
              بپردازیم.
            </p>
          </div>
          <div
            className="h-[80%] lg:w-[30%] md:w-[30%] w-full scroll-animate flex flex-col gap-3 items-center justify-center"
          >
            <span
              className="material-symbols-outlined text-amber-600"
             
            >
              diamond
            </span>
            <h1 className="font-bold text-2xl">ارزش بنیادین ما</h1>
            <p className="font-bold text-center">
              ما در تلاشیم تا تغییرات مثبتی ایجاد کرده و به توانمندسازی افراد
              بپردازیم.
            </p>
          </div>
          <div
            className="h-[80%] lg:w-[30%] md:w-[30%] w-full scroll-animate flex flex-col gap-3 items-center justify-center"
          >
            <span
              className="material-symbols-outlined text-amber-600"
             
            >
              eye_tracking
            </span>
            <h1 className="font-bold text-2xl">چشم‌انداز ما</h1>
            <p className="font-bold text-center">
              ما در تلاشیم تا تغییرات مثبتی ایجاد کرده و به توانمندسازی افراد
              بپردازیم.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[80%] scroll-animate mx-auto scroll-animate">
        <img src="../poblic/img/our-fact-image.jpg" className="w-full h-full rounded-2xl"alt=""/>
      </div>
    </div>
    )
}