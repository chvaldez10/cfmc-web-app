import {
  Box,
  VStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, MotionStyle } from "framer-motion";

interface CallToActionCardProps {
  title: string;
  description: string;
  borderColor: string;
  titleColor: string;
  motionStyle: MotionStyle;
}

const CallToActionCard = ({
  title,
  description,
  borderColor,
  titleColor,
  motionStyle,
}: CallToActionCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <motion.div style={motionStyle}>
      <Box
        bg={cardBg}
        p={{ base: 8, md: 12 }}
        borderRadius="2xl"
        boxShadow="2xl"
        border="2px solid"
        borderColor={borderColor}
        maxW="4xl"
        mx="auto"
        textAlign="center"
        mb="20vh"
      >
        <VStack spacing={6}>
          <Heading as="h2" size={{ base: "xl", md: "2xl" }} color={titleColor}>
            {title}
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color="gray.700"
          >
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default CallToActionCard;
