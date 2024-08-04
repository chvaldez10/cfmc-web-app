"use client";

import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { EventData } from "@/types/supabaseTypes";
import { EventCard } from "@/components/core/cards";

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
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index} className="my-8">
              <EventCard
                name="Super Cool Bible Study With Long Title"
                startDate={new Date()}
                endDate={new Date()}
                category="Bible Study"
                description="Super cool Bible Study with super cool description. I am currently testing a super long description so that I can see how it looks like. I am currently testing a super long description so that I can see how it looks like. I am currently testing a super long description so that I can see how it looks like."
                image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                location="Super cool location"
                status="Active"
                organizerName="Super cool organizer"
                slug={`slug-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperFree;
