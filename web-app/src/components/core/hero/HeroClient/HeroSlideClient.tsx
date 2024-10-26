"use client";

import { FC } from "react";

// Components
import { SectionHeader, SectionSubheader } from "@/components/core/ui";
import { VStack } from "@/components/core/hero";

// Hooks
import useInView from "@/hooks/useInView";

// Types
import { HeroSectionProps } from "@/types/layoutProps";

// Styles
import "@/styles/slide.css";

interface HeroSlideClientProps extends HeroSectionProps {
  isFloating?: boolean;
}

const HeroSlideClient: FC<HeroSlideClientProps> = ({
  children,
  header,
  longParagraph,
  containerClassName = "",
  reverse = false,
  isFloating = false,
  dataTestId,
}) => {
  const [leftColumnRef, leftColumnInView] = useInView();
  const [rightColumnRef, rightColumnInView] = useInView();

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";
  const leftColumnAnimationClass = leftColumnInView
    ? reverse
      ? "animate-slide-in-right"
      : "animate-slide-in-left"
    : "";
  const rightColumnAnimationClass = rightColumnInView
    ? reverse
      ? "animate-slide-in-left"
      : "animate-slide-in-right"
    : "";

  return (
    <VStack
      containerClassName={containerClassName}
      layoutClass={layoutClass}
      isFloating={isFloating}
      dataTestId={dataTestId}
    >
      {/* Left Column */}
      <div
        ref={leftColumnRef}
        className={`div-outside-width resize-width-to-half text-center gap-4 ${leftColumnAnimationClass}`}
      >
        <SectionHeader text={header} />
        <SectionSubheader
          text={longParagraph}
          containerClassName="long-paragraph-text-color"
        />
      </div>

      {/* Right Column */}
      <div
        ref={rightColumnRef}
        className={`div-outside-width resize-width-to-half ${rightColumnAnimationClass}`}
      >
        {children}
      </div>
    </VStack>
  );
};

export default HeroSlideClient;
