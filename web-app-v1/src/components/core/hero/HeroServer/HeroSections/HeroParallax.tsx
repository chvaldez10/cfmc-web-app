import { FC } from "react";
import {
  Box,
  FlexCenter,
  SectionHeader,
  SectionSubheader,
} from "@/components/core/ui";
import { HeroContentProps } from "@/types/layoutProps";

interface HeroParallaxProps extends HeroContentProps {}

const HeroParallax: FC<HeroParallaxProps> = ({ header, longParagraph }) => {
  return (
    <FlexCenter containerClassName="min-h-screen bg-fixed bg-parallax bg-center relative">
      <Box containerClassName="absolute inset-0 bg-black opacity-50"></Box>
      <Box containerClassName="relative z-10">
        <SectionHeader text={header} containerClassName="text-white-0" />
        <SectionSubheader
          text={longParagraph}
          containerClassName="text-white-0"
        />
      </Box>
    </FlexCenter>
  );
};

export default HeroParallax;
