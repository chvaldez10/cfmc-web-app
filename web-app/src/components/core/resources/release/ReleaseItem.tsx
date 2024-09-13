import { FC } from "react";
import { ReleaseNotes } from "@/types/supabaseTypes";
import {
  LongParagraph,
  Box,
  SectionSubheader,
  SmallText,
} from "@/components/core/ui";
import ReleaseNoteItem from "./ReleaseNoteItem";

interface ReleaseItemProps extends ReleaseNotes {}

const ReleaseItem: FC<ReleaseItemProps> = ({
  releaseDate,
  version,
  freshOutTheOven,
  bugFixesAndImprovements,
  upNext,
  specialNotes,
}) => {
  const formattedReleaseDate = releaseDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box containerClassName="bg-white-0 p-6 rounded-lg shadow-lg mx-auto space-y-2">
      <SectionSubheader text={formattedReleaseDate} />
      <SmallText containerClassName="text-purple-500">{version}</SmallText>
      <ul className="list-disc pl-4 space-y-2">
        {/* Regular release notes */}
        {freshOutTheOven && (
          <ReleaseNoteItem
            emoji="🧑‍🍳"
            label="Fresh Out The Oven"
            longParagraph={freshOutTheOven}
          />
        )}
        {bugFixesAndImprovements && (
          <ReleaseNoteItem
            emoji="🐛"
            label="Bug Fixes and Improvements"
            longParagraph={bugFixesAndImprovements}
          />
        )}
        {upNext && (
          <ReleaseNoteItem emoji="🔜" label="Up Next" longParagraph={upNext} />
        )}

        {/* Special notes */}
        {specialNotes && specialNotes.length > 0 && (
          <>
            <LongParagraph>
              <strong>{`Note (s): `}</strong>
            </LongParagraph>
            {specialNotes.map((note) => (
              <ReleaseNoteItem key={note} emoji="🔍" longParagraph={note} />
            ))}
          </>
        )}
      </ul>
    </Box>
  );
};

export default ReleaseItem;
