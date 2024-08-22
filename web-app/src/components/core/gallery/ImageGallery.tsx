import { FC } from "react";
import {
  Flex,
  SectionSubheader,
  LongParagraph,
  Box,
} from "@/components/core/ui";
import { NextImage } from "@/components/core/gallery";
import Image from "next/image";
import { pastEvents1 } from "@/data/hero";

const ImageGallery: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex flex-wrap resize-hero-width space-y-4">
      <Flex containerClassName="flex flex-wrap items-center w-full space-x-4">
        <SectionSubheader text="Past events" />
        <LongParagraph containerClassName="">
          {`Check out some of the past events we've hosted.`}
        </LongParagraph>
      </Flex>
      <Flex containerClassName="flex flex-wrap md:-m-2 -m-1 ">
        <Flex containerClassName="flex flex-wrap w-1/2">
          <Box containerClassName="md:p-2 p-1 w-1/2">
            <NextImage
              alt={pastEvents1[0].alt}
              height={"h-48"}
              src={pastEvents1[0].src}
              containerClassName="object-cover object-center"
              imageClassName="rounded-lg object-center"
            />
          </Box>
          <Box containerClassName="md:p-2 p-1 w-1/2">
            <NextImage
              alt={pastEvents1[0].alt}
              height={"h-48"}
              src={pastEvents1[0].src}
              containerClassName="object-cover object-center "
              imageClassName="rounded-lg object-center"
            />
          </Box>
          <NextImage
            alt={pastEvents1[0].alt}
            height={"h-96"}
            width={"w-full"}
            src={pastEvents1[0].src}
            containerClassName="object-cover object-center md:p-2 p-1"
            imageClassName="rounded-lg object-center"
          />
        </Flex>
        <Flex containerClassName="flex flex-wrap w-1/2">
          <Box containerClassName="md:p-2 p-1 w-full">
            <NextImage
              alt={pastEvents1[0].alt}
              height={"h-96"}
              src={pastEvents1[0].src}
              containerClassName="object-cover object-center"
              imageClassName="rounded-lg object-center"
            />
          </Box>
          <Box containerClassName="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={502}
              height={302}
            />
          </Box>
          <Box containerClassName="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={503}
              height={303}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageGallery;
