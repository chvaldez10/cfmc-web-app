import { liturgyTableData } from "@/types/genericTypes";

// Will be a table called liturgy
export const announcements: liturgyTableData[] = [
  {
    date: new Date("June 15, 2024"),
    title: "Home Bible Study",
    content: "Gospel of Mark Home Bible Study ",
  },
  {
    date: new Date("June 22, 2024"),
    title: "It Takes Two to Tango Home Bible Study",
    content: "It Takes Two to Tango Home Bible Study",
  },
  {
    date: new Date("June 28, 2024"),
    title: "Family Camp",
    content: "Family Camp Description",
  },
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
