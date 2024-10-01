"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { MusicCard } from "@/components/core/ui";

const SwiperCard: FC = () => {
  return (
    <div className="flex-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="w-72 h-96">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-full"
        >
          <SwiperSlide className="rounded-2xl shadow-lg">
            <MusicCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl shadow-lg">
            <MusicCard />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
