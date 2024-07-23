import { ReactNode } from "react";

export interface liturgyTableData {
  title: string;
  content: string;
  link: string;
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
  containerClassName?: string | null;
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