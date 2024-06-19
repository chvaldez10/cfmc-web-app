"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import SectionHeader from "../text/SectionHeader";
import "@/styles/slide.css";
import "@/styles/blurred-background.css";
import "@/styles/hero-floating.css";

interface HeroSimpleProps {
  header: string;
  verbiage: string;
  element: ReactNode;
  layout?: string;
  backgroundColor?: string;
}

const HeroSimple: FC<HeroSimpleProps> = ({
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
      className={`w-full md:h-[50vh] rounded-xl hero-floating ${backgroundColor}`}
    >
      <div
        className={`h-full ${layout} items-center mx-auto lg:w-9/12 p-4 lg:p-8`}
      >
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } flex-1 flex flex-col justify-center items-center text-center p-4 lg:p-6`}
        >
          <SectionHeader text={header} />

          <p className="text-base lg:text-lg text-gray-800 w-3/4 md:w-full mx-auto">
            {verbiage}
          </p>
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`${
            mapInView ? "animate-slide-in-right" : ""
          } flex-1 flex justify-center items-center`}
        >
          {element}
        </div>
      </div>
    </div>
  );
};

export default HeroSimple;
