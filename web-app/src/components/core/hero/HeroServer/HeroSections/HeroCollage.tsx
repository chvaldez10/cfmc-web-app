import { FC } from "react";
import { NextImage } from "@/components/core/gallery";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero/";
import { featuredImages } from "@/data/hero/featuredItems";
import {
  MainGradientHeader,
  NavigationText,
  FlexCenterRow,
  NavigateButton,
} from "@/components/core/ui";
import { heroContent } from "@/types/genericTypes";

interface HeroCollageClientProps extends heroContent {}

const HeroCollageClient: FC<HeroCollageClientProps> = ({
  header,
  longParagraph,
}) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh]"}>
      <HeroTextWrapper>
        <MainGradientHeader text={header} />
        <NavigationText
          containerClassName={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {longParagraph}
        </NavigationText>
      </HeroTextWrapper>

      {/* Buttons*/}
      <FlexCenterRow containerClassName="gap-x-4 md:gap-x-8">
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
      </FlexCenterRow>

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
