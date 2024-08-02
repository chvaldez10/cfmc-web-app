import { FC, ReactNode } from "react";
import "@/styles/hero-floating.css";

interface FlexWrapperProps {
  children: ReactNode;
  containerClassName: string | undefined;
  layoutClass: string;
  isFloating?: boolean;
}

const FlexWrapper: FC<FlexWrapperProps> = ({
  children,
  containerClassName,
  layoutClass,
  isFloating = false,
}) => {
  return (
    <div
      className={`div-outside-width min-h-screen ${
        isFloating ? "hero-floating" : ""
      } ${containerClassName}`}
    >
      <div className={`resize-hero-width gap-4 ${layoutClass}`}>{children}</div>
    </div>
  );
};

export default FlexWrapper;
