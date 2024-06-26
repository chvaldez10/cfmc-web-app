import { liturgyTableData } from "@/types/genericTypes";

// Will be a table called liturgy
export const announcements: liturgyTableData[] = [
  {
    title: "June 15, 2024 | 5:00 PM",
    content: "Gospel of Mark Home Bible Study (recurring)",
    link: "#",
  },
  {
    title: "June 22, 2024 | 5:00 PM ",
    content: "It Takes Two to Tango Home Bible Study (recurring)",
    link: "#",
  },
  { title: "June 28-30, 2024 | All Day", content: "Family Camp", link: "#" },
];

// Will be a table called verses
export const verseTable: {
  verseHeader: string;
  verse: string;
}[] = [
  {
    verseHeader: "Offertory Verse",
    verse:
      "Children, obey your parents in the Lord, for this is right. “Honor your father and mother”—which is the first commandment with a promise— “so that it may go well with you and that you may enjoy long life on the earth.” (Ephesians 6:1-3 NIV)",
  },
];
