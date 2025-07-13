import { Heading } from "@chakra-ui/react";
import { TwoByOneGrid } from "@/components/hero/";
import { ContentCard } from "@/components/ui/cards";

function DiscoverMinistries() {
  return (
    <>
      <Heading
        id="promo-cards-heading"
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={{ base: 6, md: 8 }}
        color="gray.800"
        _dark={{ color: "gray.100" }}
      >
        Discover Our Ministries
      </Heading>
      <TwoByOneGrid py={{ base: 4, md: 8 }}>
        <ContentCard
          title="Discipleship Ministry"
          description="Discipleship Ministry is a ministry that helps people grow in their faith and become more like Jesus."
        />
        <ContentCard
          title="Music Ministry"
          description="Music Ministry is a ministry that helps people grow in their faith and become more like Jesus."
        />
      </TwoByOneGrid>
    </>
  );
}

export default DiscoverMinistries;
