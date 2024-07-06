import { FC } from "react";
import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/text/";
import { heroSection } from "@/types/genericTypes";

interface HeroFormProps extends heroSection {}

const HeroForm: FC<HeroFormProps> = ({
  header,
  userSubHeader,
  longParagraph,
  reverse = false,
  containerClassName,
}) => {
  const imageOrderClass = reverse ? "order-1 md:order-2" : "order-2 md:order-1";
  const textOrderClass = reverse ? "order-2 md:order-1" : "order-1 md:order-2";

  return (
    <div className={`div-outside-width min-h-screen p-2 ${containerClassName}`}>
      <div className="div-col-row resize-hero-width gap-4">
        {/* Image Column */}
        <div
          className={`resize-width-to-half text-center  bg-red-300 ${imageOrderClass}`}
        >
          <LongParagraph>{longParagraph}</LongParagraph>
        </div>

        {/* Text Column */}
        <div
          className={`resize-width-to-half text-center bg-blue-300 ${textOrderClass}`}
        >
          <LongParagraph>{longParagraph}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
