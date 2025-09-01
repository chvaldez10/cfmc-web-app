export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  altText: string;
}

/**
 * Gallery image presets - unified GalleryItem format
 * Used for both gallery displays and sticky parallax sections
 */
export const IMAGE_PRESETS = {
  // Anniversary & Celebrations
  SEVENTH_ANNIVERSARY_IMAGE: {
    id: 1,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-1.JPG",
    title: "7th Anniversary Celebration",
    altText: "7th Anniversary Image",
  },
  CHRISTMAS_CHOIR_IMAGE: {
    id: 2,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-2.jpg",
    title: "Christmas Choir",
    altText: "Christmas Choir Image",
  },
  CHRISTMAS_CONCERT_IMAGE: {
    id: 3,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-3.JPEG",
    title: "Christmas Concert",
    altText: "Christmas Concert Image",
  },
  CHRISTMAS_CONCERT_IMAGE_TITA_KAYLA: {
    id: 4,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-4.JPEG",
    title: "Christmas Concert - Tita Kayla",
    altText: "Christmas Concert Image Tita Kayla",
  },
  SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL: {
    id: 5,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-5.JPEG",
    title: "Summer Camp 2025",
    altText: "Summer Camp 2025 Outside of Chapel",
  },
  OUTDOOR_OUTREACH_IMAGE_1: {
    id: 6,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-6.JPEG",
    title: "Outdoor Outreach Ministry",
    altText: "Outdoor Outreach Image 1",
  },
  OUTDOOR_OUTREACH_IMAGE_2: {
    id: 7,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-7.JPEG",
    title: "Community Outreach",
    altText: "Outdoor Outreach Image 2",
  },
  OUTDOOR_OUTREACH_IMAGE_3: {
    id: 8,
    image:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-8.JPG",
    title: "Outdoor Ministry",
    altText: "Outdoor Outreach Image 3",
  },
} as const satisfies Record<string, GalleryItem>;

export const HOME_JUMBO_GALLERY_ITEMS = Object.values(
  IMAGE_PRESETS
) as readonly GalleryItem[];

export const HOME_JUMBO_LIMIT = 8;
