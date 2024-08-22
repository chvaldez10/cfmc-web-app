import { FC } from "react";
import {
  SectionSubheader,
  LongParagraph,
  Box,
  Flex,
  Grid,
} from "@/components/core/ui";
import { NextImage } from "@/components/core/gallery";
import { pastEvents1 } from "@/data/hero";

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
        <Grid containerClassName="grid w-full md:w-1/2 grid-cols-2 grid-rows-2 gap-2">
          <NextImage
            height={"h-56"}
            src={pastEvents1[0].src}
            alt={pastEvents1[0].alt}
            containerClassName="col-span-1 row-span-1"
            imageClassName="rounded-lg object-center"
          />
          <NextImage
            alt={pastEvents1[1].alt}
            height={"h-56"}
            width={"w-full"}
            src={pastEvents1[1].src}
            containerClassName="col-span-1 row-span-1"
            imageClassName="rounded-lg object-center"
          />
          <NextImage
            alt={pastEvents1[2].alt}
            height={"h-56"}
            src={pastEvents1[2].src}
            containerClassName="col-span-2 row-span-1"
            imageClassName="rounded-lg object-center"
          />
        </Grid>
        <Grid containerClassName="hidden md:grid w-full md:w-1/2 grid-cols-2 grid-rows-2 gap-2">
          <NextImage
            alt={pastEvents1[2].alt}
            height={"h-56"}
            src={pastEvents1[2].src}
            containerClassName="col-span-2 row-span-1"
            imageClassName="rounded-lg object-center"
          />
          <NextImage
            height={"h-56"}
            src={pastEvents1[0].src}
            alt={pastEvents1[0].alt}
            containerClassName="col-span-1 row-span-1"
            imageClassName="rounded-lg object-center"
          />
          <NextImage
            alt={pastEvents1[1].alt}
            height={"h-56"}
            width={"w-full"}
            src={pastEvents1[1].src}
            containerClassName="col-span-1 row-span-1"
            imageClassName="rounded-lg object-center"
          />
        </Grid>
      </Flex>
    </Box>
  );
};

export default ImageGallery;
