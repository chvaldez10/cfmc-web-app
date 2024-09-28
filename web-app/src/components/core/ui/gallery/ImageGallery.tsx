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
          {pastEvents2_1.map((image) => (
            <NextImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              height={IMAGE_SIZE_SMALL_HERO}
              containerClassName={image.containerClassName}
              imageClassName={`${image.imageClassName as string} rounded-lg`}
            />
          ))}
        </Grid>

        {/* Grid 2 */}
        <Grid containerClassName="w-full md:w-1/2 hidden md:grid grid-cols-2 grid-rows-2 gap-2">
          {pastEvents2_2.map((image) => (
            <NextImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              height={IMAGE_SIZE_SMALL_HERO}
              containerClassName={image.containerClassName}
              imageClassName={`${image.imageClassName as string} rounded-lg`}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ImageGallery;
