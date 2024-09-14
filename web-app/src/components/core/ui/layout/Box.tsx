import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface BoxProps extends DivProps {}

// Note that the Box component has no default styles. Its just to have better visualization of the layout when coding.
const Box: FC<BoxProps> = ({
  children,
  containerClassName,
  style,
  dataTestId,
}) => {
  return (
    <div className={containerClassName} style={style} data-testid={dataTestId}>
      {children}
    </div>
  );
};

export default Box;
