import { HeroHeader } from "@/components/hero";
import { Box } from "@chakra-ui/react";

import { ABOUT_CONTENT } from "@/constants/shared/about";
import { StickyParallax } from "@/components/ui/parallax";

import type { TextBlock } from "@/types/ui/components";

interface SectionData {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: "purple" | "green" | "blue" | "red" | "orange";
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
}

// Data for mission and vision sections
const SECTIONS_DATA: SectionData[] = [
  {
    title: ABOUT_CONTENT.VISION_STATEMENT.title,
    textBlocks: [
      {
        text: ABOUT_CONTENT.VISION_STATEMENT.description,
        isQuote: ABOUT_CONTENT.VISION_STATEMENT.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.VISION_STATEMENT_QUOTE.description,
        isQuote: ABOUT_CONTENT.VISION_STATEMENT_QUOTE.isQuote || false,
      },
    ],
    colorScheme: "purple",
    imageSrc: "/gallery/IMG_4523.JPG",
    imageAlt: "Vision - CFMC Community Gathering",
  },
  {
    title: "Our Mission",
    textBlocks: [
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE_2.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE_2.isQuote || false,
      },
    ],
    colorScheme: "green",
    reverse: true,
    imageSrc: "/gallery/IMG_3790.jpg",
    imageAlt: "Mission - CFMC Service and Outreach",
  },
  {
    title: ABOUT_CONTENT.CFMC_MOTTO.title,
    textBlocks: [
      {
        text: ABOUT_CONTENT.CFMC_MOTTO.description,
        isQuote: ABOUT_CONTENT.CFMC_MOTTO.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.CFMC_MOTTO_QUOTE.description,
        isQuote: ABOUT_CONTENT.CFMC_MOTTO_QUOTE.isQuote || false,
      },
    ],
    colorScheme: "purple",
    imageSrc: "/gallery/IMG_4855.JPEG",
    imageAlt: "CFMC Motto - Love God, Love People",
  },
];

export default function MissionVisionPage() {
  const sectionHeight = (SECTIONS_DATA.length - 1) * 100 + 80;

  return (
    <>
      <HeroHeader
        title="Mission and"
        titleHighlight="Vision"
        description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
      />

      {/* Stacking Sections Container */}
      <Box position="relative" height={`${sectionHeight}vh`}>
        {SECTIONS_DATA.map((section, index) => (
          <StickyParallax
            key={section.title}
            title={section.title}
            textBlocks={section.textBlocks}
            colorScheme={section.colorScheme}
            reverse={section.reverse}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            zIndex={index + 1}
          />
        ))}
      </Box>
    </>
  );
}
