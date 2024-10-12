import { MusicSwiperCard } from "@/components/core/ui/";
import { HeroWaveHeader } from "@/components/core/hero";
import { BoxIcon } from "@/components/core/multimedia";
import { whyJoinTheMultimediaTeam } from "@/data/hero/mediaInquiries";

// Utils
import { getFeaturedWorshipSongs } from "@/utils/supabase/actions/worshipSongActions";

export default async function page() {
  const featuredWorshipSongs = await getFeaturedWorshipSongs();

  console.log(featuredWorshipSongs);

  return (
    <>
      <HeroWaveHeader
        header={"Music Ministry"}
        longParagraph={
          "Some super epic text about getting involved in music ministry."
        }
        containerClassName="bg-gradient-to-r from-white-10 to-green-10 overflow-hidden"
      >
        <BoxIcon
          cardInquiries={whyJoinTheMultimediaTeam}
          header={"Join The Ministry"}
        />
      </HeroWaveHeader>

      <MusicSwiperCard />
    </>
  );
}
