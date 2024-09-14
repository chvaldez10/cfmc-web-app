import { HeroOverlappingImage, HeroSlideClient } from "@/components/core/hero";
import { NextImage } from "@/components/core/ui";
import {
  missionStatementLong,
  visionStatementLong,
} from "@/data/hero/constants";
import { pastEvents1 } from "@/data/hero/featuredItems";

export default function page() {
  return (
    <>
      <HeroOverlappingImage
        header={"Welcome to Our Church"}
        subheader={"Mission Statement"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={missionStatementLong}
      />

      <HeroSlideClient
        header={"Our Vision"}
        longParagraph={visionStatementLong}
        reverse={true}
      >
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={pastEvents1[1].src}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>
    </>
  );
}
