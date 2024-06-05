"use client";

import { FC } from "react";
import ImageCollageItem from "@/components/core/gallery/ImageCollageItem";
import { featuredImages } from "./featuredItems";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";
import PurplePillButton from "../buttons/PurplePillButton";
import { useRouter } from "next/navigation";

const HeroCollage: FC = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-10/12 flex flex-col gap-4 h-screen">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Text Column */}
      <div className="w-full z-10 flex flex-col items-center text-center xl:max-w-4xl 2xl:mt-20">
        <h2 className="text-4xl md:mb-4 md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
          Our Vision
        </h2>
        <p
          className="text-lg md:text-xl lg:text-2xl px-6 bg-purple-50 text-gray-700 rounded-md hover-animation shadow-up"
          onClick={() => router.push("/about/mission-and-vision")}
        >
          To be a Church that glorifies God, shepherds in Christ, and is filled
          with the Holy Spirit, dedicated to fulfilling God's mission in the
          city.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-row gap-x-4 md:gap-x-8">
        <PurplePillButton
          onClick={() => router.push("/sunday-services")}
          className="z-10 scale-up"
        >
          Find a Service
        </PurplePillButton>
        <PurplePillButton
          onClick={() => router.push("/media/announcements")}
          variant={"outline"}
          className="z-10 scale-up"
        >
          Announcements
        </PurplePillButton>
      </div>

      {/* Image Column */}
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 w-full z-10">
        {featuredImages.map((featuredImage, index) => (
          <ImageCollageItem
            key={index}
            src={featuredImage.src}
            alt={featuredImage.alt}
            containerClassName={featuredImage.containerClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
