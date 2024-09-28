import { FC } from "react";
import {
  SectionSubheader,
  LongParagraph,
  Box,
  Flex,
  LearnMoreButton,
  NextImage,
} from "@/components/core/ui/";
import { CardWithImageProps } from "@/types/uiProps";

interface MinistryDetailCardItemProps extends CardWithImageProps {}

const MinistryDetailCardItem: FC<MinistryDetailCardItemProps> = ({
  src,
  title,
  alt,
  description,
  url,
  dataTestId,
}) => {
  return (
    <Box
      containerClassName="bg-white-0 border flex flex-col border-gray-200 rounded-lg shadow hover-animation hover-up"
      dataTestId={dataTestId}
    >
      <NextImage
        width={"w-full"}
        height={"h-96"}
        src={src}
        alt={alt}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Flex containerClassName="flex flex-col flex-grow p-5 gap-3">
        {/* Ministry Name */}
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

export default MinistryDetailCardItem;
