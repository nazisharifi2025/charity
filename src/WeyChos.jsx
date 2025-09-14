import { useEffect, useRef } from "react";

export default function WeyChos() {
  const counterSectionRef = useRef(null);
  const hasAnimatedRef = useRef(false); // برای جلوگیری از تکرار انیمیشن

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startCounting();
        }
      },
      {
        threshold: 0.5, // حداقل ۵۰٪ بخش دیده شود
      }
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
      const speed = target / 100; // سرعت نسبی انیمیشن

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
    <div dir="rtl" className="lg:h-screen h-fit w-full flex lg:flex-row flex-col scroll-animate justify-between items-center">
      {/* بخش تصویر */}
      <div className="lg:h-full md:h-[80vh] h-[60vh] mb-9 md:mb-0 w-full lg:w-1/2 flex scroll-animate justify-center p-18 items-center relative">
        <img src="../poblic/img/why-choose-img-1.jpg" className="h-full w-full rounded-full" alt="" />
        <img src="../poblic/img/why-choose-img-2.jpg" className="h-[230px] absolute bottom-12 right-0 border-2 border-greenC w-[230px] rounded-full" alt="" />
      </div>

      {/* بخش متن و کانتر */}
      <div className="lg:h-full h-fit w-full lg:justify-start justify-center lg:w-1/2 flex flex-col scroll-animate gap-4 p-16" dir="rtl">
        <h1 className="font-bold text-xl">
          <span className="material-symbols-outlined text-amber-700">volunteer_activism</span>
          چرا ما را انتخاب کنید؟
        </h1>
        <h1 className="font-extrabold text-2xl">چرا ما با هم متمایز هستیم</h1>
        <p className="text-xl font-bold">
          تلاش بی‌وقفه ما، شفافیت، و رویکرد جامعه‌محور، ما را متمایز می‌کند.
          با همکاری با ما، در برنامه‌هایی سهیم می‌شوید که تغییراتی واقعی و ماندگار ایجاد می‌کنند.
        </p>

        <div className="w-full grid grid-cols-2 grid-rows-2 gap-6 pb-5 border-b justify-center">
          <div className="flex space-x-3 items-center">
            <span className="material-symbols-outlined text-amber-700">check</span>
            <p className="font-bold text-xl">تمرکز بر نیازهای جامعه</p>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="material-symbols-outlined text-amber-700">check</span>
            <p className="font-bold text-xl">روشن‌سازی و مسئولیت‌پذیری</p>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="material-symbols-outlined text-amber-700">check</span>
            <p className="font-bold text-xl">توانمندسازی از طریق همکاری</p>
          </div>
          <div className="flex space-x-3 w-[400px] items-center">
            <span className="material-symbols-outlined text-amber-700">check</span>
            <p className="font-bold text-xl">جذب و مشارکت داوطلبان و اهداکنندگان</p>
          </div>
        </div>

        {/* بخش شمارشگر */}
        <div className="flex lg:justify-evenly items-center lg:flex-row md:flex-row flex-col justify-center scroll-animate" ref={counterSectionRef}>
          <div className="flex justify-center flex-col items-center lg:w-[200px] md:w-[240px] w-[full]  md:border-r border-0 lg:border-r h-[140px]">
            <h1 data-target="25" className="font-bold text-4xl count font-serif">0</h1>
            <h2 className="text-[20px]">سال‌ها سابقه کار</h2>
          </div>
          <div className="flex justify-center flex-col items-center lg:w-[200px] md:w-[240px] w-[full]  md:border-r border-0 lg:border-r h-[140px]">
            <h1 data-target="230" className="font-bold text-4xl count font-serif">0</h1>
            <h2 className="text-[20px] text-center">با بیش از هزار داوطلب فعال</h2>
          </div>
          <div className="flex justify-center flex-col items-center lg:w-[200px] md:w-[240px] w-[full]  md:border-r border-0 lg:border-rh-[140px]">
            <h1 data-target="430" className="font-bold text-4xl count font-serif">0</h1>
            <h2 className="text-[20px]">دفاتر در سراسر جهان</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
