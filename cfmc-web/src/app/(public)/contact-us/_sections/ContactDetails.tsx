"use client";

import {
  Box,
  VStack,
  Text,
  Link,
  Icon,
  HStack,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Branding } from "@/constants/shared/enums";

export default function ContactDetails() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack spacing={6} align="stretch">
      <Box
        bg={bgColor}
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        w="full"
        borderWidth="1px"
        borderColor={borderColor}
        shadow="sm"
      >
        <VStack spacing={6} align="stretch">
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color={accentColor}
          >
            Contact Us
          </Text>

          {/* Address Section */}
          <HStack spacing={4} align="center">
            <Tooltip label="Address" aria-label="Church Address">
              {/* ✅ Tooltip added for clarity */}
              <Icon
                as={FaMapMarkerAlt}
                color={accentColor}
                boxSize={5}
                aria-hidden
              />
            </Tooltip>
            <Box as="address" fontStyle="normal">
              <Text fontWeight="medium" color={textColor}>
                {Branding.CHURCH_ADDRESS}
              </Text>
            </Box>
          </HStack>

          {/* Phone Section - ✅ Expanded tap target + focus styling */}
          <HStack
            as="a"
            href={`tel:${Branding.CHURCH_PHONE_NUMBER}`}
            spacing={4}
            align="center"
            _hover={{ bg: hoverBg }}
            _focus={{ outline: "2px solid", outlineColor: accentColor }}
            borderRadius="md"
            p={2}
          >
            <Tooltip label="Phone" aria-label="Phone number">
              <Icon as={FaPhone} color={accentColor} boxSize={5} aria-hidden />
            </Tooltip>
            <Text color={textColor}>{Branding.CHURCH_PHONE_NUMBER}</Text>
          </HStack>

          {/* Email Section - ✅ Expanded tap target + focus styling */}
          <HStack
            as="a"
            href={`mailto:${Branding.CHURCH_EMAIL}`}
            spacing={4}
            align="center"
            _hover={{ bg: hoverBg }}
            _focus={{ outline: "2px solid", outlineColor: accentColor }}
            borderRadius="md"
            p={2}
          >
            <Tooltip label="Email" aria-label="Email address">
              <Icon
                as={FaEnvelope}
                color={accentColor}
                boxSize={5}
                aria-hidden
              />
            </Tooltip>
            <Text color={textColor}>{Branding.CHURCH_EMAIL}</Text>
          </HStack>

          {/* Facebook Section - ✅ Fixed Link component usage */}
          <Link
            href={Branding.CHURCH_FACEBOOK_URL}
            isExternal
            target="_blank"
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "2px solid", outlineColor: accentColor }}
          >
            <HStack
              spacing={4}
              align="center"
              _hover={{ bg: hoverBg }}
              borderRadius="md"
              p={2}
              transition="all 0.2s"
            >
              <Tooltip label="Facebook">
                <Icon
                  as={FaFacebook}
                  color={accentColor}
                  boxSize={5}
                  aria-hidden
                />
              </Tooltip>
              <Text color={accentColor}>
                Visit our Facebook page <ExternalLinkIcon ml={1} />
              </Text>
            </HStack>
          </Link>
        </VStack>
      </Box>
    </VStack>
  );
}
