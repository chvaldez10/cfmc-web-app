export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  altText: string;
}

const IMAGE_PREFIX =
  "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/";

export const IMAGE_PRESETS = {
  SEVENTH_ANNIVERSARY_IMAGE: {
    id: 1,
    image: `${IMAGE_PREFIX}/header/seventh-anniversary-group-pic-1.JPG`,
    title: "7th Anniversary Celebration",
    altText: "7th Anniversary Image",
  },
  CHRISTMAS_CHOIR_IMAGE: {
    id: 2,
    image: `${IMAGE_PREFIX}/header/christmas-choir-pic-1.jpg`,
    title: "Christmas Choir",
    altText: "Christmas Choir Image",
  },
  CHRISTMAS_CONCERT_IMAGE: {
    id: 3,
    image: `${IMAGE_PREFIX}/header/christmas-choir-pic-2.JPEG`,
    title: "Christmas Choir",
    altText: "Christmas Choir Image",
  },
  CHRISTMAS_CONCERT_IMAGE_TITA_KAYLA: {
    id: 4,
    image: `${IMAGE_PREFIX}/header/christmas-choir-pic-3.JPEG`,
    title: "Christmas Choir - Tita Kayla",
    altText: "Christmas Choir Image Tita Kayla",
  },
  SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL: {
    id: 5,
    image: `${IMAGE_PREFIX}/header/summer-camp-2025-1.JPEG`,
    title: "Summer Camp 2025",
    altText: "Summer Camp 2025 Outside of Chapel",
  },
  OUTDOOR_OUTREACH_IMAGE_1: {
    id: 6,
    image: `${IMAGE_PREFIX}/header/fairmont-2024-1.JPEG`,
    title: "Fairmont Retreat 2024",
    altText: "Fairmont Retreat 2024 Image",
  },
  OUTDOOR_OUTREACH_IMAGE_2: {
    id: 7,
    image: `${IMAGE_PREFIX}/header/group-pic-kuriakos-2025-3.JPEG`,
    title: "Group Pic Kuriakos 2025",
    altText: "Group Pic Kuriakos 2025",
  },
  OUTDOOR_OUTREACH_IMAGE_3: {
    id: 8,
    image: `${IMAGE_PREFIX}/header/fairmont-2024-2.JPG`,
    title: "Fairmont Retreat 2024",
    altText: "Fairmont Retreat 2024 Image",
  },
  GROUP_PIC_KURIAKOS_2025_2: {
    id: 9,
    image: `${IMAGE_PREFIX}/header/group-pic-kuriakos-2025-2.JPEG`,
    title: "Group Pic Kuriakos 2025",
    altText: "Group Pic Kuriakos 2025",
  },
  CHILDREN_MINISTRY_IMAGE_1: {
    id: 10,
    image: `${IMAGE_PREFIX}/ministries/children-ministry-1.JPEG`,
    title: "Children Ministry",
    altText: "Children Ministry Image",
  },
  OUTREACH_MINISTRY_IMAGE_1: {
    id: 11,
    image: `${IMAGE_PREFIX}/ministries/outreach-image-1.JPG`,
    title: "Outreach Ministry",
    altText: "Outreach Ministry Image",
  },
  MENS_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${IMAGE_PREFIX}/ministries/mens-ministry-image-1.JPG`,
    title: "Mens Ministry",
    altText: "Mens Ministry Image",
  },
  WOMENS_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${IMAGE_PREFIX}/ministries/womens-ministry-image-1.JPG`,
    title: "Womens Ministry",
    altText: "Womens Ministry Image",
  },
  YOUTH_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${IMAGE_PREFIX}/ministries/youth-ministry-image-1.JPEG`,
    title: "Youth Ministry",
    altText: "Youth Ministry Image",
  },
  PRAISE_WORSHIP_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${IMAGE_PREFIX}/ministries/praise-worship-ministry-image-1.JPEG`,
    title: "Praise Worship Ministry",
    altText: "Praise Worship Ministry Image",
  },
} as const satisfies Record<string, GalleryItem>;

export const HOME_JUMBO_GALLERY_ITEMS = Object.values(
  IMAGE_PRESETS
) as readonly GalleryItem[];

export const HOME_JUMBO_LIMIT = 8;
