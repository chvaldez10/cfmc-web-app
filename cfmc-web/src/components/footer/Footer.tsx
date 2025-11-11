"use client";

import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Stack,
  HStack,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FOOTER_ITEMS } from "@/constants/publicFooter";
import { Branding, FooterLabels } from "@/constants/shared/enums";
import { COMMON_X_PADDING, COMMON_MAX_WIDTH } from "@/constants/theme/ui";

const Footer = () => {
  return <FooterDetails />;
};

export default Footer;

interface SocialIconLinkProps {
  href: string;
  ariaLabel: string;
  icon: IconType;
  color: string;
  hoverBorderColor: string;
  hoverBgColor: string;
  hoverTextColor?: string;
  hoverShadow: string;
  tooltipLabel: string;
}

const SocialIconLink = ({
  href,
  ariaLabel,
  icon,
  color,
  hoverBorderColor,
  hoverBgColor,
  hoverTextColor,
  hoverShadow,
  tooltipLabel,
}: SocialIconLinkProps) => {
  return (
    <Tooltip
      label={tooltipLabel}
      hasArrow
      placement="top"
      bg="gray.700"
      color="white"
      fontSize="sm"
      px={3}
      py={2}
      borderRadius="md"
    >
      <Link
        href={href}
        isExternal
        aria-label={ariaLabel}
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="full"
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={color}
        transition="all 0.3s ease"
        _hover={{
          borderColor: hoverBorderColor,
          bg: hoverBgColor,
          color: hoverTextColor,
          transform: "translateY(-2px)",
          boxShadow: hoverShadow,
        }}
        _active={{
          transform: "translateY(0)",
        }}
      >
        <Icon as={icon} boxSize={{ base: 4, md: 5 }} />
      </Link>
    </Tooltip>
  );
};

interface FooterNavSectionProps {
  label: string;
  items?: Array<{
    label: string;
    href?: string;
  }>;
}

const FooterNavSection = ({ label, items }: FooterNavSectionProps) => {
  return (
    <VStack align="start" spacing={4}>
      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
        {label}
      </Text>
      {items?.map((item) => (
        <Link
          href={item.href || "#"}
          key={item.label}
          fontSize={{ base: "sm", md: "md" }}
        >
          {item.label}
        </Link>
      ))}
    </VStack>
  );
};

interface ContactInfoProps {
  label: string;
  value?: string;
}

const ContactInfo = ({ label, value }: ContactInfoProps) => {
  return (
    <>
      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
        {label}
      </Text>
      {value && <Text fontSize={{ base: "sm", md: "md" }}>{value}</Text>}
    </>
  );
};

const FooterDetails = () => {
  return (
    <Box color="gray.800" py={16} data-testid="footer-details">
      <Flex
        maxW={COMMON_MAX_WIDTH}
        mx="auto"
        px={COMMON_X_PADDING}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
      >
        <VStack align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          {/* Contact Information */}
          <ContactInfo
            label={FooterLabels.ADDRESS}
            value={`Place of Worship: ${Branding.CHURCH_ADDRESS}`}
          />

          {/* Social Media Icons */}
          <ContactInfo label={FooterLabels.CONTACT} />
          <Box>
            <HStack spacing={4}>
              <SocialIconLink
                href={Branding.CHURCH_FACEBOOK_URL}
                ariaLabel="Visit our Facebook page"
                icon={FaFacebook}
                color="#1877F2"
                hoverBorderColor="#1877F2"
                hoverBgColor="blue.50"
                hoverShadow="0 4px 12px rgba(24, 119, 242, 0.15)"
                tooltipLabel="Visit our Facebook page"
              />
              <SocialIconLink
                href={`mailto:${Branding.CHURCH_EMAIL}`}
                ariaLabel="Send us an email"
                icon={FaEnvelope}
                color="gray.600"
                hoverBorderColor="secondary.500"
                hoverBgColor="green.50"
                hoverTextColor="secondary.600"
                hoverShadow="0 4px 12px rgba(71, 160, 71, 0.15)"
                tooltipLabel={`Email: ${Branding.CHURCH_EMAIL}`}
              />
              <SocialIconLink
                href={`tel:${Branding.CHURCH_PHONE_NUMBER}`}
                ariaLabel="Call us"
                icon={FaPhone}
                color="green.600"
                hoverBorderColor="green.500"
                hoverBgColor="green.50"
                hoverTextColor="green.700"
                hoverShadow="0 4px 12px rgba(34, 197, 94, 0.15)"
                tooltipLabel={`Call: ${Branding.CHURCH_PHONE_NUMBER}`}
              />
            </HStack>
          </Box>
        </VStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 16 }}
        >
          {FOOTER_ITEMS.map((footerItem, index) => (
            <FooterNavSection
              key={index}
              label={footerItem.label}
              items={footerItem.children}
            />
          ))}
        </Stack>
      </Flex>

      <Box borderTop="1px" borderColor="gray.300" mt={10} pt={4}>
        <Flex justify="center" align="center">
          <Text mb={{ base: 4, md: 0 }} fontSize={{ base: "sm", md: "md" }}>
            {FooterLabels.COPYRIGHT_NOTICE} {Branding.CHURCH_NAME}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
