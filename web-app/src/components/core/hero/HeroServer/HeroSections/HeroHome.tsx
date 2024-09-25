import { FC } from "react";
import { ParticleVStack, HeroTextWrapper } from "@/components/core/hero/";
import { HeroHomeCollage } from "@/components/core/molecules";
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
    <ParticleVStack
      containerClassName={"min-h-screen"}
      itemClassName={"h-[80vh]"}
      dataTestId="homepage-hero"
    >
      <HeroTextWrapper dataTestId="homepage-hero-text-wrapper">
        <MainGradientHeader text={"Our Vision"} />
        <NavigationText
          containerClassName={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {visionStatementLong}
        </NavigationText>
      </HeroTextWrapper>

      <Flex
        containerClassName="div-flex-row gap-x-4 lg:gap-x-8 xl:gap-x-12"
        dataTestId="homepage-navigate-buttons"
      >
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

      {/* 1 by 3 collage */}
      <HeroHomeCollage />
    </ParticleVStack>
  );
};

export default HeroCollage;
