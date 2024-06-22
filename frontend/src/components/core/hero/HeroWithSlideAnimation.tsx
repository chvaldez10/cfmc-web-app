"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import "@/styles/slide.css";
import "@/styles/blurred-background.css";
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
  layout = "flex flex-col md:flex-row",
  backgroundColor = "",
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  return (
    <div
      className={`w-full h-screen md:h-[60vh] hero-floating ${backgroundColor} flex items-center justify-center`}
    >
      <div className={` ${layout} items-center mx-auto lg:w-9/12 p-4 lg:p-8`}>
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } flex-1 flex flex-col justify-center items-center text-center p-4 lg:p-6 mb-4 md:mb-0`}
        >
          <SectionHeader text={header} />
          <SectionSubheader text={verbiage} className={"text-gray-700"} />
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`${
            mapInView ? "animate-slide-in-right" : ""
          } flex-1 flex w-full justify-center items-center`}
        >
          {element}
        </div>
      </div>
    </div>
  );
};

export default HeroWithSlideAnimation;
