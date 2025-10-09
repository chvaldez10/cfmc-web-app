"use client";

import { Box } from "@chakra-ui/react";

interface ShapeConfig {
  type: "square" | "triangle" | "diamond";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: { base: string; md: string };
  color: string;
}

const shapes: ShapeConfig[] = [
  {
    type: "triangle",
    top: "15%",
    right: "5%",
    size: { base: "50px", md: "80px" },
    color: "brand.200",
  },
  {
    type: "square",
    top: "35%",
    right: "15%",
    size: { base: "40px", md: "60px" },
    color: "purple.200",
  },
  {
    type: "diamond",
    top: "75%",
    right: "35%",
    size: { base: "45px", md: "70px" },
    color: "brand.300",
  },
];

const ShapeRenderer = ({ config }: { config: ShapeConfig }) => {
  const baseStyles = {
    position: "absolute" as const,
    top: config.top,
    left: config.left,
    right: config.right,
    bottom: config.bottom,
    width: config.size,
    height: config.size,
    border: "3px solid",
    borderColor: config.color,
  };

  // Triangle using clip-path
  if (config.type === "triangle") {
    return (
      <Box
        {...baseStyles}
        border="none"
        bg={config.color}
        opacity={0.6}
        sx={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "rotateShape 10s linear infinite",
        }}
      />
    );
  }

  // Diamond (rotated square)
  if (config.type === "diamond") {
    return (
      <Box
        {...baseStyles}
        borderRadius="8px"
        transform="rotate(45deg)"
        sx={{
          animation: "rotateShape 10s linear infinite",
        }}
      />
    );
  }

  // Square (default)
  return (
    <Box
      {...baseStyles}
      borderRadius="12px"
      sx={{
        animation: "rotateShape 10s linear infinite",
      }}
    />
  );
};

export default function DecorativeFloatingShapes() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      opacity="0.5"
      pointerEvents="none"
      sx={{
        "@keyframes rotateShape": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      }}
    >
      {shapes.map((shape, index) => (
        <ShapeRenderer key={`${shape.type}-${index}`} config={shape} />
      ))}
    </Box>
  );
}
