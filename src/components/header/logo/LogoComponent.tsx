import mainLogo from "/assets/main-logo.svg";

export const LogoComponent = () => {

  return (
    <div className={`flex items-center justify-start transition-all gap-2 cursor-pointer w-[253px] z-50 desktop:w-auto`}>
      <img src={mainLogo} className="w-9 h-9" />
      <h1 className="font-DanaDemiBold text-xl text-zinc-700 dark:text-white laptop:text-lg">منوسایت</h1>
    </div>
  );
};
