import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";
import { GALLERY_ITEMS, GalleryItem } from "@/constants/gallery";
import {
  getGalleryItems,
  TransformedGalleryItem,
} from "@/lib/supabase/actions";

export default async function WorshipCountdown() {
  // TODO: Remove this mock date
  const mockDate = new Date(Date.UTC(2025, 7, 2, 20, 0, 0)); // 2 PM MDT, 0-indexed month
  const galleryItems = await getGalleryItems();

  // Use fetched items if available, otherwise fallback to static items
  const displayItems: GalleryItem[] =
    galleryItems.length > 0
      ? galleryItems
      : GALLERY_ITEMS.map((item) => ({ ...item, altText: item.title }));
  return (
    <VStack spacing={4} align="center" w="100%">
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color="purple.600"
        textAlign="center"
      >
        Join Us This Sunday
      </Text>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="gray.700"
        textAlign="center"
      >
        Experience worship with our community
      </Text>
      <GalleryCollage
        galleryItems={displayItems}
        imageSize={{ base: "70px", md: "90px" }}
        spacing={{ base: 80, md: 100 }}
      />
      <CountDownTimer worshipStartDateTime={mockDate} />
    </VStack>
  );
}
