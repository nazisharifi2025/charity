export default function With(){
    return(
        <div className="lg:h-screen h-fit w-full my-24 flex lg:flex-row flex-col justify-between px-12 py-4  scroll-animate">
      <div className="lg:h-full md:h-[130vh] lg:w-1/2 w-full flex flex-col gap-4 px-5">
        <div className="flex gap-3 items-center font-bold text-xl">
           <span className="material-symbols-outlined  text-amber-600" >
              volunteer_activism
            </span>
            خدمات ما
        </div>
        <h1 className="font-bold lg:text-5xl md-text-4xl text-2xl scroll-animate">با امید می‌سازیم، تغییری ماندگار می‌آفرینیم</h1>
        <div className="flex items-center scroll-animate gap-6 w-[80%] pb-2 border-b border-amber-100 h-32">
          <div className="">
            <span className="material-symbols-outlined text-amber-600">
            diversity_4
          </span>
          </div>
          <div>
            <h1 className="font-bold text-2xl">توانمندسازی اقتصادی</h1>
            <p className="font-bold">توانمندسازی افراد از طریق آموزش شغلی، سواد مالی، و حمایت از کسب‌وکارهای کوچک به‌منظور ایجاد معیشتی پایدار.</p>
          </div>
          
        </div>
        <div className="flex items-center scroll-animate gap-6 w-[80%] pb-2 border-b border-amber-100 h-32">
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
        <div className="flex items-center scroll-animate gap-6 w-[80%] pb-2 border-b border-amber-100 h-32">
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
       <div className="lg:h-full h-[130vh] my-11 lg:w-1/2 w-full flex justify-center items-center relative scroll-animate">
        <img src="../poblic/img/what-we-do-image-1.jpg" className="h-full scroll-animate rounded-3xl w-[70%]" alt="" />
        <img src="../poblic/img/what-we-do-image-2.jpg" id="img2" className="h-[200px] scroll-animate w-[200px] border-8 border-greenC rounded-full absolute bottom-28 left-0" alt="" />
     </div>
     </div>
    )
}