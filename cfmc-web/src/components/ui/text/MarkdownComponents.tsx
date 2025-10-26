"use client";

import {
  Box,
  Heading,
  Text,
  Code,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
  Divider,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

// Reusable markdown-style components matching Article.tsx styling

interface MarkdownHeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  id?: string;
}

export function MarkdownHeading({ level, children, id }: MarkdownHeadingProps) {
  const accentColor = "purple.600";
  const textColor = "gray.800";

  const sizes = {
    1: { base: "2xl", md: "3xl", lg: "4xl" },
    2: { base: "xl", md: "2xl", lg: "3xl" },
    3: { base: "lg", md: "xl", lg: "2xl" },
    4: { base: "md", md: "lg", lg: "xl" },
  };

  const marginTop = {
    1: { base: 0, md: 0 },
    2: { base: 8, md: 10 },
    3: { base: 6, md: 8 },
    4: { base: 4, md: 6 },
  };

  const marginBottom = {
    1: { base: 6, md: 8 },
    2: { base: 4, md: 6 },
    3: { base: 3, md: 4 },
    4: { base: 3, md: 4 },
  };

  return (
    <Heading
      as={`h${level}` as "h1" | "h2" | "h3" | "h4"}
      id={id}
      fontSize={sizes[level]}
      fontWeight="bold"
      color={level === 1 ? textColor : accentColor}
      lineHeight="short"
      letterSpacing="tight"
      mt={marginTop[level]}
      mb={marginBottom[level]}
      scrollMarginTop="100px" // For anchor link navigation with fixed navbar
    >
      {children}
    </Heading>
  );
}

interface MarkdownTextProps {
  children: ReactNode;
  variant?: "normal" | "emphasized";
}

export function MarkdownText({
  children,
  variant = "normal",
}: MarkdownTextProps) {
  const textColor = "gray.800";

  return (
    <Text
      fontSize={{ base: "md", md: "lg" }}
      lineHeight="tall"
      color={textColor}
      mb={{ base: 4, md: 5 }}
      fontWeight={variant === "emphasized" ? "medium" : "normal"}
    >
      {children}
    </Text>
  );
}

interface MarkdownCodeBlockProps {
  children: string;
  language?: string;
}

export function MarkdownCodeBlock({
  children,
  language,
}: MarkdownCodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();
  const codeBg = "gray.800";
  const codeColor = "green.200";
  const borderColor = "purple.500";

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);

    toast({
      title: "Copied!",
      description: "Code has been copied to your clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    // Reset copied state after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Box
      as="pre"
      bg={codeBg}
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      overflow="auto"
      mb={{ base: 4, md: 6 }}
      borderLeft="4px solid"
      borderLeftColor={borderColor}
      position="relative"
    >
      {/* Language Label and Copy Button */}
      <Box
        position="absolute"
        top={2}
        right={2}
        display="flex"
        alignItems="center"
        gap={2}
      >
        {language && (
          <Text
            fontSize="xs"
            color="gray.400"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            {language}
          </Text>
        )}
        <Tooltip label={isCopied ? "Copied!" : "Copy to clipboard"} hasArrow>
          <IconButton
            aria-label="Copy code to clipboard"
            icon={isCopied ? <FaCheck /> : <FaCopy />}
            size="sm"
            variant="ghost"
            color={isCopied ? "green.300" : "gray.400"}
            _hover={{
              bg: "whiteAlpha.200",
              color: isCopied ? "green.200" : "gray.300",
            }}
            onClick={handleCopy}
          />
        </Tooltip>
      </Box>

      <Code
        display="block"
        whiteSpace="pre"
        color={codeColor}
        bg="transparent"
        fontFamily="monospace"
        fontSize={{ base: "sm", md: "md" }}
        lineHeight="tall"
        pr={{ base: 8, md: 10 }} // Add padding to prevent text overlap with copy button
      >
        {children}
      </Code>
    </Box>
  );
}

interface MarkdownInlineCodeProps {
  children: ReactNode;
}

export function MarkdownInlineCode({ children }: MarkdownInlineCodeProps) {
  return (
    <Code
      px={2}
      py={1}
      bg="purple.50"
      color="purple.700"
      borderRadius="md"
      fontSize="0.9em"
      fontWeight="semibold"
    >
      {children}
    </Code>
  );
}

interface MarkdownLinkProps {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
}

export function MarkdownLink({
  href,
  children,
  isExternal = true,
}: MarkdownLinkProps) {
  return (
    <Link
      href={href}
      color="purple.600"
      fontWeight="medium"
      textDecoration="underline"
      isExternal={isExternal}
      _hover={{
        color: "purple.700",
        textDecoration: "none",
      }}
      transition="all 0.2s"
    >
      {children}
    </Link>
  );
}

interface MarkdownListProps {
  ordered?: boolean;
  children: ReactNode;
}

export function MarkdownList({ ordered = false, children }: MarkdownListProps) {
  const ListComponent = ordered ? OrderedList : UnorderedList;

  return (
    <ListComponent
      spacing={{ base: 2, md: 3 }}
      mb={{ base: 4, md: 6 }}
      pl={{ base: 4, md: 6 }}
      color="gray.800"
    >
      {children}
    </ListComponent>
  );
}

interface MarkdownListItemProps {
  children: ReactNode;
}

export function MarkdownListItem({ children }: MarkdownListItemProps) {
  return (
    <ListItem fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
      {children}
    </ListItem>
  );
}

export function MarkdownDivider() {
  return (
    <Divider
      borderColor="gray.300"
      borderWidth="1px"
      my={{ base: 8, md: 10 }}
      opacity={0.6}
    />
  );
}

interface MarkdownSectionProps {
  children: ReactNode;
  id?: string;
}

export function MarkdownSection({ children, id }: MarkdownSectionProps) {
  return (
    <Box as="section" id={id} mb={{ base: 6, md: 8 }}>
      {children}
    </Box>
  );
}
