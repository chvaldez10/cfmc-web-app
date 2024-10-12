import { Verse } from "@/types/componentProps";
import { WorshipSongs } from "@/types/supabase/worship";
import { DEFAULT_SONG_IMAGE } from "@/data/constants/shared";

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
export const suggestedWorshipSongs: WorshipSongs[] = [
  {
    id: 1,
    songTitle: "Shout to the Lord",
    artist: "Don Moen",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 2,
    songTitle: "Give Thanks",
    artist: "Don Moen",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 3,
    songTitle: "God Will Make a Way",
    artist: "Don Moen",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 4,
    songTitle: "How Great Is Our God",
    artist: "Chris Tomlin",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 5,
    songTitle: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 6,
    songTitle: "Oceans (Where Feet May Fail)",
    artist: "Hillsong United",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 7,
    songTitle: "Amazing Grace (My Chains Are Gone)",
    artist: "Chris Tomlin",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 8,
    songTitle: "Here I Am to Worship",
    artist: "Tim Hughes",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 9,
    songTitle: "In Christ Alone",
    artist: "Keith Getty & Stuart Townend",
    image: DEFAULT_SONG_IMAGE,
  },
  {
    id: 10,
    songTitle: "Blessed Be Your Name",
    artist: "Matt Redman",
    image: DEFAULT_SONG_IMAGE,
  },
];
