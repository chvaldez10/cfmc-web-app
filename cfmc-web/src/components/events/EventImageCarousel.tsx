"use client";

import { Box, AspectRatio, Skeleton, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface EventImageCarouselProps {
  images: string[];
  eventName: string;
}

const EventImageCarousel = ({ images, eventName }: EventImageCarouselProps) => {
  const [imageLoadStates, setImageLoadStates] = useState<
    Record<string, boolean>
  >({});

  const swiperRef = useRef<SwiperType | null>(null);

  const handleImageLoad = (imageSrc: string) => {
    setImageLoadStates((prev) => ({ ...prev, [imageSrc]: true }));
  };

  return (
    <Box
      w="full"
      maxW="1200px"
      mx="auto"
      mb={12}
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false} // Disable built-in navigation, use custom
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={images.length > 1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <AspectRatio ratio={2}>
              <Box position="relative" w="full" h="full">
                {!imageLoadStates[image] && (
                  <Skeleton
                    w="full"
                    h="full"
                    startColor="gray.100"
                    endColor="gray.300"
                    _dark={{ startColor: "gray.700", endColor: "gray.600" }}
                  />
                )}
                <Image
                  src={image}
                  alt={`${eventName} - Image ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    opacity: imageLoadStates[image] ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                  onLoad={() => handleImageLoad(image)}
                  priority={index === 0}
                />

                {/* Gradient overlay for better text readability */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height="40%"
                  bgGradient="linear(to-t, blackAlpha.600, transparent)"
                  pointerEvents="none"
                />
              </Box>
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      {/* If swiper works correctly, remove this */}
      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Previous image"
            icon={<IoChevronBack />}
            position="absolute"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            size="lg"
            isRound
            bg="whiteAlpha.900"
            onClick={() => swiperRef.current?.slidePrev()}
          />

          <IconButton
            aria-label="Next image"
            icon={<IoChevronForward />}
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            size="lg"
            isRound
            bg="whiteAlpha.900"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </>
      )}
      {/* Custom pagination styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: #805ad5 !important;
          transform: scale(1.2) !important;
        }

        .swiper-horizontal
          > .swiper-pagination-bullets
          .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets
          .swiper-pagination-bullet {
          margin: 0 6px !important;
        }
      `}</style>
    </Box>
  );
};

export default EventImageCarousel;
