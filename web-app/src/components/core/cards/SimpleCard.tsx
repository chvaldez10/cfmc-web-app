import { FC, ReactElement } from "react";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";

type CardContainerItem = {
  label: string;
  description: string;
  svgIcon: ReactElement;
};

interface CardContainerProps {
  cardContainerItems: CardContainerItem[];
}

const SimpleCard: FC<CardContainerProps> = ({ cardContainerItems }) => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 py-8 bg-emerald-500 text-white-0 ">
      {cardContainerItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center py-4 hover-animation hover-up h-[50vh] md:h-[30vh]"
        >
          <div className="text-6xl mb-4">{item.svgIcon}</div>
          <SectionSubheader text={item.label.toUpperCase()} />
          <LongParagraph>{item.description}</LongParagraph>
        </div>
      ))}
    </div>
  );
};

export default SimpleCard;
