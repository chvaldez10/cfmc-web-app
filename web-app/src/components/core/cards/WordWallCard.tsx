import { FC } from "react";

const WordWallCard: FC = () => {
  return (
    <div className={`py-8 px-4 lg:w-1/3 text-center `}>
      <span className="font-medium text-lg">{"Christian Valdez "}</span>
      <span className="font-medium text-lg">{"(February 21)"}</span>
    </div>
  );
};

export default WordWallCard;
