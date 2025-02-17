import { SECTION_KEYWORDS } from "@/data/constants/shared";

export const processLyrics = (
  rawLyrics: string
): { [key: string]: string[] } => {
  const lines = rawLyrics.split("\n");
  let processedLyrics: { [section: string]: string[] } = {};
  let currentSection = "";

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === "") {
      return;
    }

    const isSection = SECTION_KEYWORDS.some((keyword) =>
      trimmedLine.toLowerCase().startsWith(keyword.toLowerCase())
    );

    if (isSection) {
      // If the line is a section keyword, set it as the current section
      currentSection = trimmedLine;
      processedLyrics[currentSection] = [];
    } else if (currentSection) {
      // If there is a current section, add the line to it
      processedLyrics[currentSection].push(trimmedLine);
    } else {
      // Handle unknown cases
      console.log("Unknown case:", trimmedLine);
    }
  });

  return processedLyrics;
};
