import { FC } from "react";
import { DivProps } from "@/types/genericTypes";
import { Box } from "@/components/core/ui";

interface FlexCenterProps extends DivProps {}

// Centers children vertically and horizontally
const FlexCenter: FC<FlexCenterProps> = ({
  children,
  containerClassName,
  dataTestId,
}) => {
  return (
    <Box
      containerClassName={`div-outside-width ${containerClassName}`}
      dataTestId={dataTestId}
    >
      {children}
    </Box>
  );
};

export default FlexCenter;
