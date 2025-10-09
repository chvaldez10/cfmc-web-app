"use client";

import { FiCamera, FiVideo, FiMusic } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { InquiryHeroSection } from "@/components/ui/headers";

const MEDIA_INQUIRY_HERO_CONFIG = {
  title: "Media",
  titleHighlight: "Inquiry",
  scrollText: "SCROLL TO REQUEST",
  icons: [
    { icon: FiCamera, label: "Photos", delay: "0s" },
    { icon: FiVideo, label: "Videos", delay: "0.1s" },
    { icon: FiMusic, label: "Music", delay: "0.2s" },
    { icon: HiComputerDesktop, label: "Presentations", delay: "0.3s" },
  ],
};

export default function MediaInquiryHero() {
  return <InquiryHeroSection config={MEDIA_INQUIRY_HERO_CONFIG} />;
}
