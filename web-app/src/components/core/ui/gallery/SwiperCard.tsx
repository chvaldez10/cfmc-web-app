"use client";

import { Flex, Box, SectionSubheader } from "@/components/core/ui";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { MusicCard } from "@/components/core/ui";
import { suggestedWorshipSongs } from "@/data/hero/worshipItems";

const SwiperCard: FC = () => {
  return (
    <>
      <Flex containerClassName="flex-center min-h-[80vh]">
        <Box containerClassName="w-72 h-96">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full h-full"
          >
            {suggestedWorshipSongs.map((song, index) => (
              <SwiperSlide key={index} className="rounded-2xl shadow-lg">
                <MusicCard {...song} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </>
  );
};

export default SwiperCard;
