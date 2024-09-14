import { FC } from "react";
import { FaImage } from "react-icons/fa";
import { FlexCenter, Flex, Box } from "@/components/core/ui";

interface LoadingSkeletonProps {
  containerClassName?: string;
}

const LoadingSkeleton: FC<LoadingSkeletonProps> = ({ containerClassName }) => {
  return (
    <FlexCenter
      containerClassName={`animate-pulse gap-2 md:flex-row ${containerClassName}`}
    >
      <Flex containerClassName="flex-center w-full h-48 bg-gray-300 rounded sm:w-96">
        <FaImage className="w-10 h-10 text-gray-200" />
      </Flex>
      <Box containerClassName="w-full space-y-2">
        <Box containerClassName="h-3 bg-gray-200 rounded-full"></Box>
        <Box containerClassName="h-2 bg-gray-200 rounded-full "></Box>
        <Box containerClassName="h-2 bg-gray-200 rounded-full"></Box>
        <Box containerClassName="h-2 bg-gray-200 rounded-full"></Box>
      </Box>
    </FlexCenter>
  );
};

export default LoadingSkeleton;
