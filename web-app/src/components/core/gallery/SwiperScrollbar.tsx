"use client";

import { FC, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const SwiperFree: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex space-x-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-1/3 h-[30vh] bg-gray-200 animate-pulse rounded"
            ></div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          className="scrollbar"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className="h-[30vh] bg-purple-200"> Event {index}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperFree;
