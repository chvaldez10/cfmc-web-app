import { ReactNode } from "react";
import { ImageProps } from "./genericTypes";

export interface CardWithImageProps extends ImageProps {
  title: string;
  description: string;
  url: string;
}

export interface ClientButtonProps {
  variant?: "filled" | "outline";
  containerClassName?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export interface BadgeProps {
  color: string;
  tagName: string;
  containerClassName?: string;
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
