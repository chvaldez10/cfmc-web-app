"use client";

import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { GALLERY_ITEMS } from "@/constants/gallery";
import { ImageModal } from "@/components/ui/modals";

interface GalleryCollageProps {
  maxImages?: number;
}

interface SelectedImage {
  src: string;
  alt: string;
}

function GalleryCollage({ maxImages = 6 }: GalleryCollageProps) {
  // Take only the first maxImages from the gallery
  const displayImages = GALLERY_ITEMS.slice(0, maxImages);

  // Modal state
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle image click
  const handleImageClick = (image: { image: string; title: string }) => {
    setSelectedImage({ src: image.image, alt: image.title });
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Expanded transforms for scattered look with more images
  const transforms = [
    { rotate: "-12deg", zIndex: 7, top: "0px", left: "20px" },
    { rotate: "8deg", zIndex: 6, top: "30px", left: "100px" },
    { rotate: "-6deg", zIndex: 5, top: "10px", left: "180px" },
    { rotate: "15deg", zIndex: 4, top: "50px", left: "260px" },
    { rotate: "-8deg", zIndex: 3, top: "20px", left: "340px" },
    { rotate: "10deg", zIndex: 2, top: "45px", left: "420px" },
    { rotate: "-4deg", zIndex: 1, top: "15px", left: "500px" },
  ];

  return (
    <>
      <Box
        position="relative"
        width={{ base: "320px", md: "580px" }}
        height={{ base: "140px", md: "180px" }}
        mx="auto"
        my={4}
      >
        {displayImages.map((item, index) => {
          const transform = transforms[index];
          const isHiddenOnMobile = index >= 5; // Hide 6th and 7th images on mobile

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
                transform: `rotate(${transform.rotate}) scale(1.08)`,
                zIndex: 15,
              }}
              display={{
                base: isHiddenOnMobile ? "none" : "block",
                md: "block",
              }}
              onClick={() => handleImageClick(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={{ base: "75px", md: "90px" }}
                height={{ base: "75px", md: "90px" }}
                objectFit="cover"
                borderRadius="6px"
                boxShadow="0 6px 16px rgba(0, 0, 0, 0.2)"
                border="2.5px solid white"
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
}

export default GalleryCollage;
