export default function LatestPost(){
    return(
         <div dir="rtl" className="lg:h-screen h-fit w-full flex flex-col scroll-animate gap-3 justify-center items-center">
          <h1 className="font-bold text-2xl scroll-animate">گالری 
                   <span className="material-symbols-outlined text-amber-700" >
volunteer_activism
</span>
          </h1>
          <h1 className="font-bold text-4xl scroll-animate">داستان‌هایی از تأثیر و امید</h1>
          <p className="lg:text-xl md:text-xl text-xs font-bold w-[50%] text-center">کشف داستان‌های الهام‌بخش و اخبار تازه از ابتکارات ما، موفقیت‌ها، و زندگی‌هایی که تحت تأثیر قرار گرفته‌اند. ببینید حمایت شما چگونه در حال ایجاد تغییراتی واقعی و ماندگار در جوامع سراسر جهان است.</p>
          <div className="w-full flex lg:gap-0 gap-6 justify-evenly lg:flex-nowrap flex-wrap">
            <div className="lg:h-[65vh] md:h-[60vh] h-[60vh] w-[340px] items-center scroll-animate change text-greenC rounded-3xl border bg-amber-100  shadow-md shadow-amber-100 flex flex-col gap-4 justify-center p-5">
              <p className="text-amber-700 font-bold text-xl">January 8, 2025</p>
              <p className=" font-bold text-2xl ">برنامه رهبری جوانان الهام‌بخش نسل آینده است</p>
              <img src="../poblic/img/post-img-1.jpg" className="w-[90%] rounded-3xl" alt="" />
              <button className="">بیشتر بدانید 
                <span className="material-symbols-outlined bg-amber-600 rounded-full p-2 ">
            arrow_forward
          </span>
              </button>
            </div>
            <div className="lg:h-[65vh] md:h-[60vh] h-[60vh] w-[340px] items-center scroll-animate change text-greenC rounded-3xl border bg-amber-100  shadow-md shadow-amber-100 flex flex-col gap-4 justify-center p-5">
              <p className="text-amber-700 font-bold text-xl">January 8, 2025</p>
              <p className=" font-bold text-2xl ">برنامه رهبری جوانان الهام‌بخش نسل آینده است</p>
              <img src="../poblic/img/post-img-2.jpg" className="w-[90%] rounded-3xl" alt="" />
              <button>بیشتر بدانید 
                <span className="material-symbols-outlined bg-amber-600 rounded-full p-2 ">
            arrow_forward
          </span>
              </button>
            </div>
            <div className="lg:h-[65vh] md:h-[60vh] h-[60vh] w-[340px] items-center scroll-animate change text-greenC rounded-3xl border bg-amber-100  shadow-md shadow-amber-100 flex flex-col gap-4 justify-center p-5">
              <p className="text-amber-700 font-bold text-xl">January 8, 2025</p>
              <p className="font-bold text-2xl ">برنامه رهبری جوانان الهام‌بخش نسل آینده است</p>
              <img src="../poblic/img/post-img-3.jpg" className="w-[90%] rounded-3xl" alt="" />
              <button >بیشتر بدانید 
                <span className="material-symbols-outlined bg-amber-600 rounded-full p-2 " >
            arrow_forward
          </span>
              </button>
            </div>
          </div>
          </div>
    )
}