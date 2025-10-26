import React from "react";
import { Box, VStack, HStack } from "@chakra-ui/react";
import { Metadata } from "next";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";
import { COMMON_Y_PADDING } from "@/constants/theme/ui";
import {
  MarkdownHeading,
  MarkdownText,
  MarkdownCodeBlock,
  MarkdownInlineCode,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownDivider,
  MarkdownSection,
  TableOfContents,
} from "@/components/ui/text";
import { documentationContent, documentationMetadata } from "./page.data";
import type { ContentBlock, InlineCode, Link } from "@/types/ui/documentation";
import "./styles.css";

// Metadata for SEO
export const metadata: Metadata = {
  title: documentationMetadata.title,
  description: documentationMetadata.description,
  openGraph: {
    title: documentationMetadata.title,
    description: documentationMetadata.description,
    type: "website",
  },
};

// Helper function to render inline content with mixed types
function renderInlineContent(
  content: string | (string | InlineCode | Link)[]
): React.ReactNode {
  if (typeof content === "string") {
    return content;
  }

  return content.map((item, index) => {
    if (typeof item === "string") {
      return <React.Fragment key={index}>{item}</React.Fragment>;
    }

    if (item.type === "inline-code") {
      return (
        <MarkdownInlineCode key={index}>{item.content}</MarkdownInlineCode>
      );
    }

    if (item.type === "link") {
      return (
        <MarkdownLink key={index} href={item.url}>
          {item.text}
        </MarkdownLink>
      );
    }

    return null;
  });
}

// Helper function to render a single content block
function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "heading":
      return (
        <MarkdownHeading key={index} level={block.level} id={block.id}>
          {block.content}
        </MarkdownHeading>
      );

    case "paragraph":
      return (
        <MarkdownText key={index}>
          {renderInlineContent(block.content)}
        </MarkdownText>
      );

    case "code":
      return (
        <MarkdownCodeBlock key={index} language={block.language}>
          {block.content}
        </MarkdownCodeBlock>
      );

    case "list":
      return (
        <MarkdownList key={index} ordered={block.ordered}>
          {block.items.map((item, itemIndex) => (
            <MarkdownListItem key={itemIndex}>
              {renderInlineContent(item)}
            </MarkdownListItem>
          ))}
        </MarkdownList>
      );

    case "divider":
      return <MarkdownDivider key={index} />;

    default:
      return null;
  }
}

export default function DocumentationPage() {
  // Extract TOC items from the content
  const tocItems: Array<{ id: string; title: string; level: number }> = [];

  documentationContent.forEach((section) => {
    // Find the first heading in each section
    const heading = section.blocks.find((block) => block.type === "heading") as
      | { type: "heading"; level: 1 | 2 | 3 | 4; content: string; id?: string }
      | undefined;

    if (heading && heading.id) {
      tocItems.push({
        id: heading.id,
        title: heading.content,
        level: heading.level,
      });
    }
  });

  return (
    <Box
      mt={NAVBAR_HEIGHT}
      py={COMMON_Y_PADDING}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Box maxW="7xl" mx="auto">
        <HStack
          align="start"
          spacing={{ base: 0, lg: 8 }}
          gap={{ base: 0, lg: 8 }}
        >
          {/* Main Content */}
          <Box flex={1} minW={0}>
            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
              {documentationContent.map((section, sectionIndex) => {
                // Skip rendering sections that only contain a divider
                if (
                  section.blocks.length === 1 &&
                  section.blocks[0].type === "divider"
                ) {
                  return renderBlock(section.blocks[0], sectionIndex);
                }

                return (
                  <MarkdownSection key={sectionIndex} id={section.id}>
                    {section.blocks.map((block, blockIndex) =>
                      renderBlock(block, blockIndex)
                    )}
                  </MarkdownSection>
                );
              })}

              {/* Last Updated Footer */}
              <Box
                mt={{ base: 8, md: 12 }}
                pt={{ base: 6, md: 8 }}
                borderTop="1px solid"
                borderColor="gray.200"
              >
                <MarkdownText variant="emphasized">
                  Last updated: {documentationMetadata.lastUpdated}
                </MarkdownText>
              </Box>
            </VStack>
          </Box>

          {/* Table of Contents - Desktop only */}
          <TableOfContents items={tocItems} />
        </HStack>
      </Box>
    </Box>
  );
}
