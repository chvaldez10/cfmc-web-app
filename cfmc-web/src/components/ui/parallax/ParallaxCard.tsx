import {
  Box,
  VStack,
  Icon,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, MotionStyle } from "framer-motion";
import { IconType } from "react-icons";

interface ParallaxCardProps {
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  borderColor: string;
  titleColor: string;
  motionStyle: MotionStyle;
  zIndex: number;
}

const ParallaxCard = ({
  icon,
  iconColor,
  title,
  description,
  borderColor,
  titleColor,
  motionStyle,
  zIndex,
}: ParallaxCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <motion.div
      style={{
        position: "sticky",
        zIndex,
        ...motionStyle,
      }}
    >
      <Box
        bg={cardBg}
        p={{ base: 8, md: 12 }}
        borderRadius="2xl"
        boxShadow="2xl"
        border="2px solid"
        borderColor={borderColor}
        maxW="4xl"
        mx="auto"
        mb="20vh"
      >
        <VStack spacing={6} align="center" textAlign="center">
          <Icon as={icon} w={12} h={12} color={iconColor} />
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

export default ParallaxCard;
