import { FC } from "react";
import { ReleaseNotes } from "@/types/supabaseTypes";
import {
  LongParagraph,
  Box,
  SectionSubheader,
  SmallText,
} from "@/components/core/ui";
interface ReleaseItemProps extends ReleaseNotes {}

const ReleaseItem: FC<ReleaseItemProps> = ({
  releaseDate,
  version,
  freshOutTheOven,
  bugFixesAndImprovements,
  upNext,
  specialNotes,
}) => {
  return (
    <Box containerClassName="bg-white-0 p-6 rounded-lg shadow-lg mx-auto space-y-2">
      <SectionSubheader
        text={releaseDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      />
      <SmallText containerClassName="text-purple-500">{version}</SmallText>
      <ul className="list-disc pl-4 space-y-2">
        {freshOutTheOven && (
          <li>
            <LongParagraph>
              🧑‍🍳 Fresh Out The Oven: {freshOutTheOven}
            </LongParagraph>
          </li>
        )}
        {bugFixesAndImprovements && (
          <li>
            <LongParagraph>
              🐛 Bug Fixes and Improvements: {bugFixesAndImprovements}
            </LongParagraph>
          </li>
        )}
        {upNext && (
          <li>
            <LongParagraph>🔜 Up Next: {upNext}</LongParagraph>
          </li>
        )}
        {specialNotes && specialNotes.length > 0 && (
          <>
            <LongParagraph>Special Notes</LongParagraph>
            {specialNotes.map((note) => (
              <li key={note}>
                <LongParagraph>🔍 {note}</LongParagraph>
              </li>
            ))}
          </>
        )}
      </ul>
    </Box>
  );
};

export default ReleaseItem;
