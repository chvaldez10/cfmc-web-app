import { FC } from "react";
import { Box, LongParagraph, SectionSubheader } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";
import { EmptySetFromSupabase } from "@/components/template";
import { processLyrics } from "@/utils/common/textParser";

interface WorshipLyricsProps {
  hymnOfDiscipleship: string | undefined;
}

const WorshipLyrics: FC<WorshipLyricsProps> = ({ hymnOfDiscipleship }) => {
  const processedLyrics = processLyrics(hymnOfDiscipleship || "");

  if (!hymnOfDiscipleship) {
    return (
      <EmptySetFromSupabase longParagraph={"No hymn of discipleship found"} />
    );
  }

  return (
    <Box containerClassName="resize-hero-width mx-auto px-4 pt-8 lg:px-0">
      <HeroHalfWrapper containerClassName="space-y-4">
        <SectionSubheader
          text={"Hymn of Discipleship"}
          containerClassName="font-bold"
        />
        {Object.entries(processedLyrics).map(
          ([section, lines], sectionIndex) => (
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
          )
        )}
      </HeroHalfWrapper>
    </Box>
  );
};

export default WorshipLyrics;
