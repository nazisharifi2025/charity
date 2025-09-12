export default function Quations(){
    return(
         <div
      className="flex scroll-animate lg:flex-row flex-col justify-between w-full lg:h-[100vh] md:h-[90vh]"
    >
      <div
        className="flex flex-col scroll-animate gap-3 p-6 lg:w-[50%] w-[90%] mx-auto h-full"
      >
        <h1 className="font-bold text-xl">
          پرسش‌های پرتکرار<span
            className="material-symbols-outlined px-4 text-amber-600"
           
          >
            diversity_4
          </span>
        </h1>
        <h1 className="font-bold text-4xl">پاسخ‌ها به سوالات مهم شما</h1>
        <div
          className="border scroll-animate border-amber-100 rounded-xl h-14 w-full"
          id="hieght"
        >
          <div
            id="clickMe"
            className="h-12 w-full px-2 flex justify-between items-center"
          >
            <h1 className="font-bold text-xl">هدف اصلی سازمان شما چیست؟</h1>
          </div>
          <div id="Answers" className="h-14 p-3 hidden w-full">
            <p>
              شما می‌توانید به‌عنوان داوطلب همکاری کنید، کمک مالی کنید، یا با ما
              شریک شوید تا از ابتکارات ما حمایت کنید. برای اطلاعات بیشتر، به
              صفحه «همکاری با ما» مراجعه کنید.
            </p>
          </div>
        </div>
        <div
          className="border scroll-animate border-amber-100 rounded-xl h-14 w-full"
          id="hieght2"
        >
          <div
            id="clickMe2"
            className="h-12 w-full flex px-2 justify-between items-center"
          >
            <h1 className="font-bold text-xl">
              کمک‌های مالی شما صرف چه چیزهایی می‌شود؟
            </h1>
          </div>
          <div id="Answers2" className="h-14 p-3 hidden w-full">
            <p>
              شما می‌توانید به‌صورت داوطلبانه همکاری کنید، کمک مالی نمایید، یا
              با ما مشارکت داشته باشید تا از برنامه‌های ما حمایت کنید. برای
              اطلاعات بیشتر به صفحه «همکاری با ما» مراجعه کنید.
            </p>
          </div>
        </div>
        <div
          className="border scroll-animate border-amber-100 rounded-xl h-14 w-full"
          id="hieght3"
        >
          <div
            id="clickMe3"
            className="h-12 w-full flex px-2 justify-between items-center"
          >
            <h1 className="font-bold text-xl">چطور می‌توانم مشارکت کنم؟</h1>
          </div>
          <div id="Answers3" className="h-14 p-3 hidden w-full">
            <p>
              شما می‌توانید داوطلب شوید، کمک مالی کنید یا با ما همکاری کنید تا
              از ابتکارات ما حمایت کنید. برای اطلاعات بیشتر به صفحه «چگونه
              مشارکت کنیم» ما مراجعه کنید.
            </p>
          </div>
        </div>
        <div
          className="border scroll-animate border-amber-100 rounded-xl h-14 w-full"
          id="hieght4"
        >
          <div
            id="clickMe4"
            className="h-12 w-full px-2 flex justify-between items-center"
          >
            <h1 className="font-bold text-xl">
              آیا کمک‌های مالی من قابل کسر از مالیات هستند؟
            </h1>
          </div>
          <div id="Answers4" className="h-14 p-3 hidden w-full">
            <p>
              شما می‌توانید به‌صورت داوطلبانه فعالیت کنید، کمک مالی کنید یا با
              ما همکاری کنید تا از برنامه‌ها و طرح‌های ما حمایت کنید. برای
              جزئیات بیشتر به صفحه «چگونه مشارکت کنیم» مراجعه کنید.
            </p>
          </div>
        </div>
        <div
          className="border scroll-animate border-amber-100 rounded-xl h-14 w-full"
          id="hieght5"
        >
          <div
            id="clickMe5"
            className="h-12 w-full flex px-2 justify-between items-center"
          >
            <h1 className="font-bold text-xl">
              چطور می‌توانم با سازمان شما به‌صورت داوطلبانه همکاری کنم؟
            </h1>
          </div>
          <div id="Answers5" className="h-14 p-3 hidden w-full">
            <p>
              شما می‌توانید به‌صورت داوطلبانه فعالیت کنید، کمک مالی کنید یا با
              ما همکاری کنید تا از برنامه‌ها و طرح‌های ما حمایت کنید. برای
              اطلاعات بیشتر به صفحه «چگونه مشارکت کنیم» مراجعه کنید.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:h-[100vh] scroll-animate lg:w-[45%] w-[80%] mx-auto p-6">
        <img
          src="../poblic/img/causes-img-3.jpg"
          className="h-full scroll-animate w-full rounded-2xl"
          alt=""
        />
      </div>
    </div>
    )
}