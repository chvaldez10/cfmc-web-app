import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { Verse } from "@/types/genericTypes";
import { defaultVerse } from "@/data/hero/constants";
import { SectionSubheader, LongParagraph } from "@/components/core/text";
import ContainerWrapper from "@/components/core/hero/molecules/ContainerWrapper";

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
    <ContainerWrapper className="py-16">
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <BsFillChatLeftQuoteFill className="inline-block w-8 h-8 text-white mb-8" />
        <SectionSubheader text="Verse of the Day" />
        <LongParagraph>
          {verseData.verse.details.text}
          drinking vinegar.
        </LongParagraph>
        <LongParagraph className="text-gray-500">
          {verseData.verse.details.reference} {verseData.verse.details.version}
        </LongParagraph>
      </div>
    </ContainerWrapper>
  );
}

export default VerseOfTheDay;
