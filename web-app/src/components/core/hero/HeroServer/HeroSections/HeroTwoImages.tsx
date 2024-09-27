import {
  Box,
  Grid,
  Flex,
  SectionSubheader,
  LongParagraph,
  NextImage,
} from "@/components/core/ui";
import { visionStatementLong } from "@/data/hero";
import { FC } from "react";

const HeroTwoImages: FC = () => (
  <Box
    containerClassName="py-12 relative resize-hero-width mx-auto"
    dataTestId="hero-two-images"
  >
    <Grid containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      {/* Images */}
      <Grid containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start lg:order-first order-last">
        <Flex containerClassName="flex pt-24 justify-start sm:justify-end lg:justify-center">
          <NextImage
            width={"w-full"}
            height={"h-96"}
            src={
              "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/3.jpg"
            }
            alt={"Our Vision Image Bottom"}
            imageClassName={"rounded-lg object-center"}
          />
        </Flex>
        <NextImage
          width={"w-full"}
          height={"h-96"}
          src={
            "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/2.jpg?t=2024-09-27T03%3A30%3A08.492Z"
          }
          alt={"Our Vision Image Top"}
          imageClassName={"rounded-lg object-center"}
        />
      </Grid>

      {/* Vision Statement */}
      <Flex containerClassName="flex flex-col items-center lg:items-start space-y-4">
        <SectionSubheader
          text={"Our Vision"}
          containerClassName="font-bold text-gray-800 text-xl"
        />
        <LongParagraph containerClassName="long-paragraph-text-color">
          {visionStatementLong}
        </LongParagraph>
      </Flex>
    </Grid>
  </Box>
);

export default HeroTwoImages;
