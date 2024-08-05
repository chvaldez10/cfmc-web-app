import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavigateButton } from "../../buttons";
import { SectionSubheader, LongParagraph } from "@/components/core/text/";
import NextImage from "../../gallery/NextImage";

interface CardWithImageItemProps {
  src: string;
  title: string;
  alt: string;
  description: string;
  url: string;
}

const CardWithImageItem: FC<CardWithImageItemProps> = ({
  src,
  title,
  alt,
  description,
  url,
}) => {
  return (
    <div className="bg-white-0 border flex flex-col border-gray-200 rounded-lg shadow hover-animation hover-up ">
      <NextImage
        width={"w-full"}
        height={"h-96"}
        src={src}
        alt={alt}
        imageClassName={"rounded-t-lg object-center"}
      />

      <div className="flex flex-col flex-grow p-5 gap-3">
        <SectionSubheader text={title} className="font-bold tracking-tight" />
        <LongParagraph containerClassName="text-gray-600">
          {description}
        </LongParagraph>
        <div className="mt-auto">
          <NavigateButton url={url} variant="filled">
            Learn More <FaArrowRight />
          </NavigateButton>
        </div>
      </div>
    </div>
  );
};

export default CardWithImageItem;
