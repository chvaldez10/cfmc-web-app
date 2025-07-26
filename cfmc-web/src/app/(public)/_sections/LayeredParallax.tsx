"use client";

import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  ParallaxCard,
  ParallaxFloatingElement,
} from "@/components/ui/parallax";
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

  // Pre-calculate all transform values individually (no loops with hooks)
  // Section transforms - 5 sections
  const section0Y = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[0].yTransform,
    PARALLAX_SECTIONS[0].yRange
  );
  const section0Opacity = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[0].opacityTransform,
    PARALLAX_SECTIONS[0].opacityRange
  );

  const section1Y = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[1].yTransform,
    PARALLAX_SECTIONS[1].yRange
  );
  const section1Opacity = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[1].opacityTransform,
    PARALLAX_SECTIONS[1].opacityRange
  );

  const section2Y = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[2].yTransform,
    PARALLAX_SECTIONS[2].yRange
  );
  const section2Opacity = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[2].opacityTransform,
    PARALLAX_SECTIONS[2].opacityRange
  );

  const section3Y = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[3].yTransform,
    PARALLAX_SECTIONS[3].yRange
  );
  const section3Opacity = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[3].opacityTransform,
    PARALLAX_SECTIONS[3].opacityRange
  );

  const section4Y = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[4].yTransform,
    PARALLAX_SECTIONS[4].yRange
  );
  const section4Opacity = useTransform(
    scrollYProgress,
    PARALLAX_SECTIONS[4].opacityTransform,
    PARALLAX_SECTIONS[4].opacityRange
  );

  // Element transforms - 3 elements
  const element0Y = useTransform(
    scrollYProgress,
    FLOATING_ELEMENTS[0].yTransform,
    FLOATING_ELEMENTS[0].yRange
  );
  const element1Y = useTransform(
    scrollYProgress,
    FLOATING_ELEMENTS[1].yTransform,
    FLOATING_ELEMENTS[1].yRange
  );
  const element2Y = useTransform(
    scrollYProgress,
    FLOATING_ELEMENTS[2].yTransform,
    FLOATING_ELEMENTS[2].yRange
  );

  // Group transforms for easy access
  const sectionTransforms = [
    { y: section0Y, opacity: section0Opacity },
    { y: section1Y, opacity: section1Opacity },
    { y: section2Y, opacity: section2Opacity },
    { y: section3Y, opacity: section3Opacity },
    { y: section4Y, opacity: section4Opacity },
  ];

  const elementTransforms = [element0Y, element1Y, element2Y];

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
        {PARALLAX_SECTIONS.map((section, index) => (
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
              y: sectionTransforms[index].y,
              opacity: sectionTransforms[index].opacity,
            }}
          />
        ))}
      </Container>

      {/* Floating background elements */}
      {FLOATING_ELEMENTS.map((element, index) => (
        <ParallaxFloatingElement
          key={element.id}
          position={{
            top: element.position.top,
            left: element.position.left,
            right: element.position.right,
            bottom: element.position.bottom,
          }}
          size={{
            width: element.size.width,
            height: element.size.height,
          }}
          backgroundColor={element.backgroundColor}
          opacity={element.opacity}
          motionY={elementTransforms[index]}
        />
      ))}
    </Box>
  );
};

export default LayeredParallaxSection;
