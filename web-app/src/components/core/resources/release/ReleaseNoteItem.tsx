import { FC } from "react";
import { LongParagraph } from "@/components/core/ui";

interface ReleaseNoteItemProps {
  emoji: string;
  label: string;
  longParagraph: string;
}

const ReleaseNoteItem: FC<ReleaseNoteItemProps> = ({
  emoji,
  label,
  longParagraph,
}) => {
  return (
    <li>
      <LongParagraph>
        {emoji} {label}: {longParagraph}
      </LongParagraph>
    </li>
  );
};

export default ReleaseNoteItem;
