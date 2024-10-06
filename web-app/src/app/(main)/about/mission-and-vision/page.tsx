import {
  HeroTwoImages,
  HeroSlideClient,
  HeroOverlappingImage,
} from "@/components/core/hero";
import { NextImage } from "@/components/core/ui";
import { missionStatementLong } from "@/data/hero/";
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

      <HeroTwoImages />

      <HeroSlideClient
        header={"Who We Are"}
        longParagraph={"Fill description here"}
        containerClassName="min-h-screen bg-gradient-to-b from-white-10 via-purple-100 to-purple-200"
        reverse={true}
        isFloating={true}
        dataTestId={"next-big-event"}
      >
        <NextImage
          width={"w-full"}
          height={IMAGE_SIZE_LARGE_HERO}
          src={
            "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/1.jpg"
          }
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>
    </>
  );
}
