import { ReactNode } from "react";

export interface liturgyTableData {
  date: Date;
  title: string;
  content: string;
  link?: string;
}

export interface heroContent {
  header: string;
  longParagraph: string;
}

export interface nextImage {
  src: string;
  alt: string;
  containerClassName?: string | undefined;
}

export interface heroSection {
  header: string;
  userSubHeader?: string;
  longParagraph: string;
  reverse?: boolean;
  containerClassName?: string | undefined;
}

export interface clientButton {
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

export interface formProps {
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

export interface textProps {
  children: ReactNode;
  className?: string;
}

export interface DivProps {
  children: ReactNode;
  containerClassName?: string;
}
