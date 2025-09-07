import whatWeBelieveContentData from "@/data/what-we-believe-content.json";

export const WHAT_WE_BELIEVE_HEADER = {
  title: "What We Believe",
  description:
    "Discover our core theological beliefs and foundational principles that guide our faith community.",
};

export const whatWeBelieve = whatWeBelieveContentData as Array<{
  header: string;
  content: string;
  bibleReferences: string[];
}>;

export default whatWeBelieve;
