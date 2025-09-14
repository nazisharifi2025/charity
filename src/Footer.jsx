export default function Footer(){
    return(
    <footer className="lg:h-[80vh] h-fit mt-48  w-full scroll-animate bg-[url(../poblic/img/images.png)] bg-cover">
      <div className="h-full w-full scroll-animates bg-bgcon flex lg:flex-row flex-col justify-between py-8">
        <div className="h-[70%] lg:w-[45%] w-full flex flex-col px-10 py-28 lg:border-r  border-r-0">
          <img src="../poblic/img/logo.svg" className="h-20" alt="" />
          <div className="flex justify-between  gap-6">
            <div className="flex flex-col gap-4 my-6">
              <p className="text-xl">To free cart costomize care</p>
              <h1 className="font-bold text-2xl">+93795064649</h1>
            </div>
            <div className="flex flex-col gap-4 my-6">
              <p className="text-xl">To free cart costomize care</p>
              <h1 className="font-bold text-2xl">nazisharifi@gmail.com</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="font-extrabold text-2xl">دنبال کردن</h1>
            <div className="flex space-x-3">
              <img src="../poblic/img/Screenshot 2025-06-09 110928.png" className="rounded-full h-10 w-10" alt="" />
              <img src="../poblic/img/Screenshot 2025-06-09 110936.png" className="rounded-full h-10 w-10" alt="" />
              <img src="../poblic/img/Screenshot 2025-06-09 110943.png" className="rounded-full h-10 w-10" alt="" />
              <img src="../poblic/img/Screenshot 2025-06-09 110951.png" className="rounded-full h-10 w-10" alt="" />
            </div>
          </div>
        </div>
        <div className="h-[90%] w-[45%] flex items-center my-24 flex-col mx-auto gap-4">
          <div className="flex w-full gap-2 justify-center items-center" dir="rtl">
            <input type="text" class="w-[80%] rounded-full border outline-0 py-3" placeholder="لطفا ایمیل تان را بنویسید" dir="rtl" />
            <button className="bg-amber-600 p-4 rounded-full">
              <span className="material-symbols-outlined">
send
</span>
            </button>
          </div>
          <div className="w-full flex space-x-3 justify-between items-center " dir="rtl">
            <ul className="flex flex-col gap-1.5 font-bold text-xl">
              <li className="font-bold text-2xl my-8">لینک سریع</li>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>خدمات</li>
              <li>وبلاگ</li>

            </ul>
            <ul className="flex flex-col gap-1.5 font-bold text-xl">
              <li className="font-bold text-2xl my-8">لینک سریع</li>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>خدمات</li>
              <li>وبلاگ</li>

            </ul>
            <ul className="flex flex-col gap-1.5 font-bold text-xl">
              <li className="font-bold text-2xl my-8">لینک سریع</li>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>خدمات</li>
              <li>وبلاگ</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex justify-center lg:bg-bg-con bg-bgcon  items-center text-2xl font-bold">
        <h1>Copyright © 2025 All Rights Reserved.</h1>
      </div>
    </footer>
    )
}