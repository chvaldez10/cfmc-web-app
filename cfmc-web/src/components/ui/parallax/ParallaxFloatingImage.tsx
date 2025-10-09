import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { BaseParallaxFloatingProps } from "./shared/types";
import {
  getPositionStyles,
  getSizeStyles,
  useParallaxMotion,
} from "./shared/utils";

interface ParallaxFloatingImageProps extends BaseParallaxFloatingProps {
  src: string;
  alt?: string;
}

const ParallaxFloatingImage = ({
  src,
  alt = "Decorative floating image",
  position = "top-left",
  size = 200,
  scrollYProgress,
  yRange = [0, -200],
  motionY,
  opacity = 0.3,
  zIndex = 0,
  borderRadius = "50%",
  style = {},
}: ParallaxFloatingImageProps) => {
  const finalMotionY = useParallaxMotion(scrollYProgress, yRange, motionY);
  const sizeStyles = getSizeStyles(size);

  return (
    <Box
      as={motion.div}
      position="absolute"
      style={{
        ...getPositionStyles(position),
        y: finalMotionY,
        ...style,
      }}
      width={sizeStyles.width}
      height={sizeStyles.height}
      opacity={opacity}
      zIndex={zIndex}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
        }}
        sizes={`${sizeStyles.width}`}
      />
    </Box>
  );
};

export default ParallaxFloatingImage;
