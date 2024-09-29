"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const SwiperCard: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-60 h-80">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-full"
        >
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-red-600">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-blue-500">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-green-500">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-orange-500">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-yellow-500">
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-pink-600">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-green-700">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-blue-700">
            Slide 8
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl text-2xl font-bold text-white bg-purple-600">
            Slide 9
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
