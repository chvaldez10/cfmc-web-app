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
