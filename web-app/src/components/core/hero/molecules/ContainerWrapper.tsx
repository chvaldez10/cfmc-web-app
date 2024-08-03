import { FC, ReactNode } from "react";

interface ContainerWrapperProps {
  children: ReactNode;
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({ children }) => {
  return <div className="container px-5 py-8 md:py-14 mx-auto">{children}</div>;
};

export default ContainerWrapper;
