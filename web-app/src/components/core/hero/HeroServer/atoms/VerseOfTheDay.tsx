import { BsFillChatLeftQuoteFill } from "react-icons/bs";

interface Verse {
  verse: {
    details: {
      text: string;
      reference: string;
      version: string;
      verseURL: string;
    };
    notice: string;
  };
}

async function VerseOfTheDay() {
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

  const verseData: Verse = await res.json();

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <BsFillChatLeftQuoteFill className="inline-block w-8 h-8 text-white mb-8" />
        <p>Verse of the Day</p>
        <p className="leading-relaxed text-lg">
          {verseData.verse.details.text}
          drinking vinegar.
        </p>
        <h2 className="text-white font-medium title-font tracking-wider text-sm">
          {verseData.verse.details.reference} {verseData.verse.details.version}
        </h2>
      </div>
    </div>
  );
}

export default VerseOfTheDay;
