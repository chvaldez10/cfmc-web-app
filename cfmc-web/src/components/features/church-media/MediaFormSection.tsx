import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { MediaInquiryForm } from "@/components/forms";
import { MEDIA_INQUIRY_CONTENT } from "@/constants/shared/contact";
import styles from "./MediaFormSection.module.css";

export default function MediaFormSection() {
  return (
    <Box
      bg="var(--color-light-100)"
      py={{ base: 16, md: 24 }}
      position="relative"
    >
      {/* Decorative Top Border */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="3px"
        bgGradient="linear(to-r, brand.400, purple.500, brand.400)"
      />

      <Container maxW="5xl" px={{ base: 6, md: 8 }}>
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="800"
              bgGradient="linear(to-r, brand.500, purple.600)"
              bgClip="text"
              className={styles.header}
            >
              {MEDIA_INQUIRY_CONTENT[0].title}
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="2xl"
              className={styles.description}
            >
              {MEDIA_INQUIRY_CONTENT[0].description}
            </Text>
          </VStack>

          {/* Form with Entrance Animation */}
          <Box className={styles.formWrapper}>
            <MediaInquiryForm />
          </Box>
        </VStack>
      </Container>

      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="20%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="50%"
        bgGradient="radial(brand.50, transparent)"
        opacity="0.8"
        filter="blur(60px)"
        pointerEvents="none"
        display={{ base: "none", lg: "block" }}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="250px"
        h="250px"
        borderRadius="50%"
        bgGradient="radial(purple.50, transparent)"
        opacity="0.8"
        filter="blur(60px)"
        pointerEvents="none"
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  );
}
