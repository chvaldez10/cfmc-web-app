import { motion, MotionValue } from "framer-motion";

interface FloatingElementProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  backgroundColor: string;
  opacity: number;
  motionY: MotionValue<number>;
}

const FloatingElement = ({
  top,
  left,
  right,
  bottom,
  width,
  height,
  backgroundColor,
  opacity,
  motionY,
}: FloatingElementProps) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width,
        height,
        borderRadius: "50%",
        backgroundColor,
        opacity,
        zIndex: 0,
        y: motionY,
      }}
    />
  );
};

export default FloatingElement;
