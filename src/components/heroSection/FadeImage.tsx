import React, { useState, useEffect } from 'react';

interface FadeImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FadeImage: React.FC<FadeImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setImageError(true);
    };
  }, [src]);

  return (
    <div className={`relative mt-36 bg-gray-50 dark:bg-gray-900 shadow-heroImgShadow dark:shadow-heroImgShadowDark macbook:shadow-heroImgShadowLaptop dark:macbook:shadow-heroImgShadowLaptopDark macbook:mt-24 tablet:shadow-heroImgShadowTablet dark:tablet:shadow-heroImgShadowTabletDark mobile:shadow-heroImgShadowMobile dark:mobile:shadow-heroImgShadowMobileDark mobile:mt-14 ${className}`}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600"></div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover rounded-xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />
      )}
      {imageError && (
        <p className="text-center text-sm text-gray-500 mobile:text-xs">برای بارگذاری عکس رفرش کنید</p>
      )}
    </div>
  );
};

export default FadeImage;
