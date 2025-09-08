import { Box, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { IconType } from "react-icons";

interface LayeredParallaxCardProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
  borderColor: string;
  titleColor: string;
  stickyTop: string;
  zIndex: number;
  scrollProgress: {
    y: [number, number];
    opacity: [number, number, number, number];
  };
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const LayeredParallaxCard = ({
  title,
  description,
  icon,
  iconColor,
  borderColor,
  titleColor,
  stickyTop,
  zIndex,
  scrollProgress,
  containerRef,
}: LayeredParallaxCardProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardBg = "white";

  return (
    <motion.div
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex,
        y: useTransform(scrollYProgress, scrollProgress.y, [0, -100]),
        opacity: useTransform(
          scrollYProgress,
          scrollProgress.opacity,
          [1, 1, 0.8, 0]
        ),
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
        <VStack gap={6} align="center" textAlign="center">
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

export default LayeredParallaxCard;
