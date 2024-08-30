import { ActionButtons } from "./ActionButtons";
import { LogoComponent } from "./LogoComponent";
import { NavbarComponent } from "./NavbarComponent";
import { NavbarMobileComponent } from "./NavbarMobileComponent";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 mx-auto flex items-center justify-between z-50 py-2 px-4 border-b border-slate-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 mobile:px-2">
      <LogoComponent />
      <NavbarComponent/>
      <NavbarMobileComponent/>
      <ActionButtons/>
    </div>
  );
};
