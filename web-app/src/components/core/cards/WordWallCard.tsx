import { FC } from "react";
import { LongParagraph } from "../text";
import "@/styles/balloon.css";

interface WordWallCardProps {
  month: string;
  day: number;
  fullName: string;
}

const WordWallCard: FC<WordWallCardProps> = ({ fullName, month, day }) => {
  return (
    <div className="balloon">
      <LongParagraph className=" text-white-0">
        {`${fullName} ${month} ${day}`}
      </LongParagraph>
    </div>
  );
};

export default WordWallCard;
