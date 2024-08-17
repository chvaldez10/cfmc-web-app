import { HeroOverlappingImage, HeroSlideClient } from "@/components/core/hero";
import { NextImage } from "@/components/core/gallery";
import {
  missionStatementLong,
  visionStatementLong,
} from "@/data/hero/constants";

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
        element={
          <NextImage
            width={"w-full"}
            height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
            src={"/featured/past-events-1/2.jpg"}
            alt={"Next Big Event Image"}
            imageClassName={"rounded-lg object-center"}
          />
        }
        reverse={true}
      />
    </>
  );
}
