import { IconType } from "react-icons";
import ministriesContentData from "@/data/ministries-content.json";
import {
  FaHeart,
  FaHandsHelping,
  FaPrayingHands,
  FaCross,
  FaGlobeAmericas,
} from "react-icons/fa";
import { AllowedColorSchemes } from "./enums";

// Color scheme constants for ministry cards
export const MINISTRY_COLOR_SCHEMES = {
  RED: {
    iconColor: AllowedColorSchemes.RED,
    borderColor: AllowedColorSchemes.RED,
    bgGradient: "linear(to-br, red.50, pink.50)",
  },
  PURPLE: {
    iconColor: AllowedColorSchemes.PURPLE,
    borderColor: AllowedColorSchemes.PURPLE,
    bgGradient: "linear(to-br, purple.50, pink.50)",
  },
} as const;

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
  iconColor: AllowedColorSchemes;
  borderColor: AllowedColorSchemes;
  bgGradient: string;
  title: string;
  description: string;
}

export const MINISTRIES_SHOWCASE: MinistryCardData[] = [
  {
    id: "discipleship",
    icon: FaHeart,
    ...MINISTRY_COLOR_SCHEMES.RED,
    title: "Discipleship Ministry",
    description:
      "Growing in faith together through Bible study, prayer, and mentorship.",
  },
  {
    id: "mens",
    icon: FaHandsHelping,
    ...MINISTRY_COLOR_SCHEMES.PURPLE,
    title: "Men's Ministry",
    description:
      "Building strong Christian men through fellowship, accountability, and service.",
  },
  {
    id: "womens",
    icon: FaPrayingHands,
    ...MINISTRY_COLOR_SCHEMES.RED,
    title: "Women's Ministry",
    description:
      "Empowering women to grow spiritually and support one another in faith.",
  },
  {
    id: "children",
    icon: FaCross,
    ...MINISTRY_COLOR_SCHEMES.PURPLE,
    title: "Children's Ministry",
    description:
      "Nurturing young hearts with biblical truth through engaging activities and lessons.",
  },
  {
    id: "outreach",
    icon: FaGlobeAmericas,
    ...MINISTRY_COLOR_SCHEMES.RED,
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
      "Discover events and gatherings in our community. Join us for worship, fellowship, and spiritual growth.",
  },
  {
    title: "No Upcoming Events",
    description:
      "No upcoming events. Check back soon for new events and activities.",
  },
];
