export default function Serveces(){
    return(
         <div
    id="serves"
      className="lg:h-screen h-fit w-full text-amber-100 flex justify-center flex-col  gap-6 items-center"
    >
      <h3 className="text-xl flex justify-center  scroll-animate items-center space-x-1.5">
        <span
          className="material-symbols-outlined text-amber-600"
        >
          diversity_4
        </span>
        خدمات
      </h3>
      <h1 className="font-bold text-5xl  scroll-animate">مجموعه کامل خدمات ما</h1>
      <span className="w-[60%] text-center text-xl  scroll-animate"
        >خدمات ما بر ایجاد تغییرات پایدار از طریق توسعه جامعه، دسترسی به خدمات بهداشتی، حمایت آموزشی و کمک‌های اضطراری متمرکز است.</span>
      <div className="h-fit w-full flex gap-6 justify-evenly lg:flex-nowrap flex-wrap scroll-animate items-center">
        <div
        id="serves1"
          className="bg-amber-100 chinge text-greenC gap-6  scroll-animate rounded-2xl lg:h-[70vh]  lg:w-[340px] md:w-[270px] h-[50vh] flex flex-col justify-center items-center"
        >
          <strong className="text-xl text-center font-bold  scroll-animate"
            >دسترسی به مراقبت‌های بهداشتی</strong>
          <p className="w-[80%] text-center  scroll-animate">
            مقابله با گرسنگی و سوءتغذیه از طریق ارائه وعده‌های غذایی مغذی
          </p>
          <img
            src="../poblic/img/services-image-2.jpg"
            className="h-[130px] w-[130px] rounded-full"
            alt=""
          />
          <button>
            بیشتر بخوانید
            <span
              className="material-symbols-outlined p-3 hover:bg-amber-100 hover:text-greenC bg-greenC text-amber-100 rounded-full"
            >
              arrow_forward
            </span>
          </button>
        </div>
        <div
        id="serves2"
          className="bg-amber-100 text-greenC chinge scroll-animate gap-6 py-4 rounded-2xl lg:h-[70vh]  lg:w-[340px] md:w-[270px] h-[50vh] flex flex-col justify-center items-center"
        >
          <strong className="text-xl text-center font-bold"
            >برنامه‌های تأمین امنیت غذایی</strong>
          <p className="w-[80%] text-center">
            مقابله با گرسنگی و سوءتغذیه از طریق تأمین وعده‌های غذایی مغذی
          </p>
          <img
            src="../poblic/img/services-image-1.jpg"
            className="h-[130px] w-[130px] rounded-full"
            alt=""
          />
          <button>
            بیشتر بخوانید
            <span
              className="material-symbols-outlined p-3 hover:bg-amber-100 hover:text-greenC bg-greenC text-amber-100 rounded-full"
            >
              arrow_forward
            </span>
          </button>
        </div>
        <div
        id="serves3"
          className="bg-amber-100 text-greenC gap-6 chinge  scroll-animate rounded-2xl lg:h-[70vh] lg:w-[340px] md:w-[270px] h-[50vh] flex flex-col justify-center items-center"
        >
          <strong className="text-xl text-center font-bold"
            >کمک‌های آموزشی</strong>
          <p className="w-[80%] text-center">
            مقابله با گرسنگی و سوءتغذیه از طریق تأمین وعده‌های غذایی مغذی
          </p>
          <img
            src="../poblic/img/services-image-3.jpg"
            className="h-[130px] w-[130px] rounded-full"
            alt=""
          />
          <button>
            بیشتر بخوانید
            <span
              className="material-symbols-outlined p-3 hover:bg-amber-100 hover:text-greenC bg-greenC text-amber-100 rounded-full"
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      <h1 className="text-center text-xl py-14  scroll-animate" dir="rtl">
        از کیفیت کار ما رضایت خواهید داشت. امروز با ما تماس بگیرید!
        <span className="text-amber-600 border-b border-b-amber-600"
          >0093795064649</span>
      </h1>
    </div>
    )
}