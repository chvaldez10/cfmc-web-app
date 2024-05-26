"use client";

import { FC } from "react";
import useInView from "@/hooks/useInView";
import "./slide.css";

const HeroTemplate: FC = () => {
  const [textRef, textInView] = useInView();

  console.log("isInView", textInView);

  return (
    <div className="w-full bg-neutral-50">
      <div className="relative flex flex-col items-center mx-auto md:flex-row lg:max-w-5xl xl:max-w-6xl align-center p-4 lg:p-8">
        {/* Text Column */}
        <div
          ref={textRef}
          className={`${
            textInView ? "animate-slide-in-left" : ""
          } flex-1 flex flex-col justify-center items-center text-center  p-4 lg:p-6`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
            Sunday Service
          </h2>
          <p className="text-base lg:text-lg text-gray-600 w-3/4 md:w-full">
            2:00 PM | 419 Northmount Drive NW, Calgary, AB
          </p>
        </div>

        {/* Map Column */}
        <div
          className={`${
            textRef ? "animate-slide-in-right" : ""
          } flex-1 flex justify-center p-4 lg:p-6`}
        >
          <div className="relative w-full max-w-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.821665914685!2d-114.0807365!3d51.0932986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371658521e49643%3A0xe758ea3bb43192eb!2s419%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203H7!5e0!3m2!1sen!2sca!4v1716651064489!5m2!1sen!2sca"
              width="100%"
              height="300"
              className="rounded-lg shadow-lg border-4 border-white-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-green-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
