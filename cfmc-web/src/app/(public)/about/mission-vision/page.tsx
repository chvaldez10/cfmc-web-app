import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { HeroHeader } from "@/components/hero";
import { StickyParallax } from "@/components/ui/parallax";
import { MISSION_VISION_STICKY_PARALLAX_SECTIONS as SECTIONS_DATA } from "./page.data";
import { calculateParallaxHeight } from "@/utils/parallaxHeight";
import aboutContentData from "@/data/about-content.json";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Mission and Vision",
  description:
    "Discover the mission and vision of Calgary Filipino Methodist Church. Learn about our commitment to faith, community, and service in Calgary.",
  path: "/about/mission-vision",
  keywords: [
    "church mission",
    "church vision",
    "faith community",
    "Christian values",
    "community service",
  ],
});

const DISABLE_STICKY_ON_MOBILE = false;

export default function MissionVisionPage() {
  const sectionHeight = calculateParallaxHeight(SECTIONS_DATA.length);
  return (
    <>
      <HeroHeader
        title="Mission and"
        titleHighlight="Vision"
        description={aboutContentData.CFMC_MOTTO_QUOTE.description}
      />

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
            disableStickyOnMobile={DISABLE_STICKY_ON_MOBILE}
          />
        ))}
      </Box>
    </>
  );
}
