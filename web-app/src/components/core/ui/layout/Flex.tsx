import { FC } from "react";
import { Box } from "@/components/core/ui";
import { DivProps } from "@/types/genericTypes";

interface FlexProps extends DivProps {}

// Note that the Flex component has no default styles. Its just to have better visualization of the layout when coding.
const Flex: FC<FlexProps> = ({ children, containerClassName }) => {
  return <Box containerClassName={`${containerClassName}`}>{children}</Box>;
};

export default Flex;
