import { Events } from "@/types/supabase/worship";

export const mockEvent: Events = {
  id: 1,
  slug: "test-event",
  name: "Summer Music Festival",
  category: "Worship",
  description:
    "Join us for an incredible summer music festival featuring local and international artists. This outdoor event will showcase a diverse range of musical genres, from contemporary Christian music to traditional hymns. Experience an unforgettable evening of worship, fellowship, and celebration under the stars. Food trucks and vendors will be available on-site. Bring your family and friends for this community-wide celebration of faith and music.",
  organizer_name: "Calgary Filipino Methodist Church",
  address: "123 Festival Park, Calgary, AB T2P 2M5",
  start_date: "2025-07-12T18:00:00Z",
  end_date: "2025-07-12T23:00:00Z",
  google_maps_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0886!2d-114.0881!3d51.0486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717071c2c6a63f%3A0x4dc97df0a6b5f5b5!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1000000000000!5m2!1sen!2sca",
  image: "/gallery/IMG_3790.jpg", // legacy single image (backwards compatibility)
  images: [
    "/gallery/IMG_3790.jpg",
    "/gallery/IMG_4523.JPG",
    "/gallery/IMG_4855.JPEG",
    "/gallery/IMG_6559.JPEG",
    "/gallery/IMG_9061.JPEG",
  ],
  occurrence: "once",
  status: "published",
  tags: ["festival", "music", "summer"],
  created: "2025-06-01T12:00:00Z",
  updated: "2025-06-05T12:00:00Z",
  is_sunday_worship: null,
  is_featured: null,
};

export const mockAnniversaryEvent: Events = {
  id: 6,
  slug: "cfmc-seventh-anniversary",
  name: "CFMC 7th Anniversary",
  category: "special-event",
  description: `We celebrated our 7th anniversary last year, marking seven years of God's faithfulness. Centered on the theme “Neither Cold nor Hot” (Revelation 3:15-16), the celebration was a call to spiritual renewal—challenging all believers to move away from complacency and live with passionate, unwavering faith. Members and friends from Calgary, Red Deer, and Edmonton came together for a vibrant worship service, inspiring preaching, heartfelt testimonies, and joyful fellowship, reflecting on God's goodness while being encouraged to live fully committed lives for Christ.`,
  organizer_name: "Calgary Filipino Methodist Church",
  address: "419 Northmount Drive NW, Calgary, Alberta T2K 3H7 Canada",
  start_date: "2024-11-10T00:00:00Z",
  end_date: "2024-11-10T23:59:59Z",
  google_maps_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0886!2d-114.0881!3d51.0486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717071c2c6a63f%3A0x4dc97df0a6b5f5b5!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1000000000000!5m2!1sen!2sca",
  image:
    "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/seventh-anniversary-group-pic-1.JPG",
  images: [
    "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/seventh-anniversary-group-pic-1.JPG",
    "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/past_events/seventh-anniversary-group-pic-2.JPG",
    "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/past_events/seventh-anniversary-group-pic-3.JPEG",
    "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/past_events/seventh-anniversary-group-pic-4.JPG",
  ],
  occurrence: "once",
  status: "published",
  tags: ["anniversary", "worship"],
  created: "2024-11-01T12:00:00Z",
  updated: "2024-11-05T12:00:00Z",
  is_sunday_worship: true,
  is_featured: null,
};
