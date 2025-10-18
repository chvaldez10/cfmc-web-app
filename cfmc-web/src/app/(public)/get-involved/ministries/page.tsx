import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { HeroHeader } from "@/components/hero";
import { StickyParallax } from "@/components/ui/parallax";
import { MINISTRIES_STICKY_PARALLAX_SECTIONS as SECTIONS_DATA } from "./page.data";
import { calculateParallaxHeight } from "@/utils/parallaxHeight";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Ministries",
  description:
    "Discover the various ministries at Calgary Filipino Methodist Church including worship, youth, women's, men's, children's, and outreach ministries. Get involved and serve the community.",
  path: "/get-involved/ministries",
  keywords: [
    "church ministries",
    "youth ministry",
    "worship ministry",
    "outreach programs",
    "children ministry",
    "women ministry",
    "men ministry",
  ],
});

export default function MinistriesPage() {
  const sectionHeight = calculateParallaxHeight(SECTIONS_DATA.length);

  return (
    <>
      <HeroHeader
        title="Ministries"
        description="Our ministries aim to serve and uplift."
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
          />
        ))}{" "}
      </Box>
    </>
  );
}
