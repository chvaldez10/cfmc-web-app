"use client";

import { FC } from "react";
import NextImage from "./NextImage";
import { ImageProps } from "@/types/genericTypes";

// Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "@/styles/cover-flow.css";

interface CoverFlowSwiperProps {
  swiperImages: ImageProps[];
}

const CoverFlowSwiper: FC<CoverFlowSwiperProps> = ({ swiperImages }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
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
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      className="coverflow"
    >
      {swiperImages.map((swiperImage, index) => (
        <SwiperSlide key={index}>
          <NextImage
            width={"w-full"}
            height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
            src={swiperImage.src}
            alt={swiperImage.alt}
            imageClassName={"rounded-lg object-center"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoverFlowSwiper;
