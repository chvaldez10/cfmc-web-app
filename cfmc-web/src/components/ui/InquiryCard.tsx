import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface InquiryCardProps {
  label: string;
  description: string;
  icon: IconType;
  onClick: () => void;
}

const InquiryCard: React.FC<InquiryCardProps> = ({
  label,
  description,
  icon,
  onClick,
}) => (
  <Box
    bg="purple.500"
    p={{ base: 4, md: 6 }}
    borderRadius="xl"
    color="white"
    cursor="pointer"
    boxShadow="md"
    minH={{ base: "64", md: "72" }}
    width="100%"
    transition="all 0.2s"
    _hover={{
      bg: "purple.600",
      transform: "scale(1.02)",
      boxShadow: "lg",
    }}
    onClick={onClick}
    data-testid={`inquiry-card-${label}`}
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
        <Icon as={icon} boxSize={5} />
      </Box>
    </Flex>

    <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
      {description}
    </Text>
  </Box>
);

export default InquiryCard;
