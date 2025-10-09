import { motion } from "framer-motion";
import { BaseParallaxFloatingProps } from "./shared/types";
import {
  getPositionStyles,
  getSizeStyles,
  useParallaxMotion,
} from "./shared/utils";

interface ParallaxFloatingElementProps extends BaseParallaxFloatingProps {
  color?: string;
  backgroundColor?: string;
}

const ParallaxFloatingElement = ({
  position = "top-left",
  size = 200,
  color,
  backgroundColor,
  scrollYProgress,
  yRange = [0, -200],
  motionY,
  opacity = 0.3,
  zIndex = 0,
  borderRadius = "50%",
  style = {},
}: ParallaxFloatingElementProps) => {
  const finalMotionY = useParallaxMotion(scrollYProgress, yRange, motionY);

  // Handle background color
  const getBackgroundColor = (): string => {
    if (backgroundColor) {
      return backgroundColor;
    } else if (color) {
      // Assume it's a Chakra color name
      return `var(--chakra-colors-${color}-100)`;
    } else {
      return `var(--chakra-colors-purple-100)`;
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        ...getPositionStyles(position),
        ...getSizeStyles(size),
        borderRadius,
        backgroundColor: getBackgroundColor(),
        opacity,
        zIndex,
        y: finalMotionY,
        ...style,
      }}
    />
  );
};

export default ParallaxFloatingElement;
