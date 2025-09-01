import { HeroHeader } from "@/components/hero";
import { Box } from "@chakra-ui/react";

import { StickyParallax } from "@/components/ui/parallax";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import {
  generateSectionsData,
  VISUAL_PRESETS,
  IMAGE_PRESETS,
  type SectionData,
} from "@/utils/sectionDataGenerator";

// Data for mission and vision sections - much cleaner!
const SECTIONS_DATA: SectionData[] = generateSectionsData(
  [
    {
      content: {
        contentKeys: ["VISION_STATEMENT", "VISION_STATEMENT_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.COMMUNITY_GATHERING,
      },
    },
    {
      content: {
        contentKeys: ["MISSION_STATEMENT", "MISSION_STATEMENT_QUOTE"],
        title: "Our Mission", // Override title
      },
      visual: {
        ...VISUAL_PRESETS.GREEN_RIGHT,
        ...IMAGE_PRESETS.SERVICE_OUTREACH,
      },
    },
    {
      content: {
        contentKeys: ["CFMC_MOTTO", "CFMC_MOTTO_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.WORSHIP_SERVICE,
      },
    },
  ],
  ABOUT_CONTENT
);

export default function MissionVisionPage() {
  const sectionHeight = (SECTIONS_DATA.length - 1) * 100 + 120; // Increased from 80 to 120

  return (
    <>
      <HeroHeader
        title="Mission and"
        titleHighlight="Vision"
        description="Love God, Love People. Proclaim the Good News of Christ."
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
