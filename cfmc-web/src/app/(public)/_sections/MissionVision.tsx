import { TwoByOneGrid } from "@/components/hero/";
import { ContentCard } from "@/components/ui/cards";

function MissionVisionCards() {
  return (
    <TwoByOneGrid py={{ base: 4, md: 8 }}>
      <ContentCard
        title="Mission"
        description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
        colorScheme="green"
      />
      <ContentCard
        title="Vision"
        description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
        colorScheme="green"
      />
    </TwoByOneGrid>
  );
}

export default MissionVisionCards;
