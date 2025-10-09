"use client";

import { InquiryHeroSection } from "@/components/ui/headers";
import { FiMail, FiPhone, FiMessageSquare, FiMapPin } from "react-icons/fi";

const CONTACT_HERO_CONFIG = {
  title: "Contact",
  titleHighlight: "Us",
  scrollText: "SCROLL TO GET IN TOUCH",
  icons: [
    { icon: FiMail, label: "Email", delay: "0s" },
    { icon: FiPhone, label: "Phone", delay: "0.1s" },
    { icon: FiMessageSquare, label: "Message", delay: "0.2s" },
    { icon: FiMapPin, label: "Visit", delay: "0.3s" },
  ],
};

export default function ContactUsHero() {
  return <InquiryHeroSection config={CONTACT_HERO_CONFIG} />;
}
