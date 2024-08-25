import { FC } from "react";
import {
  Flex,
  Box,
  LongParagraph,
  LearnMoreButton,
} from "@/components/core/ui";
import ImageContentProfile from "./ImageContentProfile";
import { NextImage } from "@/components/core/gallery";

const ImageContent: FC = () => {
  return (
    <Flex containerClassName="container px-4 mx-auto flex flex-col">
      <Box containerClassName="resize-hero-width mx-auto">
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={"/featured/past-events-1/2.jpg"}
          alt={"Image Content Image"}
          imageClassName={"rounded-lg object-center"}
        />
        <Flex containerClassName="flex flex-col sm:flex-row mt-10">
          <ImageContentProfile />
          <Flex containerClassName="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col ">
            <LongParagraph containerClassName="text-gray-600">
              Super long content description goes here.
            </LongParagraph>
            <LearnMoreButton
              url="/events/from-bible-study"
              containerClassName="mx-auto sm:mx-0 pt-4"
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ImageContent;
