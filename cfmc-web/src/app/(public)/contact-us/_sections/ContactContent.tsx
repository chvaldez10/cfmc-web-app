import { Box, VStack, SimpleGrid } from "@chakra-ui/react";

import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { TwoByOneGrid } from "@/components/hero";

export default function ContactContent() {
  return (
    <Box as="section" aria-labelledby="contact-content-heading">
      <VStack spacing={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
          <ContactDetails />
          <ContactForm />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
