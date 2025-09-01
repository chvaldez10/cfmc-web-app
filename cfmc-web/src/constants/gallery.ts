export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  altText?: string;
}

/**
 * Gallery image presets for common images
 */
export const IMAGE_PRESETS = {
  SEVENTH_ANNIVERSARY_IMAGE: {
    imageSrc:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-1.JPG",
    imageAlt: "7th Anniversary Image",
  },
  CHRISTMAS_CHOIR_IMAGE: {
    imageSrc:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-2.jpg",
    imageAlt: "Christmas Choir Image",
  },
  SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL: {
    imageSrc:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-5.JPEG",
    imageAlt: "Summer Camp 2025 Outside of Chapel",
  },
} as const;

export const HOME_JUMBO_LIMIT = 8;
