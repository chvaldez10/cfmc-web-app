"use client";

import React, { useState } from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { ImageModal } from "@/components/ui/modals";
import { GalleryItem } from "@/constants/gallery";

const MAX_IMAGES = 8;

interface GalleryCollageProps {
  galleryItems: GalleryItem[];
  imageSize?: { base: string; md: string };
  spacing?: { base: number; md: number };
}

interface SelectedImage {
  src: string;
  alt: string;
}

const GalleryCollage = ({
  galleryItems,
  imageSize = { base: "80px", md: "100px" },
  spacing = { base: 70, md: 90 },
}: GalleryCollageProps) => {
  const displayImages = galleryItems.slice(0, MAX_IMAGES);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get responsive values
  const currentSpacing = useBreakpointValue(spacing) || spacing.md;
  const currentImageSize = useBreakpointValue(imageSize) || imageSize.md;

  const handleImageClick = (image: { image: string; title: string }) => {
    setSelectedImage({ src: image.image, alt: image.title });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const getGridTransform = (index: number) => {
    const row = index % 2; // 0 for top row, 1 for bottom row
    const col = Math.floor(index / 2); // Column index

    // Calculate base positions based on current spacing
    const baseX = col * currentSpacing;
    const baseY = row * currentSpacing;

    // Generate variations based on index for organic feel
    const xVariation = Math.sin(index * 0.7) * 5;
    const yVariation = Math.cos(index * 0.5) * 5;

    // Generate rotation variations
    const rotation = Math.sin(index * 0.8) * 4;

    return {
      rotate: `${rotation}deg`,
      zIndex: 10 - index,
      top: `${baseY + yVariation}px`,
      left: `${baseX + xVariation}px`,
    };
  };

  // Calculate container dimensions based on content
  const numColumns = Math.ceil(displayImages.length / 2);
  const containerWidth = `${numColumns * currentSpacing}px`;
  const containerHeight = `${2 * currentSpacing}px`; // 2 rows

  return (
    <>
      <Box
        position="relative"
        width={containerWidth}
        height={containerHeight}
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {displayImages.map((item, index) => {
          const transform = getGridTransform(index);

          return (
            <Box
              key={item.id}
              position="absolute"
              transform={`rotate(${transform.rotate})`}
              top={transform.top}
              left={transform.left}
              zIndex={transform.zIndex}
              transition="all 0.3s ease"
              cursor="pointer"
              _hover={{
                transform: `rotate(${transform.rotate}) scale(1.05)`,
                zIndex: 15,
              }}
              onClick={() => handleImageClick(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={currentImageSize}
                height={currentImageSize}
                objectFit="cover"
                borderRadius="8px"
                boxShadow="0 8px 20px rgba(0, 0, 0, 0.25)"
                border="3px solid white"
                filter="sepia(8%) brightness(0.96) contrast(1.02)"
              />
            </Box>
          );
        })}
      </Box>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
};

export default GalleryCollage;
