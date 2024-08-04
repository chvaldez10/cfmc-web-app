"use client";

import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { EventData } from "@/types/supabaseTypes";
import { EventCard } from "@/components/core/cards";
import { upcomingEvents } from "@/data/testData/churchEvents";

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
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-1/2 h-48 bg-gray-200 animate-pulse rounded"
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
          className="scrollbar cursor-grabbing"
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
        >
          {/* mocking eventData */}
          {upcomingEvents.map((currentEvent, index) => (
            <SwiperSlide key={index} className="my-8">
              <EventCard {...currentEvent} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperFree;
