import { FC, ReactNode } from "react";
import { DivProps } from "@/types/genericTypes";
import { Box } from "@/components/core/ui";

interface HeroHalfWrapperProps extends DivProps {}

// Resize the width of the container to half of the screen for large screens and full width for smaller screens.
const HeroHalfWrapper: FC<HeroHalfWrapperProps> = ({
  children,
  containerClassName,
}) => {
  return (
    <Box containerClassName={`resize-width-to-half ${containerClassName}`}>
      {children}
    </Box>
  );
};

export default HeroHalfWrapper;
