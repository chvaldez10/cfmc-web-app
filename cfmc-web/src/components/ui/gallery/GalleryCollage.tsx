"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { Box, useBreakpointValue, Text, IconButton } from "@chakra-ui/react";
import { ImageModal } from "@/components/ui/modals";
import { GalleryItem, HOME_JUMBO_LIMIT } from "@/constants/gallery";

interface GalleryCollageProps {
  galleryItems: readonly GalleryItem[];
  imageSize?: { base: string; md: string };
  spacing?: { base: number; md: number };
}

interface SelectedImage {
  src: string;
  alt: string;
}

enum ImageState {
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

interface ImageLoadingState {
  [key: string]: ImageState;
}

interface GridTransform {
  rotate: string;
  zIndex: number;
  top: string;
  left: string;
}

// Custom hook for grid layout calculations
const useGalleryLayout = (
  itemCount: number,
  spacing: number
): GridTransform[] => {
  return useMemo(() => {
    return Array.from({ length: itemCount }, (_, index) => {
      const row = index % 2; // 0 for top row, 1 for bottom row
      const col = Math.floor(index / 2); // Column index

      // Calculate base positions based on current spacing
      const baseX = col * spacing;
      const baseY = row * spacing;

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
    });
  }, [itemCount, spacing]);
};

const GalleryCollage = ({
  galleryItems,
  imageSize = { base: "80px", md: "100px" },
  spacing = { base: 70, md: 90 },
}: GalleryCollageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const displayImages = useMemo(
    () => galleryItems.slice(0, HOME_JUMBO_LIMIT),
    [galleryItems]
  );

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingStates, setLoadingStates] = useState<ImageLoadingState>({});

  // Get responsive values
  const currentSpacing = useBreakpointValue(spacing) || spacing.md;
  const currentImageSize = useBreakpointValue(imageSize) || imageSize.md;

  // Use the custom hook for layout calculations
  const gridTransforms = useGalleryLayout(displayImages.length, currentSpacing);

  // Simple image state handlers
  const handleImageLoad = useCallback((imageId: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageId.toString()]: ImageState.LOADED,
    }));
  }, []);

  const handleImageError = useCallback((imageId: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageId.toString()]: ImageState.ERROR,
    }));
  }, []);

  const handleImageClick = useCallback(
    (image: { image: string; title: string }) => {
      setSelectedImage({ src: image.image, alt: image.title });
      setIsModalOpen(true);
    },
    []
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, image: { image: string; title: string }) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleImageClick(image);
      }
    },
    [handleImageClick]
  );

  // Simple retry logic for failed image loads
  const handleRetryImage = useCallback((imageId: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageId.toString()]: ImageState.LOADING,
    }));
  }, []);

  // Calculate container dimensions based on content
  const numColumns = Math.ceil(displayImages.length / 2);
  const containerWidth = `${numColumns * currentSpacing}px`;
  const containerHeight = `${2 * currentSpacing}px`; // 2 rows

  return (
    <>
      <Box
        ref={containerRef}
        position="relative"
        width={containerWidth}
        height={containerHeight}
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        role="region"
        aria-label={`Gallery with ${displayImages.length} images`}
      >
        {displayImages.map((item, index) => {
          const transform = gridTransforms[index];
          const imageState = loadingStates[item.id.toString()];
          const shouldShowError = imageState === ImageState.ERROR;

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
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} in full size`}
              _hover={{
                transform: `rotate(${transform.rotate}) scale(1.05)`,
                zIndex: 15,
              }}
              _focus={{
                outline: "2px solid blue",
                outlineOffset: "2px",
              }}
              onClick={() => handleImageClick(item)}
              onKeyDown={(e) => handleKeyDown(e, item)}
            >
              {/* Error State */}
              {shouldShowError ? (
                <Box
                  width={currentImageSize}
                  height={currentImageSize}
                  bg="gray.100"
                  borderRadius="8px"
                  border="3px solid white"
                  boxShadow="0 8px 20px rgba(0, 0, 0, 0.25)"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                >
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    textAlign="center"
                    mb={2}
                  >
                    Failed to load
                  </Text>
                  <IconButton
                    aria-label="Retry loading image"
                    size="xs"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRetryImage(item.id);
                    }}
                  >
                    ↻
                  </IconButton>
                </Box>
              ) : (
                /* Actual Image */
                <Box
                  as="img"
                  src={item.image}
                  alt={`Gallery image: ${item.title}`}
                  width={currentImageSize}
                  height={currentImageSize}
                  objectFit="cover"
                  borderRadius="8px"
                  boxShadow="0 8px 20px rgba(0, 0, 0, 0.25)"
                  border="3px solid white"
                  filter="sepia(8%) brightness(0.96) contrast(1.02)"
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id)}
                  style={{
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              )}
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
