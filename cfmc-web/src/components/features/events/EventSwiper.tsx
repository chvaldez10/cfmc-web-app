"use client";

import React, { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Chakra UI
import { Box, useBreakpointValue } from "@chakra-ui/react";

// Types
import { Events } from "@/types/supabase/worship";

// Utils
import { getFeaturedEvents } from "@/lib/supabase/actions/events";

// Constants
import { COMMON_X_PADDING } from "@/constants/theme/ui";

// Components
import EventCard from "./EventCard";

const EventSwiper = () => {
  const breakpoint = useBreakpointValue({
    base: 1.2,
    sm: 1.5,
    md: 2.3,
    lg: 3.2,
    xl: 4.1,
  });

  const [featuredEvents, setFeaturedEvents] = useState<Events[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getFeaturedEvents();
      setFeaturedEvents(events || []);
    };
    fetchEvents();
  }, []);

  // Preload first 3 images for better UX
  useEffect(() => {
    if (featuredEvents.length > 0) {
      featuredEvents.slice(0, 3).forEach((event) => {
        if (event.image) {
          const img = new window.Image();
          img.src = event.image;
        }
      });
    }
  }, [featuredEvents]);

  return (
    <Box
      overflow="hidden"
      py={8}
      px={COMMON_X_PADDING}
      mx="auto"
      maxW={{ base: "full", md: "7xl" }}
      id="events-swiper"
    >
      <Swiper
        spaceBetween={24}
        slidesPerView={breakpoint}
        freeMode={true}
        modules={[FreeMode]}
      >
        {featuredEvents.map((event, index) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} isFirstSlide={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EventSwiper;
