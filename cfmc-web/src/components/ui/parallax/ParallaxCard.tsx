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
  const textColor = useColorModeValue("gray.800", "gray.100");
  const overlayBg = useColorModeValue(
    "linear-gradient(135deg, rgba(237, 233, 254, 0.9), rgba(219, 234, 254, 0.85), rgba(220, 252, 231, 0.9))",
    "linear-gradient(135deg, rgba(88, 28, 135, 0.8), rgba(30, 64, 175, 0.75), rgba(5, 46, 22, 0.8))"
  );
  const contentBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.4)",
    "rgba(255, 255, 255, 0.1)"
  );
  const contentShadow = useColorModeValue(
    "0 8px 32px rgba(0, 0, 0, 0.1)",
    "0 8px 32px rgba(0, 0, 0, 0.3)"
  );

  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex,
        ...motionStyle,
      }}
    >
      {/* Box that takes up the entire motion.div */}
      <Box
        border="1px solid"
        borderColor={contentBorder}
        borderRadius="3xl"
        p={{ base: 8, md: 12, lg: 16 }}
        width="100%"
        height="100%"
        backdropFilter="blur(20px)"
        boxShadow={contentShadow}
        bg={overlayBg}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "3xl",
          p: "1px",
          background: `linear-gradient(135deg, ${borderColor}, rgba(255, 255, 255, 0.2), ${borderColor})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <VStack
          spacing={{ base: 6, md: 8, lg: 10 }}
          align="center"
          textAlign="center"
          zIndex="1"
          position="relative"
          maxW={{ base: "90%", md: "4xl" }}
          px={{ base: 6, md: 12, lg: 20 }}
        >
          <Icon
            as={icon}
            w={{ base: 16, md: 20, lg: 24 }}
            h={{ base: 16, md: 20, lg: 24 }}
            color={iconColor}
            filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
          />
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            color={titleColor}
            textShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            lineHeight="shorter"
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            lineHeight="tall"
            color={textColor}
            fontWeight="medium"
            textShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
            maxW={{ base: "100%", md: "80%" }}
          >
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ParallaxCard;
