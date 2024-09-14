import { ReactNode } from "react";

/* 
  This file is for generic types that are used in multiple places.
  These types are not specific to any component or page.
*/

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
