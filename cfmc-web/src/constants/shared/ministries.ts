import { IconType } from "react-icons";
import ministriesContentData from "@/data/ministries-content.json";
import {
  FaHeart,
  FaHandsHelping,
  FaPrayingHands,
  FaCross,
  FaGlobeAmericas,
} from "react-icons/fa";

export interface Ministry {
  id?: string;
  title: string;
  description: string;
  isQuote?: boolean;
  verse?: {
    text: string;
    reference: string;
  };
  contact?: {
    name: string;
    phone: string;
  };
  contacts?: Array<{
    name: string;
    phone: string;
  }>;
}

export interface MinistryCardData {
  id: string;
  icon: IconType;
  iconColor: string;
  borderColor: string;
  bgGradient: string;
  title: string;
  description: string;
}

export const MINISTRIES_SHOWCASE: MinistryCardData[] = [
  {
    id: "discipleship",
    icon: FaHeart,
    iconColor: "red.500",
    borderColor: "red.200",
    bgGradient: "linear(to-br, red.50, pink.50)",
    title: "Discipleship Ministry",
    description:
      "Growing in faith together through Bible study, prayer, and mentorship.",
  },
  {
    id: "mens",
    icon: FaHandsHelping,
    iconColor: "blue.500",
    borderColor: "blue.200",
    bgGradient: "linear(to-br, blue.50, cyan.50)",
    title: "Men's Ministry",
    description:
      "Building strong Christian men through fellowship, accountability, and service.",
  },
  {
    id: "womens",
    icon: FaPrayingHands,
    iconColor: "green.500",
    borderColor: "green.200",
    bgGradient: "linear(to-br, green.50, teal.50)",
    title: "Women's Ministry",
    description:
      "Empowering women to grow spiritually and support one another in faith.",
  },
  {
    id: "children",
    icon: FaCross,
    iconColor: "purple.500",
    borderColor: "purple.200",
    bgGradient: "linear(to-br, purple.50, pink.50)",
    title: "Children's Ministry",
    description:
      "Nurturing young hearts with biblical truth through engaging activities and lessons.",
  },
  {
    id: "outreach",
    icon: FaGlobeAmericas,
    iconColor: "teal.500",
    borderColor: "teal.200",
    bgGradient: "linear(to-br, teal.50, cyan.50)",
    title: "Outreach Ministry",
    description:
      "Sharing God's love with our community through service and evangelism.",
  },
];

export const MINISTRIES_CTA_CONTENT = {
  heading: "Ready to Get Involved?",
  headingHighlight: "Get Involved?",
  description:
    "Your journey in faith and fellowship starts here. Explore our ministries in detail and find where you belong.",
  primaryButtonText: "Explore All Ministries",
  primaryButtonLink: "/get-involved/ministries",
  secondaryButtonText: "Contact Us",
  secondaryButtonLink: "/contact",
  helperText:
    "Questions? We're here to help you find your place in our community.",
};

export const MINISTRIES_CONTENT = ministriesContentData as Record<
  string,
  Ministry
>;

export const EVENTS_PAGE_CONTENT: { title: string; description: string }[] = [
  {
    title: "Events",
    description:
      "Discover meaningful events and gatherings in our community. Join us for worship, fellowship, and spiritual growth.",
  },
];
