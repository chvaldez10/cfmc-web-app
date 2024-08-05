import { FC } from "react";

interface BoxProps {
  children: React.ReactNode;
}

// Totally not a copy of from chakra-ui
const Box: FC<BoxProps> = ({ children }) => {
  return <div className="py-12">{children}</div>;
};

export default Box;
