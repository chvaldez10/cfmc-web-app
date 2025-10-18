import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { MediaFormSection } from "@/components/features/church-media";
import MediaInquiryHero from "./_sections/MediaInquiryHero";
import { generatePageMetadata } from "@/utils/seo";

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

export default function MediaInquiryPage() {
  return (
    <Box>
      <MediaInquiryHero />
      <MediaFormSection />
    </Box>
  );
}
