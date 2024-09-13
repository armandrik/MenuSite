interface SliderArrowProps {
  onPrev: () => void;
  onNext: () => void;
}

export const SliderArrow = ({ onPrev, onNext }: SliderArrowProps) => {
  return (
    <div className="flex items-center justify-center gap-16 mb-5 mobile:gap-10">
      <button
        onClick={onPrev}
        className="text-white bg-indigo-500 py-3 px-10 rounded-md hover:bg-indigo-400 transition-all macbook:px-6 macbook:py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 macbook:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="text-white bg-indigo-500 py-3 px-10 rounded-md hover:bg-indigo-400 transition-all macbook:px-6 macbook:py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 macbook:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
};
