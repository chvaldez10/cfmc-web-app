import HeroOverlappingImage from "@/components/core/hero/HeroOverlappingImage";
import MissionStatement from "@/data/hero/MissionStatement";

export default function page() {
  return (
    <HeroOverlappingImage
      header={"Welcome to Our Church"}
      subheader={"Mission Statement"}
      imagePath={"/background/Bible_with_leaf_resized.jpg"}
      element={<MissionStatement />}
    />
  );
}
