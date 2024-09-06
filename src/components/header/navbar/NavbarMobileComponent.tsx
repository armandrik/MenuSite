import { useContext, useState } from "react";
import { themeContext } from "../../../context/themeContext";
import { ThemeButton } from "../actionButtons/theme/ThemeButton";
import { NavbarTagASection } from "./NavbarTagASection";

export const NavbarMobileComponent = () => {
  const { theme } = useContext(themeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className={isMobileMenuOpen ? "mobileMenuOpen" : "mobileMenuClose"}>
        <div className="hidden invisible p-5 mobile:visible mobile:block">
          <ThemeButton />
        </div>
        <NavbarTagASection />
      </div>
      <div
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={
          isMobileMenuOpen
            ? "hidden invisible macbook:flex macbook:visible absolute left-0 right-0 top-[376px] mx-auto w-16 items-center justify-center transition-all"
            : "hidden invisible macbook:flex macbook:visible absolute left-0 right-0 top-[57px] mx-auto w-16 items-center justify-center transition-all"
        }
      >
        <svg
          width="56"
          height="36"
          viewBox="0 0 30 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M30 0C30 1.96983 29.612 3.92037 28.8582 5.74025C28.1044 7.56014 26.9995 9.21372 25.6066 10.6066C24.2137 11.9995 22.5601 13.1044 20.7402 13.8582C18.9204 14.612 16.9698 15 15 15C13.0302 15 11.0796 14.612 9.25975 13.8582C7.43986 13.1044 5.78627 11.9995 4.3934 10.6066C3.00052 9.21372 1.89563 7.56013 1.14181 5.74025C0.387985 3.92036 -6.41851e-07 1.96982 0 -4.88762e-06L15 0L30 0Z"
            fill={theme === "light" ? "#f3f4f6" : "#1f2937"}
          />
        </svg>
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute left-0 right-0 bottom-[9px] mx-auto cursor-pointer text-zinc-900 dark:text-white hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute left-0 right-0 bottom-[9px] mx-auto cursor-pointer text-zinc-900 dark:text-white hover:text-zinc-800 dark:hover:text-gray-300 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </>
  );
};
