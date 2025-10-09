import { MotionValue } from "framer-motion";

// Predefined position options for convenience
export type PresetPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

// Explicit position options for full control
export interface ExplicitPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

// Size can be a single value or separate width/height
export interface Size {
  width?: string | number;
  height?: string | number;
}

// Common props for parallax floating components
export interface BaseParallaxFloatingProps {
  position?: PresetPosition | ExplicitPosition;
  size?: number | Size;
  scrollYProgress?: MotionValue<number>;
  yRange?: [number, number];
  motionY?: MotionValue<number>;
  opacity?: number;
  zIndex?: number;
  borderRadius?: string;
  style?: React.CSSProperties;
}
