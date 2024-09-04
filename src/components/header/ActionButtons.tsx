import { ThemeButton } from "./ThemeButton";
import { SignUpButton } from "./SignUpButton";

export const ActionButtons = () => {
  return (
    <div
      className={`flex items-center justify-between transition-all gap-2 z-50 mobile:gap-0`}
    >
      <div className="mobile:invisible mobile:hidden">
        <ThemeButton />
      </div>
      <SignUpButton />
    </div>
  );
};
