export default function With(){
    return(
        <div dir="rtl" className="lg:h-screen h-fit w-full my-24 flex lg:flex-row flex-col justify-between px-12 py-4  scroll-animate">
      <div className="lg:h-full h-fit lg:w-1/2 w-full flex flex-col gap-8 px-5">
        <div className="flex gap-3 items-center font-bold text-xl">
           <span className="material-symbols-outlined  text-amber-600" >
              volunteer_activism
            </span>
            خدمات ما
        </div>
        <h1 className="font-bold lg:text-5xl md-text-4xl text-2xl scroll-animate">با امید می‌سازیم، تغییری ماندگار می‌آفرینیم</h1>
        <div className="flex items-center scroll-animate gap-6 lg:w-[80%] md:w-[80%] w-full  border-b border-amber-100 pb-3 lg:h-32 md:h-32 h-fit">
          <div className="">
            <span className="material-symbols-outlined text-amber-600">
            diversity_4
          </span>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-2xl">توانمندسازی اقتصادی</h1>
            <p className="font-bold">توانمندسازی افراد از طریق آموزش شغلی، سواد مالی، و حمایت از کسب‌وکارهای کوچک به‌منظور ایجاد معیشتی پایدار.</p>
          </div>
          
        </div>
        <div className="flex items-center scroll-animate gap-6 lg:w-[80%] md:w-[80%] w-full border-b border-amber-100 pb-3 lg:h-32 md:h-32 h-fit">
          <div className="">
            
          <span className="material-symbols-outlined text-amber-600" >
featured_seasonal_and_gifts
</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl">دسترسی به آب پاک و خدمات بهداشتی</h1>
            <p className="font-bold">توانمندسازی افراد از طریق آموزش شغلی، سواد مالی، و حمایت از کسب‌وکارهای کوچک به‌منظور ایجاد معیشتی پایدار.</p>
          </div>
          
        </div>
        <div className="flex items-center scroll-animate gap-6 lg:w-[80%] md:w-[80%] w-full border-b border-amber-100 pb-3 lg:h-32 md:h-32 h-fit">
          <div >
            <span className="material-symbols-outlined text-amber-600">
cottage
</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl">طرح‌های تأمین مسکن و سرپناه</h1>
            <p className="font-bold">توانمندسازی افراد از طریق آموزش شغلی، سواد مالی، و حمایت از کسب‌وکارهای کوچک به‌منظور ایجاد معیشتی پایدار.</p>
          </div>
          
        </div>
      </div>
       <div className="lg:h-full md:h-[80vh] float-right h-[70vh] my-11 lg:w-1/2 w-full flex justify-center items-center relative scroll-animate">
        <img src="../poblic/img/what-we-do-image-1.jpg" className="h-full scroll-animate rounded-3xl lg:w-[70%] md:w-[70%] w-[90%]" alt="" />
        <img src="../poblic/img/what-we-do-image-2.jpg" id="img2" className="h-[200px] scroll-animate w-[200px] border-8 border-greenC rounded-full absolute lg:bottom-28 lg:left-0 md:bottom-28 md:left-0 -left-13 bottom-10" alt="" />
     </div>
     </div>
    )
}