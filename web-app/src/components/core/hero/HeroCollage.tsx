import { FC } from "react";
import NextImage from "@/components/core/gallery/NextImage";
import VerticalWrapper from "./molecules/VerticalWrapper";
import HeroTextWrapper from "./molecules/HeroTextWrapper";
import { featuredImages } from "@/data/hero/featuredItems";
import { NavigateButton } from "@/components/core/buttons";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";
import CustomParagraph from "../text/CustomParagraph";
import { heroContent } from "@/types/genericTypes";

interface HeroCollageClientProps extends heroContent {}

const HeroCollageClient: FC<HeroCollageClientProps> = ({
  header,
  longParagraph,
}) => {
  return (
    <VerticalWrapper>
      <HeroTextWrapper>
        <MainGradientHeader text={header} />
        <CustomParagraph
          className={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {longParagraph}
        </CustomParagraph>
      </HeroTextWrapper>

      {/* Buttons*/}
      <div className="flex flex-row gap-x-4 md:gap-x-8">
        <NavigateButton
          className="z-10 scale-up"
          url={"/get-involved/upcoming"}
        >
          Find a Service
        </NavigateButton>
        <NavigateButton
          variant={"outline"}
          className="z-10 scale-up"
          url={"/media/announcements"}
        >
          Announcements
        </NavigateButton>
      </div>

      {/* Image Column */}
      <div className="hidden-grid-1-3 w-full 3xl:w-7/12">
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
    </VerticalWrapper>
  );
};

export default HeroCollageClient;
