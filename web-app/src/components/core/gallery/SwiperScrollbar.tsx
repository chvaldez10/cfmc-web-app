"use client";

import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const SwiperFree: FC = () => {
  return (
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{
        hide: true,
        draggable: true,
      }}
      slidesPerView="auto"
      spaceBetween={30}
      className="scrollbar"
      breakpoints={{
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
  );
};

export default SwiperFree;
