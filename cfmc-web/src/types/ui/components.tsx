import { ComponentType } from "react";
import { AllowedColorSchemes } from "@/constants/shared/enums";
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
  email?: string;
  details?: string;
}
