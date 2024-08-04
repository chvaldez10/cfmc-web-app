import { FC, ReactNode } from "react";
import Image from "next/image";
import SectionHeader from "../../text/atoms/SectionHeader";
import SectionSubheader from "../../text/atoms/SectionSubheader";
import LongParagraph from "../../text/atoms/LongParagraph";

interface HeroOverlappingImageProps {
  header: string;
  subheader: string;
  imagePath: string;
  element: string;
}

const HeroOverlappingImage: FC<HeroOverlappingImageProps> = ({
  header,
  subheader,
  imagePath,
  element,
}) => {
  // Note that the layout for this hero section is a bit hard to refactor and make it similar to the other hero sections.
  return (
    <div className="relative div-outside-width mx-auto lg:flex-row-reverse lg:max-w-5xl h-screen">
      {/* Image Column */}
      <div className="hidden w-576 h-576 lg:block lg:ml-auto">
        <Image
          src={imagePath}
          alt="Hero Overlapping Image"
          width={576}
          height={576}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>

      {/* Text Column */}
      <div className="relative md:absolute md:max-w-2xl lg:left-0 z-10 bg-white-10 lg:bg-white-0 lg:shadow-lg lg:rounded-lg">
        <div className="flex flex-col p-4 md:p-6 lg:p-12">
          {/* Header */}
          <SectionHeader text={header} className="xl:text-5xl" />

          {/* Header */}
          <SectionSubheader
            text={subheader}
            className="font-bold text-gray-800 text-xl"
          />

          {/* Long Paragraph */}
          <LongParagraph>{element}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlappingImage;
