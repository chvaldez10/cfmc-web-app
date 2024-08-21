import { FC, ForwardedRef, forwardRef } from "react";
import { DivProps } from "@/types/genericTypes";

interface BoxProps extends DivProps {
  ref?: ForwardedRef<HTMLDivElement>;
}

// Note that the Box component has no default styles. Its just to have better visualization of the layout when coding.
const Box: FC<BoxProps> = ({ children, containerClassName, style, ref }) => {
  return (
    <div className={containerClassName} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default Box;
