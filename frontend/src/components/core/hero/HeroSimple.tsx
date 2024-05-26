"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import "@/styles/slide.css";

interface HeroSimpleProps {
  header: string;
  verbiage: string;
  element: ReactNode;
  layout?: string;
}

const HeroSimple: FC<HeroSimpleProps> = ({
  header,
  verbiage,
  element,
  layout = "flex flex-col md:flex-row",
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  console.log("isInView", textInView);

  return (
    <div className="w-full bg-neutral-50">
      <div
        className={`relative ${layout} items-center mx-auto lg:max-w-5xl xl:max-w-6xl align-center p-4 lg:p-8`}
      >
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } flex-1 flex-col justify-center items-center text-center p-4 lg:p-6`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
            {header}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 w-3/4 md:w-full mx-auto">
            {verbiage}
          </p>
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`${
            mapInView ? "animate-slide-in-right" : ""
          } flex-1 flex justify-center p-4 lg:p-6`}
        >
          <div className="relative w-full max-w-lg">{element}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSimple;
