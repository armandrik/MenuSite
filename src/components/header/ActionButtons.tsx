import { useContext, useEffect, useRef, useState } from "react";
import { ThemeDropDown } from "./ThemeDropDown";
import { themeContext } from "../../context/themeContext";

export const ActionButtons = () => {
  const [displayThemeDropDown, setDisplayThemeDropDown] =
    useState<boolean>(false);

  const isShopOpen = useRef<HTMLDivElement | null>(null);
  const { theme } = useContext(themeContext);

  const closeShop = (event: MouseEvent) => {
    if (!isShopOpen.current?.contains(event.target as Node)) {
      setDisplayThemeDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeShop);
  }, []);

  return (
    <div className="flex items-center justify-between gap-2 z-50 mobile:gap-0">
      <button className="flex items-center justify-center gap-1 px-4 h-12 font-DanaMedium bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all laptop:text-sm laptop:px-3 laptop:h-11">
        ورود / ثبت‌نام
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 laptop:size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </button>
      <div className="relative">
        <button
          onClick={() => setDisplayThemeDropDown(!displayThemeDropDown)}
          className="relative w-24 h-12 flex items-center justify-center gap-1 font-DanaMedium bg-transparent border-2 border-slate-200 rounded-xl text-zinc-700 dark:text-white dark:border-gray-600 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 dark:hover:border-indigo-300 transition-all laptop:text-sm laptop:w-20 laptop:h-11 mobile:invisible mobile:hidden"
        >
          تم
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 laptop:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 laptop:size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
        {displayThemeDropDown && <ThemeDropDown isShopOpen={isShopOpen} />}
      </div>
    </div>
  );
};
