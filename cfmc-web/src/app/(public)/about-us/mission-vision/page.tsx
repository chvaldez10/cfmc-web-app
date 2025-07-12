import { ColumnLayout, HeroHeader } from "@/components/hero";
import { Text } from "@chakra-ui/react";

export default function MissionVisionPage() {
  return (
    <>
      <ColumnLayout maxW="5xl">
        <HeroHeader
          title="Mission and"
          titleHighlight="Vision"
          description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
        ></HeroHeader>
        <Text>Mission</Text>
      </ColumnLayout>
    </>
  );
}
