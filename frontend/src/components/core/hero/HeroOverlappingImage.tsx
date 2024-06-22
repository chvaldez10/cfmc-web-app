import { FC, ReactNode } from "react";
import Image from "next/image";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";

interface HeroOverlappingImageProps {
  header: string;
  subheader: string;
  imagePath: string;
  element: string | ReactNode;
}

const HeroOverlappingImage: FC<HeroOverlappingImageProps> = ({
  header,
  subheader,
  imagePath,
  element,
}) => {
  return (
    <div className="relative flex flex-col justify-center items-center align-center mx-auto lg:flex-row-reverse lg:max-w-5xl h-screen">
      {/* Image Column */}
      <div className="hidden w-576 h-576 lg:block lg:ml-auto">
        <Image
          src={imagePath}
          alt="tmp image"
          width={576}
          height={576}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>

      {/* Text Column */}
      <div className="relative md:absolute max-w-lg md:max-w-2xl lg:left-0 z-10 bg-white-0 lg:shadow-lg lg:rounded-lg">
        <div className="flex flex-col p-4 md:p-6 lg:p-12">
          {/* Header */}
          <SectionHeader text={header} className=" xl:text-5xl" />

          {/* Header */}
          <SectionSubheader
            text={subheader}
            className="font-semibold text-gray-900 text-xl xl:text-2xl 2xl:text-3xl"
          />

          {/* Long Paragraph */}
          <LongParagraph>{element}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlappingImage;
