export const ContactForm = () => {
  return (
    <form action="#" className="space-y-10 my-20 w-3/5 mx-auto macbook:w-full">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 font-DanaMedium text-gray-900 dark:text-gray-300 mobile:text-sm pr-2"
        >
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm border bg-transparent h-12 font-Dana text-zinc-700 text-sm rounded-lg outline-none block w-full p-2.5 dark:border-gray-700/30 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
          placeholder="support@gmail.com"
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 font-DanaMedium text-gray-900 dark:text-gray-300 mobile:text-sm pr-2"
        >
          موضوع
        </label>
        <input
          type="text"
          id="subject"
          className="shadow-sm border bg-transparent h-12 font-Dana text-zinc-700 text-sm rounded-lg outline-none block w-full p-2.5 dark:border-gray-700/30 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
          placeholder="چگونه می توانیم به شما کمک کنیم"
          required
          autoComplete="off"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 font-DanaMedium text-gray-900 dark:text-gray-400 mobile:text-sm pr-2"
        >
          پیام شما
        </label>
        <textarea
          id="message"
          className="shadow-sm border bg-transparent font-Dana text-zinc-700 text-sm rounded-lg outline-none block w-full p-2.5 dark:border-gray-700/30 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
          placeholder="نظراتتون رو برامون بنویسید"
          rows={7}
          autoComplete="off"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-10 h-12 font-DanaMedium bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all mobile:text-sm mobile:px-6"
      >
        ارسال نظر
      </button>
    </form>
  );
};
