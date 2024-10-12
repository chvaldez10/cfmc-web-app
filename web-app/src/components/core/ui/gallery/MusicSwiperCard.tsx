"use client";

import { FC, useState } from "react";

// Components
import { Flex, Box, SectionHeader, LongParagraph } from "@/components/core/ui";
import { MusicCard } from "@/components/core/ui";
import { VStack } from "@/components/core/hero";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// Types
import { WorshipSongs } from "@/types/supabase/worship";

interface MusicSwiperCardProps {
  featuredWorshipSongs: WorshipSongs[];
}

const MusicSwiperCard: FC<MusicSwiperCardProps> = ({
  featuredWorshipSongs,
}) => {
  const [progress, setProgress] = useState<number>(0);

  const handleCardChange = (swiper: any) => {
    const newProgress =
      (swiper.activeIndex / (featuredWorshipSongs.length - 1)) * 100;
    setProgress(newProgress);
  };

  return (
    <VStack
      containerClassName="min-h-[80vh] space-y-4"
      layoutClass="flex flex-col"
    >
      <Box containerClassName="mx-auto max-w-3xl space-y-4 text-center">
        <SectionHeader text="Suggested Worship Songs" />
        <LongParagraph containerClassName="long-paragraph-text-color">
          {"Browse our suggested worship songs below."}
        </LongParagraph>
      </Box>

      <Flex containerClassName="flex-center max-w-fit mx-auto">
        <Box containerClassName="w-62 md:w-72 min-h-96">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full h-full"
            onSlideChange={handleCardChange}
          >
            {featuredWorshipSongs.map((song, index) => (
              <SwiperSlide key={index} className="rounded-2xl shadow-lg">
                <MusicCard {...song} progress={progress} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </VStack>
  );
};

export default MusicSwiperCard;
