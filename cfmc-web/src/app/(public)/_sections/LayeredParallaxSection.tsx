"use client";

import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ParallaxCard, FloatingElement } from "@/components/ui/parallax";
import {
  PARALLAX_SECTIONS,
  FLOATING_ELEMENTS,
} from "@/constants/layeredParallax";

const LayeredParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      ref={containerRef}
      bg={bgColor}
      position="relative"
      overflow="hidden"
      minH="250vh"
    >
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, purple.50, blue.50, green.50)"
        opacity="0.3"
        zIndex="0"
      />

      <Container
        maxW="7xl"
        px={{ base: 4, md: 8 }}
        position="relative"
        zIndex="1"
      >
        {/* Render parallax sections */}
        {PARALLAX_SECTIONS.map((section) => (
          <ParallaxCard
            key={section.id}
            icon={section.icon}
            iconColor={section.iconColor}
            title={section.title}
            description={section.description}
            borderColor={section.borderColor}
            titleColor={section.titleColor}
            zIndex={section.zIndex}
            motionStyle={{
              top: section.topPosition,
              y: useTransform(
                scrollYProgress,
                section.yTransform,
                section.yRange
              ),
              opacity: useTransform(
                scrollYProgress,
                section.opacityTransform,
                section.opacityRange
              ),
            }}
          />
        ))}
      </Container>

      {/* Floating background elements */}
      {FLOATING_ELEMENTS.map((element) => (
        <FloatingElement
          key={element.id}
          top={element.position.top}
          left={element.position.left}
          right={element.position.right}
          bottom={element.position.bottom}
          width={element.size.width}
          height={element.size.height}
          backgroundColor={element.backgroundColor}
          opacity={element.opacity}
          motionY={useTransform(
            scrollYProgress,
            element.yTransform,
            element.yRange
          )}
        />
      ))}
    </Box>
  );
};

export default LayeredParallaxSection;
