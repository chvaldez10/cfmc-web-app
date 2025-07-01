import { CardDataProps } from "@/types/ui/components";
import {
  FaCross,
  FaEye,
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaPrayingHands,
  FaChurch,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

const aquaMeadow = "linear-gradient(135deg, #ECFDF5 0%, #5EEAD4 100%)";

export const CARD_DATA: CardDataProps[] = [
  {
    id: "mission",
    bg: aquaMeadow,
    icon: FaCross,
    title: "Our Mission",
    description:
      "To serve our community and spread love through faith, following Christ's teachings of compassion, service, and unconditional love for all God's children.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "vision",
    bg: aquaMeadow,
    icon: FaEye,
    title: "Our Vision",
    description:
      "To inspire hope and foster spiritual growth by creating a welcoming environment where individuals can discover their purpose and deepen their relationship with God.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "ministries",
    bg: aquaMeadow,
    icon: FaHandsHelping,
    title: "Our Ministries",
    description:
      "Dedicated to uplifting and serving our community through various outreach programs, youth ministry, worship services, and charitable initiatives that make a positive impact.",
    footerLink: { label: "View Ministries", href: "/" },
  },
  {
    id: "leadership",
    bg: aquaMeadow,
    icon: FaUsers,
    title: "Our Leadership",
    description:
      "Guides us with integrity and vision, providing spiritual direction, pastoral care, and strategic leadership to help our congregation grow in faith and service.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "community",
    bg: aquaMeadow,
    icon: FaHeart,
    title: "Our Community",
    description:
      "Thrives on collaboration and support, creating a warm, inclusive family where everyone is valued, supported, and encouraged to grow in their spiritual journey together.",
    footerLink: { label: "Join Us", href: "/" },
  },
];
