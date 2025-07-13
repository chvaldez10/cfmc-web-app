import { Heading } from "@chakra-ui/react";

function DiscoverMinistries() {
  return (
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
  );
}

export default DiscoverMinistries;
