import { Box, VStack, Link, Text, Heading } from "@chakra-ui/react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const accentColor = "purple.600";
  const hoverBg = "purple.50";
  const borderColor = "purple.200";

  // Filter out items we don't want in TOC (like dividers)
  const visibleItems = items.filter(
    (item) => !item.title.startsWith("divider-")
  );

  return (
    <Box
      className="toc-container"
      position="sticky"
      top="120px"
      p={{ base: 4, md: 6 }}
      bg="white"
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      borderLeft="4px solid"
      borderLeftColor={accentColor}
      maxH="calc(100vh - 140px)"
      overflowY="auto"
      display={{ base: "none", lg: "block" }}
      minW="250px"
      maxW="300px"
    >
      <Heading
        as="h3"
        fontSize="md"
        fontWeight="bold"
        color={accentColor}
        mb={4}
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Table of Contents
      </Heading>
      <VStack align="stretch" spacing={1}>
        {visibleItems.map((item, index) => (
          <Link
            key={index}
            href={`#${item.id}`}
            pl={item.level > 1 ? (item.level - 1) * 3 : 0}
            py={2}
            px={3}
            borderRadius="md"
            fontSize="sm"
            color="gray.700"
            fontWeight={item.level === 1 ? "semibold" : "normal"}
            _hover={{
              bg: hoverBg,
              color: accentColor,
              textDecoration: "none",
            }}
            transition="all 0.2s"
            display="block"
          >
            <Text noOfLines={2}>{item.title}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
