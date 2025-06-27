import { Box, Icon, Text, Flex } from "@chakra-ui/react";
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
    p={{ base: 4, md: 6 }}
    borderRadius="xl"
    color="white"
    cursor="pointer"
    boxShadow="md"
    minH={{ base: "40", md: "56" }}
    transition="all 0.2s"
    _hover={{
      bg: "purple.600",
      transform: "scale(1.02)",
      boxShadow: "lg",
    }}
    onClick={onClick}
  >
    <Flex align="center" justify="space-between" mb={4}>
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
        {label}
      </Text>
      <Box
        bg="whiteAlpha.300"
        borderRadius="full"
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={FaStar} boxSize={5} />
      </Box>
    </Flex>

    <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
      {description}
    </Text>
  </Box>
);

export default InquiryCard;
