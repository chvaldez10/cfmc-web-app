import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  SectionSubheader,
  LongParagraph,
  NavigateButton,
  Box,
  Flex,
} from "@/components/core/ui/";
import { NextImage } from "@/components/core/gallery";

interface CardWithImageItemProps {
  src: string;
  title: string;
  alt: string;
  description: string;
  url: string;
}

const CardWithImageItem: FC<CardWithImageItemProps> = ({
  src,
  title,
  alt,
  description,
  url,
}) => {
  return (
    <Box containerClassName="bg-white-0 border flex flex-col border-gray-200 rounded-lg shadow hover-animation hover-up ">
      <NextImage
        width={"w-full"}
        height={"h-96"}
        src={src}
        alt={alt}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Flex containerClassName="flex flex-col flex-grow p-5 gap-3">
        <SectionSubheader
          text={title}
          containerClassName="font-bold tracking-tight"
        />

        {/* Description */}
        <LongParagraph containerClassName="text-gray-600">
          {description}
        </LongParagraph>

        {/* Button */}
        <Box containerClassName="mt-auto">
          <NavigateButton url={url} variant="filled">
            Learn More <FaArrowRight />
          </NavigateButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardWithImageItem;
