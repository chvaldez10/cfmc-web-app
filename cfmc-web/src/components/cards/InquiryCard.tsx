import { Box, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface InquiryCardProps {
  label: string;
  description: string;
  onClick: () => void;
}

const InquiryCard: React.FC<InquiryCardProps> = ({
  label,
  description,
  onClick,
}) => (
  <Box
    bg="purple.500"
    p={5}
    borderRadius="md"
    color="white"
    position="relative"
    cursor="pointer"
    onClick={onClick}
    _hover={{ bg: "purple.600" }}
    transition="background-color 0.2s"
  >
    <Icon as={FaStar} position="absolute" top={2} right={2} />
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold">
        {label}
      </Text>
      <Text mt={2}>{description}</Text>
    </Box>
  </Box>
);

export default InquiryCard;
