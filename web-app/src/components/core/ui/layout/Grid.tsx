import { FC } from "react";
import { Box } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";

interface GridProps extends DivProps {
  dataTestId?: string;
}

// Note that the Grid component currently has no default styles. Its just to have better visualization of the layout when coding.
const Grid: FC<GridProps> = ({ children, containerClassName, dataTestId }) => {
  return (
    <Box containerClassName={containerClassName} dataTestId={dataTestId}>
      {children}
    </Box>
  );
};

export default Grid;
