import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { Verse } from "@/types/componentProps";
import { defaultVerse } from "@/data/hero/constants";
import { SectionSubheader, LongParagraph, Box } from "@/components/core/ui";
import { VerticalContainerWrapper } from "@/components/core/hero";
async function VerseOfTheDay() {
  let verseData: Verse;

  try {
    const res = await fetch(
      "https://beta.ourmanna.com/api/v1/get?format=json&order=daily",
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch verse of the day");
    }

    verseData = await res.json();
  } catch (error) {
    console.error("Error fetching verse of the day", error);
    verseData = defaultVerse;
  }

  return (
    <VerticalContainerWrapper>
      <BsFillChatLeftQuoteFill className="inline-block w-8 h-8 " />
      <SectionSubheader text="Verse of the Day" />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {verseData.verse.details.text}
      </LongParagraph>
      <LongParagraph containerClassName="text-gray-500">
        {verseData.verse.details.reference} {verseData.verse.details.version}
      </LongParagraph>
    </VerticalContainerWrapper>
  );
}

export default VerseOfTheDay;
