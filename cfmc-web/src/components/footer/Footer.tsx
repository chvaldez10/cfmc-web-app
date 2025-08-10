import { Box, Flex, Text, Link, VStack, Stack } from "@chakra-ui/react";
import { FOOTER_ITEMS } from "@/constants/publicFooter";
import { Branding, FooterLabels } from "@/constants/shared/enums";
import { COMMON_X_PADDING } from "@/constants/shared/ui";

const Footer = () => {
  return (
    <>
      <FooterDetails />
    </>
  );
};

export default Footer;

const FooterDetails = () => {
  return (
    <Box color="gray.800" py={16}>
      <Flex
        maxW="7xl"
        mx="auto"
        px={COMMON_X_PADDING}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
      >
        <VStack align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
            {Branding.CHURCH_NAME_ABBREVIATION}
          </Text>
          <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
            {FooterLabels.ADDRESS}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {Branding.CHURCH_ADDRESS} {Branding.CHURCH_POSTAL_CODE}
          </Text>
          <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
            {FooterLabels.CONTACT}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {Branding.CHURCH_PHONE_NUMBER}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {Branding.CHURCH_EMAIL}
          </Text>
        </VStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 16 }}
        >
          {FOOTER_ITEMS.map((footerItem, index) => (
            <VStack align="start" spacing={4} key={index}>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                {footerItem.label}
              </Text>
              {footerItem.children?.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
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
