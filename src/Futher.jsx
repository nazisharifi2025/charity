export default function Futher(){
    return(
         <div dir="rtl" className="lg:h-[150vh] md:h-[340vh] h-[530vh] w-full scroll-animate gap-7 flex flex-col justify-center items-center">
         <h1 className="font-bold text-xl">
            <span className="material-symbols-outlined text-amber-700" >
volunteer_activism
</span>
ویژگی‌های ما یا قابلیت‌های ما
          </h1>
          <h1 className="font-extrabold text-3xl">نشان‌دهندهٔ کارهای اثرگذار ماست</h1>
          <p className="lg:text-xl md:text-xl text-xs font-bold w-[60%] text-center">با دستاوردهای مثبت ما آشنا شوید؛ حاصل برنامه‌ها، همکاری‌ها و تلاش‌های پیگیرانه‌ ما. از سلامت و آموزش تا پایداری محیط‌ زیست، در مسیر ساختن آینده‌ای بهتر گام برداشته‌ایم.</p>
          <div className="w-full md:h-[260vh] h-[430vh]  p-10 lg:gap-0 gap-28 grid scroll-animate lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 grid-cols-1 grid-rows-6">
            <img src="../poblic/img/our-features-img-1.jpg" class="h-[300px] mx-auto scroll-animate w-[390px] rounded-3xl" alt="" />
            <div className="h-[280px] lg:w-[300px] md:[300px] w-full flex flex-col justify-center ">
              <div className="w-full flex justify-between text-amber-600">
                <h1 data-target="94" className="text-5xl count font-bold">0</h1>
                <span className="material-symbols-outlined ">
                school
                </span>
              </div>
              <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
              <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
            </div>
            <img src="../poblic/img/our-features-img-3.jpg" class="h-[300px] mx-auto scroll-animate w-[390px] rounded-3xl" alt="" />
            <div className="h-[280px] lg:w-[300px] md:w-[300px] w-full flex flex-col justify-center ">
              <div className="w-full flex justify-between text-amber-600">
                <h1 data-target="96" className="text-5xl count font-bold">0</h1>
                
                <span className="material-symbols-outlined">
diversity_1
</span>
              </div>
              <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
              <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
            </div>
            <img src="../poblic/img/our-features-img-2.jpg" class="h-[300px] mx-auto scroll-animate w-[390px] rounded-3xl" alt="" />
            <div className="h-[280px] lg:w-[300px] md:w-[300px] w-full flex flex-col justify-center ">
              <div className="w-full flex justify-between text-amber-600">
                <h1 data-target="95" class="text-5xl count font-bold">0
                </h1>
                <span className="material-symbols-outlined" >
shopping_bag
</span>
              </div>
              <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
              <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
            </div>
          </div>
       </div>
    )
}