"use client";

import { FC } from "react";
import ImageCollageItem from "@/components/core/gallery/ImageCollageItem";
import { featuredImages } from "@/data/hero/featuredItems";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";
import PurplePillButton from "../buttons/PurplePillButton";
import { useRouter } from "next/navigation";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";

const HeroCollage: FC = () => {
  const router = useRouter();

  return (
    <div className="div-outside-width gap-4 h-screen" id="hero-collage">
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="div-outside-width resize-hero-width z-10 h-[80vh] gap-4">
        {/* Text Column */}
        <div className="div-outside-width z-10 xl:max-w-4xl ">
          <MainGradientHeader text={"Our Vision"} />
          {/* Note: Can turn this p tag to a component*/}
          <p
            className="text-lg md:text-xl lg:text-2xl px-6 bg-white-10 text-gray-700 rounded-md hover-animation shadow-up"
            onClick={() => router.push("/about/mission-and-vision")}
          >
            To be a Church that glorifies God, shepherds in Christ, and is
            filled with the Holy Spirit, dedicated to fulfilling God's mission
            in the city.
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
        <div className="hidden md:grid grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-2 w-full">
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
    </div>
  );
};

export default HeroCollage;
