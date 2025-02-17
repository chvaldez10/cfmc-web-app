import { NavItem } from "@/types/ui/navbar";
import { PublicNavbarLabels } from "./enums";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: PublicNavbarLabels.ABOUT,
    children: [
      {
        label: PublicNavbarLabels.MISSION_VISION,
        subLabel: "Our mission is to help the community and foster growth.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.MINISTRIES,
        subLabel: "Our ministries aim to serve and uplift.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.LEADERSHIP,
        subLabel: "Our leadership guides us with integrity and vision.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.COMMUNITY,
        subLabel: "Our community thrives on collaboration and support.",
        href: "#",
      },
    ],
  },
  {
    label: PublicNavbarLabels.MEDIA,
    children: [
      {
        label: PublicNavbarLabels.ANNOUNCEMENTS,
        subLabel: "Stay updated with the latest announcements.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.INQUIRE,
        subLabel: "Feel free to inquire about our services.",
        href: "#",
      },
    ],
  },
  {
    label: PublicNavbarLabels.GET_INVOLVED,
    children: [
      {
        label: PublicNavbarLabels.UPCOMING_EVENTS,
        subLabel: "Join us for our upcoming events and activities.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.BIBLE_STUDY,
        subLabel: "Engage in our enriching Bible study sessions.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.MEDIA,
        subLabel: "Explore our media resources and content.",
        href: "#",
      },
      {
        label: PublicNavbarLabels.MUSIC,
        subLabel: "Enjoy uplifting music and performances.",
        href: "#",
      },
    ],
  },
  {
    label: PublicNavbarLabels.CONTACT_US,
    href: "#",
    subLabel: "Reach out to us for any inquiries or support.",
  },
];
