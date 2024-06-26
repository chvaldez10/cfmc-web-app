"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import "@/styles/slide.css";
import "@/styles/hero-floating.css";

interface HeroWithSlideAnimationProps {
  header: string;
  verbiage: string;
  element: ReactNode;
  layout?: string;
  backgroundColor?: string;
}

const HeroWithSlideAnimation: FC<HeroWithSlideAnimationProps> = ({
  header,
  verbiage,
  element,
  layout = "div-col-row",
  backgroundColor = "",
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  return (
    <div
      className={`div-outside-width min-h-screen hero-floating ${backgroundColor}`}
    >
      <div className={`${layout} resize-hero-width`}>
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } div-outside-width resize-width-to-half text-center mb-8 md:mb-0`}
        >
          <SectionHeader text={header} />
          <SectionSubheader text={verbiage} className="text-gray-700" />
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`${
            mapInView ? "animate-slide-in-right" : ""
          }  div-outside-width resize-width-to-half p-4 h-96 md:h-576 `}
        >
          {element}
        </div>
      </div>
    </div>
  );
};

export default HeroWithSlideAnimation;
