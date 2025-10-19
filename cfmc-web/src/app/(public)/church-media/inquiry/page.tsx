import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { MediaFormSection } from "@/components/features/church-media";
import MediaInquiryHero from "./_sections/MediaInquiryHero";
import { MEDIA_INQUIRY_STICKY_PARALLAX_SECTIONS as SECTIONS_DATA } from "./page.data";
import { generatePageMetadata } from "@/utils/seo";
import { calculateParallaxHeight } from "@/utils/parallaxHeight";
import { StickyParallax } from "@/components/ui/parallax";

export const metadata: Metadata = generatePageMetadata({
  title: "Media Inquiry",
  description:
    "Submit a media inquiry to Calgary Filipino Methodist Church. Request photos, videos, or media assets from church events and services.",
  path: "/church-media/inquiry",
  keywords: [
    "media inquiry",
    "church photos",
    "church videos",
    "event media",
    "media request",
  ],
});

const DISABLE_STICKY_ON_MOBILE = false;

export default function MediaInquiryPage() {
  const sectionHeight = calculateParallaxHeight(SECTIONS_DATA.length);
  return (
    <>
      <MediaInquiryHero />
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
      <MediaFormSection />
    </>
  );
}
