import { HeroOverlappingImage } from "@/components/core/hero";

const headerLongParagraph =
  "Our Community. We are a community of believers who are passionate about serving Jesus Christ.";

export default function page() {
  return (
    <>
      <HeroOverlappingImage
        header={"Our Community"}
        subheader={"Our Community"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={headerLongParagraph}
        dataTestId={"our-community"}
      />
    </>
  );
}
