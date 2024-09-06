export const NavbarComponent = () => {
  return (
    <div
      className={`flex items-center justify-between border-[1px] border-transparent bg-transparent py-3 px-8 rounded-full mr-auto ml-auto transition-all gap-8 & > *:laptop:text-base macbook:hidden macbook:invisible`}
    >
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        صفحه اصلی
      </a>
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        محصولات
      </a>
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        تعرفه‌ها
      </a>
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        بلاگ
      </a>
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        درباره ما
      </a>
      <a
        href="#"
        className="text-zinc-700 dark:text-white font-DanaMedium hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
      >
        تماس با ما
      </a>
    </div>
  );
};
