"use client";

import { useState, useCallback, useMemo } from "react";
import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  useDisclosure,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdRefresh } from "react-icons/md";
import { ImageModal } from "@/components/ui/modals";

interface EventImageGalleryProps {
  images: string[];
  eventName: string;
}

enum ImageState {
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

interface ImageLoadingState {
  [key: string]: ImageState;
}

interface SelectedImage {
  src: string;
  alt: string;
}

interface ImageLayout {
  colSpan: number;
  rowSpan: number;
}

/**
 * Generates a dynamic layout pattern based on the number of images
 * Creates visual variety while maintaining balance
 */
const generateLayoutPattern = (imageCount: number): ImageLayout[] => {
  const layouts: ImageLayout[] = [];

  // Define available layout types (all fill their grid cell height)
  const layoutTypes = {
    largeLandscape: { colSpan: 2, rowSpan: 1 },
    square: { colSpan: 1, rowSpan: 1 },
    portrait: { colSpan: 1, rowSpan: 1 },
    landscape: { colSpan: 1, rowSpan: 1 },
    wideFeature: { colSpan: 2, rowSpan: 1 },
    tallPortrait: { colSpan: 1, rowSpan: 1 },
  };

  // Strategy: Create balanced patterns based on image count
  for (let i = 0; i < imageCount; i++) {
    const position = i % 8;

    switch (position) {
      case 0:
        // Start with a large landscape feature
        layouts.push(layoutTypes.largeLandscape);
        break;
      case 1:
      case 2:
        // Follow with squares
        layouts.push(layoutTypes.square);
        break;
      case 3:
        // Add portrait variety
        layouts.push(layoutTypes.portrait);
        break;
      case 4:
        // Regular landscape
        layouts.push(layoutTypes.landscape);
        break;
      case 5:
        // Another square
        layouts.push(layoutTypes.square);
        break;
      case 6:
        // Wide feature if we have enough images
        layouts.push(
          imageCount > 7 ? layoutTypes.wideFeature : layoutTypes.landscape
        );
        break;
      case 7:
        // Tall portrait for variety
        layouts.push(layoutTypes.tallPortrait);
        break;
      default:
        // Fallback to square
        layouts.push(layoutTypes.square);
    }
  }

  return layouts;
};

const EventImageGallery = ({ images, eventName }: EventImageGalleryProps) => {
  const [loadingStates, setLoadingStates] = useState<ImageLoadingState>({});
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Filter out any invalid images
  const validImages = useMemo(
    () => images.filter((img) => img && typeof img === "string"),
    [images]
  );

  // Generate dynamic layout pattern based on actual image count
  const imageLayouts = useMemo(() => {
    return generateLayoutPattern(validImages.length);
  }, [validImages.length]);

  // Handle image load success
  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageSrc]: ImageState.LOADED,
    }));
  }, []);

  // Handle image load error
  const handleImageError = useCallback((imageSrc: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageSrc]: ImageState.ERROR,
    }));
  }, []);

  // Handle retry for failed images
  const handleRetryImage = useCallback((imageSrc: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [imageSrc]: ImageState.LOADING,
    }));
  }, []);

  // Handle image click to open modal
  const handleImageClick = useCallback(
    (imageSrc: string, index: number) => {
      setSelectedImage({
        src: imageSrc,
        alt: `${eventName} - Image ${index + 1}`,
      });
      onOpen();
    },
    [eventName, onOpen]
  );

  // Handle modal close
  const handleModalClose = useCallback(() => {
    onClose();
    setSelectedImage(null);
  }, [onClose]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, imageSrc: string, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleImageClick(imageSrc, index);
      }
    },
    [handleImageClick]
  );

  if (!validImages.length) {
    return (
      <Box
        w="full"
        py={12}
        textAlign="center"
        bg="gray.100"
        borderRadius="2xl"
        mb={12}
      >
        <Text color="gray.500" fontSize="lg">
          No images available for this event.
        </Text>
      </Box>
    );
  }

  return (
    <>
      <Box w="full" mb={12}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 3, md: 4, lg: 6 }}
          autoRows={{ base: "180px", md: "250px", lg: "280px" }}
          autoFlow="dense"
          w="full"
        >
          {validImages.map((image, index) => {
            const layout = imageLayouts[index];
            const imageState = loadingStates[image];
            const isLoaded = imageState === ImageState.LOADED;
            const hasError = imageState === ImageState.ERROR;

            return (
              <GridItem
                key={`${image}-${index}`}
                colSpan={{ base: 1, md: layout.colSpan }}
                position="relative"
                cursor="pointer"
                borderRadius="xl"
                overflow="hidden"
                transition="all 0.3s ease"
                tabIndex={0}
                role="button"
                aria-label={`View ${eventName} image ${index + 1} in full size`}
                w="full"
                h="full"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "2xl",
                  zIndex: 10,
                }}
                _focus={{
                  outline: "3px solid",
                  outlineColor: "purple.500",
                  outlineOffset: "2px",
                }}
                onClick={() => !hasError && handleImageClick(image, index)}
                onKeyDown={(e) => !hasError && handleKeyDown(e, image, index)}
              >
                <Box position="relative" w="full" h="full">
                  {/* Error State */}
                  {hasError ? (
                    <VStack
                      spacing={3}
                      justify="center"
                      align="center"
                      w="full"
                      h="full"
                      bg="gray.100"
                      _dark={{ bg: "gray.700" }}
                    >
                      <Text
                        fontSize="sm"
                        color="gray.500"
                        textAlign="center"
                        px={4}
                      >
                        Failed to load image
                      </Text>
                      <IconButton
                        aria-label="Retry loading image"
                        icon={<MdRefresh />}
                        size="sm"
                        colorScheme="purple"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRetryImage(image);
                        }}
                      />
                    </VStack>
                  ) : (
                    <>
                      {/* Skeleton Loader */}
                      {!isLoaded && (
                        <Skeleton
                          w="full"
                          h="full"
                          startColor="gray.100"
                          endColor="gray.300"
                          _dark={{
                            startColor: "gray.700",
                            endColor: "gray.600",
                          }}
                        />
                      )}

                      {/* Actual Image */}
                      <Image
                        src={image}
                        alt={`${eventName} - Image ${index + 1}`}
                        fill
                        sizes={
                          layout.colSpan === 2
                            ? "(max-width: 768px) 100vw, 50vw"
                            : "(max-width: 768px) 50vw, 25vw"
                        }
                        quality={90}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          opacity: isLoaded ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                        onLoad={() => handleImageLoad(image)}
                        onError={() => handleImageError(image)}
                        priority={index < 4} // Prioritize first 4 images
                      />

                      {/* Hover Overlay */}
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.300"
                        opacity={0}
                        transition="opacity 0.3s ease"
                        _groupHover={{ opacity: 1 }}
                        sx={{
                          "[role=button]:hover &": {
                            opacity: 1,
                          },
                        }}
                      >
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          color="white"
                          fontSize="sm"
                          fontWeight="semibold"
                          textAlign="center"
                          px={4}
                        >
                          Click to view full size
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={handleModalClose}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
};

export default EventImageGallery;
