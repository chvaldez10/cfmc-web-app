import { ComponentType } from "react";

import {
  FaHeart,
  FaHandsHelping,
  FaPrayingHands,
  FaCross,
} from "react-icons/fa";

export interface LayeredParallaxSectionData {
  title: string;
  description: string;
  icon: ComponentType<{ size?: string | number; className?: string }>;
  iconColor: string;
  borderColor: string;
  titleColor: string;
  stickyTop: string;
  zIndex: number;
  scrollProgress: {
    y: [number, number];
    opacity: [number, number, number, number];
  };
}

export const layeredParallaxSections: LayeredParallaxSectionData[] = [
  {
    title: "Love & Compassion",
    description:
      "We demonstrate God's love through acts of compassion, kindness, and service to our community. Every interaction is an opportunity to reflect Christ's unconditional love and grace.",
    icon: FaHeart,
    iconColor: "red.500",
    borderColor: "purple.200",
    titleColor: "purple.600",
    stickyTop: "20vh",
    zIndex: 4,
    scrollProgress: {
      y: [0, 0.25],
      opacity: [0, 0.15, 0.35, 0.5],
    },
  },
  {
    title: "Service & Ministry",
    description:
      "Through various ministries and outreach programs, we serve our community with dedication and purpose. Each ministry is designed to meet spiritual, emotional, and physical needs.",
    icon: FaHandsHelping,
    iconColor: "blue.500",
    borderColor: "blue.200",
    titleColor: "blue.600",
    stickyTop: "15vh",
    zIndex: 3,
    scrollProgress: {
      y: [0.15, 0.45],
      opacity: [0.15, 0.35, 0.55, 0.75],
    },
  },
  {
    title: "Prayer & Worship",
    description:
      "Our worship services are centered on God's Word, filled with prayer, and designed to draw us closer to Christ. We believe in the power of corporate worship and individual prayer.",
    icon: FaPrayingHands,
    iconColor: "green.500",
    borderColor: "green.200",
    titleColor: "green.600",
    stickyTop: "10vh",
    zIndex: 2,
    scrollProgress: {
      y: [0.35, 0.65],
      opacity: [0.35, 0.55, 0.75, 0.85],
    },
  },
  {
    title: "Faith & Discipleship",
    description:
      "We are committed to growing in faith and making disciples. Through Bible study, fellowship, and mentoring, we help each other mature in Christ and live out our faith daily.",
    icon: FaCross,
    iconColor: "purple.500",
    borderColor: "purple.300",
    titleColor: "purple.600",
    stickyTop: "5vh",
    zIndex: 1,
    scrollProgress: {
      y: [0.55, 0.85],
      opacity: [0.55, 0.75, 0.85, 0.95],
    },
  },
];

export const finalSectionData = {
  title: "Join Our Community",
  description:
    "Experience the love, fellowship, and spiritual growth that comes from being part of our church family. We welcome you to join us in worship, service, and discipleship.",
  borderColor: "blue.300",
  titleColor: "blue.600",
  scrollProgress: {
    y: [0.75, 0.95],
    opacity: [0.75, 0.85, 0.95],
  },
};
