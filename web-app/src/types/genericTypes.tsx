import { ReactNode, ReactElement } from "react";

export interface ImageProps {
  src: string;
  alt: string;
  containerClassName?: string | undefined;
}

export interface HeroContentProps {
  header: string;
  longParagraph: string | undefined;
}

export interface HeroSectionProps extends HeroContentProps {
  children?: ReactNode;
  subheader?: string;
  reverse?: boolean;
  containerClassName?: string | undefined;
}

// This might end up being a supabase type
export interface ChurchLiturgy {
  header: string;
  indicationToStand: boolean;
  personInCharge: string;
  content: string;
}

// This might end up being a supabase type
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

export interface IconProps {
  label: string;
  description?: string;
  svgIcon: ReactNode;
  url: string;
}

export interface NavDropdownItemProps extends IconProps {
  onClick?: () => void;
}

export interface TextProps {
  text: string | undefined;
  containerClassName?: string;
}
