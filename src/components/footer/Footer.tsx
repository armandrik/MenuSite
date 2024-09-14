import { LogoComponent } from "../header/logo/LogoComponent";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-10 md:py-8 mobile:py-4 mobile:px-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <LogoComponent/>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-Dana text-gray-500 sm:mb-0 dark:text-gray-400 mobile:mt-10">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                درباره‌ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                محصولات
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                تعرفه‌ها
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mobile:text-center">
          © 2024{" "}
          <a href="https://menusite-beta.netlify.app" className="hover:underline">
            menusite™
          </a>
          حق کپی رایت
        </span>
      </div>
    </footer>
  );
};
