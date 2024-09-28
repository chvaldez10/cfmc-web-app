import { HeroOverlappingImage } from "@/components/core/hero";
import { missionStatementLong, visionStatementLong } from "@/data/hero/";
import { HeroTwoImages } from "@/components/core/hero";
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
    </>
  );
}
