import { FC } from "react";
import {
  Box,
  Grid,
  Flex,
  SectionSubheader,
  NextImage,
  SectionHeader,
} from "@/components/core/ui";
import { VStack } from "@/components/core/hero";
import { HeroContentProps } from "@/types/layoutProps";

interface HeroTwoImagesProps extends HeroContentProps {}

const HeroTwoImages: FC<HeroTwoImagesProps> = ({ header, longParagraph }) => (
  <VStack
    containerClassName="min-h-screen shadow-t-lg bg-gradient-to-b from-white-10 via-purple-100 to-purple-200"
    layoutClass="div-col-row"
    dataTestId="hero-two-images"
  >
    {/* Images */}
    <Grid containerClassName="resize-width-to-half grid grid-cols-2 gap-2 lg:order-first order-last">
      <Flex
        containerClassName="pt-12 lg:pt-24"
        dataTestId="our-vision-image-bottom"
      >
        <NextImage
          width={"w-full"}
          height={"h-60 lg:h-96"}
          src={
            "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/3.jpg"
          }
          alt={"Our Vision Image Bottom"}
          imageClassName={"rounded-lg object-center"}
        />
      </Flex>
      <NextImage
        width={"w-full"}
        height={"h-60 lg:h-96"}
        src={
          "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/2.jpg?t=2024-09-27T03%3A30%3A08.492Z"
        }
        alt={"Our Vision Image Top"}
        imageClassName={"rounded-lg object-center"}
      />
    </Grid>

    {/* Vision Statement */}
    <Flex
      containerClassName="div-outside-width resize-width-to-half space-y-4 text-center"
      dataTestId="our-vision-verbiage"
    >
      <SectionHeader text={header} containerClassName="xl:text-5xl" />
      <SectionSubheader
        text={longParagraph}
        containerClassName="long-paragraph-text-color"
      />
    </Flex>
  </VStack>
);

export default HeroTwoImages;
