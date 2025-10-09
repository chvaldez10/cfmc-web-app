import { ComponentType } from "react";
import {
  AllowedColorSchemes,
  EventStatus,
  Inquiries,
} from "@/constants/shared/enums";
import { MINISTRIES_CONTENT, Ministry } from "@/constants/shared/ministries";

export interface CardDataProps {
  bg: string;
  icon: ComponentType<{ size?: string | number; className?: string }>;
  title: string;
  subtitle?: string;
  description?: string;
  footerLink: {
    label: string;
    href: string;
  };
  variant?: "default" | "elevated" | "minimal";
}

// TODO: This is a duplicate of AboutContentItem
export interface TextBlock {
  text: string;
  isQuote?: boolean;
}

export interface AboutContentItem {
  title: string;
  description: string;
  isQuote?: boolean;
}

export interface StickyParallaxProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  zIndex?: number;
  disableStickyOnMobile?: boolean;
}

export interface SectionData {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
}

export interface SectionVisualConfig {
  colorScheme: AllowedColorSchemes;
  image: string;
  altText: string;
  reverse?: boolean;
}

export interface DonationMethod {
  icon: ComponentType<{ size?: string | number; className?: string }>;
  title: string;
  description: string;
  onCopyItem?: string;
  details?: string;
}

export type EventStatusType = `${EventStatus}`;

export const ministriesArray: Ministry[] = Object.values(MINISTRIES_CONTENT);
export type MinistryKey = keyof typeof MINISTRIES_CONTENT;

export type InquiryType = `${Inquiries}`;
