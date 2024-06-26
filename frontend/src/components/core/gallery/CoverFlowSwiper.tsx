"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const photos: string[] = [
  "https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const CoverFlowSwiper: FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <SectionHeader text={"Past Events"} />
        <SectionSubheader
          text={"We've had an eventful year so far!"}
          className={"text-center"}
        />
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo} alt={`Cover Flow Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoverFlowSwiper;
