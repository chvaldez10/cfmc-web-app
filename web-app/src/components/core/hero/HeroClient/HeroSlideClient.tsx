"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import { SectionHeader, SectionSubheader } from "@/components/core/ui";
import { FlexWrapper } from "@/components/core/hero";
import { heroSection } from "@/types/genericTypes";
import "@/styles/slide.css";

interface HeroSlideClientProps extends heroSection {
  element: ReactNode;
  isFloating?: boolean;
}

const HeroSlideClient: FC<HeroSlideClientProps> = ({
  header,
  longParagraph,
  containerClassName = "",
  element,
  reverse = false,
  isFloating = false,
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";
  const textAnimationClass = textInView
    ? reverse
      ? "animate-slide-in-right"
      : "animate-slide-in-left"
    : "";
  const mapAnimationClass = mapInView
    ? reverse
      ? "animate-slide-in-left"
      : "animate-slide-in-right"
    : "";

  return (
    <FlexWrapper
      containerClassName={containerClassName}
      layoutClass={layoutClass}
      isFloating={isFloating}
    >
      {/* Text Column */}
      <div
        ref={textRef}
        className={`div-outside-width resize-width-to-half text-center gap-4 ${textAnimationClass}`}
      >
        <SectionHeader text={header} />
        <SectionSubheader text={longParagraph} className="text-gray-700" />
      </div>

      {/* Element Column */}
      <div
        ref={mapRef}
        className={`div-outside-width resize-width-to-half h-96 lg:h-576 ${mapAnimationClass}`}
      >
        {element}
      </div>
    </FlexWrapper>
  );
};

export default HeroSlideClient;
