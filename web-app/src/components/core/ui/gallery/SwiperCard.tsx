"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { MusicCard } from "@/components/core/ui";

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
          <SwiperSlide className="flex items-center justify-center rounded-2xl ">
            <MusicCard />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-2xl">
            <MusicCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
