import { FC } from "react";
import {
  Box,
  NextImage,
  FlexCenter,
  SectionHeader,
  SectionSubheader,
} from "@/components/core/ui";

const HeroParallax: FC = () => {
  return (
    <Box containerClassName="relative h-screen overflow-hidden">
      {/* Fixed background image */}
      <Box containerClassName="absolute inset-0">
        <NextImage
          src="https://images.unsplash.com/photo-1541346183200-e8e117d945dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          height="h-full"
          imageClassName=" object-center w"
        />
        <Box containerClassName="absolute inset-0 bg-black bg-opacity-50"></Box>
      </Box>

      {/* Scrollable content */}
      <Box containerClassName="relative z-10 h-full overflow-y-auto">
        <FlexCenter containerClassName="min-h-screen text-center text-white-0 p-4">
          <SectionHeader text={"Mission and Vision"} />
          <SectionSubheader text={"Mission and Vision"} />
        </FlexCenter>

        {/* Additional content to enable scrolling */}
        <FlexCenter containerClassName="min-h-screen bg-white-10">
          <SectionHeader text={"Scroll for More"} />
        </FlexCenter>
      </Box>
    </Box>
  );
};

export default HeroParallax;
