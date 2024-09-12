import {
  HeroWaveHeader,
  HeroSlideClient,
  BoxIcon,
} from "@/components/core/hero";
import { NextImage } from "@/components/core/gallery";
import { whyJoinTheMultimediaTeam } from "@/data/hero/mediaInquiries";
import { ministryImages1 } from "@/data/hero/featuredItems";
import { CountdownTimer } from "@/components/core/hero";

export default function page() {
  return (
    <>
      <HeroWaveHeader
        header={"Multimedia"}
        longParagraph={
          "Some super epic text about getting involved in multimedia ministry."
        }
        containerClassName="bg-gradient-to-r from-white-10 to-green-10 overflow-hidden"
      >
        <BoxIcon
          cardInquiries={whyJoinTheMultimediaTeam}
          header={"Join The Ministry"}
        />
      </HeroWaveHeader>

      <CountdownTimer />
      <HeroSlideClient
        header={"Have Fun While You Serve"}
        longParagraph={"Have Fun While You Serve Description"}
        containerClassName="min-h-[80vh] "
        reverse={true}
        isFloating={true}
      >
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={ministryImages1[0].src}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>
    </>
  );
}
