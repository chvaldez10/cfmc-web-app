import { FC } from "react";
import { DivProps } from "@/types/layoutProps";

interface BoxProps extends DivProps {}

// Note that the Box component has no default styles.
// This is just to have better visualization of the layout when coding.
const Box: FC<BoxProps> = ({
  children,
  containerClassName,
  style,
  dataTestId,
  onClick,
}) => {
  return (
    <div
      className={containerClassName}
      style={style}
      data-testid={dataTestId}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
