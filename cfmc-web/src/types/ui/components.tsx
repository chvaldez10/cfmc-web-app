import { ComponentType } from "react";

export interface CardDataProps {
  /** Background color or gradient for the card */
  bg: string;
  /** Icon component to display */
  icon: ComponentType<{ size?: string | number; className?: string }>;
  /** Main title of the card */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional description text */
  description?: string;
  /** Link configuration for the call-to-action */
  footerLink: {
    /** Display text for the link */
    label: string;
    /** URL or route path */
    href: string;
  };
  /** Optional variant for different card styles */
  variant?: "default" | "elevated" | "minimal";
}
