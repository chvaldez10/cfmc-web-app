"use client";

import { Box, Link, useColorModeValue } from "@chakra-ui/react";

function LearnMoreButton({ href, label }: { href: string; label: string }) {
  const dividerColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box mt="auto" w="100%" borderTop={`1px solid ${dividerColor}`}>
      <Link
        href={href}
        fontWeight="semibold"
        fontSize={{ base: "xs", md: "sm" }}
        color={textColor}
        display="inline-block"
        position="relative"
        textDecoration="none"
        _hover={{
          textDecoration: "none",
          _after: {
            width: "100%",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: 0,
          width: "0%",
          height: "2px",
          bg: textColor,
          transition: "width 0.3s ease",
        }}
      >
        {label} →
      </Link>
    </Box>
  );
}

export default LearnMoreButton;
