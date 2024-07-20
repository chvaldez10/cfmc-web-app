"use client";

import { FC, ReactElement } from "react";
import SectionSubheader from "../text/SectionSubheader";
import LongParagraph from "../text/LongParagraph";
import SimpleCardItem from "./atoms/SimpleCardItem";

type CardContainerItem = {
  label: string;
  description: string;
  svgIcon: ReactElement;
};

interface CardContainerProps {
  cardContainerItems: CardContainerItem[];
}

const handleClick = () => {
  console.log("clicked");
};

const SimpleCard: FC<CardContainerProps> = ({ cardContainerItems }) => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 py-8 bg-emerald-500 text-white-0 ">
      {cardContainerItems.map((item, index) => (
        <SimpleCardItem
          key={index}
          title={item.label}
          description={item.description}
          svgIcon={item.svgIcon}
          handleClick={handleClick}
        />
        // <div
        //   key={index}
        //   className="div-outside-width py-4 hover-animation hover-up h-[50vh] md:h-[30vh]"
        //   onClick={handleClick}
        // >
        //   <div className="text-6xl mb-4">{item.svgIcon}</div>
        //   <SectionSubheader text={item.label.toUpperCase()} />
        //   <LongParagraph>{item.description}</LongParagraph>
        // </div>
      ))}
    </div>
  );
};

export default SimpleCard;
