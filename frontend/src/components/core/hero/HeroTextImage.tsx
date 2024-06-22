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
    <section className="px-3 py-5 bg-white-10 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto lg:w-9/12">
        <div className="order-1 lg:order-1 flex-shrink-0">
          <Image
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            src="https://images.unsplash.com/photo-1536063766742-b514ee70707f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Summer Sale"
            width={500}
            height={500}
          />
        </div>

        <div className="order-2 lg:order-2 flex flex-col justify-center items-center text-center mt-5 lg:mt-0 lg:ml-5">
          <SectionSubheader text={subheader} className="text-purple-500" />
          <SectionHeader text={header} />
          <LongParagraph longParagraph={longParagraph} />
        </div>
      </div>
    </section>
  );
};

export default HeroTextImage;
