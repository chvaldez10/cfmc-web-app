import { FC } from "react";
import { Box } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";

interface GridProps extends DivProps {}

// Note that the Grid component currently has no default styles. Its just to have better visualization of the layout when coding.
const Grid: FC<GridProps> = ({ children, containerClassName }) => {
  return <Box containerClassName={containerClassName}>{children}</Box>;
};

export default Grid;
