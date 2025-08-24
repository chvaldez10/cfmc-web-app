import { ComponentType } from "react";

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

export interface TextBlock {
  text: string;
  isQuote?: boolean;
}
