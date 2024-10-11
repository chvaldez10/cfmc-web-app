interface Section {
  title: string;
  content: string;
}

export const processLyrics = (rawLyrics: string) => {
  const lines = rawLyrics.split(/\r?\n/);
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("[") && trimmedLine.endsWith("]")) {
      currentSection = { title: trimmedLine, content: "" };
      sections.push(currentSection);
    }
  });

  return "";
};
