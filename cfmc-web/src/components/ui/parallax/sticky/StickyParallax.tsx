"use client";

import StickyAnimatedBackground from "./StickyAnimatedBackground";
import StickyLayoutContainer from "./StickyLayoutContainer";
import StickyImageContainer from "./StickyImageContainer";
import StickyContentSection from "./StickyContentSection";
import { StickyParallaxProps } from "@/types/ui/components";

const StickyParallax = ({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
  imageSrc,
  imageAlt,
  zIndex = 1,
  disableStickyOnMobile = false,
}: StickyParallaxProps) => {
  return (
    <StickyAnimatedBackground
      colorScheme={colorScheme}
      zIndex={zIndex}
      disableStickyOnMobile={disableStickyOnMobile}
    >
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
