"use client";

import { FC, useState } from "react";
import { Flex, Box, SectionSubheader } from "@/components/core/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { MusicCard } from "@/components/core/ui";
import { suggestedWorshipSongs } from "@/data/hero/worshipItems";

const SwiperCard: FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleCardChange = (swiper: any) => {
    const newProgress =
      (swiper.activeIndex / (suggestedWorshipSongs.length - 1)) * 100;
    setProgress(newProgress);
  };

  return (
    <>
      <Flex containerClassName="flex-center min-h-[80vh]">
        <Box containerClassName="w-72 h-96">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full h-full"
            onSlideChange={handleCardChange}
          >
            {suggestedWorshipSongs.map((song, index) => (
              <SwiperSlide key={index} className="rounded-2xl shadow-lg">
                <MusicCard {...song} progress={progress} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </>
  );
};

export default SwiperCard;
