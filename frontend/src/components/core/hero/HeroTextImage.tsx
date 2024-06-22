import { FC } from "react";
import Image from "next/image";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";

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
    <div className="w-full min-h-screen bg-white-10 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row mx-auto lg:w-10/12 gap-8">
        {/* Image Column */}
        <div className="relative w-full md:w-1/2 h-96 md:h-576 order-2 md:order-1 ">
          <Image
            src="https://images.unsplash.com/photo-1536063766742-b514ee70707f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HeroTextImage Images"
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-none md:rounded-lg object-bottom"
          />
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex-1 flex flex-col justify-center text-center space-y-5">
          <SectionSubheader text={subheader} className="text-purple-500" />
          <SectionHeader text={header} />
          <LongParagraph>{longParagraph}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroTextImage;
