import { Heading, Separator } from "@chakra-ui/react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface ParallaxSectionHeadingProps {
  scrollYProgress: MotionValue<number>;
  title: string;
  id?: string;
  colorScheme?: string;
  size?: { base: string; md: string };
  yRange?: [number, number];
  opacityRange?: [number, number, number, number];
  opacityKeyframes?: [number, number, number, number];
}

const ParallaxSectionHeading = ({
  scrollYProgress,
  title,
  id,
  colorScheme = "purple",
  size = { base: "2xl", md: "4xl" },
  yRange = [0, -100],
  opacityRange = [0, 1, 1, 0],
  opacityKeyframes = [0, 0.3, 0.7, 1],
}: ParallaxSectionHeadingProps) => {
  return (
    <motion.div
      style={{
        y: useTransform(scrollYProgress, [0, 1], yRange),
        opacity: useTransform(scrollYProgress, opacityKeyframes, opacityRange),
      }}
    >
      <Heading
        id={id}
        size={size}
        textAlign="center"
        color={`${colorScheme}.600`}
        mb={4}
      >
        {title}
      </Heading>
      <Separator
        borderColor={`${colorScheme}.300`}
        borderWidth="2px"
        maxW="100px"
        mx="auto"
      />
    </motion.div>
  );
};

export default ParallaxSectionHeading;
