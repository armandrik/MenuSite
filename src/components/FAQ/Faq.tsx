import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  display: boolean;
}

export const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "استفاده از منوسایت رایگان است؟",
      answer:
        "بله، ما یک سطح رایگان با ویژگی های اساسی ارائه می دهیم. می توانید تا زمانی که دوست دارید بدون پرداخت هزینه از آن استفاده کنید.",
      display: false,
    },
    {
      id: 2,
      question: "آیا می توانم تعرفه خود را تغییر دهم؟",
      answer:
        "بله، می‌توانید هر زمان که بخواهید در تنظیمات حسابتان تعرفه را تغییر دهید. تغییرات در تاریخ صورتحساب بعدی شما شروع می شود.",
      display: false,
    },
  ]);

  const toggleAnswer = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id
          ? { ...faq, display: !faq.display }
          : { ...faq, display: false }
      )
    );
  };

  return (
    <div className="w-[700px] mx-auto px-10 mt-10 mb-20 macbook:w-[600px] mobile:w-full">
      <h1 className="font-DanaDemiBold text-4xl mb-16 text-zinc-700 text-center dark:text-white/90 mobile:text-2xl">
        سوالات پرتکرار
      </h1>
      {faqs.map((item) => (
        <div
          key={item.id}
          className={`w-full mb-7 border-b dark:border-gray-700/30 overflow-hidden transition-all ${
            item.display ? "h-32 macbook:h-28 mobile:h-[120px]" : "h-10"
          }`}
        >
          <h1
            onClick={() => toggleAnswer(item.id)}
            className="flex items-center justify-between cursor-pointer mb-5 text-zinc-700 dark:text-white/90 font-DanaMedium text-lg macbook:text-base"
          >
            {item.question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`transform transition-transform duration-300 ${
                item.display ? "rotate-180" : ""
              } size-4 text-indigo-500 dark:text-indigo-400`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h1>
          <p className="text-zinc-700/80 dark:text-white/70 macbook:text-sm">
            {item.answer}
          </p>
        </div>
      ))}
      <p className="text-zinc-700/80 dark:text-white/70 text-sm mobile:text-xs text-center">هنوز سوالی دارید؟ به ما ایمیل بزنید support@gmail.com</p>
    </div>
  );
};
