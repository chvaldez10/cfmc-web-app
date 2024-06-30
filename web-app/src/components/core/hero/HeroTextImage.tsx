import { FC } from "react";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";
import CoverFlowSwiper from "../gallery/CoverFlowSwiper";
import { nextImage } from "@/types/genericTypes";

interface HeroTextImageProps {
  header: string;
  subheader: string;
  longParagraph: string;
  swiperImages: nextImage[];
}

const HeroTextImage: FC<HeroTextImageProps> = ({
  header,
  subheader,
  longParagraph,
  swiperImages,
}) => {
  return (
    <div className=" div-outside-width min-h-screen bg-white-10 p-4">
      <div className="div-col-row resize-hero-width gap-8">
        {/* Image Column */}
        <div className="resize-width-to-half order-2 md:order-1  text-center space-y-5">
          <CoverFlowSwiper swiperImages={swiperImages} />
        </div>

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
