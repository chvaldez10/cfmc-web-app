import {
  motion,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";

// Predefined position options for convenience
type PresetPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// Explicit position options for full control
interface ExplicitPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

// Size can be a single value or separate width/height
interface Size {
  width?: string | number;
  height?: string | number;
}

interface ParallaxFloatingElementProps {
  // Position: either preset keyword or explicit values
  position?: PresetPosition | ExplicitPosition;

  // Size: single value (creates square) or separate width/height
  size?: number | Size;

  // Color: either Chakra color name or full CSS color/variable
  color?: string;
  backgroundColor?: string;

  // Motion: either provide scrollYProgress + yRange OR pre-calculated motionY
  scrollYProgress?: MotionValue<number>;
  yRange?: [number, number];
  motionY?: MotionValue<number>;

  // Styling
  opacity?: number;
  zIndex?: number;
  borderRadius?: string;

  // Additional CSS styles
  style?: React.CSSProperties;
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
  // Handle position styles
  const getPositionStyles = (): React.CSSProperties => {
    if (typeof position === "string") {
      // Predefined position keywords
      switch (position) {
        case "top-left":
          return { top: "10%", left: "5%" };
        case "top-right":
          return { top: "10%", right: "5%" };
        case "bottom-left":
          return { bottom: "20%", left: "10%" };
        case "bottom-right":
          return { bottom: "20%", right: "10%" };
        default:
          return { top: "10%", left: "5%" };
      }
    } else {
      // Explicit position values
      return {
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
      };
    }
  };

  // Handle size styles
  const getSizeStyles = (): React.CSSProperties => {
    if (typeof size === "number") {
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    } else {
      return {
        width: typeof size.width === "number" ? `${size.width}px` : size.width,
        height:
          typeof size.height === "number" ? `${size.height}px` : size.height,
      };
    }
  };

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

  // Handle motion - always call hooks to avoid conditional usage
  // Create a fallback static MotionValue if scrollYProgress is not provided
  const fallbackProgress = useMotionValue(0);
  const sourceProgress = scrollYProgress || fallbackProgress;

  // Always call useTransform, but only use result when scrollYProgress exists
  const calculatedMotionY = useTransform(sourceProgress, [0, 1], yRange);

  // Use motionY if provided, otherwise use calculated motion only if scrollYProgress exists
  const finalMotionY = motionY || (scrollYProgress ? calculatedMotionY : 0);

  return (
    <motion.div
      style={{
        position: "absolute",
        ...getPositionStyles(),
        ...getSizeStyles(),
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
