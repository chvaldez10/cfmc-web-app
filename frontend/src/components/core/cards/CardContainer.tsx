import { FC } from "react";
import CardItem from "./CardItem";

interface CardContainerProps {
  items: string[];
  label: string;
}

const CardContainer: FC<CardContainerProps> = ({ items, label }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 py-8 bg-violet-800 text-white">
      {items.map((item, index) => (
        <CardItem key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
