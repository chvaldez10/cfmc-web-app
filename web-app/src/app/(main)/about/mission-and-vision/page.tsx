import { HeroOverlappingImage, HeroSlideClient } from "@/components/core/hero";
import { NextImage } from "@/components/core/ui";
import { missionStatementLong, visionStatementLong } from "@/data/hero/";
import { pastEvents1 } from "@/data/hero/featuredItems";
import { IMAGE_SIZE_LARGE_HERO } from "@/data/constants/shared";
export default function page() {
  return (
    <>
      <HeroOverlappingImage
        header={"Welcome to Our Church"}
        subheader={"Mission Statement"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={missionStatementLong}
        dataTestId={"mission-statement"}
      />

      <HeroSlideClient
        header={"Our Vision"}
        longParagraph={visionStatementLong}
        reverse={true}
      >
        <NextImage
          width={"w-full"}
          height={IMAGE_SIZE_LARGE_HERO}
          src={pastEvents1[1].src}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>
    </>
  );
}
