import { ThemeButton } from "./ThemeButton";

export const ActionButtons = () => {

  return (
    <div className={`flex items-center justify-between transition-all gap-2 z-50 mobile:gap-0`}>
      <button className="flex items-center justify-center gap-1 px-4 h-12 font-DanaMedium bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all desktop:text-sm desktop:px-3 desktop:h-11">
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
      <div className="mobile:invisible mobile:hidden">
        <ThemeButton />
      </div>
    </div>
  );
};
