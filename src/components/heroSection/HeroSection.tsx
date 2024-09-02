import AnimatedShinyText from "../magicUiComponents/AnimatedShinyText";
import DotPattern from "../magicUiComponents/DotPattern";
import BlurIn from "../magicUiComponents/GradualSpacing";
import SparklesText from "../magicUiComponents/SparklesText";
import WordPullUp from "../magicUiComponents/WorlPullUp";

export const HeroSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <DotPattern />
      {/* content section */}
      <div className="h-dvh flex flex-col items-center justify-start pt-40 px-20 macbook:px-8 mobile:pt-32 mobile:px-4">
        <div className="group rounded-full border border-black/5 bg-neutral-200 text-base text-zinc-700 mb-5 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-800 mobile:mb-2 mobile:text-xs">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>معرفی کردن منوسایت ✨</span>
          </AnimatedShinyText>
        </div>
        <WordPullUp
          words={`منو‌سایت روشی جدید و مدرن در طراحی منوهای سفارشی شما.`}
        />
        <BlurIn word="طراحی زیباو کاستوم با استفاده از بروزترین متدهای روز دنیا برای کافه و رستوران شما." />
        <div className="flex items-center justify-center gap-5">
          <SparklesText text="شروع رایگان!" />
          <button className="flex items-center justify-center gap-1 font-DanaMedium bg-transparent border-2 border-gray-400 rounded-xl text-zinc-700 text-lg dark:text-white dark:border-white/80 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 dark:hover:border-indigo-300 transition-all w-44 h-14 px-4 mobile:text-sm mobile:w-36 mobile:h-12">
            بیشتر بخوانید
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
