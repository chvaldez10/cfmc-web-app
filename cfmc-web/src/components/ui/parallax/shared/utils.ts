import { useTransform, useMotionValue, MotionValue } from "framer-motion";
import { PresetPosition, ExplicitPosition, Size } from "./types";

/**
 * Get position styles based on preset or explicit position
 */
export const getPositionStyles = (
  position: PresetPosition | ExplicitPosition = "top-left"
): React.CSSProperties => {
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
        return { bottom: "10%", right: "5%" };
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

/**
 * Get size styles from number or Size object
 */
export const getSizeStyles = (
  size: number | Size = 200
): { width: string; height: string } => {
  if (typeof size === "number") {
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  } else {
    return {
      width:
        typeof size.width === "number"
          ? `${size.width}px`
          : size.width || "200px",
      height:
        typeof size.height === "number"
          ? `${size.height}px`
          : size.height || "200px",
    };
  }
};

/**
 * Hook to handle parallax motion calculation
 */
export const useParallaxMotion = (
  scrollYProgress?: MotionValue<number>,
  yRange: [number, number] = [0, -200],
  motionY?: MotionValue<number>
): MotionValue<number> | number => {
  // Create a fallback static MotionValue if scrollYProgress is not provided
  const fallbackProgress = useMotionValue(0);
  const sourceProgress = scrollYProgress || fallbackProgress;

  // Always call useTransform, but only use result when scrollYProgress exists
  const calculatedMotionY = useTransform(sourceProgress, [0, 1], yRange);

  // Use motionY if provided, otherwise use calculated motion only if scrollYProgress exists
  return motionY || (scrollYProgress ? calculatedMotionY : 0);
};
