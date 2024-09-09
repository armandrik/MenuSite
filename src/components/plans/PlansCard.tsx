import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Particles from "../magicUiComponents/Particles";

export const PlansCard = () => {

  const {theme} = useContext(themeContext)

  const listOfFeatureplan = [
    "ساخت منو فیزیکی",
    "کاستوم و شخصی‌سازی منو",
    "دسترسی به فایل پرینتی",
    "پشتیبانی از طریق ایمیل",
  ];

  return (
    <div className="relative overflow-hidden rounded-lg group border dark:border-gray-700/30 flex flex-col hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:scale-105">
      {/* <DotPattern/> */}
      <Particles color={theme === "light" ? "#1f2937" : "#fffffff"}/>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-DanaMedium text-zinc-700 dark:text-white text-2xl text-center mb-5 mobile:text-xl">
          کارت برنزی
        </h3>
        <p className="text-zinc-700 dark:text-white text-lg mobile:text-base">
          کارت برنزی بهترین کارت برای شروع
        </p>
      </div>
      <div className="p-6 pt-0 flex-grow">
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-4xl font-DanaDemiBold text-indigo-500 dark:text-indigo-400 macbook:text-3xl mobile:text-2xl">
            100تومان
          </span>
          <span className="text-sm text-zinc-700 dark:text-white">/ماهانه</span>
        </div>
        <ul className="space-y-3">
          {listOfFeatureplan.map((item, index) => {
            return (
              <li
                className="flex items-center gap-2 text-zinc-500 dark:text-gray-400"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-emerald-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[90%] h-px mx-auto bg-gray-200 dark:bg-gray-700/50"></div>
      <div className="flex items-center p-6 mt-auto">
        <button className="font-DanaDemiBold rounded-md text-indigo-500 dark:text-white border border-indigo-500 bg-transparent w-full py-3 group-hover:bg-indigo-500 group-hover:text-white transition-all">
          شروع رایگان
        </button>
      </div>
    </div>
  );
};
