"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import "@/styles/slide.css";
import "@/styles/hero-floating.css";

interface HeroSlideClientProps {
  header: string;
  verbiage: string;
  element: ReactNode;
  reverse?: boolean;
  backgroundColor?: string;
}

const HeroSlideClient: FC<HeroSlideClientProps> = ({
  header,
  verbiage,
  element,
  reverse = false,
  backgroundColor = "",
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
    <div
      className={`div-outside-width min-h-screen hero-floating ${backgroundColor}`}
    >
      <div className={`${layoutClass} resize-hero-width`}>
        {/* Text Column */}
        <div
          ref={textRef}
          className={`div-outside-width resize-width-to-half text-center mb-8 md:mb-0 ${textAnimationClass}`}
        >
          <SectionHeader text={header} />
          <SectionSubheader text={verbiage} className="text-gray-700" />
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`div-outside-width resize-width-to-half p-4 h-96 md:h-576 ${mapAnimationClass}`}
        >
          {element}
        </div>
      </div>
    </div>
  );
};

export default HeroSlideClient;
