import { Box } from "@chakra-ui/react";
import { HeroHeader } from "@/components/hero";
import { StickyParallax } from "@/components/ui/parallax";
import { SECTIONS_DATA } from "./page.data";

export default function MissionVisionPage() {
  const sectionHeight = (SECTIONS_DATA.length - 1) * 100 + 120;
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
