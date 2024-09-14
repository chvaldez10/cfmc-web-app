import { FC } from "react";
import { NextImage } from "@/components/core/ui";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero/";
import { heroCollageImages } from "@/data/hero/featuredItems";
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
    <VerticalWrapper
      containerClassName={"min-h-screen"}
      itemClassName={"h-[80vh]"}
      dataTestId="homepage-hero"
    >
      <HeroTextWrapper>
        <MainGradientHeader text={"Our Vision"} />
        <NavigationText
          containerClassName={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {visionStatementLong}
        </NavigationText>
      </HeroTextWrapper>

      <Flex containerClassName="div-flex-row gap-x-4 lg:gap-x-8 xl:gap-x-12">
        <NavigateButton
          containerClassName="z-10 scale-up"
          url={`/events/${nextServiceSlug}`}
        >
          Next Sunday Worship
        </NavigateButton>
        <NavigateButton
          variant={"outline"}
          containerClassName="z-10 scale-up"
          url={"/media/announcements"}
        >
          Announcements
        </NavigateButton>
      </Flex>

      <Grid containerClassName="hidden-grid-1-3 w-full 3xl:w-7/12">
        {heroCollageImages.map((featuredImage, index) => (
          <div
            key={index}
            className={"opacity-0 animate-slide-up"}
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <NextImage
              key={index}
              height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
              src={featuredImage.src}
              alt={featuredImage.alt}
              containerClassName={featuredImage.containerClassName}
              imageClassName={"rounded-lg object-top"}
            />
          </div>
        ))}
      </Grid>
    </VerticalWrapper>
  );
};

export default HeroCollage;
