"use client";

import {
  Box,
  VStack,
  Text,
  Link,
  Icon,
  HStack,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import ContentSection from "@/components/ui/sections/ContentSection";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");

  return (
    <Box
      as="section"
      aria-labelledby="contact-content-heading"
      py={{ base: 8, md: 12 }}
    >
      <VStack
        spacing={{ base: 8, md: 12 }}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
          {/* Contact Information */}
          <VStack spacing={6} align="stretch">
            <Box
              bg={useColorModeValue("gray.50", "gray.800")}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              w="full"
              borderLeft="4px solid"
              borderLeftColor={accentColor}
            >
              <VStack spacing={6} align="stretch">
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  mb={2}
                >
                  Get in Touch
                </Text>

                <HStack spacing={4} align="start">
                  <Icon
                    as={FaMapMarkerAlt}
                    color={accentColor}
                    boxSize={5}
                    mt={1}
                  />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color={textColor}>
                      Address:
                    </Text>
                    <Text color={textColor}>
                      Calgary Filipino Methodist Church
                      <br />
                      123 Church Street SW
                      <br />
                      Calgary, AB T2P 1J9
                    </Text>
                  </VStack>
                </HStack>

                <HStack spacing={4} align="start">
                  <Icon as={FaPhone} color={accentColor} boxSize={5} mt={1} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color={textColor}>
                      Phone:
                    </Text>
                    <Link
                      href="tel:+1403-555-0123"
                      color={accentColor}
                      _hover={{ textDecoration: "underline" }}
                    >
                      (403) 555-0123
                    </Link>
                  </VStack>
                </HStack>

                <HStack spacing={4} align="start">
                  <Icon
                    as={FaEnvelope}
                    color={accentColor}
                    boxSize={5}
                    mt={1}
                  />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color={textColor}>
                      Email:
                    </Text>
                    <Link
                      href="mailto:info@calgaryfilipinometodistchurch.com"
                      color={accentColor}
                      _hover={{ textDecoration: "underline" }}
                    >
                      info@calgaryfilipinometodistchurch.com
                    </Link>
                  </VStack>
                </HStack>

                <HStack spacing={4} align="start">
                  <Icon
                    as={FaFacebook}
                    color={accentColor}
                    boxSize={5}
                    mt={1}
                  />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color={textColor}>
                      Follow us on Social Media:
                    </Text>
                    <VStack align="start" spacing={1}>
                      <Link
                        href="https://facebook.com/calgaryfilipinometodistchurch"
                        color={accentColor}
                        _hover={{ textDecoration: "underline" }}
                        isExternal
                      >
                        Facebook
                      </Link>
                      <Link
                        href="https://instagram.com/calgaryfilipinometodistchurch"
                        color={accentColor}
                        _hover={{ textDecoration: "underline" }}
                        isExternal
                      >
                        Instagram
                      </Link>
                    </VStack>
                  </VStack>
                </HStack>
              </VStack>
            </Box>

            <ContentSection title="Visit Us">
              Feel free to reach out or visit us during our worship services or
              weekly gatherings. You&apos;re always welcome here!
            </ContentSection>
          </VStack>

          {/* Contact Form */}
          <ContactForm />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
