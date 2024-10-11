import { FC } from "react";
import { Box, LongParagraph, SectionSubheader } from "@/components/core/ui";
import { processLyrics } from "@/utils/common/textParser";

const testLyrics = `Verse 1
For the beauty of the earth,
For the glory of the skies,
For the love which from our birth
Over and around us lies—

Chorus 1
Lord of all, to Thee we raise,
This our hymn of grateful praise.

Verse 2
For the wonder of each hour,
Of the day and of the night,
Hill and vale, and tree and flow'r,
Sun and moon, and stars of light—

Instrumental

Verse 3
For the joy of human love,
Brother, sister, parent, child,
Friends on earth and friends above,
For all gentle thoughts and mild—

Ending
For Thy church that evermore
Lifteth holy hands above,
Off'ring up on every shore
Her pure sacrifice of love—`;

const WorshipLyrics: FC = () => {
  const processedLyrics = processLyrics(testLyrics);

  return (
    <Box containerClassName="resize-hero-width mx-auto px-4 pt-4 lg:px-0 space-y-4">
      <SectionSubheader
        text={"Hymn of Discipleship"}
        containerClassName="font-bold"
      />
      {Object.entries(processedLyrics).map(([section, lines], sectionIndex) => (
        <Box key={sectionIndex}>
          <LongParagraph containerClassName="font-bold">
            {section}
          </LongParagraph>
          {lines.map((line, lineIndex) => (
            <LongParagraph key={`${sectionIndex}-${lineIndex}`}>
              {line}
            </LongParagraph>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WorshipLyrics;
