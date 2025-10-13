import { CardDataProps } from "@/types/ui/components";
import { FaCross, FaHandsHelping, FaUsers, FaHeart } from "react-icons/fa";
import { PublicLabels } from "./enums";
import { AboutContentItem } from "@/types/ui/components";
import aboutContentData from "@/data/about-content.json";

// const aquaMeadow = "linear-gradient(135deg, #ECFDF5 0%, #5EEAD4 100%)";
const plumCloud = "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)";

export const ABOUT_US_PAGE_CARDS: CardDataProps[] = [
  {
    bg: plumCloud,
    icon: FaCross,
    title: PublicLabels.MISSION_VISION,
    description:
      "Calgary Filipino Methodist Church exists to love God who first loved us and love people by faithfully, holistically, boldly and joyfully proclaiming the Good News of Christ to all.",
    footerLink: { label: "Learn More", href: "/about/mission-vision" },
  },
  {
    bg: plumCloud,
    icon: FaHandsHelping,
    title: PublicLabels.MINISTRIES,
    description:
      "Dedicated to uplifting and serving our community through various outreach programs, youth ministry, worship services, and charitable initiatives that make a positive impact.",
    footerLink: { label: "View Ministries", href: "/" },
  },
  {
    bg: plumCloud,
    icon: FaUsers,
    title: PublicLabels.LEADERSHIP,
    description:
      "Guides us with integrity and vision, providing spiritual direction, pastoral care, and strategic leadership to help our congregation grow in faith and service.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    bg: plumCloud,
    icon: FaHeart,
    title: PublicLabels.COMMUNITY,
    description:
      "Thrives on collaboration and support, creating a warm, inclusive family where everyone is valued, supported, and encouraged to grow in their spiritual journey together.",
    footerLink: { label: "Join Us", href: "/" },
  },
];

export const ABOUT_CONTENT: Record<string, AboutContentItem> =
  aboutContentData as Record<string, AboutContentItem>;
