import { ReactNode } from "react";

export interface liturgyTableData {
  date: Date;
  title: string;
  content: string;
  link?: string;
}

export interface HeroContentProps {
  header: string;
  longParagraph: string | undefined;
}

export interface ImageProps {
  src: string;
  alt: string;
  containerClassName?: string | undefined;
}

export interface HeroSectionProps {
  header: string | undefined;
  subheader?: string;
  longParagraph: string;
  reverse?: boolean;
  containerClassName?: string | undefined;
}

export interface ClientButtonProps {
  variant?: "filled" | "outline";
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export interface modalProps {
  title: string;
  content: string;
}

export interface churchLiturgy {
  header: string;
  indicationToStand: boolean;
  personInCharge: string;
  content: string;
}

export interface FormProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  maxLength?: number;
}

export interface Verse {
  verse: {
    details: {
      text: string;
      reference: string;
      version: string;
      verseURL: string;
    };
    notice: string;
  };
}

export interface BadgeProps {
  color: string;
  tagName: string;
  containerClassName?: string;
}

export interface DivProps {
  children: ReactNode;
  containerClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
