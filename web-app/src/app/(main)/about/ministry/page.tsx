import { HeroOverlappingImage } from "@/components/core/hero";
import { VerticalHeader } from "@/components/core/molecules";
import { methodistChurchDescription } from "@/data/hero/ministryItems";

export default function page() {
  return (
    <>
      <HeroOverlappingImage
        header={"Ministry"}
        subheader={"Learn More About Our Ministry"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={
          "Some super long paragraph about our ministry. Fill this out later. I am just testing the hero section right now. Please write something else here."
        }
        dataTestId={"mission-statement"}
      />
      <VerticalHeader
        header={"Methodist Church"}
        longParagraph={methodistChurchDescription}
      />
    </>
  );
}
