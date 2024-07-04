"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import NextImage from "@/components/core/gallery/NextImage";
import { featuredImages } from "@/data/hero/featuredItems";

import ParticlesBackground from "@/components/core/background/ParticlesBackground";

import PurplePillButton from "../buttons/PurplePillButton";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";
import CustomParagraph from "../text/CustomParagraph";
import { heroContent } from "@/types/genericTypes";

interface HeroCollageProps extends heroContent {}

const HeroCollage: FC<HeroCollageProps> = ({ header, longParagraph }) => {
  const router = useRouter();

  return (
    <div className="div-outside-width gap-4 min-h-screen" id="hero-collage">
      <ParticlesBackground />

      <div className="div-outside-width resize-hero-width z-10 h-[80vh] gap-4">
        {/* Text Column */}
        <div className="div-outside-width z-10 xl:max-w-4xl ">
          <MainGradientHeader text={header} />
          <CustomParagraph
            onClick={() => router.push("/about/mission-and-vision")}
            className={"hover-animation shadow-up"}
          >
            {longParagraph}
          </CustomParagraph>
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
        <div className="hidden md:grid grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-2 w-full 3xl:w-7/12">
          {featuredImages.map((featuredImage, index) => (
            <NextImage
              key={index}
              height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
              src={featuredImage.src}
              alt={featuredImage.alt}
              containerClassName={featuredImage.containerClassName}
              imageClassName={"rounded-lg object-top"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCollage;
