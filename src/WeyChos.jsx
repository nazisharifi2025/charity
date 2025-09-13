export default function WeyChos(){
    return(
        <div className="lg:h-screen h-fit w-full flex lg:flex-row flex-col scroll-animate justify-between items-center">
        <div className="lg:h-full md:h-[160vh] h-[180vh] mb-9 md:mb-0 lg-md-0 w-[80%] lg:w-1/2 flex scroll-animate justify-center p-18 items-center relative">
          <img src="../poblic/img/why-choose-img-1.jpg" className="h-full w-full rounded-full" alt="" />
          <img src="../poblic/img/why-choose-img-2.jpg" className="h-[230px] absolute bottom-12 right-0 border-2 border-greenC w-[230px] rounded-full" alt="" />

        </div>
        <div className="lg:h-full md:h-[100vh] h-[120vh] w-full lg:justify-start justify-center lg:w-1/2 flex flex-col scroll-animate gap-4 p-16 " dir="rtl">
          <h1 className="font-bold text-xl">
            <span className="material-symbols-outlined text-amber-700" >
volunteer_activism
</span>
چرا ما را انتخاب کنید؟
          </h1>
          <h1 className="font-extrabold text-2xl">چرا ما با هم متمایز هستیم</h1>
          <p className="text-xl font-bold">تلاش بی‌وقفه ما، شفافیت، و رویکرد جامعه‌محور، ما را متمایز می‌کند.
        با همکاری با ما، در برنامه‌هایی سهیم می‌شوید که تغییراتی واقعی و ماندگار ایجاد می‌کنند.</p>
       <div className="w-full grid grid-cols-2 grid-rows-2 gap-6 pb-5 border-b justify-center">
        <div className="flex space-x-3 items-center">
          <span className="material-symbols-outlined text-amber-700">
           check
          </span>
          <p className="font-bold  text-xl">تمرکز بر نیازهای جامعه</p>
        </div>
        <div className="flex space-x-3 items-center ">
          <span className="material-symbols-outlined text-amber-700">
           check
          </span>
          <p className="font-bold  text-xl">روشن‌سازی و مسئولیت‌پذیری</p>
        </div>
        <div className="flex space-x-3 items-center ">
          <span className="material-symbols-outlined text-amber-700">
           check
          </span>
          <p className="font-bold  text-xl">توانمندسازی از طریق همکاری</p>
        </div>
        <div className="flex space-x-3 w-[400px] items-center ">
          <span className="material-symbols-outlined text-amber-700" >
           check
          </span>
          <p className="font-bold  text-xl">جذب و مشارکت داوطلبان و اهداکنندگان</p>
        </div>
       </div>
       <div className="flex justify-evenly scroll-animate">
        <div className="flex justify-center flex-col items-center w-[200px] border-r h-[140px]">
            <h1 data-target="25" className="font-bold text-4xl count font-serif">0</h1>
        <h2 className="text-[20px]">سال‌ها سابقه کار</h2>
        </div>
        <div className="flex justify-center flex-col items-center  w-[200px] border-r h-[140px]">
            <h1 data-target="230" className="font-bold text-4xl count font-serif">0</h1>
        <h2 className="text-[20px] text-center">با بیش از هزار داوطلب فعال</h2>
        </div>
        <div className="flex justify-center flex-col items-center w-[200px] border-r h-[140px]">
            <h1 data-target="430" className="font-bold text-4xl count font-serif">0</h1>
        <h2 className="text-[20px]">دفاتر در سراسر جهان</h2>
        </div>
       </div>
        </div>

      </div>
    )
}