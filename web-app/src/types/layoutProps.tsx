import { ReactNode } from "react";

/**
 * This file is for layout specific types.
 * These types are specific to the layout of the page.
 */

export interface DivProps {
  children?: ReactNode;
  containerClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  dataTestId?: string;
}

export interface ModalProps extends DivProps {
  header: string;
}