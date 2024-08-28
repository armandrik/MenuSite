import { ActionButtons } from "./ActionButtons";
import { LogoComponent } from "./LogoComponent";
import { NavbarComponent } from "./NavbarComponent";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 mx-auto flex items-center justify-between py-2 px-4 border-b border-slate-200 bg-zinc-50 dark:bg-zinc-900 mobile:px-2">
      <LogoComponent />
      <NavbarComponent/>
      <ActionButtons/>
    </div>
  );
};
