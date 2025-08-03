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
        Get Involved
      </Heading>
      <TwoByOneGrid py={{ base: 4, md: 8 }} w="full">
        <ContentCard
          title="Music Ministry"
          description="Join our choir and help us lead worship through song."
        />
        <ContentCard
          title="Bread Ministry"
          description="Help us prepare and distribute bread to the community."
        />
      </TwoByOneGrid>
    </>
  );
}

export default DiscoverMinistries;
