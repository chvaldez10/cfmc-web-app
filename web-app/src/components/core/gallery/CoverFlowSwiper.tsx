"use client";

import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import NextImage from "../gallery/NextImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./CoverFlow.css";

import { pastEvents } from "@/data/hero/featuredItems";

const CoverFlowSwiper: FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-6 px-6 resize-hero-width mx-auto lg:px-0">
      <SectionHeader text={"Past Events"} className={"text-center"} />
      <SectionSubheader
        text={"We've had an eventful year so far!"}
        className={"text-center"}
      />
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        loop={true}
        spaceBetween={30}
        slidesPerView={slidesPerView}
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
    </div>
  );
};

export default CoverFlowSwiper;
