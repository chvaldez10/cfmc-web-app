import { FC } from "react";
import {
  SectionSubheader,
  LongParagraph,
  Box,
  Flex,
  LearnMoreButton,
} from "@/components/core/ui/";
import { NextImage } from "@/components/core/gallery";
import { CardWithImageProps } from "@/types/uiProps";

interface CardWithImageItemProps extends CardWithImageProps {}

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
        <LongParagraph containerClassName="long-paragraph-text-color">
          {description}
        </LongParagraph>

        {/* Button */}
        <LearnMoreButton url={url} />
      </Flex>
    </Box>
  );
};

export default CardWithImageItem;
