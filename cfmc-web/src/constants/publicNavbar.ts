import { NavItem } from "@/types/ui/navbar";
import { PublicLabels } from "./shared/enums";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: PublicLabels.ABOUT,
    children: [
      {
        label: PublicLabels.MISSION_VISION,
        subLabel: "Our mission is to help the community and foster growth.",
        href: "/about/mission-vision",
      },
      {
        label: PublicLabels.MINISTRIES,
        subLabel: "Our ministries aim to serve and uplift.",
        href: "#",
      },
      {
        label: PublicLabels.LEADERSHIP,
        subLabel: "Our leadership guides us with integrity and vision.",
        href: "#",
      },
      {
        label: PublicLabels.COMMUNITY,
        subLabel: "Our community thrives on collaboration and support.",
        href: "#",
      },
    ],
  },
  {
    label: PublicLabels.MEDIA,
    children: [
      {
        label: PublicLabels.ANNOUNCEMENTS,
        subLabel: "Stay updated with the latest announcements.",
        href: "#",
      },
      {
        label: PublicLabels.INQUIRE,
        subLabel: "Feel free to inquire about our services.",
        href: "#",
      },
    ],
  },
  {
    label: PublicLabels.GET_INVOLVED,
    children: [
      {
        label: PublicLabels.UPCOMING_EVENTS,
        subLabel: "Join us for our upcoming events and activities.",
        href: "#",
      },
      {
        label: PublicLabels.BIBLE_STUDY,
        subLabel: "Engage in our enriching Bible study sessions.",
        href: "#",
      },
      {
        label: PublicLabels.MEDIA,
        subLabel: "Explore our media resources and content.",
        href: "#",
      },
      {
        label: PublicLabels.MUSIC,
        subLabel: "Enjoy uplifting music and performances.",
        href: "#",
      },
    ],
  },
  {
    label: PublicLabels.CONTACT_US,
    href: "/contact",
    subLabel: "Reach out to us for any inquiries or support.",
  },
];

export const TITHERS_AND_OFFERINGS_MODAL = {
  label: "Tithes & Offerings",
  message:
    "Your generous contributions help us make a difference in our community. Thank you for your support!",
  buttonLink: "#",
};
