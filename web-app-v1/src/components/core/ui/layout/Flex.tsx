import { FC } from "react";
import { Box } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";

interface FlexProps extends DivProps {}

// Note that the Flex component has no default styles.
// This is just to have better visualization of the layout when coding.
const Flex: FC<FlexProps> = ({
  children,
  containerClassName,
  dataTestId,
  onClick,
}) => {
  return (
    <Box
      containerClassName={`${containerClassName}`}
      dataTestId={dataTestId}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Flex;
