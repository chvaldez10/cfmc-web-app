"use client";

import { FiHeart, FiMusic, FiUsers, FiStar } from "react-icons/fi";
import { HiSparkles, HiUserGroup } from "react-icons/hi2";
import { InquiryHeroSection } from "@/components/ui/headers";

const MINISTRIES_HERO_CONFIG = {
  title: "Our",
  titleHighlight: "Ministries",
  scrollText: "SCROLL TO EXPLORE",
  icons: [
    { icon: FiHeart, label: "Outreach", delay: "0s" },
    { icon: FiMusic, label: "Worship", delay: "0.1s" },
    { icon: FiUsers, label: "Men's", delay: "0.2s" },
    { icon: HiUserGroup, label: "Women's", delay: "0.3s" },
    { icon: FiStar, label: "Youth", delay: "0.4s" },
    { icon: HiSparkles, label: "Children's", delay: "0.5s" },
  ],
};

export default function MinistriesHero() {
  return <InquiryHeroSection config={MINISTRIES_HERO_CONFIG} />;
}
