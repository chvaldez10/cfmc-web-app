import { FC, ReactNode } from "react";

interface HeroHalfWrapperProps {
  children: ReactNode;
  className?: string;
}

const HeroHalfWrapper: FC<HeroHalfWrapperProps> = ({ children, className }) => {
  return <div className={`resize-width-to-half ${className}`}>{children}</div>;
};

export default HeroHalfWrapper;
