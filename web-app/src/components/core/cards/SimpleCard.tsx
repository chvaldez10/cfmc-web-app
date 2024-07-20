import { FC, ReactElement } from "react";
import SimpleCardItem from "./atoms/SimpleCardItem";

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
        <SimpleCardItem
          key={index}
          title={item.label}
          description={item.description}
          svgIcon={item.svgIcon}
        />
      ))}
    </div>
  );
};

export default SimpleCard;
