import { Verse, WorshipSong } from "@/types/componentProps";

const currentMonth = new Date().toLocaleString("default", { month: "long" });

/** Mission and Vision */
export const visionStatementLong = `A God-glorifying, Christ-shepherding and Holy Spirit-filled Church in fulfilling God’s Mission in the City.`;

export const missionStatementLong = `To reach out to as many people as we possibly can to share with them the good news of God's redeeming love in Jesus Christ. To lead them to that new life of faith, trust, love, and obedience to Jesus Christ. To continue nurturing them to become Christ-like in their lives.`;

/** Featured Hero Verbiage */
export const featuredMonthlyThemeVerbiage = `${currentMonth} is Biblical Stewardship Month. We will be focusing on growing in our relationship with Jesus Christ and learning how to live out our faith in our daily lives.`;

export const featureCommunityBuildingVerbiage =
  "After our Sunday worship, we host food fellowship and afterwards go into small groups for Bible study or pray for each other. It's a great way to get to know each other and grow in our faith.";

export const nextBigEventDescription =
  "On Novemeber 4, CFMC will be holding our 7th founding anniversary celebration. Let's come together and celebrate how God has blessed us and our church family!";

/** Tithes and Offerings */
export const tithesAndOfferingVerse =
  "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it. (Malachi 3:10)";

/** Verse of the Day */
export const defaultVerseOfTheDay: Verse = {
  verse: {
    details: {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16",
      version: "NIV",
      verseURL:
        "https://www.biblegateway.com/passage/?search=John%203%3A16&version=NIV",
    },
    notice: "Bible Gateway",
  },
};

/** Worship Songs */
export const suggestedWorshipSongs: WorshipSong[] = [
  {
    title: "Shout to the Lord",
    artist: "Don Moen",
    imageSrc:
      "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Give Thanks",
    artist: "Don Moen",
    imageSrc:
      "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "God Will Make a Way",
    artist: "Don Moen",
    imageSrc:
      "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
