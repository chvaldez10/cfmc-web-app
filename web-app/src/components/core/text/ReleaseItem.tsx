import { FC } from "react";
import { ReleaseNotes } from "@/types/supabaseTypes";
import { LongParagraph } from "@/components/core/ui";
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
    <div className="bg-white-0 p-6 rounded-lg shadow-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">
        {releaseDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h2>
      <p className="text-bold mb-4">{version}</p>
      <ul className="list-disc pl-5 space-y-4">
        {freshOutTheOven && (
          <li>
            <span className="font-bold">🧑‍🍳 Fresh Out The Oven: </span>
            <span>{freshOutTheOven}</span>
          </li>
        )}
        {bugFixesAndImprovements && (
          <li>
            <span className="font-bold">🐛 Bug Fixes and Improvements: </span>
            <span>{bugFixesAndImprovements}</span>
          </li>
        )}
        {upNext && (
          <li>
            <span className="font-bold">🔜 Up Next: </span>
            <span>{upNext}</span>
          </li>
        )}
        {specialNotes && specialNotes.length > 0 && (
          <>
            <LongParagraph>Special Notes</LongParagraph>
            {specialNotes.map((note) => (
              <li key={note}>
                <span className="font-bold">🔍 {note}</span>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default ReleaseItem;
