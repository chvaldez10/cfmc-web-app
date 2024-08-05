import { FC } from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

// Totally not a copy of from chakra-ui
const Box: FC<BoxProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Box;
