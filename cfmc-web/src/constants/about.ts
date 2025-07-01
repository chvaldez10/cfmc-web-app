import { CardDataProps } from "@/types/ui/components";
import { FaCreditCard, FaLightbulb, FaHandPointRight } from "react-icons/fa";

const aquaMeadow = "linear-gradient(135deg, #ECFDF5 0%, #5EEAD4 100%)";

export const CARD_DATA: CardDataProps[] = [
  {
    id: "mission",
    bg: aquaMeadow,
    icon: FaCreditCard,
    title: "Our Mission",
    description: "To serve our community and spread love through faith.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "vision",
    bg: aquaMeadow,
    icon: FaLightbulb,
    title: "Our Vision",
    description: "To inspire hope and foster spiritual growth.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "ministries",
    bg: aquaMeadow,
    icon: FaHandPointRight,
    title: "Our Ministries",
    description: "Dedicated to uplifting and serving our community.",
    footerLink: { label: "View Pricing", href: "/" },
  },
];
