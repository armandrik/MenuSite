import { useContext } from "react";
import { themeContext } from "../../../context/themeContext";
import Ripple from "../../magicUiComponents/Ripple";
import GridPattern from "../../magicUiComponents/GridPattern";
import DotPattern from "../../magicUiComponents/DotPattern";

export const Solution = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className="mt-32 mb-24 bg-gray-50 dark:bg-gray-900">
      <p className="text-center text-indigo-500 dark:text-indigo-400 mb-4">
        راه‌حل
      </p>
      <h1 className="text-center text-zinc-700 dark:text-white px-4 font-DanaDemiBold text-4xl mb-4 mobile:text-2xl">
        کسب و کار خود را با گردش کار هوش مصنوعی تقویت کنید
      </h1>
      <p className="text-zinc-700/80 dark:text-white/70 text-center mx-auto w-2/5 mb-24 macbook:w-[90%]">
        ابزارهای هوش مصنوعی عمومی کافی نیستند. پلت فرم ما برای ارائه راه حل های
        استثنایی مبتنی بر هوش مصنوعی برای نیازهای تجاری منحصر به فرد شما ساخته
        شده است.
      </p>
      <div className="grid grid-rows-2 grid-cols-3 gap-5 max-w-[1240px] px-10 mx-auto laptop:grid-rows-3 laptop:grid-cols-2 laptop:max-w-[900px] tablet:grid-cols-1 tablet:px-5 tablet:grid-rows-5 tablet:flex tablet:flex-col tablet:items-center tablet:justify-center">
        <div className="relative bg-gray-100 dark:bg-gray-800/10 rounded-lg h-96 px-5 py-6 group overflow-hidden tablet:h-80">
          <Ripple />
          <p className="font-DanaMedium text-indigo-500 dark:text-indigo-400 mb-3">
            یکپارچه سازی بدون درز
          </p>
          <p className="text-zinc-700 dark:text-white">
            راه حل های هوش مصنوعی ما را به راحتی در جریان کار و سیستم های موجود
            خود ادغام کنید تا عملکردی روان و کارآمد داشته باشید.
          </p>
          <div className="w-full relative">
            <img
              className="absolute top-0 left-0 right-0 mx-auto mt-16 rounded-sm h-52 shadow-xl group-hover:-top-3 transition-all"
              src={
                theme === "light"
                  ? "https://startup-template-sage.vercel.app/hero-light.png"
                  : "https://startup-template-sage.vercel.app/hero-dark.png"
              }
              alt="image"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
              }}
            />
          </div>
        </div>
        <div className="relative bg-gray-100 dark:bg-gray-800/10 rounded-lg h-96 px-5 py-6 group overflow-hidden tablet:h-80">
          <Ripple />
          <p className="font-DanaMedium text-indigo-500 dark:text-indigo-400 mb-3">
            یکپارچه سازی بدون درز
          </p>
          <p className="text-zinc-700 dark:text-white">
            راه حل های هوش مصنوعی ما را به راحتی در جریان کار و سیستم های موجود
            خود ادغام کنید تا عملکردی روان و کارآمد داشته باشید.
          </p>
          <div className="w-full relative">
            <img
              className="absolute top-0 left-0 right-0 mx-auto mt-16 rounded-sm h-52 shadow-xl group-hover:-top-3 transition-all"
              src={
                theme === "light"
                  ? "https://startup-template-sage.vercel.app/hero-light.png"
                  : "https://startup-template-sage.vercel.app/hero-dark.png"
              }
              alt="image"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
              }}
            />
          </div>
        </div>
        <div className="relative bg-gray-100 dark:bg-gray-800/10 col-span-2 overflow-hidden rounded-lg px-5 py-6 group tablet:h-80">
          <DotPattern className="fill-indigo-400/40 dark:fill-indigo-400/40"/>
          <p className="font-DanaMedium text-indigo-500 dark:text-indigo-400 mb-3">
            یکپارچه سازی بدون درز
          </p>
          <p className="text-zinc-700 dark:text-white">
            راه حل های هوش مصنوعی ما را به راحتی در جریان کار و سیستم های موجود
            خود ادغام کنید تا عملکردی روان و کارآمد داشته باشید.
          </p>
          <div className="w-full relative">
            <img
              className="absolute top-24 left-0 right-0 mx-auto mt-16 rounded-sm h-64 shadow-xl scale-[1.4] group-hover:top-16 transition-all tablet:scale-[1] tablet:h-52 tablet:top-0 tablet:group-hover:-top-3"
              src={
                theme === "light"
                  ? "https://startup-template-sage.vercel.app/hero-light.png"
                  : "https://startup-template-sage.vercel.app/hero-dark.png"
              }
              alt="image"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 90%)",
              }}
            />
          </div>
        </div>
        <div className="relative bg-gray-100 dark:bg-gray-800/10 rounded-lg px-5 py-6 overflow-hidden group row-span-2 row-start-1 tablet:h-80">
          <GridPattern className="text-indigo-200/50 dark:text-indigo-400/30"/>
          <p className="font-DanaMedium text-indigo-500 dark:text-indigo-400 mb-3">
            یکپارچه سازی بدون درز
          </p>
          <p className="text-zinc-700 dark:text-white">
            راه حل های هوش مصنوعی ما را به راحتی در جریان کار و سیستم های موجود
            خود ادغام کنید تا عملکردی روان و کارآمد داشته باشید.
          </p>
          <div className="relative w-full">
            <img
              className="absolute top-36 left-80 mt-16 rounded-sm shadow-xl scale-[2.8] group-hover:left-72 transition-all laptop:scale-[2.6] tablet:h-52 tablet:scale-[1] tablet:left-0 tablet:right-0 tablet:mx-auto tablet:top-0 tablet:group-hover:-top-3 tablet:group-hover:left-0"
              src={
                theme === "light"
                  ? "https://startup-template-sage.vercel.app/hero-light.png"
                  : "https://startup-template-sage.vercel.app/hero-dark.png"
              }
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
