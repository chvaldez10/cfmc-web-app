import {
  Box,
  Grid,
  Flex,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/ui";
import { visionStatementLong } from "@/data/hero";
import { FC } from "react";

const HeroTwoImages: FC = () => (
  <Box
    containerClassName="py-12 relative resize-hero-width mx-auto"
    dataTestId="hero-two-images"
  >
    <Grid containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <Grid containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start lg:order-first order-last">
        <Flex containerClassName="flex pt-24 justify-start sm:justify-end lg:justify-center">
          <Box containerClassName="w-full h-64 bg-gray-300 rounded-xl" />
        </Flex>
        <Box containerClassName="w-full h-64 bg-gray-300 rounded-xl ml-auto sm:ml-0" />
      </Grid>
      <Flex containerClassName="flex flex-col items-center lg:items-start gap-10">
        <Flex containerClassName="flex flex-col items-start gap-8">
          <Flex containerClassName="flex flex-col items-center lg:items-start gap-3">
            <SectionSubheader
              text={"Our Vision"}
              containerClassName="font-bold text-gray-800 text-xl"
            />
            <LongParagraph>{visionStatementLong}</LongParagraph>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  </Box>
);

export default HeroTwoImages;
