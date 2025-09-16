export default function About(){
    return(
        <div dir="rtl" className="lg:h-[130vh] h-fit my-12 w-full lite flex lg:flex-row flex-col justify-between gap-34 items-center py-7">
      <div className="lg:h-full h-fit lg:w-[45%] w-full  relative px-12 lg:py-36 py-12 scroll-animate ">
        <div className="rounded-xl scroll-animate lg:w-[340px] lg:h-[360px] float-right bg-[url(../poblic/img/about-img-1.jpg)] bg-no-repeat bg-cover "></div>
        <div className="flex w-full h-1/2 absolute lg:top-82 md:top-80 top-64">
        <div className="lg:w-[230px] bg-[url(../poblic/img/about-img-2.jpg)] bg-cover bg-no-repeat border-8 border-greenC scroll-animate lg:h-[230px] md:h-[230px] md:w-[230px] h-[180px] w-[180px] rounded-xl"></div>
          <div
          id="div1"
            className="font-bold rounded-md mt-28 m-8 text-center flex flex-col outline-8 outline-greenC justify-center items-center lg:h-[130px] lg:w-[130px] md:h-[110px] md:w-[110px] h-[90px] w-[90px] py-3  bg-amber-100 text-greenC"
          >
            <span className="material-symbols-outlined">
              volunteer_activism
            </span>
            <h2 dir="rtl">۷۵ هزار دلار تأمین مالی شده توسط ما</h2>
          </div>
        </div>
      </div>
      <div id="text" className="lg:w-[45%] w-[90%] lg:h-full h-fit flex flex-col gap-4 text-amber-100">
        <div className="flex space-x-2">
          <span className="material-symbols-outlined text-amber-600">
            diversity_4
          </span>
          <p className="">درباره ما</p>
        </div>
        <h1 className="font-bold text-5xl">با هم در مهربانی، در حال تغییر زندگی‌ها</h1>
        <p  className="scroll-animate font-bold text-xl w-[70%]">
         با انگیزه‌ای برخاسته از همدلی و چشم‌اندازی مشترک، دست در دست جوامع کار می‌کنیم تا تغییری معنادار رقم بزنیم.
        </p>
        <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center px-3 relative">
          <div className="w-1/2 h-[40vh] flex scroll-animate flex-col gap-2">
            <span
              className="material-symbols-outlined text-amber-600"
            >
              diversity_4
            </span>
            <h1 className="font-bold text-xl">خدمات پشتیبانی سلامت</h1>
            <p className="border-b border-amber-100 pb-3">
             حمایت از رشد با تأمین مالی مردمی
            </p>
            <button
              className="bg-amber-100 py-2 text-greenC px-4 w-[180px] hover:bg-greenC hover:text-amber-100 rounded-full"
            >
              <a href="#"
                >درباره ما
                <span className="material-symbols-outlined" >
                  arrow_forward
                </span></a>
            </button>
          </div>
          <div
          id="div2"
            className="bg-amber-100 lg:h-[40vh] md:h-[35vh] h-[40vh] -z-0 pt-24 flex items-center flex-col justify-center relative rounded-md w-[220px]"
         
          >
            <h1 className="text-gray-600 text-xl text-center">75,958</h1>
            <h2 className="font-bold text-gray-500">Helped Fund</h2>
            <p className="text-center text-gray-300">
              حمایت از توسعه با مشارکت مالی جامعه (رسمی و انسانی)
            </p>
            <div  className=" bg-no-repeat bg-cover bg-[url(../poblic/img/helped-fund-img.jpg)] rounded-full h-[150px] w-[150px] z-50 absolute -top-10 right-12"></div>
          </div>
        
        </div>
      </div>
    </div>
    )
}