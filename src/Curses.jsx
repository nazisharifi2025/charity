export default function Curses(){
    return(
         <div className="lg:h-screen h-fit w-full flex justify-center items-center flex-col gap-8 ">
        <p className="text-xl">
           <span className="material-symbols-outlined text-amber-600" >
            diversity_4
          </span>
          اهداف ما
        </p>
        <h1 className="font-extrabold text-3xl">پشتیبانی از فعالیت‌های اجتماعی جوامع</h1>
        <div className="lg:h-[70vh] h-fit w-full flex gap-12 lg:flex-nowrap flex-wrap justify-evenly items-center ">
          <div className="lg:h-[70vh] md:h-[50vh] h-[50vh] w-[340px] bg-amber-100 change rounded-2xl flex gap-3 scroll-animate text-greenC flex-col justify-center items-center py-3 p-7">
            <img src="../poblic/img/causes-img-1.jpg"  class="w-full lg:h-[120px] md:h-[140px] h-[130px] rounded-2xl" alt="" />
            <p className="text-xl font-extrabold">دسترسی به خدمات درمانی</p>
            <p className="text-center font-bold">تضمین آموزش باکیفیت و منابع لازم برای جوامع محروم</p>
            <button class="bg-greenC text-amber-100 rounded-full py-2 scroll-animate px-8 hover:bg-black">هم‌اکنون اهدا کنید</button>
          </div>
          <div className="lg:h-[70vh] md:h-[50vh] h-[50vh] w-[340px] bg-amber-100 change rounded-2xl flex gap-3 scroll-animate text-greenC flex-col justify-center items-center py-3 p-7">
            <img src="../poblic/img/causes-img-2.jpg" class="w-full lg:h-[120px] md:h-[120px] h-[130px] rounded-2xl" alt="" />
            <p className="text-xl font-extrabold">حق آموزش برای همگان</p>
            <p className="text-center font-bold">تضمین آموزش باکیفیت و منابع لازم برای جوامع محروم</p>
            <button className="bg-greenC text-amber-100 rounded-full py-2 px-8 scroll-animate hover:bg-black">هم‌اکنون اهدا کنید</button>
          </div>
          <div className="lg:h-[70vh] md:h-[50vh] h-[50vh] w-[340px] bg-amber-100 change rounded-2xl flex gap-3 scroll-animate text-greenC flex-col justify-center items-center py-3 p-7">
            <img src="../poblic/img/causes-img-3.jpg" class="w-full lg:h-[120px] md:h-[120px] h-[130px] rounded-2xl" alt="" />
            <p className="text-xl font-extrabold">گرسنگی و امنیت غذایی</p>
            <p className="text-center font-bold">تضمین آموزش باکیفیت و منابع لازم برای جوامع محروم</p>
            <button className="bg-greenC text-amber-100 rounded-full py-2 px-8 scroll-animate hover:bg-black">هم‌اکنون اهدا کنید</button>
          </div>

        </div>
      </div>
    )
}