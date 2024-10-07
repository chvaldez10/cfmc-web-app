import { FC } from "react";
import {
  Box,
  Flex,
  NextImage,
  FlexCenter,
  SectionHeader,
  SectionSubheader,
} from "@/components/core/ui";

const HeroParallax: FC = () => {
  return (
    <FlexCenter containerClassName="min-h-screen bg-fixed bg-parallax bg-center relative">
      <Box containerClassName="absolute inset-0 bg-black opacity-50"></Box>
      <Box containerClassName="relative z-10">
        <SectionHeader
          text="Mission and Vision"
          containerClassName="text-white-0"
        />
      </Box>
    </FlexCenter>
  );
};

export default HeroParallax;
