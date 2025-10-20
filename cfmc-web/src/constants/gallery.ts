export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  altText: string;
}

const CLOUDFLARE_IMAGE_PREFIX =
  "https://imagedelivery.net/EVfpTCcTyYozHMUDHi2cUQ";

export const IMAGE_PRESETS = {
  SEVENTH_ANNIVERSARY_IMAGE: {
    id: 1,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/6a23152c-98aa-46e8-d53f-7beef1414900/public`,
    title: "7th Anniversary Celebration",
    altText: "7th Anniversary Image",
  },
  CHRISTMAS_CHOIR_IMAGE: {
    id: 2,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/f4fc7089-af9b-429f-f87f-4eab9c3cc900/public`,
    title: "Christmas Choir",
    altText: "Christmas Choir Image",
  },
  CHRISTMAS_CONCERT_IMAGE: {
    id: 3,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/b6fbe0f7-f5c6-4bd0-6d28-1fa421c48800/public`,
    title: "Christmas Choir",
    altText: "Christmas Choir Image",
  },
  CHRISTMAS_CONCERT_IMAGE_TITA_KAYLA: {
    id: 4,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/a7f184cc-4d5c-4e07-4d48-0b097e2cac00/public`,
    title: "Christmas Choir - Tita Kayla",
    altText: "Christmas Choir Image Tita Kayla",
  },
  SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL: {
    id: 5,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/0fd2cb2c-4075-4e57-f140-774f30c56300/public`,
    title: "Summer Camp 2025",
    altText: "Summer Camp 2025 Outside of Chapel",
  },
  FAIRMONT_RETREAT_2024_1: {
    id: 6,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/07642bee-4434-4cd8-fa61-8f50c6f82e00/public`,
    title: "Fairmont Retreat 2024",
    altText: "Fairmont Retreat 2024",
  },
  FAIRMONT_RETREAT_2024_2: {
    id: 7,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/739e2356-4255-4053-dd2f-8ef6e2669b00/public`,
    title: "Fairmont Retreat 2024",
    altText: "Fairmont Retreat 2024",
  },
  FAIRMONT_RETREAT_2024_3: {
    id: 8,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/99b4fe13-4520-4654-d2f8-2d9232b3a000/public`,
    title: "Fairmont Retreat 2024",
    altText: "Fairmont Retreat 2024",
  },
  GROUP_PIC_KURIAKOS_2025: {
    id: 9,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/3bd0a3d1-623b-47ce-f988-bdaae0d72200/public`,
    title: "Group Pic Kuriakos 2025",
    altText: "Group Pic Kuriakos 2025",
  },
  CHILDREN_MINISTRY_IMAGE_1: {
    id: 10,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/0a6c3ebf-f349-4e1e-3cdf-d930d9b53000/public`,
    title: "Children Ministry",
    altText: "Children Ministry Image",
  },
  OUTREACH_MINISTRY_IMAGE_1: {
    id: 11,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/e7a63877-1df1-4399-762b-72c718c80b00/public`,
    title: "Outreach Ministry",
    altText: "Outreach Ministry Image",
  },
  MENS_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/96f45333-7169-4b40-50ef-76078754f800/public`,
    title: "Mens Ministry",
    altText: "Mens Ministry Image",
  },
  WOMENS_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/04a2d684-518e-43a1-80af-5f6bee67e800/public`,
    title: "Womens Ministry",
    altText: "Womens Ministry Image",
  },
  YOUTH_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/062d1b91-990d-4d3c-c9b4-64c1027cbd00/public`,
    title: "Youth Ministry",
    altText: "Youth Ministry Image",
  },
  PRAISE_WORSHIP_MINISTRY_IMAGE_1: {
    id: 12,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/053aab20-b6d6-483d-032d-1377ef13cd00/public`,
    title: "Praise Worship Ministry",
    altText: "Praise Worship Ministry Image",
  },
} as const satisfies Record<string, GalleryItem>;

export const HOME_JUMBO_GALLERY_ITEMS = Object.values(
  IMAGE_PRESETS
) as readonly GalleryItem[];

export const HOME_JUMBO_LIMIT = 8;

export const MEDIA_INQUIRY_GALLERY_ITEMS = {
  MEDIA_TOOLS_IMAGE: {
    id: 1,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/851cdecb-3541-4ab2-c916-ae76f34ea700/public`,
    title: "Media Team",
    altText: "Media Team",
  },
  PRAISE_WORSHIP_TEAM_IMAGE: {
    id: 2,
    image: `${CLOUDFLARE_IMAGE_PREFIX}/053aab20-b6d6-483d-032d-1377ef13cd00/public`,
    title: "Praise & Worship Team",
    altText: "Praise & Worship Team",
  },
};
