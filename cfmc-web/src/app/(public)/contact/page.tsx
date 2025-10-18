import { Metadata } from "next";
import { Box, Container, VStack } from "@chakra-ui/react";
import ContactUsHero from "./_sections/ContactUsHero";
import { ContactForm } from "@/components/forms";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Calgary Filipino Methodist Church. Contact us for inquiries about worship services, events, ministries, or general questions.",
  path: "/contact",
  keywords: [
    "contact church",
    "church inquiries",
    "get in touch",
    "church location",
    "Calgary church contact",
  ],
});

export default function ContactUsPage() {
  return (
    <Box>
      <ContactUsHero />
      <Box bg="var(--color-light-100)" py={{ base: 16, md: 24 }}>
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={{ base: 8, md: 12 }}>
            <ContactForm />
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
