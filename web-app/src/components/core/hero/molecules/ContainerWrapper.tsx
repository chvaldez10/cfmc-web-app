import { FC, ReactNode } from "react";

interface ContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`container px-5 mx-auto ${className}`}>{children}</div>
  );
};

export default ContainerWrapper;
