import { Problem } from "./problem/Problem";
import { Solution } from "./Solution/Solution";

export const AppFeature = () => {
  return (
    <div className="mt-18 mobile:mt-24 pb-20">
      <Problem />
      <Solution />
    </div>
  );
};
