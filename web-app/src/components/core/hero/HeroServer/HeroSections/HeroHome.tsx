import { FC } from "react";

// Components
import { ParticleVStack, HeroTextWrapper } from "@/components/core/hero/";
import { HeroHomeCollage } from "@/components/core/molecules";
import {
  MainGradientHeader,
  NavigationText,
  Flex,
  NavigateButton,
} from "@/components/core/ui";

// Data
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
      {/* Hero Home Text Content */}
      <HeroTextWrapper dataTestId="hero-home-text-content">
        <MainGradientHeader text={"Our Vision"} />

        <NavigationText
          containerClassName={"hover-animation shadow-up"}
          url={"/about/mission-and-vision"}
        >
          {visionStatementLong}
        </NavigationText>
      </HeroTextWrapper>

      {/* Hero Home Buttons */}
      <Flex
        containerClassName="div-flex-row gap-x-4 lg:gap-x-8 xl:gap-x-12"
        dataTestId="hero-home-buttons"
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

      {/* Hero Home Collage */}
      <HeroHomeCollage />
    </ParticleVStack>
  );
};

export default HeroCollage;
