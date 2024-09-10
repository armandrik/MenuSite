import ShineBorder from "../../magicUiComponents/ShineBorder";
import { ProblemCard } from "./ProblemCard";

export const Problem = () => {
  return (
    <div className="mb-20">
      <p className="text-center text-indigo-500 dark:text-indigo-400 mb-4">
        مشکل
      </p>
      <h1 className="text-center text-zinc-700 dark:text-white px-4 font-DanaDemiBold text-4xl mb-20 mobile:text-2xl">
        داشتن یه منو خوب دردسر های زیادی داره.
      </h1>
      <div className="container grid grid-cols-3 mx-auto gap-6 px-4 desktop:grid-cols-2 mobile:grid-cols-1 mobile:px-5">
        <ShineBorder children={<ProblemCard />} />
        <ShineBorder children={<ProblemCard />} />
        <ShineBorder children={<ProblemCard />} />
      </div>
    </div>
  );
};
