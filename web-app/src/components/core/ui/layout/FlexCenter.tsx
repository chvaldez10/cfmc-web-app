import { FC } from "react";
import { DivProps } from "@/types/genericTypes";
import { Box } from "@/components/core/ui";

interface FlexCenterProps extends DivProps {}

// Centers children vertically and horizontally
const FlexCenter: FC<FlexCenterProps> = ({ children, containerClassName }) => {
  return (
    <Box containerClassName={`div-outside-width ${containerClassName}`}>
      {children}
    </Box>
  );
};

export default FlexCenter;
