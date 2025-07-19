import { motion, useTransform, MotionValue } from "framer-motion";

interface ParallaxDecorativeElementProps {
  scrollYProgress: MotionValue<number>;
  position: "top-left" | "bottom-right" | "top-right" | "bottom-left";
  size?: number;
  color?: string;
  yRange?: [number, number];
  opacity?: number;
}

const ParallaxDecorativeElement = ({
  scrollYProgress,
  position,
  size = 200,
  color = "purple",
  yRange = [0, -200],
  opacity = 0.3,
}: ParallaxDecorativeElementProps) => {
  const getPositionStyles = () => {
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
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        ...getPositionStyles(),
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: `var(--chakra-colors-${color}-100)`,
        opacity: opacity,
        y: useTransform(scrollYProgress, [0, 1], yRange),
      }}
    />
  );
};

export default ParallaxDecorativeElement;
