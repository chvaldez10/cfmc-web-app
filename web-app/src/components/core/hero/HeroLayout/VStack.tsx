import { FC, ReactNode } from "react";
import { FlexCenter, Box } from "@/components/core/ui";
import "@/styles/hero-floating.css";

interface VStackProps {
  children: ReactNode;
  containerClassName: string | undefined;
  layoutClass: string;
  isFloating?: boolean;
  dataTestId?: string;
}

// Layout component that wraps children using the div-outside-width class (totally not a copy of VStack from Chakra UI)
const VStack: FC<VStackProps> = ({
  children,
  containerClassName,
  layoutClass,
  isFloating = false,
  dataTestId,
}) => {
  return (
    <FlexCenter
      containerClassName={`p-4 lg:p-0 ${
        isFloating ? "hero-floating" : ""
      } ${containerClassName}`}
      dataTestId={dataTestId}
    >
      <Box containerClassName={`resize-hero-width gap-4 ${layoutClass}`}>
        {children}
      </Box>
    </FlexCenter>
  );
};

export default VStack;
