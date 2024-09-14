import { ReactNode } from "react";

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
