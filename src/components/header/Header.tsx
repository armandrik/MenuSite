import { useEffect, useState } from "react";
import { ActionButtons } from "./ActionButtons";
import { LogoComponent } from "./LogoComponent";
import { NavbarComponent } from "./NavbarComponent";
import { NavbarMobileComponent } from "./NavbarMobileComponent";

export const Header = () => {

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 mx-auto flex items-center justify-between gap-5 z-50 py-2 px-4 bg-transparent transition-all macbook:bg-gray-50 macbook:dark:bg-gray-900 mobile:px-2 ${hasScrolled ? "bg-gradient-to-b from-white to-white/20 dark:from-gray-900 dark:to-gray-900/20" : ""}`}>
      <LogoComponent />
      <NavbarComponent/>
      <NavbarMobileComponent/>
      <ActionButtons/>
    </div>
  );
};
