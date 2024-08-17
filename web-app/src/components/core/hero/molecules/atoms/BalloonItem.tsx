import { FC } from "react";
import { LongParagraph } from "@/components/core/ui";
import "@/styles/balloon.css";

interface BalloonItemProps {
  month: string | undefined;
  day: number | undefined;
  fullName: string;
}

const BalloonItem: FC<BalloonItemProps> = ({ fullName, month, day }) => {
  return (
    // Note that long names will be cut off
    <div className="balloon">
      <LongParagraph containerClassName=" text-white-0">
        {`${fullName} ${month} ${day}`}
      </LongParagraph>
    </div>
  );
};

export default BalloonItem;
