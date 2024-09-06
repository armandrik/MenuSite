import { PlansCard } from "./PlansCard";

export const Plans = () => {
  return (
    <>
      <h1 className="font-DanaDemiBold text-4xl mb-16 text-zinc-700 text-center dark:text-white mobile:text-3xl">
        تعرفه‌ها
      </h1>
      <div className="container grid grid-cols-3 mx-auto gap-6 px-4 desktop:grid-cols-2 mobile:grid-cols-1  mobile:px-8">
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </>
  );
};
