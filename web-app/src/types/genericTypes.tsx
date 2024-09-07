import { ReactNode, ReactElement } from "react";

export interface liturgyTableData {
  date: Date;
  title: string;
  content: string;
  link?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  containerClassName?: string | undefined;
}

export interface CardWithImageProps extends ImageProps {
  title: string;
  description: string;
  url: string;
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

export interface ClientButtonProps {
  variant?: "filled" | "outline";
  containerClassName?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export interface ModalProps extends DivProps {
  header: string;
}

export interface ChurchLiturgy {
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
  children?: ReactNode;
  containerClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface IconProps {
  label: string;
  description?: string;
  svgIcon: ReactNode;
  url: string;
}

export interface NavDropdownItemProps extends IconProps {
  onClick: () => void;
}
