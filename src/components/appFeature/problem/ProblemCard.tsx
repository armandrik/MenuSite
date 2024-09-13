export const ProblemCard = () => {
  return (
    <div className="p-10 mobile:p-7">
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
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
          className="w-6 h-6 text-indigo-500"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      </div>
      <p className="font-DanaMedium text-lg text-zinc-700 dark:text-white/90 my-5">
        تصمیم گیری کند
      </p>
      <p className="text-zinc-700/80 dark:text-white/70">
        روش‌های سنتی پردازش داده‌ها بسیار کند هستند و باعث می‌شوند کسب‌وکارها از
        تغییرات بازار عقب بمانند و فرصت‌های حیاتی را از دست بدهند.
      </p>
    </div>
  );
};
