import { FC } from "react";
import { Box } from "@/components/core/ui";
import { ContainerWrapper } from "@/components/core/hero";
import { DivProps } from "@/types/layoutProps";

interface VerticalContainerWrapperProps extends DivProps {}

const VerticalContainerWrapper: FC<VerticalContainerWrapperProps> = ({
  children,
  containerClassName,
}) => {
  return (
    <ContainerWrapper
      containerClassName={`py-8 md:py-16 ${containerClassName}`}
    >
      <Box containerClassName="w-full lg:w-3/4 xl:w-8/12 mx-auto text-center space-y-2 md:space-y-4">
        {children}
      </Box>
    </ContainerWrapper>
  );
};

export default VerticalContainerWrapper;
