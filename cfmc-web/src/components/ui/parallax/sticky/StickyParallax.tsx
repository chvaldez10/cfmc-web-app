"use client";

import type { TextBlock } from "@/types/ui/components";

import { AllowedColorSchemes } from "@/constants/shared/enums";

import StickyAnimatedBackground from "./StickyAnimatedBackground";
import StickyLayoutContainer from "./StickyLayoutContainer";
import StickyImageContainer from "./StickyImageContainer";
import StickyContentSection from "./StickyContentSection";

interface StickyParallaxProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  zIndex?: number;
}

const StickyParallax = ({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
  imageSrc,
  imageAlt,
  zIndex = 1,
}: StickyParallaxProps) => {
  return (
    <StickyAnimatedBackground colorScheme={colorScheme} zIndex={zIndex}>
      <StickyLayoutContainer reverse={reverse}>
        <StickyImageContainer
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          priority={zIndex === 1}
        />
        <StickyContentSection
          title={title}
          textBlocks={textBlocks}
          colorScheme={colorScheme}
          reverse={reverse}
        />
      </StickyLayoutContainer>
    </StickyAnimatedBackground>
  );
};

export default StickyParallax;
