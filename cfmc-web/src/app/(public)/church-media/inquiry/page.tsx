import { Box } from "@chakra-ui/react";
import { MediaFormSection } from "@/components/features/church-media";
import MediaInquiryHero from "./_sections/MediaInquiryHero";

export default function MediaInquiryPage() {
  return (
    <Box>
      <MediaInquiryHero />
      <MediaFormSection />
    </Box>
  );
}
