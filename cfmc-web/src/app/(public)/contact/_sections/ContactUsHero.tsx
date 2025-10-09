"use client";

import { InquiryHeroSection } from "@/components/ui/headers";
import { FaPrayingHands, FaHome, FaCross, FaRing } from "react-icons/fa";
const CONTACT_HERO_CONFIG = {
  title: "Contact",
  titleHighlight: "Us",
  scrollText: "SCROLL TO GET IN TOUCH",
  icons: [
    { icon: FaPrayingHands, label: "Prayer", delay: "0s" },
    { icon: FaHome, label: "Pastoral Visit", delay: "0.1s" },
    { icon: FaCross, label: "Baptism", delay: "0.2s" },
    { icon: FaRing, label: "Marriage", delay: "0.3s" },
  ],
};

export default function ContactUsHero() {
  return <InquiryHeroSection config={CONTACT_HERO_CONFIG} />;
}
