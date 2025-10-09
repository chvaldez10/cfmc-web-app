"use client";

import { Branding } from "@/constants/shared/enums";

import { InquiryHeroSection } from "@/components/ui/headers";

import {
  FaBible,
  FaCampground,
  FaMusic,
  FaPlaceOfWorship,
} from "react-icons/fa";

const GET_INVOLVED_EVENTS_CONFIG = {
  title: Branding.CHURCH_NAME_ABBREVIATION,
  titleHighlight: "Events",
  scrollText: "EXPLORE UPCOMING GATHERINGS",
  icons: [
    { icon: FaBible, label: "Bible Study", delay: "0s" },
    { icon: FaCampground, label: "Retreats", delay: "0.1s" },
    { icon: FaMusic, label: "Music", delay: "0.2s" },
    { icon: FaPlaceOfWorship, label: "Worship", delay: "0.3s" },
  ],
};

export default function GetInvolvedEvents() {
  return <InquiryHeroSection config={GET_INVOLVED_EVENTS_CONFIG} />;
}
