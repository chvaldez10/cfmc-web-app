import SwiperCard from "@/components/core/ui/gallery/SwiperCard";
import { HeroWaveHeader } from "@/components/core/hero";
import { BoxIcon } from "@/components/core/multimedia";
import { whyJoinTheMultimediaTeam } from "@/data/hero/mediaInquiries";

export default function page() {
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

      <SwiperCard />
    </>
  );
}
