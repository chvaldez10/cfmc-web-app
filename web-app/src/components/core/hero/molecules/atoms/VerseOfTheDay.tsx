import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { Verse } from "@/types/genericTypes";
import { defaultVerse } from "@/data/hero/constants";
import { SectionSubheader, LongParagraph, Box } from "@/components/core/ui";
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
      <Box containerClassName="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center space-y-4">
        <BsFillChatLeftQuoteFill className="inline-block w-8 h-8 text-white " />
        <SectionSubheader text="Verse of the Day" />
        <LongParagraph>{verseData.verse.details.text}</LongParagraph>
        <LongParagraph containerClassName="text-gray-500">
          {verseData.verse.details.reference} {verseData.verse.details.version}
        </LongParagraph>
      </Box>
    </ContainerWrapper>
  );
}

export default VerseOfTheDay;
