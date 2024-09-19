import { FC } from "react";
import Image from "next/image";
import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
  FlexCenter,
  Box,
  Flex,
} from "@/components/core/ui";
import { HeroContentProps } from "@/types/layoutProps";

interface HeroOverlappingImageProps extends HeroContentProps {
  subheader: string;
  imagePath: string;
}

const HeroOverlappingImage: FC<HeroOverlappingImageProps> = ({
  header,
  subheader,
  imagePath,
  longParagraph,
}) => {
  return (
    <FlexCenter containerClassName="relative mx-auto lg:flex-row-reverse lg:max-w-5xl h-screen">
      {/* Image Column */}
      <Box containerClassName="hidden w-576 h-576 lg:block lg:ml-auto">
        <Image
          src={imagePath}
          alt="Hero Overlapping Image"
          width={576}
          height={576}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </Box>

      {/* Text Column */}
      <Box containerClassName="relative md:absolute md:max-w-2xl lg:left-0 z-10 bg-white-10 lg:bg-white-0 lg:shadow-lg lg:rounded-lg">
        <Flex containerClassName="flex flex-col p-4 md:p-6 lg:p-12 space-y-2">
          <SectionHeader text={header} containerClassName="xl:text-5xl" />
          <SectionSubheader
            text={subheader}
            containerClassName="font-bold text-gray-800 text-xl"
          />
          <LongParagraph>{longParagraph}</LongParagraph>
        </Flex>
      </Box>
    </FlexCenter>
  );
};

export default HeroOverlappingImage;
