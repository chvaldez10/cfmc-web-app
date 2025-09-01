export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  altText?: string;
}

/**
 * Gallery image presets for common images
 * Organized by categories for easy selection
 */
export const IMAGE_PRESETS = {
  // Anniversary & Celebrations
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

  // Ministry & Activities
  SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL: {
    imageSrc:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-5.JPEG",
    imageAlt: "Summer Camp 2025 Outside of Chapel",
  },

  // Add more presets as needed for ministry pages
  YOUTH_MINISTRY_IMAGE: {
    imageSrc:
      "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/gallery-1.JPG",
    imageAlt: "Youth Ministry Activities",
  },
} as const;

export const HOME_JUMBO_LIMIT = 8;
