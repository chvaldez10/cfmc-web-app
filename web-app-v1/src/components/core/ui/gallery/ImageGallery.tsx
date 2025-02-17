import { FC } from "react";
import {
  SectionSubheader,
  LongParagraph,
  Box,
  Flex,
  Grid,
} from "@/components/core/ui";
import { NextImage } from "@/components/core/ui";
import { pastEvents2_1, pastEvents2_2 } from "@/data/hero";
import { IMAGE_SIZE_SMALL_HERO } from "@/data/constants/shared";

const ImageGallery: FC = () => {
  return (
    <Box containerClassName="container px-5 py-24 mx-auto space-y-4 resize-hero-width">
      <Box>
        <SectionSubheader text="Past events" />
        <LongParagraph>
          {`Check out some of the past events we've hosted.`}
        </LongParagraph>
      </Box>

      <Flex containerClassName="flex flex-row gap-2">
        {/* Grid 1 */}
        <Grid containerClassName="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
          <NextImage
            key={pastEvents2_1[0].src}
            src={pastEvents2_1[0].src}
            alt={pastEvents2_1[0].alt}
            height={IMAGE_SIZE_SMALL_HERO}
            containerClassName={"col-span-1 row-span-1"}
            imageClassName={"rounded-lg object-center"}
          />
          <NextImage
            key={pastEvents2_1[1].src}
            src={pastEvents2_1[1].src}
            alt={pastEvents2_1[1].alt}
            height={IMAGE_SIZE_SMALL_HERO}
            containerClassName={"col-span-1 row-span-1"}
            imageClassName={"rounded-lg object-center"}
          />

          <NextImage
            key={pastEvents2_1[2].src}
            src={pastEvents2_1[2].src}
            alt={pastEvents2_1[2].alt}
            height={IMAGE_SIZE_SMALL_HERO}
            containerClassName={"col-span-2 row-span-1"}
            imageClassName={"rounded-lg object-center"}
          />
        </Grid>

        {/* Grid 2 */}
        <Grid containerClassName="w-full md:w-1/2 hidden md:grid grid-cols-2 grid-rows-2 gap-2">
          <NextImage
            key={pastEvents2_2[0].src}
            src={pastEvents2_2[0].src}
            alt={pastEvents2_2[0].alt}
            height={IMAGE_SIZE_SMALL_HERO}
            containerClassName={"col-span-2 row-span-1"}
            imageClassName={"rounded-lg object-center"}
          />

          <NextImage
            key={pastEvents2_2[1].src}
            src={pastEvents2_2[1].src}
            alt={pastEvents2_2[1].alt}
            height={IMAGE_SIZE_SMALL_HERO}
            containerClassName={"col-span-2 row-span-1"}
            imageClassName={"rounded-lg object-bottom"}
          />
        </Grid>
      </Flex>
    </Box>
  );
};

export default ImageGallery;
