import { PlansCard } from "./PlansCard";

export const Plans = () => {
  return (
    <div className="mt-18 pb-20 mobile:mt-0">
      <h1 className="font-DanaDemiBold text-4xl mb-16 text-zinc-700 text-center dark:text-white/90 mobile:text-2xl">
        تعرفه‌ها
      </h1>
      <div className="container grid grid-cols-3 mx-auto gap-6 px-4 desktop:grid-cols-2 mobile:grid-cols-1 mobile:px-5">
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </div>
  );
};
