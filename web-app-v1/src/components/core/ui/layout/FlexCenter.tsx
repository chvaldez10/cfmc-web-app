import { FC } from "react";
import { DivProps } from "@/types/layoutProps";
import { Box } from "@/components/core/ui";

interface FlexCenterProps extends DivProps {}

// Centers children vertically and horizontally
const FlexCenter: FC<FlexCenterProps> = ({
  children,
  containerClassName,
  dataTestId,
  onClick,
}) => {
  return (
    <Box
      containerClassName={`div-outside-width ${containerClassName}`}
      dataTestId={dataTestId}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default FlexCenter;
