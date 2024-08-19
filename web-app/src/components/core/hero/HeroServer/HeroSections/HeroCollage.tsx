import { FC } from "react";
import { NextImage } from "@/components/core/gallery";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero/";
import { featuredImages } from "@/data/hero/featuredItems";
import {
  MainGradientHeader,
  NavigationText,
  Flex,
  NavigateButton,
  Grid,
} from "@/components/core/ui";
import { visionStatementLong } from "@/data/hero/";

interface HeroCollageProps {
  nextServiceSlug: string | undefined;
}

const HeroCollage: FC<HeroCollageProps> = ({ nextServiceSlug }) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh] min-h-screen"}>
      <HeroTextWrapper>
        <MainGradientHeader text={"Our Vision"} />
        <NavigationText
          containerClassName={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {visionStatementLong}
        </NavigationText>
      </HeroTextWrapper>

      <Flex containerClassName="div-flex-row gap-x-4 md:gap-x-8">
        {/* TODO: Please remove this test slug after testing */}
        <NavigateButton
          className="z-10 scale-up"
          url={`/event/${nextServiceSlug}`}
        >
          Next Sunday Service
        </NavigateButton>
        <NavigateButton
          variant={"outline"}
          className="z-10 scale-up"
          url={"/media/announcements"}
        >
          Announcements
        </NavigateButton>
      </Flex>

      <Grid containerClassName="hidden-grid-1-3 w-full 3xl:w-7/12">
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
      </Grid>
    </VerticalWrapper>
  );
};

export default HeroCollage;
