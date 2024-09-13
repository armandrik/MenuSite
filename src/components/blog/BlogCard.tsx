import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { useState } from "react";

interface BlogCardProp {
  swiperRef: React.MutableRefObject<any>;
}

interface Blog {
  id: number;
  title: string;
  describe: string;
  img: string;
  tag: string;
  author: string;
  authorImg: string;
  authorJoined: string;
  blogRealesDate: string;
}

const BlogList: Blog[] = [
  {
    id: 1,
    title: "9 راه ساده برای بهبود مهارت های طراحی",
    describe:
      "منو‌سایت با ارائه یک راه حل پیشرفته هوش مصنوعی که فرآیندهای تجاری پیچیده را ساده می کند، با این چالش ها مقابله می کند.",
    img: "https://saas-tailwind.preview.uideck.com/images/blog-03.jpg",
    tag: "طراحی",
    author: "نیما شریفی",
    authorImg: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    authorJoined: "1403",
    blogRealesDate: "30 مهر 1403",
  },
  {
    id: 2,
    title: "9 راه ساده برای بهبود مهارت های طراحی",
    describe:
      "منو‌سایت با ارائه یک راه حل پیشرفته هوش مصنوعی که فرآیندهای تجاری پیچیده را ساده می کند، با این چالش ها مقابله می کند.",
    img: "https://saas-tailwind.preview.uideck.com/images/blog-02.jpg",
    tag: "کامپیوتر",
    author: "آرمان دریک",
    authorImg: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    authorJoined: "1404",
    blogRealesDate: "30 مهر 1404",
  },
  {
    id: 3,
    title: "9 راه ساده برای بهبود مهارت های طراحی",
    describe:
      "منو‌سایت با ارائه یک راه حل پیشرفته هوش مصنوعی که فرآیندهای تجاری پیچیده را ساده می کند، با این چالش ها مقابله می کند.",
    img: "https://saas-tailwind.preview.uideck.com/images/blog-01.jpg",
    tag: "طراحی",
    author: "صبا محمدی",
    authorImg: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    authorJoined: "1403",
    blogRealesDate: "30 تیر 1403",
  },
];

export const BlogCard = ({ swiperRef }: BlogCardProp) => {
  //add setLatestBlog for changin the state
  const [latestBlog] = useState<Blog[]>(BlogList);

  return (
    <div className="mt-16 overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        className="mySwiper w-[440px] h-[630px] rounded-md macbook:w-80 macbook:h-[500px] mobile:w-64 mobile:h-96"
      >
        {latestBlog.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 p-4 mobile:p-2">
                <div className="mb-9 macbook:mb-6 mobile:mb-4">
                  <img src={item.img} alt="blog image" className="w-full" />
                </div>
                <span className="text-white font-DanaDemiBold bg-indigo-500 rounded-full py-2 px-5 mr-3 macbook:text-sm macbook:py-1 macbook:px-4 mobile:text-xs">
                  {item.tag}
                </span>
                <div className="mt-10 border-b dark:border-gray-700/30 pb-10 px-3 macbook:mt-5 macbook:pb-5 mobile:pb-3 mobile:mt-3">
                  <p className="text-zinc-700 dark:text-white text-2xl font-DanaMedium macbook:text-lg mobile:text-base">
                    {item.title}
                  </p>
                  <p className="text-zinc-700/80 dark:text-white/70 mt-4 macbook:text-sm mobile:text-xs mobile:mt-2">
                    {item.describe}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 px-3 mobile:mt-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10 rounded-full mobile:w-7 mobile:h-7"
                      src={item.authorImg}
                      alt="blog avatar"
                    />
                    <div className="text-zinc-700 dark:text-white font-DanaMedium">
                      <div className="mb-1 macbook:text-sm mobile:text-xs">{item.author}</div>
                      <div className="text-xs text-zinc-700/80 dark:text-white/70 mobile:text-[11px]">
                        عضویت در {item.authorJoined}
                      </div>
                    </div>
                  </div>
                  <div className="w-[1px] h-10 bg-zinc-200 dark:bg-gray-700/30"></div>
                  <div className="text-zinc-700 dark:text-white font-DanaMedium">
                    <p className="mb-1 macbook:text-sm mobile:text-xs">تاریخ</p>
                    <p className="text-xs text-zinc-700/80 dark:text-white/70 mobile:text-[11px]">
                      {item.blogRealesDate}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
