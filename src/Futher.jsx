import { useEffect, useRef } from "react";

export default function Futher() {
  const counterSectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const counters = document.querySelectorAll(".count");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  return (
    <div
      dir="rtl"
      ref={counterSectionRef}
      className="lg:h-[150vh] h-fit w-full gap-7 flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-xl">
        <span className="material-symbols-outlined text-amber-700">
          volunteer_activism
        </span>
        ویژگی‌های ما یا قابلیت‌های ما
      </h1>
      <h1 className="font-extrabold text-3xl">نشان‌دهندهٔ کارهای اثرگذار ماست</h1>
      <p className="lg:text-xl md:text-xl text-xs font-bold w-[60%] text-center">
        با دستاوردهای مثبت ما آشنا شوید؛ حاصل برنامه‌ها، همکاری‌ها و تلاش‌های پیگیرانه‌ ما. از سلامت و آموزش تا پایداری محیط‌ زیست، در مسیر ساختن آینده‌ای بهتر گام برداشته‌ایم.
      </p>

      <div className="w-full h-fit  lg:gap-0 gap-5 grid lg:grid-cols-3 justify-center items-center md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 grid-cols-1 grid-rows-6">
        <div className="h-[300px] mx-auto scroll-animate lg:w-[390px] md:w-[350px] w-[390px] rounded-3xl bg-no-repeat bg-cover bg-[url(../poblic/img/our-features-img-1.jpg)] "></div>
        <div className="h-[280px] lg:w-[300px] md:[300px] w-full flex flex-col justify-center ">
          <div className="w-full flex justify-between text-amber-600">
            <h1 data-target="94" className="text-5xl count font-bold">0</h1>
            <span className="material-symbols-outlined">school</span>
          </div>
          <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
          <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
        </div>
        <div className="h-[300px] mx-auto scroll-animate lg:w-[390px] md:w-[350px] w-[390px] rounded-3xl bg-no-repeat bg-cover bg-[url(../poblic/img/our-features-img-3.jpg)] "></div>
        <div className="h-[280px] lg:w-[300px] md:w-[300px] w-full flex flex-col justify-center ">
          <div className="w-full flex justify-between text-amber-600">
            <h1 data-target="96" className="text-5xl count font-bold">0</h1>
            <span className="material-symbols-outlined">diversity_1</span>
          </div>
          <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
          <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
        </div>
        <div className="h-[300px] mx-auto scroll-animate lg:w-[390px] md:w-[350px] w-[390px] rounded-3xl bg-no-repeat bg-cover bg-[url(../poblic/img/our-features-img-2.jpg)] "></div>
        <div className="h-[280px] lg:w-[300px] md:w-[300px] w-full flex flex-col justify-center ">
          <div className="w-full flex justify-between text-amber-600">
            <h1 data-target="95" className="text-5xl count font-bold">0</h1>
            <span className="material-symbols-outlined">shopping_bag</span>
          </div>
          <p className="font-bold text-2xl">پشتیبانی آموزشی</p>
          <p className="font-bold text-2xl">ارائه خدمات و منابع ضروری سلامت به جوامع</p>
        </div>
      </div>
    </div>
  );
}
