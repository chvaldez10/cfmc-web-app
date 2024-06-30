"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import NextImage from "../gallery/NextImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/Coverflow.css";

import { pastEvents } from "@/data/hero/featuredItems";

const CoverFlowSwiper: FC = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides={true}
      grabCursor={true}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
      }}
      className="coverflow"
    >
      {pastEvents.map((pastEvent, index) => (
        <SwiperSlide key={index}>
          <NextImage
            width={"w-full"}
            height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
            src={pastEvent.src}
            alt={pastEvent.alt}
            imageClassName={"rounded-lg object-center"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoverFlowSwiper;
