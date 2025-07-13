import { ColumnLayout, HeroHeader } from "@/components/hero";
import { TwoByOneGrid } from "@/components/hero/";
import { ContentCard } from "@/components/ui/cards";

export default function MissionVisionPage() {
  return (
    <>
      <HeroHeader
        title="Mission and"
        titleHighlight="Vision"
        description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
      ></HeroHeader>

      <TwoByOneGrid minH="50vh">
        <ContentCard
          title="Mission"
          description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
        />
        <ContentCard
          title="Vision"
          description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
        />
      </TwoByOneGrid>
    </>
  );
}
