import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "هدف اصلی سازمان شما چیست؟",
    answer:
      "شما می‌توانید به‌عنوان داوطلب همکاری کنید، کمک مالی کنید، یا با ما شریک شوید تا از ابتکارات ما حمایت کنید. برای اطلاعات بیشتر، به صفحه «همکاری با ما» مراجعه کنید.",
  },
  {
    id: 2,
    question: "کمک‌های مالی شما صرف چه چیزهایی می‌شود؟",
    answer:
      "شما می‌توانید به‌صورت داوطلبانه همکاری کنید، کمک مالی نمایید، یا با ما مشارکت داشته باشید تا از برنامه‌های ما حمایت کنید. برای اطلاعات بیشتر به صفحه «همکاری با ما» مراجعه کنید.",
  },
  {
    id: 3,
    question: "چطور می‌توانم مشارکت کنم؟",
    answer:
      "شما می‌توانید داوطلب شوید، کمک مالی کنید یا با ما همکاری کنید تا از ابتکارات ما حمایت کنید. برای اطلاعات بیشتر به صفحه «چگونه مشارکت کنیم» ما مراجعه کنید.",
  },
  {
    id: 4,
    question: "آیا کمک‌های مالی من قابل کسر از مالیات هستند؟",
    answer:
      "شما می‌توانید به‌صورت داوطلبانه فعالیت کنید، کمک مالی کنید یا با ما همکاری کنید تا از برنامه‌ها و طرح‌های ما حمایت کنید. برای جزئیات بیشتر به صفحه «چگونه مشارکت کنیم» مراجعه کنید.",
  },
  {
    id: 5,
    question: "چطور می‌توانم با سازمان شما به‌صورت داوطلبانه همکاری کنم؟",
    answer:
      "شما می‌توانید به‌صورت داوطلبانه فعالیت کنید، کمک مالی کنید یا با ما همکاری کنید تا از برنامه‌ها و طرح‌های ما حمایت کنید. برای اطلاعات بیشتر به صفحه «چگونه مشارکت کنیم» مراجعه کنید.",
  },
];

export default function Quations() {
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex scroll-animate lg:flex-row flex-col justify-between w-full lg:h-[100vh] md:h-[90vh]">
      <div className="flex flex-col scroll-animate gap-3 p-6 lg:w-[50%] w-[90%] mx-auto h-full">
        <h1 className="font-bold text-xl">
          پرسش‌های پرتکرار
          <span className="material-symbols-outlined px-4 text-amber-600">
            diversity_4
          </span>
        </h1>
        <h1 className="font-bold text-4xl">پاسخ‌ها به سوالات مهم شما</h1>

        {/* لیست سوالات */}
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className={`border border-amber-100 rounded-xl w-full transition-all duration-500 ${
              openId === id ? "h-fit" : "h-14 overflow-hidden"
            }`}
          >
            <div
              onClick={() => toggleAnswer(id)}
              className="cursor-pointer h-14 w-full px-2 flex justify-between items-center"
            >
              <h1 className="font-bold text-xl">{question}</h1>
              <span className="material-symbols-outlined text-amber-500">
                {openId === id ? "expand_less" : "expand_more"}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ${
                openId === id ? "block p-3" : "hidden"
              }`}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* تصویر کناری */}
      <div className="lg:h-[100vh] scroll-animate lg:w-[45%] w-[80%] mx-auto p-6 bg-no-repeat bg-cover bg-[url(../poblic/img/causes-img-3.jpg)] ">
      </div>
    </div>
  );
}
