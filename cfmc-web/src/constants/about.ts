import { CardDataProps } from "@/types/ui/components";
import {
  FaCross,
  FaEye,
  FaHandsHelping,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { PublicNavbarLabels } from "./shared/enums";

const aquaMeadow = "linear-gradient(135deg, #ECFDF5 0%, #5EEAD4 100%)";

export const CARD_DATA: CardDataProps[] = [
  {
    bg: aquaMeadow,
    icon: FaCross,
    title: PublicNavbarLabels.MISSION,
    description:
      "To serve our community and spread love through faith, following Christ's teachings of compassion, service, and unconditional love for all God's children.",
    footerLink: { label: "Learn More", href: "/about-us/mission" },
  },
  {
    bg: aquaMeadow,
    icon: FaEye,
    title: PublicNavbarLabels.VISION,
    description:
      "To inspire hope and foster spiritual growth by creating a welcoming environment where individuals can discover their purpose and deepen their relationship with God.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    bg: aquaMeadow,
    icon: FaHandsHelping,
    title: PublicNavbarLabels.MINISTRIES,
    description:
      "Dedicated to uplifting and serving our community through various outreach programs, youth ministry, worship services, and charitable initiatives that make a positive impact.",
    footerLink: { label: "View Ministries", href: "/" },
  },
  {
    bg: aquaMeadow,
    icon: FaUsers,
    title: PublicNavbarLabels.LEADERSHIP,
    description:
      "Guides us with integrity and vision, providing spiritual direction, pastoral care, and strategic leadership to help our congregation grow in faith and service.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    bg: aquaMeadow,
    icon: FaHeart,
    title: PublicNavbarLabels.COMMUNITY,
    description:
      "Thrives on collaboration and support, creating a warm, inclusive family where everyone is valued, supported, and encouraged to grow in their spiritual journey together.",
    footerLink: { label: "Join Us", href: "/" },
  },
];

export const ABOUT_CONTENT: { title: string; description: string }[] = [
  {
    title: "Vision Statement",
    description:
      "To be a Christ-centered, Spirit-empowered Filipino Methodist Church in Calgary—nurturing faith, building strong families, and reaching the community with the love and hope of Jesus Christ.",
  },
  {
    title: "Mission Statement",
    description:
      "To glorify God by making disciples of Jesus Christ, nurturing a loving and prayerful Filipino faith community, equipping believers for service, and sharing the Gospel in Calgary and beyond.",
  },
  {
    title: "Our Community",
    description:
      "The community of Calgary Filipino Methodist Church is a warm, Christ-centered family of believers rooted in Filipino faith and culture. United in love and service, we gather to worship, grow in God’s Word, and support one another through life’s journeys. Our fellowship is marked by hospitality, prayer, and joyful worship, as we seek to reflect Christ’s light in our homes, church, and the wider Calgary community. Together, we are building a legacy of faith for future generations.",
  },
  {
    title: "Our Ministry",
    description:
      "The ministry of Calgary Filipino Methodist Church flows from our deep love for God and commitment to serve others. Rooted in Scripture and empowered by the Holy Spirit, we serve through vibrant worship, discipleship, fellowship, and outreach. Our ministries nurture faith across all ages—from children to seniors—through Bible studies, prayer gatherings, care groups, and special events. We are passionate about building strong families, mentoring the next generation, and reaching our community with the compassion and truth of Jesus Christ. Every act of service is an opportunity to glorify God and extend His grace to others.",
  },
];
