import {
  Box,
  Grid,
  Flex,
  SectionSubheader,
  LongParagraph,
  NextImage,
  SectionHeader,
} from "@/components/core/ui";
import { visionStatementLong } from "@/data/hero";
import { FC } from "react";

const HeroTwoImages: FC = () => (
  <Box
    containerClassName="py-12 px-4 shadow-t-lg bg-gradient-to-b from-white-10 via-purple-100 to-purple-200"
    dataTestId="hero-two-images"
  >
    <Grid containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center resize-hero-width mx-auto">
      {/* Images */}
      <Grid containerClassName="grid grid-cols-2 gap-2 items-start lg:order-first order-last">
        <Flex containerClassName="flex pt-24 justify-start sm:justify-end lg:justify-center">
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
      <Flex containerClassName="flex flex-col items-center lg:items-start space-y-4">
        <SectionHeader text={"Our Vision"} containerClassName="xl:text-5xl" />
        <SectionSubheader
          text={visionStatementLong}
          containerClassName="long-paragraph-text-color"
        />
      </Flex>
    </Grid>
  </Box>
);

export default HeroTwoImages;
