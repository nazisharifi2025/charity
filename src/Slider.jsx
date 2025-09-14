export default function Slider(){
    return(
        <div
    dir="rtl"
      className="lg:h-screen md:h-[55vh] h-[50vh] w-full lg:py-64  py-28 pt-48 lg:0 md: lg:my-0 bg-[url(../poblic/img/hero-bg.jpg)] bg-cover"
    >
      <div
        className="text-xl text-amber-100 scroll-animate flex flex-col gap-4 justify-center items-start px-7 h-full"
      >
        <div>
          <span className="lg:text-2xl text-xl font-bold ">به خیریه ما خوش آمدید</span>
        </div>
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold lg:w-[55%] w-full">با هر نشانه‌ای از
        مهربانی، به تغییر قدرت     <span class="text-emerald-900">ببخشیم.</span>  
        </h1>
        <p className="lg:w-[50%] lg:text-2xl md:text-xl text-xs font-bold w-[80%] scroll-animate">
          به ما بپیوندید تا با بخشیدن امید، رساندن یاری و ایجاد تغییری پایدار، آینده‌ای روشن‌تر برای جوامع نیازمند در سراسر جهان بسازیم.
        </p>
        <button
          className="bg-emerald-900 text-amber-100 py-2 px-7 rounded-full hover:bg-amber-100 hover:text-greenC"
        >
          هم‌اکنون اهدا کنید
          <span className="material-symbols-outlined" >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
    )
}