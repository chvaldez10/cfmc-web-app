import { FC } from "react";
import Image from "next/image";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";
import NextImage from "../gallery/NextImage";

interface HeroTextImageProps {
  header: string;
  subheader: string;
  longParagraph: string;
}

const HeroTextImage: FC<HeroTextImageProps> = ({
  header,
  subheader,
  longParagraph,
}) => {
  return (
    <div className=" div-outside-width min-h-screen bg-white-10 p-4">
      <div className="div-col-row resize-hero-width gap-8">
        {/* Image Column */}
        <NextImage
          width={"resize-width-to-half"}
          height={"h-96 md:h-576"}
          src={
            "https://images.unsplash.com/photo-1536063766742-b514ee70707f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"HeroTextImage Images"}
          containerClassName={"order-2 md:order-1"}
          imageClassName={"rounded-none md:rounded-lg object-bottom"}
        />

        {/* Text Column */}
        <div className="resize-width-to-half order-1 md:order-2 div-outside-width text-center space-y-5">
          <SectionSubheader text={subheader} className="text-purple-500" />
          <SectionHeader text={header} />
          <LongParagraph>{longParagraph}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroTextImage;
