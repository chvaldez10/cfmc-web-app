import { FC } from "react";
import { LongParagraph } from "@/components/core/ui";
import "@/styles/balloon.css";

interface WordWallCardProps {
  month: string;
  day: number;
  fullName: string;
}

const WordWallCard: FC<WordWallCardProps> = ({ fullName, month, day }) => {
  return (
    // Note that long names will be cut off
    <div className="balloon">
      <LongParagraph containerClassName=" text-white-0">
        {`${fullName} ${month} ${day}`}
      </LongParagraph>
    </div>
  );
};

export default WordWallCard;
