import { SliderArrow } from "./SliderArrow";
import { useRef } from "react";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="mt-32 pb-20">
      <p className="text-center text-indigo-500 dark:text-indigo-400 mb-4">
        بلاگ
      </p>
      <h1 className="text-zinc-700 dark:text-white/90 text-center px-4 mb-16 font-DanaDemiBold text-4xl mobile:text-2xl">
        آخرین مقاله‌های منتشر شده
      </h1>
      <SliderArrow onPrev={handlePrev} onNext={handleNext} />
      <BlogCard swiperRef={swiperRef}/>
    </div>
  );
};
