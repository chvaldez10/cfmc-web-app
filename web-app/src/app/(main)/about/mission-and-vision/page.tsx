import { HeroOverlappingImage } from "@/components/core/hero";
import { missionStatementLong, visionStatementLong } from "@/data/hero/";
import { VerticalHeader } from "@/components/core/molecules";

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
      <VerticalHeader
        header={"Our Vision"}
        longParagraph={visionStatementLong}
      />
    </>
  );
}
