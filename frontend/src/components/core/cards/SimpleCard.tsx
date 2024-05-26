import { FC, ReactElement } from "react";

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
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 py-8 bg-emerald-500 text-white-0">
      {cardContainerItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center py-4 hover-animation hover-up"
        >
          <div className="text-6xl mb-4">{item.svgIcon}</div>
          <h2 className="text-xl font-bold">{item.label.toUpperCase()}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SimpleCard;
