import { FC } from "react";
import { LongParagraph } from "@/components/core/ui";

interface ReleaseNoteItemProps {
  emoji?: string | null;
  label?: string | null;
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
        <>
          {label && (
            <strong>
              {emoji} {label}:{" "}
            </strong>
          )}
          {longParagraph}
        </>
      </LongParagraph>
    </li>
  );
};

export default ReleaseNoteItem;
