import { HeroOverlappingImage } from "@/components/core/hero";
import { VerticalHeader } from "@/components/core/molecules";
import { methodistChurchDescription } from "@/data/hero/ministryItems";
import { VerticalTimeline } from "@/components/core/multimedia";
import { methodistSymbols } from "@/data/hero/ministryItems";

const ministryDescription =
  "Some super long paragraph about our ministry. Fill this out later. I am just testing the hero section right now. Please write something else here.";

export default async function page() {
  return (
    <>
      <HeroOverlappingImage
        header={"Ministry"}
        subheader={"Learn More About Our Ministry"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={ministryDescription}
        dataTestId={"mission-statement"}
      />
      <VerticalHeader
        header={"Methodist Church"}
        longParagraph={methodistChurchDescription}
      />
      <VerticalTimeline items={methodistSymbols} />
    </>
  );
}
