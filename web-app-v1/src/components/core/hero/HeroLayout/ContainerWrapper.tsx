import { FC, ReactNode } from "react";
import { DivProps } from "@/types/layoutProps";
interface ContainerWrapperProps extends DivProps {}

const ContainerWrapper: FC<ContainerWrapperProps> = ({
  children,
  containerClassName,
}) => {
  return (
    <div className={`container px-5 mx-auto ${containerClassName}`}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
