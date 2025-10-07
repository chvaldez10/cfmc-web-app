"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AllowedColorSchemes, PublicLabels } from "@/constants/shared/enums";

import { ParallaxCard1 } from "@/components/ui/cards";
import { ParallaxSectionHeading } from "@/components/ui/sections";
import { ParallaxFloatingElement } from "@/components/ui/parallax";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { COMMON_MAX_WIDTH } from "@/constants/shared/ui";

const VisionMissionParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgColor = "gray.50";

  return (
    <Box
      ref={containerRef}
      bg={bgColor}
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <ParallaxFloatingElement
        scrollYProgress={scrollYProgress}
        position="top-left"
        size={200}
        color={AllowedColorSchemes.PURPLE}
        yRange={[0, -200]}
        opacity={0.3}
      />
      <ParallaxFloatingElement
        scrollYProgress={scrollYProgress}
        position="bottom-right"
        size={150}
        color={AllowedColorSchemes.GREEN}
        yRange={[0, 150]}
        opacity={0.25}
      />

      <Container maxW={COMMON_MAX_WIDTH} px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }} align="center">
          {/* Main Heading */}
          <ParallaxSectionHeading
            scrollYProgress={scrollYProgress}
            title={PublicLabels.OUR_MISSION_AND_VISION}
            id="vision-mission-heading"
            colorScheme={AllowedColorSchemes.PURPLE}
            size={{ base: "2xl", md: "4xl" }}
            yRange={[0, -100]}
            opacityRange={[0, 1, 1, 0]}
            opacityKeyframes={[0, 0.3, 0.7, 1]}
          />

          {/* Vision Section */}
          <ParallaxCard1
            content={ABOUT_CONTENT.VISION_STATEMENT}
            colorScheme={AllowedColorSchemes.PURPLE}
            motionStyle={{
              y: useTransform(scrollYProgress, [0, 1], [100, -50]),
              opacity: useTransform(
                scrollYProgress,
                [0.1, 0.3, 0.7, 0.9],
                [0, 1, 1, 0]
              ),
            }}
          />

          {/* Mission Section */}
          <ParallaxCard1
            content={ABOUT_CONTENT.MISSION_STATEMENT}
            colorScheme={AllowedColorSchemes.RED}
            motionStyle={{
              y: useTransform(scrollYProgress, [0, 1], [150, -100]),
              opacity: useTransform(
                scrollYProgress,
                [0.2, 0.4, 0.6, 0.8],
                [0, 1, 1, 0]
              ),
            }}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default VisionMissionParallax;
