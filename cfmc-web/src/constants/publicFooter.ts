import { IconType } from "react-icons";
import { FaMessage } from "react-icons/fa6";
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";

interface FooterItem {
  label: string;
  children?: Array<FooterItem>;
  href?: string;
}

export const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: "Resources",
    children: [
      {
        label: "Media",
        href: "/media",
      },
      {
        label: "Events",
        href: "/get-involved/events",
      },
      {
        label: "Ministries",
        href: "/get-involved/ministries",
      },
    ],
  },
  {
    label: "Other Resources",
    children: [
      {
        label: "Documentation",
        href: "/",
      },
      {
        label: "GitHub",
        href: "https://github.com/chvaldez10/cfmc-web-app",
      },
    ],
  },
];

export const FOOTER_INQUIRIES: Array<{
  label: string;
  description: string;
  icon: IconType;
}> = [
  {
    label: "Connect with us",
    description:
      "Stay connected with us to receive the latest news, updates, and community events.",
    icon: FaMessage,
  },
  {
    label: "Prayer Request",
    description:
      "Submit your prayer requests for the church and its members, and let us support you in prayer.",
    icon: FaPrayingHands,
  },
  {
    label: "Media Request",
    description:
      "Request media resources for church events and services to enhance your experience.",
    icon: MdOutlinePermMedia,
  },
];
