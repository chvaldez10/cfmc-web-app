"use client";

import { FC, useState } from "react";
import { Flex, Box, SectionHeader } from "@/components/core/ui";
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
    <Box containerClassName="resize-hero-width text-center mx-auto">
      <SectionHeader
        text="Suggested Worship Songs"
        containerClassName="mx-auto"
      />

      {/* TODO: fix bug for small screens */}
      <Box containerClassName="hidden-for-small-width">
        <Flex containerClassName="flex-center min-h-[80vh] md:min-h-[60vh] max-w-fit mx-auto">
          <Box containerClassName="w-62 md:w-72 min-h-96">
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
      </Box>
    </Box>
  );
};

export default SwiperCard;
