import { IconType } from "react-icons";
import {
  FaHeart,
  FaHandsHelping,
  FaPrayingHands,
  FaCross,
  FaGlobeAmericas,
} from "react-icons/fa";
import { MINISTRIES_CONTENT } from "./ministries";

export interface ParallaxSectionConfig {
  id: string;
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  borderColor: string;
  titleColor: string;
  topPosition: string;
  zIndex: number;
  yTransform: [number, number];
  yRange: [number, number];
  opacityTransform: [number, number, number, number];
  opacityRange: [number, number, number, number];
}

export interface FloatingElementConfig {
  id: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: {
    width: string;
    height: string;
  };
  backgroundColor: string;
  opacity: number;
  yTransform: [number, number];
  yRange: [number, number];
}

export const PARALLAX_SECTIONS: ParallaxSectionConfig[] = [
  {
    id: "discipleship",
    icon: FaHeart,
    iconColor: "red.500",
    title: MINISTRIES_CONTENT.DISCIPLESHIP_MINISTRY.title,
    description: MINISTRIES_CONTENT.DISCIPLESHIP_MINISTRY.description,
    borderColor: "purple.200",
    titleColor: "purple.600",
    topPosition: "0vh",
    zIndex: 10,
    yTransform: [0, 0.25],
    yRange: [0, -50],
    opacityTransform: [0, 0.1, 0.35, 0.5],
    opacityRange: [0, 1, 1, 0],
  },
  {
    id: "mens-fellowship",
    icon: FaHandsHelping,
    iconColor: "blue.500",
    title: MINISTRIES_CONTENT.MENS_MINISTRY.title,
    description: MINISTRIES_CONTENT.MENS_MINISTRY.description,
    borderColor: "blue.200",
    titleColor: "blue.600",
    topPosition: "0vh",
    zIndex: 20,
    yTransform: [0.2, 0.45],
    yRange: [0, -50],
    opacityTransform: [0.15, 0.25, 0.55, 0.7],
    opacityRange: [0, 1, 1, 0],
  },
  {
    id: "womens-fellowship",
    icon: FaPrayingHands,
    iconColor: "green.500",
    title: MINISTRIES_CONTENT.WOMENS_MINISTRY.title,
    description: MINISTRIES_CONTENT.WOMENS_MINISTRY.description,
    borderColor: "green.200",
    titleColor: "green.600",
    topPosition: "0vh",
    zIndex: 30,
    yTransform: [0.4, 0.65],
    yRange: [0, -50],
    opacityTransform: [0.35, 0.45, 0.75, 0.85],
    opacityRange: [0, 1, 1, 0],
  },
  {
    id: "children",
    icon: FaCross,
    iconColor: "purple.500",
    title: MINISTRIES_CONTENT.CHILDREN_MINISTRY.title,
    description: MINISTRIES_CONTENT.CHILDREN_MINISTRY.description,
    borderColor: "purple.300",
    titleColor: "purple.600",
    topPosition: "0vh",
    zIndex: 40,
    yTransform: [0.6, 0.85],
    yRange: [0, -50],
    opacityTransform: [0.55, 0.65, 0.9, 0.95],
    opacityRange: [0, 1, 1, 0],
  },
  {
    id: "outreach",
    icon: FaGlobeAmericas,
    iconColor: "teal.500",
    title: MINISTRIES_CONTENT.OUTREACH_MINISTRY.title,
    description: MINISTRIES_CONTENT.OUTREACH_MINISTRY.description,
    borderColor: "teal.200",
    titleColor: "teal.600",
    topPosition: "0vh",
    zIndex: 50,
    yTransform: [0.8, 1.0],
    yRange: [0, -25],
    opacityTransform: [0.75, 0.85, 0.98, 1],
    opacityRange: [0, 1, 1, 0],
  },
];

export const FLOATING_ELEMENTS: FloatingElementConfig[] = [
  {
    id: "element-1",
    position: { top: "20%", left: "10%" },
    size: { width: "100px", height: "100px" },
    backgroundColor: "var(--chakra-colors-purple-200)",
    opacity: 0.2,
    yTransform: [0, 1],
    yRange: [0, -300],
  },
  {
    id: "element-2",
    position: { top: "60%", right: "15%" },
    size: { width: "80px", height: "80px" },
    backgroundColor: "var(--chakra-colors-blue-200)",
    opacity: 0.2,
    yTransform: [0, 1],
    yRange: [0, 200],
  },
  {
    id: "element-3",
    position: { bottom: "30%", left: "20%" },
    size: { width: "120px", height: "120px" },
    backgroundColor: "var(--chakra-colors-green-200)",
    opacity: 0.15,
    yTransform: [0, 1],
    yRange: [0, -150],
  },
];
