"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface StickyImageContainerProps {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  aspectRatio?: Record<string, string>;
  sizes?: string;
  rounded?: Record<string, string>;
  shadow?: Record<string, string>;
  maxWidth?: Record<string, string>;
  width?: Record<string, string>;
  marginBottom?: Record<string, string>;
}

const StickyImageContainer = ({
  imageSrc,
  imageAlt,
  priority = false,
  aspectRatio = { base: "3/2", md: "16/10" },
  sizes = "(max-width: 768px) 90vw, (max-width: 1024px) 512px, 576px",
  rounded = { base: "lg", md: "xl" },
  shadow = { base: "lg", md: "2xl" },
  maxWidth = { base: "95%", md: "lg", lg: "xl" },
  width = { base: "full", md: "lg", lg: "xl" },
  marginBottom = { base: "4", md: "0" },
}: StickyImageContainerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      w={width}
      maxW={maxWidth}
      aspectRatio={aspectRatio}
      position="relative"
      rounded={rounded}
      shadow={shadow}
      overflow="hidden"
      mb={marginBottom}
      bg="gray.100"
    >
      {!imageLoaded && (
        <Skeleton
          w="full"
          h="full"
          position="absolute"
          inset="0"
          rounded="xl"
          startColor="gray.100"
          endColor="gray.300"
        />
      )}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes={sizes}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        onLoad={() => setImageLoaded(true)}
        priority={priority}
      />
    </Box>
  );
};

export default StickyImageContainer;
