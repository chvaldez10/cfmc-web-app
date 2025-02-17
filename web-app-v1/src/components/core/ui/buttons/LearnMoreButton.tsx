import { FC } from "react";
import { Box, NavigateButton } from "@/components/core/ui";
import { FaArrowRight } from "react-icons/fa";

interface LearnMoreButtonProps {
  url: string;
  containerClassName?: string;
}

const LearnMoreButton: FC<LearnMoreButtonProps> = ({
  url,
  containerClassName,
}) => {
  return (
    <Box containerClassName={`mt-auto ${containerClassName}`}>
      <NavigateButton url={url} variant="filled">
        Learn More <FaArrowRight />
      </NavigateButton>
    </Box>
  );
};

export default LearnMoreButton;
