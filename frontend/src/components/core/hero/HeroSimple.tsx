"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import "@/styles/slide.css";

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
  layout = "grid grid-cols-1 md:grid-cols-2",
  backgroundColor = "",
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  return (
    <div
      className={`w-full justify-center ${backgroundColor}`}
      style={{ height: "50vh" }}
    >
      <div
        className={`relative h-full ${layout} items-center mx-auto lg:max-w-5xl xl:max-w-6xl align-center p-4 lg:p-8`}
      >
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } col-span-1 mx-auto justify-center items-center text-center p-4 lg:p-6`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            {header}
          </h2>
          <p className="text-base lg:text-lg text-gray-800 w-3/4 md:w-full mx-auto">
            {verbiage}
          </p>
        </div>

        {/* Element Column */}
        <div
          ref={mapRef}
          className={`${
            mapInView ? "animate-slide-in-right" : ""
          } col-span-1 flex justify-center items-center`}
        >
          <div className="relative w-full max-w-lg flex justify-center items-center">
            {element}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSimple;
