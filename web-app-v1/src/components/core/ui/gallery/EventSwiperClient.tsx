"use client";

import { FC, useState, useEffect } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import { EventCard, LoadingSkeleton } from "@/components/core/ui";
import { Flex } from "@/components/core/ui";
import { Events } from "@/types/supabase/worship";
import useSlidesPerView from "@/hooks/useSlidesPerView";

const breakpoints: { screenSize: number; slidesPerView: number }[] = [
  { screenSize: 1024, slidesPerView: 2 },
];

interface EventSwiperProps {
  events: Events[] | null;
}

const EventSwiperClient: FC<EventSwiperProps> = ({ events }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const slidesPerView = useSlidesPerView(breakpoints);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex containerClassName="flex gap-2">
          {[...Array(slidesPerView)].map((_, index) => (
            <LoadingSkeleton key={index} containerClassName="w-full md:w-1/2" />
          ))}
        </Flex>
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
            1024: { slidesPerView: 2 },
          }}
        >
          {events?.map((currentEvent, index) => (
            <SwiperSlide key={index} className="my-8 ">
              <EventCard {...currentEvent} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default EventSwiperClient;
